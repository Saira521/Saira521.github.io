# Saira Kaleem portfolio

Static site with no build step. It deploys as-is to GitHub Pages, Vercel or Netlify.

## Add a case study

1. Copy `projects/aws-iso27001-audit-readiness.html` and rename it.
2. Replace the content, keeping all 13 sections and the project-type label: Professional Work, Independent Portfolio Project or Simulated Case Study.
3. Add a `project-card` to the Projects section of `index.html`.
4. Add the new page to `sitemap.xml`.

## Reusable components (`assets/styles.css`)

| Component | Class |
|---|---|
| ProjectCard | `project-card`, `project-featured` |
| FrameworkBadge | `framework-badge`, plus `framework-badge-applied` for applied work |
| CaseStudySection | `case-study-section` |
| RiskHeatmap | `risk-heatmap`, with `risk-low`, `risk-moderate`, `risk-high`, `risk-critical` cells |
| EvidenceTable | `data-table evidence-table` |
| ControlStatus | `data-table control-status`, with `status-pass`, `status-partial`, `status-fail`, `status-neutral` labels |
| Timeline | `timeline`, `timeline-item` |
| CertificationCard | `certification-card`, plus `certification-card-pending` if not yet earned |
| Flow diagram | `flow`, plus `flow-dark` on navy or `flow-steps` for steps with descriptions |

## Keep off the site

Do not publish a phone number, photo or employer data. Only `assets/Saira_Kaleem_Resume.pdf` is the web copy of the resume.
