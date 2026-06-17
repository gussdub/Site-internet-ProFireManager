// Hook SEO : applique le <title>, la meta description, le canonical et la langue
// du document selon la route courante (config dans seoConfig.js).
// Appelé une seule fois depuis App (LanguageRouteWrapper) → couvre toutes les routes.

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL, getSeoForPath } from './seoConfig';

function setMeta(name, content) {
  if (!content) return;
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setMetaProperty(property, content) {
  if (!content) return;
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function useSeo() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname || '/';
    const seo = getSeoForPath(pathname);
    if (!seo) return; // route inconnue : on laisse les valeurs par défaut

    const canonicalPath = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;

    if (seo.title) document.title = seo.title;
    if (seo.lang) document.documentElement.setAttribute('lang', seo.lang);
    setMeta('description', seo.description);
    setCanonical(canonicalUrl);

    // Open Graph / Twitter cohérents avec la page
    setMetaProperty('og:title', seo.title);
    setMetaProperty('og:description', seo.description);
    setMetaProperty('og:url', canonicalUrl);
    setMeta('twitter:title', seo.title);
    setMeta('twitter:description', seo.description);
  }, [location.pathname]);
}
