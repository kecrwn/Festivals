/** The error route uses the same calm field-atlas language as the rest of KA Festivals, rather than a generic application card. */
import { ArrowLeft, Compass } from "lucide-react";
import { Link } from "wouter";
import { useLocale } from "@/contexts/LocaleContext";
import { usePageMeta } from "@/hooks/usePageMeta";

const words = { id: { eyebrow:"Catatan tidak ditemukan", title:"Halaman ini tidak ada di rute atlas.", body:"Tautan mungkin sudah berubah. Kamu dapat kembali ke pendamping hari ini atau membuka indeks budaya.", home:"Kembali ke hari ini", index:"Buka indeks", metaTitle:"Halaman tidak ditemukan", metaDescription:"Halaman yang diminta tidak ditemukan di KA Festivals." }, en: { eyebrow:"Note not found", title:"This page is not on the atlas route.", body:"The link may have changed. Return to today’s companion or open the cultural index.", home:"Back to today", index:"Open index", metaTitle:"Page not found", metaDescription:"The requested page could not be found on KA Festivals." } };
export default function NotFound() { const { language } = useLocale(); const t = words[language]; usePageMeta(t.metaTitle, t.metaDescription); return <section className="not-found"><span className="eyebrow"><Compass size={14}/>{t.eyebrow}</span><h1>{t.title}</h1><p>{t.body}</p><div><Link href="/"><ArrowLeft size={16}/>{t.home}</Link><Link href="/explore">{t.index}</Link></div></section>; }
