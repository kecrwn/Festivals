/** Glass Almanac reminder: festival information is concise, human and culturally cautious before it becomes interface copy. */
import type { FestivalRecord, Kind, Locale } from "@/data/calendar";

export const kindLabels: Record<Locale, Record<Kind, string>> = {
  id: { National: "Nasional", Hindu: "Hindu", Islamic: "Islam", Sikh: "Sikh", Christian: "Kristen", Buddhist: "Buddha", Jain: "Jain", Confucian: "Konghucu", Cultural: "Budaya", Special: "Hari penting" },
  en: { National: "National", Hindu: "Hindu", Islamic: "Islamic", Sikh: "Sikh", Christian: "Christian", Buddhist: "Buddhist", Jain: "Jain", Confucian: "Confucian", Cultural: "Cultural", Special: "Special day" }
};

export const statusLabels: Record<Locale, Record<FestivalRecord["status"], string>> = {
  id: { verified: "Terverifikasi", estimate: "Perkiraan", review: "Menunggu pengumuman" },
  en: { verified: "Verified", estimate: "Estimated", review: "Awaiting announcement" }
};

export function zonedDate(timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-CA", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date());
  const find = (type: string) => parts.find((item) => item.type === type)?.value || "";
  return `${find("year")}-${find("month")}-${find("day")}`;
}

