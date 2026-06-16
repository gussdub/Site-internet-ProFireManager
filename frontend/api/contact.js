// Fonction serverless Vercel — formulaire de contact du site vitrine.
// Remplace l'ancien backend FastAPI hébergé sur Emergent : reçoit la demande de
// démo et envoie un courriel via Resend, en reprenant le gabarit HTML existant.

const RESEND_API_KEY = process.env.RESEND_API_KEY;
// Domaine "profiremanager.ca" vérifié dans Resend. Surchargeable via variables Vercel.
const SENDER_EMAIL = process.env.SENDER_EMAIL || 'ProFireManager <demande@profiremanager.ca>';
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'info@profiremanager.ca';

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
  }

  // Vercel parse le JSON automatiquement, mais on gère aussi le body brut par sécurité.
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  body = body || {};

  const { name, organization, email, phone, firefighters, message, language } = body;
  const lang = language === 'en' ? 'en' : 'fr';

  // Champs requis (cohérent avec le formulaire : nom, organisation, courriel).
  if (!name || !organization || !email) {
    return res.status(400).json({
      status: 'error',
      message: lang === 'fr' ? 'Champs requis manquants' : 'Missing required fields',
    });
  }

  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY manquante dans les variables d\'environnement.');
    return res.status(500).json({
      status: 'error',
      message: lang === 'fr'
        ? "Échec de l'envoi : configuration serveur manquante"
        : 'Failed to send: missing server configuration',
    });
  }

  const subject = `Nouvelle demande de démo - ${organization}`;

  const htmlContent = `
        <html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background-color: #D9072B; color: white; padding: 20px; text-align: center;">
                <h1 style="margin: 0;">ProFireManager</h1>
                <p style="margin: 5px 0 0 0;">Nouvelle demande de démonstration</p>
            </div>

            <div style="padding: 20px; background-color: #f9f9f9;">
                <h2 style="color: #333; border-bottom: 2px solid #D9072B; padding-bottom: 10px;">Informations du contact</h2>

                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold; color: #666; width: 150px;">Nom:</td>
                        <td style="padding: 10px 0; color: #333;">${escapeHtml(name)}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold; color: #666;">Organisation:</td>
                        <td style="padding: 10px 0; color: #333;">${escapeHtml(organization)}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold; color: #666;">Email:</td>
                        <td style="padding: 10px 0; color: #333;"><a href="mailto:${escapeHtml(email)}" style="color: #D9072B;">${escapeHtml(email)}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold; color: #666;">Téléphone:</td>
                        <td style="padding: 10px 0; color: #333;">${phone ? escapeHtml(phone) : 'Non fourni'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold; color: #666;">Nombre de pompiers:</td>
                        <td style="padding: 10px 0; color: #333;">${firefighters ? escapeHtml(firefighters) : 'Non spécifié'}</td>
                    </tr>
                </table>

                <h3 style="color: #333; border-bottom: 1px solid #ddd; padding-bottom: 10px; margin-top: 20px;">Message</h3>
                <p style="color: #333; line-height: 1.6; background-color: white; padding: 15px; border-radius: 5px;">
                    ${message ? escapeHtml(message) : 'Aucun message'}
                </p>
            </div>

            <div style="padding: 15px; background-color: #333; color: #999; text-align: center; font-size: 12px;">
                <p style="margin: 0;">Ce message a été envoyé depuis le formulaire de contact de profiremanager.ca</p>
            </div>
        </body>
        </html>
  `;

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: SENDER_EMAIL,
        to: [RECIPIENT_EMAIL],
        subject,
        html: htmlContent,
        reply_to: email,
      }),
    });

    if (!resendResponse.ok) {
      const detail = await resendResponse.text();
      console.error('Erreur Resend:', resendResponse.status, detail);
      return res.status(500).json({
        status: 'error',
        message: lang === 'fr' ? "Échec de l'envoi" : 'Failed to send',
      });
    }

    return res.status(200).json({
      status: 'success',
      message: lang === 'fr'
        ? 'Votre demande a été envoyée avec succès'
        : 'Your request has been sent successfully',
    });
  } catch (error) {
    console.error('Échec de l\'envoi du courriel de contact:', error);
    return res.status(500).json({
      status: 'error',
      message: lang === 'fr' ? "Échec de l'envoi" : 'Failed to send',
    });
  }
};
