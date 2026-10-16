# Website analytics and outreach attribution

## Status

The site is configured with the supplied GA4 Measurement ID G-8VEE3VJPH8. Collection begins only after publication on blacknovasecurity.com or www.blacknovasecurity.com and visitor acceptance of analytics. The property settings and live data collection have not been verified. No live site was changed. This package is based on the site built in this conversation, not a fetched copy of a live repository.

## Activate GA4

1. Sign into https://analytics.google.com/ with your Black Nova Google Workspace account. Create an Analytics account and a GA4 property called Black Nova Security. Use America/Los_Angeles as the reporting timezone.
2. Add a Web data stream for https://blacknovasecurity.com and copy its Measurement ID (G-...). This is a public identifier, not an API secret.
3. The supplied ID G-8VEE3VJPH8 is already set in analytics.js. The script runs only on HTTPS at blacknovasecurity.com or www.blacknovasecurity.com. If you use another hostname, update that explicit allowlist. Local file previews and default github.io URLs intentionally do not collect.
4. In the stream, switch OFF Enhanced Measurement for this controlled implementation. The code explicitly sends page_view and contact_click; automatic URL/link/form events would bypass its data minimization choices.
5. Keep Google Signals, advertising personalization, user-provided data collection, and User-ID unused. Choose a two-month event/user data retention period in the property settings. Do not connect an advertising destination to this tag.
6. Deploy index.html, styles.css, analytics.js, privacy.html and the existing assets to GitHub Pages. The rest of the package is documentation. No build step is needed.
7. Open the live page with the test campaign URL below. Accept analytics. Confirm one page_view in GA4 Realtime, click the main email button, then confirm contact_click. This click means the visitor attempted to open an email composer; it does NOT prove an inquiry was sent or received.
8. Test Decline in a fresh browser context: no googletagmanager.com or Analytics collection request should load. Check Analytics preferences lets you withdraw permission. Blockers and declined consent will reduce measured traffic.
9. After contact_click first appears, mark it as a key event. Add an event-scoped custom dimension for placement if you want to compare hero, contact_section, and email_address clicks. For campaign results use Traffic acquisition with Session source/medium and Session campaign; look at sessions and contact_click key events. Replies and meetings remain the outcome measures in your CRM.

The implementation waits for opt-in, honors navigator.globalPrivacyControl, uses a 30-day GA cookie expiry without sliding renewal, and filters website URLs to shared campaign values listed in analytics.js. The preference is stored locally until cleared or changed. Document referrers are reduced to their origin. It does not send prospect names, emails, individual CRM identifiers, arbitrary query strings, or URL fragments. Changing tags or enabling automatic measurement requires reviewing this behavior again.

## Campaign links for outreach

Use a normal hyperlink labeled “Black Nova Security” or a relevant service description. Example:

https://blacknovasecurity.com/?utm_source=bns_outreach&utm_medium=email&utm_campaign=risk_review_2026_10&utm_content=initial_a

For the AI advisory outreach, use:

https://blacknovasecurity.com/?utm_source=bns_outreach&utm_medium=email&utm_campaign=ai_advisory_2026_10&utm_content=initial_a

The site currently describes the cybersecurity review. Align the landing-page offer before using it for AI advisory sales; a campaign label does not change page content.

| Parameter | Use | Allowed values in this package |
| --- | --- | --- |
| utm_source | Distribution source | bns_outreach, linkedin, referral |
| utm_medium | Channel | email, social, referral |
| utm_campaign | Offer and sending period | risk_review_2026_10, ai_advisory_2026_10 |
| utm_content | Message variant or touch | initial_a, initial_b, followup_1, followup_2, signature |

Add future SHARED campaign names to campaignValues in analytics.js before using them. Unknown values are omitted from Analytics. Never use a recipient's name, email, or a recipient-level code as a campaign label. Share the same URL across a campaign/variant. Do not put UTMs on internal website navigation.

In the CRM, record Campaign, Variant, Sent date, Reply date, Meeting date, and Outcome. Compare website sessions and contact clicks by campaign weekly, and reply/meeting rates by sent cohort in the CRM. Website visits are not an individual prospect activity log.

## Recipient-level email opens and link clicks

Website Analytics cannot observe email opens. Mailsuite (formerly Mailtrack) supports Gmail open and link tracking; link tracking is a paid feature. Install and test it specifically in ian@blacknovasecurity.com if you choose to use it. No subscription was purchased and no tool was connected by this task.

An open is an image fetch, not proof of reading. Privacy prefetching and blocked images make opens unreliable; security scanners can trigger tracked link clicks too. Use these signals to inform aggregate comparisons, not “I saw you opened my email” follow-ups. Keep replies, meetings, proposals, and sales as the primary metrics.

Do not assume a browser extension tracks messages sent through the Gmail API, a ChatGPT connector, mobile Gmail, or another sending tool. Send a test through the EXACT intended sending path and verify the tool's tracking dashboard before a campaign. Tracking must be present when the message is sent; it cannot reconstruct old email opens. Existing sent messages without UTMs cannot be reliably assigned retroactively to an outreach campaign.

If you later enable email tracking, disclose the actual practice in the relevant privacy notice. Recipient tracking data stays in the email tool; do not export identities into GA. Check which mailbox permissions the chosen extension requests before connecting it.

## Reference documentation

- GA4 setup: https://support.google.com/analytics/answer/9304153
- Google tag configuration: https://developers.google.com/tag-platform/gtagjs/configure
- Consent: https://developers.google.com/tag-platform/security/guides/consent
- Campaign tags: https://support.google.com/analytics/answer/10917952
- Avoiding PII: https://support.google.com/analytics/answer/6366371
- Mail tracking: https://mailsuite.com/en/features/email-tracking
- Apple Mail Privacy Protection: https://www.apple.com/legal/privacy/data/en/mail-privacy-protection/
