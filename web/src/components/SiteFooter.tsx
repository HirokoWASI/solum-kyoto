import Link from "next/link";
import { FOOTER_NAV, SITE } from "@/lib/site";

// グローバルフッタ。サイト全体の導線とブランド情報。
export function SiteFooter() {
  return (
    <footer className="mt-32 bg-charcoal text-cream">
      <div className="max-w-content mx-auto px-5 md:px-10 py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="font-serif text-2xl tracking-[0.18em]">{SITE.brandJa}</div>
          <div className="h-latin text-sm text-cream/60 mt-1">{SITE.brandLatin}</div>
          <p className="mt-6 text-[13px] text-cream/70 leading-relaxed max-w-sm">
            京都・下京に点在する小さな宿。
            町家と路地のかたちを残し、暮らすように泊まる、静かな滞在を。
          </p>

          <div className="mt-8 flex gap-3">
            {["IG", "FB", "X"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="w-10 h-10 grid place-items-center border border-cream/20 hover:border-cream/60 transition"
              >
                <span className="h-latin text-[11px]">{s}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {FOOTER_NAV.map((col) => (
            <div key={col.heading}>
              <div className="eyebrow !text-cream/70 !text-[10px]">{col.heading}</div>
              <ul className="mt-4 space-y-3">
                {col.items.map((it) => (
                  <li key={it.label}>
                    <Link href={it.href} className="text-[13px] text-cream/85 hover:text-cream transition">
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-content mx-auto px-5 md:px-10 py-6 flex flex-col md:flex-row gap-3 justify-between text-[11px] text-cream/55">
          <div>{SITE.copyright}</div>
          <div className="flex gap-5">
            <span>運営：今井建設株式会社</span>
            <span>京都府京都市下京区</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
