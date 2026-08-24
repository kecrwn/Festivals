/** Solar Ledger uses a lightweight sunrise equation for orientation only; it intentionally does not infer observed weather. */
export type Locale = "id" | "en";
export type SolarPhase = "night" | "dawn" | "day" | "dusk";

type Copy = Record<Locale, string>;
export type SeasonBand = { months: number[]; period: Copy; title: Copy; note: Copy; tone: "cool" | "heat" | "rain" | "transition" | "dry" };
export type SolarPlace = { id: string; place: Copy; region: Copy; zone: string; abbreviation: string; latitude: number; longitude: number; seasonBands: SeasonBand[]; qualifier: Copy };

const indiaBands: SeasonBand[] = [
  { months:[12,1,2], period:{ id:"Des–Feb", en:"Dec–Feb" }, title:{ id:"Musim lebih sejuk", en:"Cooler season" }, note:{ id:"Baseline musim dingin India timur; hari dapat tetap hangat.", en:"Eastern India winter baseline; daytime warmth can remain." }, tone:"cool" },
  { months:[3,4,5], period:{ id:"Mar–Mei", en:"Mar–May" }, title:{ id:"Pra-monsun", en:"Pre-monsoon" }, note:{ id:"Ritme panas pra-monsun; badai lokal dapat terjadi.", en:"Pre-monsoon heat rhythm; local storms can occur." }, tone:"heat" },
  { months:[6,7,8,9], period:{ id:"Jun–Sep", en:"Jun–Sep" }, title:{ id:"Monsun barat daya", en:"Southwest monsoon" }, note:{ id:"Bulan inti monsun dalam kerangka hujan IMD.", en:"Core monsoon months in IMD’s rainfall framework." }, tone:"rain" },
  { months:[10,11], period:{ id:"Okt–Nov", en:"Oct–Nov" }, title:{ id:"Pasca-monsun", en:"Post-monsoon" }, note:{ id:"Peralihan setelah monsun, dengan kondisi yang berubah antarwilayah.", en:"Post-monsoon transition, with conditions varying by locality." }, tone:"transition" },
];

export const solarPlaces: SolarPlace[] = [
  { id:"kolkata", place:{id:"Kolkata",en:"Kolkata"}, region:{id:"Benggala Barat",en:"West Bengal"}, zone:"Asia/Kolkata", abbreviation:"IST", latitude:22.5726, longitude:88.3639, seasonBands:indiaBands, qualifier:{ id:"Baseline India timur; Benggala Barat berbeda antara Himalaya, dataran, dan pesisir.", en:"Eastern India baseline; West Bengal differs across Himalayan, plains, and coastal settings." } },
  { id:"ranchi", place:{id:"Ranchi",en:"Ranchi"}, region:{id:"Jharkhand",en:"Jharkhand"}, zone:"Asia/Kolkata", abbreviation:"IST", latitude:23.3441, longitude:85.3096, seasonBands:indiaBands, qualifier:{ id:"Baseline Jharkhand; gunakan informasi IMD setempat untuk rencana luar ruang.", en:"Jharkhand baseline; use local IMD information for outdoor plans." } },
  { id:"jakarta", place:{id:"Jakarta",en:"Jakarta"}, region:{id:"Indonesia",en:"Indonesia"}, zone:"Asia/Jakarta", abbreviation:"WIB", latitude:-6.2088, longitude:106.8456, seasonBands:[
    { months:[11,12,1,2,3], period:{id:"Nov–Mar",en:"Nov–Mar"}, title:{id:"Ritme lebih basah",en:"Wetter rhythm"}, note:{id:"Jendela musim hujan yang umum untuk Jakarta.",en:"A typical rainy-season window for Jakarta."}, tone:"rain"},
    { months:[4,10], period:{id:"Apr · Okt",en:"Apr · Oct"}, title:{id:"Masa peralihan",en:"Transition season"}, note:{id:"Peralihan dapat membawa hujan setempat.",en:"The transition can still bring local rainfall."}, tone:"transition"},
    { months:[5,6,7,8,9], period:{id:"Mei–Sep",en:"May–Sep"}, title:{id:"Ritme lebih kering",en:"Drier rhythm"}, note:{id:"Lebih kering secara umum, bukan janji tanpa hujan.",en:"Generally drier, not a no-rain promise."}, tone:"dry"},
  ], qualifier:{id:"Ritme Jakarta yang umum; awal musim mengikuti prediksi zona musim BMKG.",en:"A typical Jakarta rhythm; seasonal onset follows BMKG zone forecasts."} },
  { id:"palangkaraya", place:{id:"Palangka Raya",en:"Palangka Raya"}, region:{id:"Kalimantan Tengah",en:"Central Kalimantan"}, zone:"Asia/Jakarta", abbreviation:"WIB", latitude:-2.2096, longitude:113.9213, seasonBands:[
    {months:[10,11,12,1,2,3,4,5],period:{id:"Okt–Mei",en:"Oct–May"},title:{id:"Ritme lebih basah",en:"Wetter rhythm"},note:{id:"Jendela basah yang luas untuk Palangka Raya.",en:"A broad wetter window for Palangka Raya."},tone:"rain"},
    {months:[6,7,8,9],period:{id:"Jun–Sep",en:"Jun–Sep"},title:{id:"Ritme lebih kering",en:"Drier rhythm"},note:{id:"Hujan lokal dan badai tetap mungkin terjadi.",en:"Local rain and storms can still occur."},tone:"dry"},
  ],qualifier:{id:"BMKG Kalteng menegaskan kemarau berarti hujan lebih rendah, bukan tanpa hujan.",en:"BMKG Central Kalimantan notes dry season means lower rain, not no rain."} },
  { id:"banjarmasin", place:{id:"Banjarmasin",en:"Banjarmasin"}, region:{id:"Kalimantan Selatan",en:"South Kalimantan"}, zone:"Asia/Jakarta", abbreviation:"WIB", latitude:-3.3186, longitude:114.5944, seasonBands:[
    {months:[11,12,1,2,3,4],period:{id:"Nov–Apr",en:"Nov–Apr"},title:{id:"Ritme lebih basah",en:"Wetter rhythm"},note:{id:"Jendela basah yang umum untuk Banjarmasin.",en:"A typical wetter window for Banjarmasin."},tone:"rain"},
    {months:[5,6,7,8],period:{id:"Mei–Agu",en:"May–Aug"},title:{id:"Ritme lebih kering",en:"Drier rhythm"},note:{id:"Lebih kering secara umum, dengan variasi setempat.",en:"Generally drier, with local variation."},tone:"dry"},
    {months:[9,10],period:{id:"Sep–Okt",en:"Sep–Oct"},title:{id:"Peralihan",en:"Transition"},note:{id:"Awal musim hujan dapat bergeser antar zona dan tahun.",en:"Rainy-season onset can shift by zone and year."},tone:"transition"},
  ],qualifier:{id:"Gunakan pembaruan musim BMKG Kalimantan Selatan untuk kondisi tahun berjalan.",en:"Use BMKG South Kalimantan seasonal updates for the current year."} },
];

