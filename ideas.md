# Festival Atlas — Design Exploration

## Three stylistic approaches

| Theme Name | Very Brief Intro | Probability |
| --- | --- | --- |
| **Saffron Field Notes** | A tactile, editorial atlas that feels like a well-loved travel almanac, using ink, paper, stamps, and precise calendar markings to make cultural discovery feel personal. | 0.06 |
| **Festival Constellation** | A dark celestial archive where festivals become luminous points in a night-sky timeline, emphasizing seasonality and cross-cultural connection. | 0.03 |
| **Monsoon Modernism** | A bold, sun-washed cultural directory inspired by Indian and Indonesian printmaking, with oversized color blocks and playful poster-like transitions. | 0.08 |

## Chosen approach: Saffron Field Notes

### Design Movement

The interface is a **contemporary editorial almanac** informed by mid-century travel guides, library circulation cards, Indian block-print textiles, and Indonesian batik geometry. It should feel collected and trustworthy rather than generic or tech-heavy.

### Core Principles

1. **Discovery through curation:** content is organized like a field guide—clear dates, source-aware notes, and meaningful cultural context.
2. **Asymmetrical rhythm:** the page moves between wide editorial spreads, narrow utility rails, and annotated cards instead of relying on a centered dashboard grid.
3. **Warm materiality:** paper grain, ink-like rules, wax-red accents, and sun-faded pigments make the interface tactile without reducing legibility.
4. **Respectful specificity:** every tradition has its own visual marker, label, and contextual copy; inclusion is structural, not decorative.

### Color Philosophy

The base should resemble naturally warm **uncoated paper**, so dense information feels calm rather than clinical. Deep ink-blue provides trusted contrast and all primary reading text; **Atlas Saffron** anchors key calls to action and featured dates, while terracotta, leaf green, plum, and tide blue distinguish cultural categories without assigning religious meaning to a single color. The palette should feel like shared sunlight, not national flag replication.

### Layout Paradigm

Use a **field-journal spine**: a narrow vertical country rail remains visible on large screens; the content spreads out to its right as a changing series of cards, a month strip, and individual festival records. The main hero starts with a large text field on the left and a layered season atlas on the right. On mobile, the rail becomes a horizontal toggle bar and each spread stacks in a clear reading order.

### Signature Elements

1. **Atlas stamp:** a circular eight-petal compass-flower mark with a small central sun, used in the header, active country selector, loading state, and favicon.
2. **Calendar thread:** a thin terracotta vertical or horizontal rule that connects month markers and selected festival cards.
3. **Field labels:** small uppercase metadata lines in compact type, marked with a short color dash rather than pills everywhere.

### Interaction Philosophy

Controls should behave like annotation tools in a physical almanac: country switching updates the whole collection, filters narrow the field guide, and clicking a festival opens an accessible context drawer with date guidance, traditions, and regional notes. The current selection should always be visible in a concise “field selection” line.

### Animation

Motion is restrained and purposeful. Country switches use a brief 180–240 ms crossfade and horizontal offset; cards lift only two to four pixels on hover; the selected calendar thread slides into place; the detail drawer arrives from the content edge with opacity and a 0.96-to-1 scale. Decorative map curves can drift imperceptibly only when motion is not reduced. All nonessential animation must respect `prefers-reduced-motion`.

### Typography System

Use **Fraunces** for display headlines and calendar numerals, with soft, bookish serifs that support the almanac feel. Use **DM Sans** for UI labels, filters, metadata, and body copy because it is clear at small sizes. Headlines use compact leading and high contrast; category labels use 0.68–0.76rem uppercase DM Sans with generous tracking; reading copy stays at 0.96–1.05rem with an airy line height.

### Brand Essence

**Festival Atlas is a living, click-through cultural calendar for people who want to understand India and Indonesia’s many celebrations without flattening their differences.**

Personality: **curious, grounded, generous.**

