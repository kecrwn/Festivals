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
