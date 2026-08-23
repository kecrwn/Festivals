# KA Festivals

KA Festivals is an Indonesian-first, bilingual cultural calendar for **India and Indonesia**. It combines a daily observance companion, local timezone clocks, a five-year calendar index, PWA installation, and opt-in client-side festival reminders.

## What is included

The site provides a broad, curated static collection. It includes India’s national dates and a diverse set of Hindu, Muslim, Sikh, Christian, Buddhist, Jain, regional and cultural observances. Indonesia’s collection includes national public holidays, Muslim observances, Christian dates, Nyepi and other Hindu traditions, Vesak, Chinese New Year, and regional cultural festivals. Visitors can switch the entire interface between Indonesian and English, choose a date, compare India and Indonesia clocks, explore 2026–2030 calendar notes, and install the site as a PWA.

> **Important:** This is an educational discovery tool, not a statutory public-holiday feed. Many festivals follow lunar, Hijri, Saka, Pawukon, regional, or community-specific calendars. Confirm a locally announced date before travel, events, or official planning. Indonesia’s future religious public-holiday dates are deliberately labelled as awaiting official announcement rather than presented as confirmed.

## Notifications and PWA behavior

Visitors can install KA Festivals and explicitly enable browser notifications. Because this is a static deployment with no backend, reminders are evaluated when the PWA is open or resumes; the interface clearly warns that fully closed-browser delivery cannot be guaranteed across every device. The service worker provides app-shell caching and enables the browser notification path where supported.

## Run locally

```bash
pnpm install
pnpm dev
```

Validate the project with:

```bash
pnpm check
pnpm build
```

## Sources and editorial notes

Indonesia’s 2026 public-date examples in the experience are based on [Bank Indonesia’s *Holidays and Collective Leaves in 2026*](https://www.bi.go.id/en/publikasi/Kalender/Documents/Holidays-And-Collective-Leaves-In-2026.pdf). National-day context for India is cross-checked against the [National Portal of India](https://www.india.gov.in/). Descriptions are intentionally concise and inclusive; regional practice and terminology can vary.

## Design system

The interface follows the **Saffron Field Notes** direction: a warm editorial almanac with paper texture, an asymmetrical country rail, an atlas stamp, calendar-thread month markers and field-note detail panels. The custom visual assets are supplied through managed project storage and are referenced directly by the application.