### Brand Voice

Headlines should be observant and inviting, not promotional. CTAs should name the cultural action that follows; microcopy should clarify whether a date is fixed, lunar, regional, or government-declared.

Examples:

> “Follow the year, one celebration at a time.”

> “Open the field note — dates and traditions can vary by region.”

### Wordmark & Logo

The wordmark pairs the name in Fraunces with a small, custom **Atlas Stamp**: an eight-petal radial shape that quietly merges a calendrical sun with a directional compass. The symbol is used independently at a prominent, legible size; it never depends on a default text treatment.

### Signature Brand Color

**Atlas Saffron — #E5952F.** A sun-warmed, deep saffron used sparingly for active paths, selected dates, and the brand stamp.

## Style Decisions

- The festival index is treated as an **editorial calendar ledger**: month breaks, numbered month markers and a continuous terracotta calendar thread interrupt any uniform card-grid rhythm.
- Selection controls use **field-label language**: uppercase labels, ink rules, short color dashes and paper-stamped active states; rounded pills are not part of the primary control language.
- Country and tradition identity is reinforced by recurring, restrained marker systems: thread colors, country corner rules, initial stamps and heritage dashes.
- Major imagery must include culturally specific atlas materials such as calendar paper, textile geometry and festival objects, avoiding generic travel-brand imagery as the primary message.

## KA Festivals expansion

### Brand update

The product is now **KA Festivals**. The **K** uses Fraunces, the **A** uses DM Sans, and both sit in a sunlit Atlas Saffron treatment; **Festivals** remains in deep Ink Navy. The contrast makes the KA monogram memorable without losing the editorial calm of the original almanac.

### Daily companion

The opening spread becomes an in-context daily companion. It answers one question immediately: *what is happening today in each location?* The chosen-day card uses everyday, friendly language in both Indonesian and English, distinguishes verified and estimated dates, and has a compact “nothing scheduled today” state rather than leaving an empty gap.

### Bilingual interaction model

Indonesian is the default locale. A small, tactile header switch flips the entire interface between **ID** and **EN**, including navigation, controls, state messages, detail notes and accessibility labels. The switch uses a compact sliding paper-ticket treatment so both longer English and Indonesian strings have room to breathe.

### Clocks and companion character

The daily panel includes small local clocks for **India (IST)** and **Indonesia’s three zones: WIB, WITA and WIT**. A CSS-drawn cat called **Mika** appears as a compact daytime companion; it changes its supporting microcopy according to whether there is a festival today, without distracting from the calendar content.

### Static notification philosophy

The notification setting must be direct and honest. The PWA asks for browser permission only after a visitor opts in. With no server, a reminder is created when the app is open or resumed on a festival day; the UI explicitly communicates that closed-browser delivery depends on the platform and cannot be guaranteed by a static site alone.

## Responsive refinement: Glass Almanac

### Interaction hierarchy

The page will become lighter and more intentional: **Today**, **Explore**, and **Guide** are the three primary destinations. Desktop and tablet keep a low-density editorial header. Mobile removes the in-flow navigation entirely and uses a floating, 14px-offset bottom dock with translucent paper-glass, a fine bright edge, gentle background blur, and clearly named destinations.

### Brand and control update

The logo is simplified into a custom **KA compass bloom**: a saffron radial spark around a compact ink monogram, followed by a clean wordmark that blends a narrow modern sans for “KA” with a quiet serif for “Festivals.” The language toggle becomes a segmented globe control with an animated active lens. The install action becomes a small square “app tile” on mobile and a measured outlined action on larger screens.

### Discovery and calendar update

Search is elevated into a dedicated discover panel rather than an inline utility. On mobile it reads as a large one-line field with a soft interior glow; on tablet and desktop it is paired with a compact filter sheet. Calendar entries use a quieter rhythm with more breathing room, reduced decoration, and a direct detail affordance. Selecting a record navigates to a focused festival story page.