const rad = (value: number) => value * Math.PI / 180;
const deg = (value: number) => value * 180 / Math.PI;
const normalize = (value: number) => ((value % 360) + 360) % 360;
const dayOfYear = (year: number, month: number, day: number) => Math.floor((Date.UTC(year, month - 1, day) - Date.UTC(year, 0, 0)) / 86_400_000);

function zonedParts(date: Date, zone: string) {
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone:zone, year:"numeric", month:"2-digit", day:"2-digit", hour:"2-digit", minute:"2-digit", second:"2-digit", hourCycle:"h23" }).formatToParts(date);
  const values = Object.fromEntries(parts.filter((part) => part.type !== "literal").map((part) => [part.type, Number(part.value)]));
  return { year:values.year, month:values.month, day:values.day, hour:values.hour, minute:values.minute, second:values.second };
}

function solarTimeUtc(year: number, month: number, day: number, latitude: number, longitude: number, sunset: boolean) {
  const n = dayOfYear(year, month, day); const lngHour = longitude / 15; const t = n + ((sunset ? 18 : 6) - lngHour) / 24; const meanAnomaly = 0.9856 * t - 3.289; const sunLongitude = normalize(meanAnomaly + 1.916 * Math.sin(rad(meanAnomaly)) + 0.02 * Math.sin(rad(2 * meanAnomaly)) + 282.634);
  let rightAscension = normalize(deg(Math.atan(0.91764 * Math.tan(rad(sunLongitude))))); rightAscension += Math.floor(sunLongitude / 90) * 90 - Math.floor(rightAscension / 90) * 90; rightAscension /= 15;
  const sinDeclination = 0.39782 * Math.sin(rad(sunLongitude)); const cosDeclination = Math.cos(Math.asin(sinDeclination)); const cosHour = (Math.cos(rad(90.833)) - sinDeclination * Math.sin(rad(latitude))) / (cosDeclination * Math.cos(rad(latitude)));
  if (cosHour > 1 || cosHour < -1) return Number.NaN;
  const hour = (sunset ? deg(Math.acos(cosHour)) : 360 - deg(Math.acos(cosHour))) / 15; const localMean = hour + rightAscension - 0.06571 * t - 6.622; const utcHours = ((localMean - lngHour) % 24 + 24) % 24;
  return Date.UTC(year, month - 1, day) + utcHours * 3_600_000;
}

export function getSolarSnapshot(now: Date, place: SolarPlace) {
  const local = zonedParts(now, place.zone); const sunrise = solarTimeUtc(local.year, local.month, local.day, place.latitude, place.longitude, false); const sunset = solarTimeUtc(local.year, local.month, local.day, place.latitude, place.longitude, true); const dawn = sunrise - 30 * 60_000; const dusk = sunset + 30 * 60_000; const timestamp = now.getTime();
  const phase: SolarPhase = timestamp < dawn || timestamp > dusk ? "night" : timestamp < sunrise + 30 * 60_000 ? "dawn" : timestamp > sunset - 30 * 60_000 ? "dusk" : "day";
  const daylightProgress = Math.min(1, Math.max(0, (timestamp - sunrise) / (sunset - sunrise))); const season = place.seasonBands.find((band) => band.months.includes(local.month)) || place.seasonBands[0];
  return { local, sunrise, sunset, phase, daylightProgress, season };
}

export function formatSolarTime(timestamp: number, zone: string) { return new Intl.DateTimeFormat("en-GB", { timeZone:zone, hour:"2-digit", minute:"2-digit", hourCycle:"h23" }).format(new Date(timestamp)); }
export function formatLiveTime(date: Date, zone: string) { return new Intl.DateTimeFormat("en-GB", { timeZone:zone, hour:"2-digit", minute:"2-digit", second:"2-digit", hourCycle:"h23" }).format(date); }
