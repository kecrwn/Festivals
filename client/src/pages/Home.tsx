/**
 * Saffron Field Notes: a warm editorial almanac with an asymmetric country rail,
 * ink-blue typography, paper texture, Atlas Saffron selections, and annotated field cards.
 */
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { festivals, monthNames, type Country, type Festival, type Tradition } from "@/data/festivals";
import {
  ArrowUpRight,
  BookOpenText,
  CalendarDays,
  ChevronRight,
  Compass,
  MapPinned,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

type CountryFilter = "All" | Country;
type TraditionFilter = "All" | Tradition;

const globalTraditions: Tradition[] = ["National", "Special day", "Hindu", "Islamic", "Sikh", "Christian", "Buddhist", "Jain", "Confucian", "Cultural"];

function formatCount(count: number) {
  return `${count} field ${count === 1 ? "note" : "notes"}`;
}

function markFor(tradition: Tradition) {
  const labels: Record<Tradition, string> = {
    Hindu: "H",
    Islamic: "M",
    Sikh: "S",
    Christian: "C",
    Buddhist: "B",
    Jain: "J",
    Confucian: "K",
    National: "N",
    Cultural: "R",
    "Special day": "D",
  };
  return labels[tradition];
}

function traditionLabel(tradition: Tradition, country: CountryFilter) {
  if (country === "Indonesia" && tradition === "Islamic") return "Muslim traditions";
  if (tradition === "National") return "National dates";
  if (tradition === "Special day") return "Special days";
  if (tradition === "Cultural") return "Cultural / regional";
  return tradition;
}

function CountryDot({ country }: { country: Country }) {
  return <span aria-hidden="true" className={`country-dot ${country.toLowerCase()}`} />;
}

function AtlasMark({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`atlas-mark ${className}`} />;
}

function FestivalCard({ festival, onOpen }: { festival: Festival; onOpen: (festival: Festival) => void }) {
  return (
    <button className={`festival-card ${festival.country.toLowerCase()} ${festival.featured ? "featured-card" : ""}`} onClick={() => onOpen(festival)}>
      <span className={`tradition-mark ${festival.tradition.toLowerCase().replaceAll(" ", "-")}`}>{markFor(festival.tradition)}</span>
      <span className="festival-card-body">
        <span className="festival-card-topline">
          <span className="festival-timing">{festival.timing}</span>
          <span className="festival-country"><CountryDot country={festival.country} />{festival.country}</span>
        </span>
        <span className="festival-title-row">
          <span className="festival-title">{festival.name}</span>
          <ChevronRight size={18} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <span className="festival-subtitle"><span className={`heritage-dash ${festival.tradition.toLowerCase().replaceAll(" ", "-")}`} />{festival.localName || traditionLabel(festival.tradition, festival.country)}</span>
        <span className="festival-description">{festival.description}</span>
      </span>
    </button>
  );
}

function SpotlightCard({ country, count }: { country: Country; count: number }) {
  const isIndia = country === "India";
  return (
    <article className={`spotlight-card ${country.toLowerCase()}`}>
      <div className="spotlight-art" aria-hidden="true"><span className="art-sun" /><span className="art-textile" /><span className="art-paper" /></div>
      <div className="spotlight-scrim" />
      <div className="spotlight-content">
        <span className="eyebrow inverse"><CountryDot country={country} /> {country} collection</span>
        <h3>{isIndia ? "A country of many calendars." : "Plural traditions, shared public life."}</h3>
        <p>{count} curated notes across national, cultural and religious observances.</p>
      </div>
    </article>
  );
}

export default function Home() {
  const [country, setCountry] = useState<CountryFilter>("All");
  const [tradition, setTradition] = useState<TraditionFilter>("All");
  const [month, setMonth] = useState<number | null>(null);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Festival | null>(null);
  const [showAll, setShowAll] = useState(false);

  const indiaCount = festivals.filter((festival) => festival.country === "India").length;
  const indonesiaCount = festivals.filter((festival) => festival.country === "Indonesia").length;

  const availableTraditions = useMemo(() => {
    const permitted = country === "All" ? festivals : festivals.filter((festival) => festival.country === country);
    return globalTraditions.filter((entry) => permitted.some((festival) => festival.tradition === entry));
  }, [country]);

  const filteredFestivals = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase();
    return festivals.filter((festival) => {
      const matchCountry = country === "All" || festival.country === country;
      const matchTradition = tradition === "All" || festival.tradition === tradition;
      const matchMonth = month === null || festival.month === month;
      const haystack = [festival.name, festival.localName, festival.country, festival.tradition, festival.region, festival.description].filter(Boolean).join(" ").toLocaleLowerCase();
      return matchCountry && matchTradition && matchMonth && (!needle || haystack.includes(needle));
    });
  }, [country, tradition, month, query]);

  const displayedFestivals = showAll ? filteredFestivals : filteredFestivals.slice(0, 18);
  const groupedFestivals = useMemo(() => {
    const groups = new Map<number, Festival[]>();
    [...displayedFestivals]
      .sort((a, b) => a.month - b.month || a.country.localeCompare(b.country) || a.name.localeCompare(b.name))
      .forEach((festival) => groups.set(festival.month, [...(groups.get(festival.month) || []), festival]));
    return Array.from(groups.entries());
  }, [displayedFestivals]);
  const featured = festivals.filter((festival) => festival.featured && (country === "All" || festival.country === country)).slice(0, 3);
  const filterActive = country !== "All" || tradition !== "All" || month !== null || query.trim().length > 0;

  function resetFilters() {
    setCountry("All");
    setTradition("All");
    setMonth(null);
    setQuery("");
    setShowAll(false);
  }

  function selectCountry(nextCountry: CountryFilter) {
    setCountry(nextCountry);
    setTradition("All");
    setMonth(null);
    setShowAll(false);
  }

  return (
    <main className="atlas-page">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Festival Atlas, beginning of page">
          <AtlasMark className="brand-mark" />
          <span className="brand-lockup"><span>Festival</span><strong>Atlas</strong></span>
        </a>
        <nav className="top-nav" aria-label="Primary navigation">
          <a href="#explore">Explore</a>
          <a href="#method">How to read this</a>
          <a href="#sources">Sources</a>
        </nav>
        <a className="header-action" href="#explore"><Compass size={16} /> Open the atlas</a>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <span className="eyebrow"><span className="ink-dash" />India + Indonesia cultural calendar</span>
          <h1>Every year is a map of celebrations.</h1>
          <p className="hero-description">Festival Atlas is a click-through field guide to major festivals, public holidays, national days and cultural observances across India and Indonesia.</p>
          <div className="hero-actions">
            <a href="#explore" className="primary-button">Browse all field notes <ArrowUpRight size={18} /></a>
            <a href="#method" className="text-button">How dates work <ChevronRight size={17} /></a>
          </div>
          <div className="hero-metadata">
            <div><strong>{indiaCount + indonesiaCount}</strong><span>curated entries</span></div>
            <div><strong>10</strong><span>tradition labels</span></div>
            <div><strong>2</strong><span>country collections</span></div>
          </div>
        </div>
        <div className="hero-visual" aria-label="Festival Atlas field journal with cultural calendar materials">
          <div className="hero-paper-art" aria-hidden="true"><span className="paper-contours" /><span className="paper-calendar" /><span className="paper-textile" /><span className="paper-lamp" /></div>
          <div className="hero-stamp"><AtlasMark /><span>Living cultural<br />calendar</span></div>
          <div className="hero-caption"><span>FIELD NOTE 01</span><strong>Follow the seasons,<br />not just the dates.</strong></div>
        </div>
      </section>

      <section className="atlas-section" id="explore">
        <aside className="country-rail" aria-label="Country collection selector">
          <div className="rail-intro">
            <span className="eyebrow"><MapPinned size={14} />Collections</span>
            <p>Choose a country, then narrow the calendar by tradition, month or keyword.</p>
          </div>
          {(["All", "India", "Indonesia"] as CountryFilter[]).map((entry) => (
            <button key={entry} className={`country-choice ${country === entry ? "selected" : ""}`} onClick={() => selectCountry(entry)}>
              <span className="country-choice-line"><span>{entry === "All" ? "Both countries" : entry}</span><span className="country-count">{entry === "All" ? festivals.length : entry === "India" ? indiaCount : indonesiaCount}</span></span>
              <span className="country-choice-note">{entry === "All" ? "One connected field guide" : entry === "India" ? "Faiths, regions and national days" : "Public holidays and island traditions"}</span>
            </button>
          ))}
          <div className="rail-note">
            <BookOpenText size={18} />
            <p><strong>Read dates carefully.</strong> Many celebrations follow lunar, regional or religious calendars; use each field note as context and confirm local dates before planning.</p>
          </div>
        </aside>

        <div className="atlas-content">
          <div className="content-heading">
            <div>
              <span className="eyebrow"><span className="ink-dash" />Field selections</span>
              <h2>{country === "All" ? "A shared year of many traditions." : country === "India" ? "India, in many calendar languages." : "Indonesia, a plural public calendar."}</h2>
            </div>
            <p>{country === "All" ? "Start broad or choose a country collection." : country === "India" ? "Move across faiths, regions and civic milestones." : "Filter Muslim observances or explore Indonesia’s full multi-faith calendar."}</p>
          </div>

          <div className="filter-board">
            <div className="search-box"><Search size={18} /><input aria-label="Search festivals" value={query} onChange={(event) => { setQuery(event.target.value); setShowAll(false); }} placeholder="Search a festival, tradition or region" />{query && <button aria-label="Clear search" onClick={() => setQuery("")}><X size={16} /></button>}</div>
            <div className="filter-block">
              <div className="filter-label"><SlidersHorizontal size={15} />Tradition</div>
              <div className="filter-scroll" aria-label="Filter by tradition">
                <button className={`filter-chip ${tradition === "All" ? "active" : ""}`} onClick={() => { setTradition("All"); setShowAll(false); }}>All traditions</button>
                {availableTraditions.map((entry) => <button key={entry} className={`filter-chip ${entry.toLowerCase().replaceAll(" ", "-")} ${tradition === entry ? "active" : ""}`} onClick={() => { setTradition(entry); setShowAll(false); }}><span className="filter-dash" />{traditionLabel(entry, country)}</button>)}
              </div>
            </div>
            <div className="filter-block month-block">
              <div className="filter-label"><CalendarDays size={15} />Month</div>
              <div className="month-strip" aria-label="Filter by month">
                <button className={month === null ? "active" : ""} onClick={() => { setMonth(null); setShowAll(false); }}>All</button>
                {monthNames.map((entry, index) => <button key={entry} className={month === index ? "active" : ""} onClick={() => { setMonth(index); setShowAll(false); }} aria-label={entry}>{entry.slice(0, 3)}</button>)}
              </div>
            </div>
          </div>

          {featured.length > 0 && !filterActive && (
            <section className="featured-band" aria-label="Featured field notes">
              <div className="section-kicker"><span>Selected entries</span><span className="rule" /></div>
              <div className="featured-list">
                {featured.map((festival, index) => <button className="featured-note" key={festival.id} onClick={() => setSelected(festival)}><span>0{index + 1}</span><div><small>{festival.country} · {traditionLabel(festival.tradition, festival.country)}</small><strong>{festival.name}</strong><p>{festival.timing}</p></div><ArrowUpRight size={19} /></button>)}
              </div>
            </section>
          )}

          {country === "All" && !filterActive && <section className="spotlight-grid" aria-label="Country collection highlights"><SpotlightCard country="India" count={indiaCount} /><SpotlightCard country="Indonesia" count={indonesiaCount} /></section>}

          <section className="festival-results" aria-live="polite">
            <div className="results-heading">
              <div><span className="section-kicker"><span>Festival index</span><span className="rule" /></span><h3>{formatCount(filteredFestivals.length)}</h3></div>
              {filterActive && <button className="clear-button" onClick={resetFilters}><X size={15} /> Clear selections</button>}
            </div>
            {filteredFestivals.length ? <div className="festival-ledger">{groupedFestivals.map(([monthIndex, monthlyFestivals]) => <section className="month-ledger" key={monthIndex}><div className="month-heading"><span className="month-number">{String(monthIndex + 1).padStart(2, "0")}</span><div><span className="eyebrow">Calendar thread</span><h4>{monthNames[monthIndex]}</h4></div><span className="month-count">{monthlyFestivals.length} {monthlyFestivals.length === 1 ? "entry" : "entries"}</span></div><div className="festival-grid">{monthlyFestivals.map((festival) => <FestivalCard key={festival.id} festival={festival} onOpen={setSelected} />)}</div></section>)}</div> : <div className="empty-state"><Compass size={24} /><h3>No field notes match this selection.</h3><p>Try changing the country, month, tradition or search term.</p><button onClick={resetFilters}>Clear every filter</button></div>}
            {filteredFestivals.length > 18 && <button className="show-more" onClick={() => setShowAll(!showAll)}>{showAll ? "Show fewer entries" : `Show all ${filteredFestivals.length} entries`} <ChevronRight size={16} /></button>}
          </section>
        </div>
      </section>

      <section className="method-section" id="method">
        <div className="method-title"><span className="eyebrow"><span className="ink-dash" />How to read this atlas</span><h2>Dates belong to calendars, communities and places.</h2></div>
        <div className="method-grid">
          <article><span>01</span><h3>Fixed days</h3><p>National days and special observances with a Gregorian date are identified in each note.</p></article>
          <article><span>02</span><h3>Moveable dates</h3><p>Many festivals are marked by lunar, Hijri, Saka, Pawukon or regional calendars and may shift each year.</p></article>
          <article><span>03</span><h3>Local meaning</h3><p>Descriptions give a respectful starting point. Communities and regions may celebrate the same event in distinct ways.</p></article>
        </div>
      </section>

      <footer className="site-footer" id="sources">
        <div className="footer-brand"><AtlasMark /><div><span>Festival Atlas</span><p>A living field guide for India and Indonesia.</p></div></div>
        <div className="footer-source"><strong>Reference notes</strong><p>This editorial index is for discovery, not a statutory holiday or travel-planning service. Indonesia’s 2026 public-date examples follow <a href="https://www.bi.go.id/en/publikasi/Kalender/Documents/Holidays-And-Collective-Leaves-In-2026.pdf" target="_blank" rel="noreferrer">Bank Indonesia’s calendar</a>; national-day context is cross-checked with the <a href="https://www.india.gov.in/" target="_blank" rel="noreferrer">National Portal of India</a>.</p></div>
      </footer>

      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="festival-dialog">
          {selected && <><DialogHeader><span className="dialog-meta"><CountryDot country={selected.country} /> {selected.country} · {traditionLabel(selected.tradition, selected.country)}</span><DialogTitle>{selected.name}</DialogTitle><DialogDescription>{selected.localName ? `${selected.localName} · ` : ""}{selected.timing}</DialogDescription></DialogHeader><div className="dialog-rule" /><div className="dialog-body"><div><span className="dialog-label">Where it is observed</span><p>{selected.region}</p></div><div><span className="dialog-label">Field note</span><p>{selected.description}</p></div><div><span className="dialog-label">Common practices</span><p>{selected.traditions}</p></div></div><p className="dialog-caution">Calendar note: dates, practices and public observance can vary by year, state, island, community and local announcement.</p></>}
        </DialogContent>
      </Dialog>
    </main>
  );
}