export function longDate(value: string, language: Locale) {
  return new Intl.DateTimeFormat(language === "id" ? "id-ID" : "en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${value}T12:00:00Z`));
}

export function shortDate(value: string, language: Locale) {
  return new Intl.DateTimeFormat(language === "id" ? "id-ID" : "en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${value}T12:00:00Z`));
}

export function casualDescription(record: FestivalRecord, language: Locale) {
  const description = {
    id: { National: "Hari penting ini biasanya diisi dengan upacara, cerita sejarah, dan kegiatan bersama di banyak tempat.", Hindu: "Biasanya ada doa, dekorasi, makanan khas, dan waktu bersama keluarga atau komunitas.", Islamic: "Banyak orang berkumpul untuk berdoa, berbagi makanan, dan saling mengunjungi dengan hangat.", Sikh: "Perayaan ini sering diisi dengan kunjungan ke gurdwara, musik rohani, dan kegiatan berbagi.", Christian: "Komunitas biasanya berkumpul untuk ibadah, refleksi, musik, dan waktu bersama keluarga.", Buddhist: "Hari ini sering diisi dengan meditasi, kunjungan ke vihara, dan tindakan kebaikan.", Jain: "Perayaan ini mengajak refleksi, doa, dan praktik welas asih atau tanpa kekerasan.", Confucian: "Keluarga, makanan bersama, doa, dan harapan baik menjadi bagian penting dari hari ini.", Cultural: "Ini adalah momen budaya yang sering hadir lewat seni, makanan, tradisi lokal, dan kebersamaan.", Special: "Hari ini menjadi kesempatan untuk belajar, menghargai tokoh penting, dan mengikuti kegiatan komunitas." },
    en: { National: "This day is often marked with ceremonies, history, and shared community activities.", Hindu: "People often gather for prayer, decorations, special food, and time with family or community.", Islamic: "Many people gather to pray, share food, and visit one another with warmth.", Sikh: "The day often includes gurdwara visits, devotional music, and acts of sharing.", Christian: "Communities commonly gather for worship, reflection, music, and family time.", Buddhist: "The day is often observed with meditation, temple visits, and acts of kindness.", Jain: "This observance invites reflection, prayer, and practices of compassion or non-violence.", Confucian: "Family, shared food, prayer, and good wishes are central to the day.", Cultural: "This cultural moment often comes alive through art, food, local tradition, and togetherness.", Special: "It is a chance to learn, appreciate an important figure, and join community activity." }
  } as const;
  return description[language][record.kind];
}

export function dayRhythm(record: FestivalRecord, language: Locale) {
  const rhythm = {
    id: { National: "Kamu mungkin melihat bendera, program publik, cerita sejarah, atau kegiatan sekolah dan komunitas.", Hindu: "Bentuk perayaannya berbeda antarwilayah, tetapi doa, makanan, seni, dan kebersamaan sering menjadi bagian penting.", Islamic: "Waktunya dapat mengikuti pengumuman setempat. Banyak keluarga menyiapkan makanan, mengunjungi orang terdekat, atau mengikuti ibadah bersama.", Sikh: "Gurdwara sering menjadi pusat pertemuan, dengan musik rohani dan layanan komunitas yang terbuka.", Christian: "Ibadah, musik, pertemuan keluarga, dan refleksi biasanya memberi warna pada hari ini.", Buddhist: "Orang dapat mengunjungi vihara, bermeditasi, menyalakan lampu, atau berbagi kebaikan dengan sesama.", Jain: "Hari ini bisa diisi dengan doa, bacaan, perenungan, dan praktik sederhana yang penuh perhatian.", Confucian: "Rumah dan ruang keluarga sering menjadi titik berkumpul untuk menghormati tradisi dan berbagi harapan baik.", Cultural: "Kamu mungkin menemukan pertunjukan, kuliner, kerajinan, pakaian tradisional, atau kegiatan lokal yang khas.", Special: "Program edukasi, kegiatan sekolah, atau ajakan untuk mengingat tokoh dan gagasan penting kerap hadir." },
    en: { National: "You may see flags, public programmes, history-sharing, or school and community gatherings.", Hindu: "Practices differ by region, but prayer, food, art, and togetherness are often central to the day.", Islamic: "Timing can follow local announcements. Families may prepare food, visit loved ones, or join communal prayer.", Sikh: "Gurdwaras are often a gathering point, with devotional music and open community service.", Christian: "Worship, music, family gatherings, and reflection often shape the day.", Buddhist: "People may visit a temple, meditate, light lamps, or share acts of kindness.", Jain: "The day can include prayer, readings, reflection, and quiet mindful practice.", Confucian: "Homes and family spaces are often where people honour tradition and share good wishes.", Cultural: "You may encounter performances, food, craft, traditional dress, or a distinctly local community activity.", Special: "Educational programmes, school activity, or a chance to remember an important person or idea often take place." }
  } as const;
  return rhythm[language][record.kind];
}

export function fieldNote(record: FestivalRecord, language: Locale) {
  const key = record.id.replace(/^.*?-\d{4}-/, "");
  const notes: Record<string, Record<Locale, string>> = {
    diwali: { id: "Deepavali sering dikaitkan dengan cahaya, rumah yang dibersihkan, lampu kecil, doa, serta kunjungan keluarga. Di sejumlah wilayah, urutan dan nama harinya bisa berbeda.", en: "Deepavali is often associated with light, freshly prepared homes, small lamps, prayer, and family visits. The sequence and names of its days can differ by region." },
    holi: { id: "Di banyak tempat, Holi hadir lewat warna, musik, makanan, dan pertemuan terbuka. Beberapa komunitas memulainya dengan Holika Dahan pada malam sebelumnya.", en: "In many places, Holi arrives through colour, music, food, and open gatherings. Some communities begin with Holika Dahan on the preceding evening." },
    nyepi: { id: "Di Bali, Nyepi adalah hari hening yang berkaitan dengan Tahun Baru Saka. Kegiatannya dapat mencakup pembatasan perjalanan dan suasana yang jauh lebih tenang dari hari biasa.", en: "In Bali, Nyepi is a day of silence linked to the Saka New Year. It can involve travel restrictions and a noticeably quieter island than on an ordinary day." },
    "idul-fitri": { id: "Idul Fitri menandai berakhirnya Ramadan bagi banyak Muslim. Salat Id, silaturahmi, maaf-maafan, dan makanan keluarga sering menjadi bagian yang terasa dekat.", en: "Idul Fitri marks the end of Ramadan for many Muslims. Eid prayer, visiting, forgiveness, and family food are often central parts of the day." },
    christmas: { id: "Natal dirayakan secara beragam oleh komunitas Kristen. Ibadah, musik, makanan, dan pertemuan keluarga bisa menjadi bagian dari harinya.", en: "Christmas is observed in varied ways by Christian communities. Worship, music, food, and family time can all be part of the day." },
    independence: { id: "Hari kemerdekaan biasanya membawa upacara, bendera, cerita sejarah, serta kegiatan komunitas. Bentuk perayaannya dapat terasa sangat berbeda antara kota dan wilayah.", en: "Independence days often bring ceremonies, flags, history-sharing, and community activity. The way they feel can vary greatly between cities and regions." }
  };
  return notes[key]?.[language] || casualDescription(record, language);
}

export function celebrationVisual(record: FestivalRecord) {
  const id = record.id.toLowerCase();
  if (id.includes("diwali") || id.includes("deepavali")) return { src: "https://images.pexels.com/photos/13689170/pexels-photo-13689170.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: { id: "Susunan lampu tanah liat dan warna hangat sebagai visual koleksi", en: "Clay lamps and warm colour arranged as a collection visual" }, material: { id: "OBJEK ATLAS · LAMPU TANAH LIAT", en: "ATLAS OBJECT · CLAY LAMPS" } };
  if (id.includes("holi")) return { src: "/manus-storage/holi-colour-celebration_3b93b77c.jpg", alt: { id: "Perayaan Holi dengan warna dan kerumunan sebagai visual konteks", en: "Holi colour celebration and gathering as a contextual visual" }, material: { id: "OBJEK ATLAS · WARNA HOLI", en: "ATLAS OBJECT · HOLI COLOUR" } };
  if (id.includes("raksha")) return { src: "/manus-storage/raksha-bandhan-aarti-plate_e324a9ab.jpg", alt: { id: "Piring aarti Raksha Bandhan dengan benang rakhi dan lampu", en: "Raksha Bandhan aarti plate with rakhi thread and lamp" }, material: { id: "OBJEK ATLAS · BENANG RAKHI & PIRING AARTI", en: "ATLAS OBJECT · RAKHI THREAD & AARTI PLATE" } };
  if (id.includes("fitri") || id.includes("eid") || id.includes("adha") || id.includes("mawlid") || id.includes("muharram")) return { src: "https://images.pexels.com/photos/9127584/pexels-photo-9127584.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: { id: "Keluarga dan hidangan bersama sebagai visual koleksi", en: "Family and shared food as a collection visual" }, material: { id: "OBJEK ATLAS · HIDANGAN BERSAMA", en: "ATLAS OBJECT · SHARED TABLE" } };
  if (id.includes("nyepi") || id.includes("galungan") || id.includes("kuningan")) return { src: "https://images.pexels.com/photos/37526113/pexels-photo-37526113/free-photo-of-traditional-balinese-canang-sari-offerings.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: { id: "Rangkaian bunga dan bahan alami sebagai visual koleksi", en: "Flowers and natural materials arranged as a collection visual" }, material: { id: "OBJEK ATLAS · CANANG & BUNGA", en: "ATLAS OBJECT · CANANG & FLOWERS" } };
  if (record.kind === "National" || record.kind === "Special" || record.kind === "Cultural") return { src: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: { id: "Suasana kegiatan bersama sebagai visual koleksi", en: "A shared public moment as a collection visual" }, material: { id: "OBJEK ATLAS · PENANDA KOMUNITAS", en: "ATLAS OBJECT · COMMUNITY MARKER" } };
  if (record.kind === "Sikh" || record.kind === "Buddhist" || record.kind === "Jain" || record.kind === "Confucian") return { src: "https://images.pexels.com/photos/37526113/pexels-photo-37526113/free-photo-of-traditional-balinese-canang-sari-offerings.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: { id: "Bunga dan bahan alami sebagai visual koleksi", en: "Flowers and natural materials as a collection visual" }, material: { id: "OBJEK ATLAS · BUNGA & BAHAN ALAMI", en: "ATLAS OBJECT · FLOWERS & NATURAL MATERIALS" } };
  return { src: "https://images.pexels.com/photos/13689170/pexels-photo-13689170.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: { id: "Cahaya dan warna sebagai visual koleksi", en: "Light and colour as a collection visual" }, material: { id: "OBJEK ATLAS · CAHAYA & WARNA", en: "ATLAS OBJECT · LIGHT & COLOUR" } };
}
