# Responsive Optimization Audit — August 2026

## Scope

The Home, Index, Festival Arc, festival-detail, and calendar-guide routes were reviewed at **320 × 680** and **768 × 1024**. A dedicated non-full-page 320-pixel review was also used to inspect the fixed header and floating navigation dock.

## Findings and resolutions

| Area | Observed small-screen risk | Accepted treatment |
|---|---|---|
| Shared header | Compact locale and install controls were visually below the preferred touch size. | The header now keeps the complete KA Festivals wordmark while using compact 36px controls. |
| Mobile dock | The inherited centering transform clipped half of the four-tab dock at 320px. | The dock now uses left/right safe-area anchoring with `transform: none`, 50px tab surfaces, a neutral crystal finish, and clear saffron/coral active feedback. |
| Home / selected-day flow | Hero, date control, Field Window, Solar Ledger, and daily stories could create excessive vertical density. | Mobile spacing, hero ornament scale, card padding, and calendar controls were reduced while retaining the live solar time and daylight context. |
| Explore / Festival Arc | Dense yearly ledgers and horizontal arc controls needed predictable touch areas. | Search and filter controls receive minimum heights; timeline months use intentional horizontal scroll and snap; small metadata is selectively de-emphasized. |
| Festival details / guide | Long cultural context needed a simpler reading rhythm. | Detail panels, guide cards, story blocks, and cultural-practice notes stack into a single readable column. |
| Footer | Fixed navigation needs clear space above the constellation footer. | The app reserves dock clearance on mobile and simplifies footer metadata stacking. |

## Non-negotiable boundaries

The updated styles preserve the attached full-width header, neutral crystal dock, seasonal image contrast protection, bilingual UI, date-status treatment, and deliberate image placement. The solar display remains a calculated orientation aid rather than a weather representation.

## Validation targets

The final pass checks 320px, 375px, 768px, and desktop compositions; navigation and language state; date/country/location query persistence; Explore search and filters; timeline selection; festival-detail reading flow; and the production build.
