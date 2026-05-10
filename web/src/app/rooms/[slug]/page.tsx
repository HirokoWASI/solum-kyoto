import Link from "next/link";
import { notFound } from "next/navigation";
import { Placeholder, Icon } from "@/components/Placeholder";
import { Eyebrow } from "@/components/Eyebrow";
import { ROOMS, getRoom } from "@/lib/rooms";

// 07 客室詳細 / route: "/rooms/[slug]"
export function generateStaticParams() {
  return ROOMS.map((r) => ({ slug: r.slug }));
}

export default async function RoomDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) notFound();

  const palette = room.hotel === "moto-akuoji" ? "earth" : "chigusa";
  const accentBg = palette === "earth" ? "bg-earth-bg" : "bg-chigusa-bg";
  const accentBorder = palette === "earth" ? "border-earth/40" : "border-chigusa/40";
  const accentDot = palette === "earth" ? "bg-earth" : "bg-chigusa";
  const others = ROOMS.filter((r) => r.hotel === room.hotel && r.slug !== room.slug);

  return (
    <>
      {/* インジケータ + パンくず */}
      <div className="pt-20 border-b border-light-line">
        <div className="max-w-content mx-auto px-5 md:px-10 py-3 text-[11px] text-mid">
          <nav className="flex items-center gap-2 flex-wrap">
            <Link href="/">ホーム</Link>
            <span>›</span>
            <Link href={`/hotels/${room.hotel}`}>{room.hotelName}</Link>
            <span>›</span>
            <Link href="/rooms">客室</Link>
            <span>›</span>
            <span className="text-charcoal">{room.name}</span>
          </nav>
        </div>
      </div>

      {/* ヒーロー */}
      <section className="relative h-[60vh] min-h-[460px] overflow-hidden">
        <Placeholder label={`${room.name} — 客室画像カルーセル`} fill variant={palette} icon={<Icon.Room />} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/65" />
        <div className="relative z-10 h-full max-w-content mx-auto px-5 md:px-10 flex flex-col justify-end pb-16 text-cream">
          <span className="self-start text-[10px] tracking-[0.18em] uppercase bg-cream text-charcoal px-3 py-1">
            {room.categoryLabel}
          </span>
          <h1 className="mt-5 h-display text-5xl md:text-6xl">{room.name}</h1>
          <span className="mt-1 text-sm text-cream/75">
            {room.hotelName} · {room.hotel === "moto-akuoji" ? "下京区" : "中京区"}
          </span>
        </div>

        {/* カルーセル制御 */}
        <div className="absolute z-10 left-1/2 -translate-x-1/2 bottom-4 flex gap-2">
          <span className="w-8 h-[3px] bg-cream rounded" />
          <span className="w-2 h-[3px] bg-cream/40 rounded" />
          <span className="w-2 h-[3px] bg-cream/40 rounded" />
        </div>
      </section>

      {/* スペックバー */}
      <section className="bg-shironeri border-y border-light-line">
        <div className="max-w-content mx-auto px-5 md:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { l: "客室面積", v: room.size },
            { l: "定員", v: room.capacity },
            { l: "部屋", v: room.view },
            { l: "浴室", v: room.bath },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-[10px] tracking-widest uppercase text-mid">{s.l}</div>
              <div className="mt-1 h-display text-xl">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 説明 + サイドバー */}
      <section className={`${accentBg}`}>
        <div className="max-w-content mx-auto px-5 md:px-10 py-24 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <Eyebrow tone={palette}>客室の説明</Eyebrow>
              <h2 className="mt-4 h-display text-3xl md:text-4xl leading-tight">
                この宿泊は、
                <br />
                <em className="h-latin not-italic">ずっと心に残る。</em>
              </h2>
            </div>
            <div className="space-y-5 text-[14px] md:text-[15px] text-mid leading-relaxed">
              {room.longBody.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3">
              {["客室画像", "浴室", "居室"].map((l) => (
                <Placeholder key={l} label={l} ratio="4/5" variant={palette} icon={<Icon.Room />} />
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <div>
              <div className="eyebrow !text-[10px]">間取り図</div>
              <Placeholder label="間取り図" ratio="4/5" variant="charcoal" className="mt-3" icon={<Icon.Map />} />
            </div>

            <div className={`bg-cream border ${accentBorder} p-6`}>
              <div className="eyebrow !text-[10px] mb-4">アメニティ</div>
              <ul className="space-y-3">
                {room.amenities.map((a) => (
                  <li key={a} className="flex items-start gap-3">
                    <span className={`mt-2 w-1.5 h-1.5 rounded-full ${accentDot}`} />
                    <span className="text-[13px]">{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`p-6 border ${accentBorder} ${accentBg}`}>
              <p className="text-[13px] leading-relaxed text-mid">
                ご予約・お問い合わせは
                <br />
                各ホテルページよりご連絡ください。
              </p>
              <Link href={`/hotels/${room.hotel}`} className="btn btn--ghost mt-4 self-start">
                {room.hotel} ホテルページへ
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* 同じホテルの他の客室 */}
      {others.length > 0 && (
        <section className="max-w-content mx-auto px-5 md:px-10 py-24">
          <Eyebrow tone={palette}>{room.hotel} — その他の客室</Eyebrow>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {others.map((r) => (
              <Link key={r.slug} href={`/rooms/${r.slug}`} className="group flex gap-4 bg-cream border border-light-line p-4">
                <div className="w-32 h-24 shrink-0">
                  <Placeholder label={r.name} ratio="4/3" variant={palette} icon={<Icon.Room />} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-widest uppercase text-mid">{r.categoryLabel}</span>
                  <span className="mt-1 h-display text-lg">{r.name}</span>
                  <span className="mt-2 text-[11px] tracking-widest text-charcoal group-hover:text-mid">
                    客室を見る →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
