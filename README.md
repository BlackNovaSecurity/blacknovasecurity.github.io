# Black Nova Security

A responsive, one-page static website. No package installation, build, JavaScript, tracking, or external fonts required. Contact buttons open an email addressed to ian@blacknovasecurity.com. Nothing has been published or connected to your domain.

## Branding

The supplied Black Nova Security emblem is included unchanged at assets/black-nova-security-logo.png and displayed prominently in the hero. The page uses a dark, silver, and cyan palette to match it. The compact header uses a readable text wordmark. The full emblem also serves as the favicon; a dedicated simplified favicon can be added later.

## Preview

Open index.html in your browser. All assets use relative paths, so the site works on a GitHub Pages project path or a custom domain. You can also serve the folder with `python -m http.server 8000` and visit http://localhost:8000.

## Publish with GitHub Pages

1. Create a repository (for example, black-nova-security). Public repositories can use GitHub Free; private Pages repositories require an eligible paid plan.
2. Upload this folder's CONTENTS to the repository root. index.html must be at the root, not inside an extra black-nova-security folder. Include assets/, styles.css, and .nojekyll.
3. In Settings > Pages, choose Deploy from a branch, main, /(root), then Save.
4. Wait for the Pages deployment to succeed. Open the URL shown in Pages settings and check the navigation, mobile layout, and email links.

## Connect blacknovasecurity.com

Verify your domain in GitHub first using its verification TXT record. Set blacknovasecurity.com as the custom domain in repository Settings > Pages BEFORE changing website DNS. GitHub creates a CNAME file when publishing from a branch. No CNAME file is included here, allowing the default GitHub Pages URL to work before domain setup.

At your DNS provider, set these four A records for the apex (@):

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR-GITHUB-USERNAME.github.io |

Replace YOUR-GITHUB-USERNAME with the account or organization that owns the repository; do not include the repository name in the CNAME target. Remove conflicting website A/AAAA/ALIAS records as needed. Preserve Google Workspace MX records and email authentication TXT records (SPF, DKIM, DMARC). Do not change nameservers just to host this page. Once DNS and certificate provisioning finish, enable Enforce HTTPS in Pages settings and test both the apex and www hostnames. DNS propagation may take up to 24 hours.

Official references, checked October 11, 2026:
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages

## Content decisions

The page focuses on the cybersecurity risk review and a 20-minute introductory conversation. Pricing is agreed after scope, rather than advertising an unvalidated fixed price. The public copy omits employer/client affiliations, fabricated testimonials, and breach-cost promises. Confirm the stated deliverables match your engagement agreement before publishing.

## Editing

Edit copy in index.html and colors/layout in styles.css. No rebuild is needed. Copyright year is intentionally static. If a scheduling link is added later, replace the mailto calls to action with the verified booking URL.
