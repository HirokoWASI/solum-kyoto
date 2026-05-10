import Link from "next/link";
import { notFound } from "next/navigation";
import { Placeholder, Icon } from "@/components/Placeholder";
import { Eyebrow } from "@/components/Eyebrow";
import { FACILITIES, getFacility } from "@/lib/facilities";

// 09 施設詳細 / route: "/facilities/[slug]"
export function generateStaticParams() {
  return FACILITIES.map((f) => ({ slug: f.slug }));
}

export default async function FacilityDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = getFacility(slug);
  if (!f) notFound();

  const palette = f.hotel === "moto-akuoji" ? "earth" : "chigusa";
  const accentBg = palette === "earth" ? "bg-earth-bg" : "bg-chigusa-bg";
  const accentBorder = palette === "earth" ? "border-earth/40" : "border-chigusa/40";
  const accentDot = palette === "earth" ? "bg-earth" : "bg-chigusa";
  const accentBtn = palette === "earth" ? "btn--earth" : "btn--chigusa";
  const others = FACILITIES.filter((x) => x.hotel === f.hotel && x.slug !== f.slug);

  return (
    <>
      <div className="pt-20 border-b border-light-line">
        <div className="max-w-content mx-auto px-5 md:px-10 py-3 text-[11px] text-mid">
          <nav className="flex items-center gap-2 flex-wrap">
            <Link href="/">ホーム</Link>
            <span>›</span>
            <Link href={`/hotels/${f.hotel}`}>{f.hotelName}</Link>
            <span>›</span>
            <span>施設・サービス</span>
            <span>›</span>
            <span className="text-charcoal">{f.name}</span>
          </nav>
        </div>
      </div>

      <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <Placeholder label={`${f.name} — 施設ヒーロー / ギャラリー`} fill variant={palette} icon={<Icon.Tea />} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/60" />
        <div className="relative z-10 h-full max-w-content mx-auto px-5 md:px-10 flex flex-col justify-end pb-14 text-cream">
          <span className="self-start text-[10px] tracking-widest uppercase bg-cream text-charcoal px-3 py-1">
            {f.category}
          </span>
          <h1 className="mt-5 h-display text-5xl md:text-6xl">{f.name}</h1>
          <span className="mt-1 text-sm text-cream/80">{f.hotel}</span>
        </div>
      </section>

      <section className={accentBg}>
        <div className="max-w-content mx-auto px-5 md:px-10 py-24 grid lg:grid-cols-[1.8fr_1fr] gap-12">
          <div className="flex flex-col gap-8">
            <div>
              <Eyebrow tone={palette}>この施設について</Eyebrow>
              <h2 className="mt-4 h-display text-3xl md:text-4xl leading-tight">
                {f.tagline.includes("、") ? (
                  <>
                    {f.tagline.split("、")[0]}、
                    <br />
                    <em className="h-latin not-italic">{f.tagline.split("、").slice(1).join("、")}</em>
                  </>
                ) : (
                  f.tagline
                )}
              </h2>
            </div>
            <div className="space-y-5 text-[14px] md:text-[15px] text-mid leading-relaxed">
              {f.longBody.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <Placeholder key={i} label={`施設画像 ${i}`} ratio="4/5" variant={palette} icon={<Icon.Tea />} />
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-5">
            <div className={`bg-shironeri border ${accentBorder} p-6`}>
              <div className="eyebrow !text-[10px] mb-4">施設情報</div>
              {[
                { l: "営業時間", v: f.hours },
                { l: "ロケーション", v: f.location },
                { l: "定員", v: f.capacity },
              ].map((r) => (
                <div key={r.l} className="flex items-start gap-3 border-b border-light-line/70 py-3 last:border-none">
                  <span className={`mt-2 w-1.5 h-1.5 rounded-full ${accentDot}`} />
                  <div>
                    <div className="text-[12px] font-medium">{r.l}</div>
                    <div className="text-[12px] text-mid">{r.v}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`${accentBg} border ${accentBorder} p-6`}>
              <p className="text-[13px] leading-relaxed text-mid">
                全ゲストにご利用いただけます。フロントまたは客室内タブレットからご予約ください。
              </p>
              <Link href="/access" className={`btn ${accentBtn} mt-4 self-start`}>
                アクセスを確認
              </Link>
            </div>

            <div className={`bg-cream border ${accentBorder} p-6`}>
              <div className="eyebrow !text-[10px] mb-4">含まれるもの</div>
              <ul className="space-y-3">
                {f.included.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <span className={`mt-2 w-1.5 h-1.5 rounded-full ${accentDot}`} />
                    <span className="text-[13px]">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* ワイドベントー */}
      <section className="max-w-content mx-auto px-5 md:px-10 pb-20">
        <div className="grid grid-cols-3 gap-2 h-[360px]">
          <Placeholder label="ワイド施設画像" variant={palette} fill className="!relative col-span-2 row-span-2" icon={<Icon.Tea />} />
          <Placeholder label="詳細画像" variant="charcoal" fill className="!relative" icon={<Icon.Camera />} />
          <Placeholder label="詳細画像" variant={palette} fill className="!relative" icon={<Icon.Garden />} />
        </div>
      </section>

      {others.length > 0 && (
        <section className="bg-shironeri">
          <div className="max-w-content mx-auto px-5 md:px-10 py-24">
            <Eyebrow tone={palette}>{f.hotelName}のその他の施設</Eyebrow>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/facilities/${o.slug}`}
                  className="group bg-cream border border-light-line p-6 flex flex-col gap-3"
                >
                  <Placeholder label={o.name} ratio="3/2" variant={palette} icon={<Icon.Tea />} />
                  <span className="text-[10px] tracking-widest uppercase text-mid">{o.category}</span>
                  <h3 className="h-display text-lg">{o.name}</h3>
                  <span className="text-[13px] text-mid">{o.tagline}</span>
                  <span className="mt-2 self-start text-[11px] tracking-widest text-charcoal group-hover:text-mid">
                    詳細を見る →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
