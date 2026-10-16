/* GA4 is configured. Publish this file with the site to enable opt-in analytics. */
(() => {
  'use strict';
  const measurementId = 'G-8VEE3VJPH8'; // Public Web stream identifier, not an API secret.
  const consentKey = 'bns-analytics-consent-v1';
  const settings = document.getElementById('analytics-settings');
  const panel = document.getElementById('analytics-consent');
  const eligible = /^G-[A-Z0-9]+$/.test(measurementId) &&
    location.protocol === 'https:' &&
    ['blacknovasecurity.com', 'www.blacknovasecurity.com'].includes(location.hostname);
  if (!eligible || navigator.globalPrivacyControl === true) return;
  settings.hidden = false;
  let started = false;
  let choice;
  try { choice = localStorage.getItem(consentKey); } catch (_) { /* Ask each visit if storage is blocked. */ }

  // Only approved, shared campaign labels may reach Analytics. No recipient identifiers.
  const campaignValues = {
    utm_source: ['bns_outreach', 'linkedin', 'referral'],
    utm_medium: ['email', 'social', 'referral'],
    utm_campaign: ['risk_review_2026_10', 'ai_advisory_2026_10'],
    utm_content: ['initial_a', 'initial_b', 'followup_1', 'followup_2', 'signature']
  };
  const cleanUrl = new URL(location.origin + location.pathname);
  const original = new URL(location.href);
  for (const [key, allowed] of Object.entries(campaignValues)) {
    const value = original.searchParams.get(key);
    if (allowed.includes(value)) cleanUrl.searchParams.set(key, value);
  }
  let referrer = '';
  try { referrer = new URL(document.referrer).origin; } catch (_) { /* No referrer. */ }
  const page = { page_location: cleanUrl.href, page_referrer: referrer, page_title: document.title };

  function start() {
    if (started) return;
    started = true;
    window['ga-disable-' + measurementId] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', {
      analytics_storage: 'granted', ad_storage: 'denied',
      ad_user_data: 'denied', ad_personalization: 'denied'
    });
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      ...page, send_page_view: false,
      allow_google_signals: false, allow_ad_personalization_signals: false,
      cookie_domain: location.hostname, cookie_expires: 2592000,
      cookie_update: false
    });
    window.gtag('event', 'page_view', page);
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
    document.head.appendChild(tag);
  }

  function choose(value) {
    try { localStorage.setItem(consentKey, value); } catch (_) { /* Choice still applies this visit. */ }
    panel.hidden = true;
    if (value === 'accepted') {
      choice = value;
      start();
    } else {
      choice = value;
      window['ga-disable-' + measurementId] = true;
      if (started) window.gtag('consent', 'update', { analytics_storage: 'denied' });
      for (const cookie of document.cookie.split(';')) {
        const name = cookie.split('=')[0].trim();
        if (/^_ga($|_)/.test(name)) {
          document.cookie = name + '=; Max-Age=0; path=/; domain=' + location.hostname + '; SameSite=Lax; Secure';
          document.cookie = name + '=; Max-Age=0; path=/; SameSite=Lax; Secure';
        }
      }
      if (started) location.reload();
    }
  }

  if (choice === 'accepted') start();
  else if (choice !== 'declined') panel.hidden = false;
  settings.addEventListener('click', () => { panel.hidden = false; document.getElementById('analytics-decline').focus(); });
  document.getElementById('analytics-accept').addEventListener('click', () => choose('accepted'));
  document.getElementById('analytics-decline').addEventListener('click', () => choose('declined'));
  document.addEventListener('click', event => {
    const link = event.target.closest && event.target.closest('a[href^="mailto:"]');
    if (!link || !started || choice !== 'accepted') return;
    const placement = link.closest('.hero') ? 'hero' : link.classList.contains('email') ? 'email_address' : 'contact_section';
    window.gtag('event', 'contact_click', { ...page, contact_method: 'email', placement });
  });
})();
