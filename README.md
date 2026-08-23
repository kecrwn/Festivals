# Festival Atlas

Festival Atlas is an interactive cultural calendar for **India and Indonesia**. It is designed as a field guide for discovering major national holidays, special days, religious observances and regional cultural festivals across many traditions.

## What is included

The site provides a broad, curated static collection. It includes India’s national dates and a diverse set of Hindu, Muslim, Sikh, Christian, Buddhist, Jain, regional and cultural observances. Indonesia’s collection includes national public holidays, Muslim observances, Christian dates, Nyepi and other Hindu traditions, Vesak, Chinese New Year, and regional cultural festivals. Visitors can switch countries, filter by tradition, select a month, search keywords, and open detail cards.

> **Important:** This is an educational discovery tool, not a statutory public-holiday feed. Many festivals follow lunar, Hijri, Saka, Pawukon, regional, or community-specific calendars. Confirm a locally announced date before travel, events, or official planning.

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
