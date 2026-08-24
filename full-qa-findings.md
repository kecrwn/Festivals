# Full Website QA Findings — August 2026

## Coverage completed

Desktop and 375px mobile captures covered Home, a Home date/country/place deep link, filtered Index, Year, Guide, Season, festival detail, and 404. All captured routes loaded. The direct state links preserved their expected selected date, country, place, query, and month/filter context in the rendered content.

## Visual result summary

| Area | Result | Notes |
| --- | --- | --- |
| Header / controls | Pass | Compact wordmark, locale selector, and install control remain readable at desktop and mobile. |
| Home / Field Window | Pass | Selected date and regional context are rendered without visible clipping. |
| Index / filtered state | Pass | Query, country, year, category, October header, and result count align correctly. Mobile route cards use intentional horizontal overflow. |
| Year / month route | Pass | Month arc and marker/status content are legible; mobile arc is intentionally horizontally scrollable. |
| Guide / Season / detail / 404 | Pass | No hidden text or layout break observed; guide reading path and five-place season route remain responsive. |
| Footer / constellation | Pass | Footer content and constellation surfaces remain readable at both sizes. |
| Solar Ledger | Investigate | One mobile capture of the direct Ranchi deep link showed the Solar heading and decorative points but not the main live instrument, despite a later direct Home capture rendering the same component normally. Treat as an intermittent rendering or timing/style issue until browser logs and a targeted repeat capture are clean. |

## Next QA checks

Inspect browser console and network logs; repeat focused Solar Ledger capture for every place and phase; validate image asset responses; verify keyboard focus and reduced-motion behavior; then repair any reproducible failure and rerun the production build/public asset graph.

## Verified repair — Solar Ledger

Focused mobile captures reproduced a missing Solar Instrument only for the Palangka Raya deep link. The deterministic solar equation returned a sunset timestamp on the incorrect UTC date for east-of-UTC locations. That left the computed daylight window reversed and could produce an inconsistent component state.

The repair keeps the signed UTC offset and then normalizes sunset relative to the calculated sunrise for the selected local day. A diagnostic confirmed that sunrise now precedes sunset for Kolkata, Ranchi, Jakarta, Palangka Raya, and Banjarmasin. A repeated 375px capture set showed the full Solar Ledger—place label, live time, sunrise, sunset, seasonal explanation, and route link—for all five locations.