### Festival story pages

Each detail view uses the same soft-paper system and three readable blocks: **the day at a glance**, **what people often do**, and **good to know**. Casual language gives the user grounding without implying that every community observes the day in an identical way. A back path, related dates, and data-status label maintain context.

### Companion behavior

Mika becomes a smaller micro-companion that sits beside daily states or detail-page notes, rather than occupying a structural column. This keeps the product practical, provides delight, and preserves room on mobile.

### Style Decisions

The discovery index is now a true calendar ledger: every month begins with a saffron date tab, a continuous terracotta thread, and a visible record count. Festival stories add a field-note strip and festival-material mark before the detail blocks; the copy can point to recognisable practices while retaining regional caution. The hero carries route labels, calendar scrap, textile geometry, a lamp silhouette, and a stamped atlas tag so the cultural-almanac purpose is visible before the visitor scrolls.

### Annual Arc enhancement

The annual timeline becomes a visual **festival arc** rather than a dense spreadsheet: twelve months sit on a continuous, slightly irregular saffron route, with larger seasonal landmarks and compact event beads. The route offers high-level scanning first; selecting a month narrows the discovery ledger below it. On small screens the arc becomes a sideways-scrolling strip with a persistent active month and individual festival clusters, while desktop uses a wide chronological band with editorial annotations.

The Festival Arc carries cartographic route ripples, four handwritten-style seasonal annotations, an India–Nusantara atlas stamp, and two wider festival clusters. The saffron date bead and terracotta thread are repeated on the route, ledger, quiet state, and selection controls. These elements create one coherent KA signature rather than isolated decorative accents.

## Celebration Cards discovery pass

Search becomes a calmer **collection desk** rather than a long list. A concise visual shelf introduces four cultural pathways—light, gathering, quiet ritual, and textile/craft—before the user searches. These cards use contextual still-life images only as visual invitations; the festival title, country, tradition, date status, and direct story link remain the source of truth. Filters appear as a short guided sentence with a country switch and a compact tradition rail, instead of one undifferentiated sheet. The rebuilt mobile dock takes on a slightly thicker glass edge, more generous label spacing, and a saffron compass-bloom active halo. The language control becomes a compact two-state glass capsule whose active locale moves on a small saffron paper tab.

### Complementary discovery modules

The expanded experience adds a small **festival rhythm** panel that surfaces the next few observances and a **collection card** for a country or tradition. These modules use paper scraps, date stamps, and one clean textile-marker family. They do not duplicate the search interface; their purpose is to make the calendar easier to understand at a glance and to invite a deeper detail-page visit.

## Northwater Index refinement

The next KA Festivals pass treats the product as a **Northwater Index**: a quiet field catalogue where language, date certainty, geography, and tradition remain adjacent without competing. **Newsreader** becomes the warm story and brand face; **Manrope** becomes the compact humanist interface voice; **DM Mono** remains the small archival coordinate voice. Discovery becomes a two-column index rather than a stack of cards: an anchored route panel holds country, year, tradition, language, and date evidence, while a short visual shelf introduces three culturally grounded entry points before the month ledger. The footer becomes a dark night ledger with decorative Pisces and Aquarius star routes, positioned as sky-navigation imagery rather than astrological advice. The compass-bloom symbol appears as a stamped coordinate mark in the header, control rail, ledger, and footer so the brand can be recognized even without the wordmark.

### Style Decisions

Mika is constrained to a single, small companion beside quiet daily states; it is never mirrored or used as structural decoration. Route-card imagery is overlaid with material labels such as **LAMP · NOTE**, **SHARE · TABLE**, and **PAUSE · BALI**, together with saffron compass fragments, so each visual route reads as a held atlas object rather than a generic travel thumbnail. The compass-bloom and compact KA stamp appear at readable moments in primary navigation, month markers, story field notes, timeline selection, guide evidence cards, and the sky ledger.
