import Link from "next/link";
import { Placeholder } from "@/components/Placeholder";
import { Icon } from "@/components/PlaceholderIcons";
import { Eyebrow } from "@/components/Eyebrow";
import { ROOMS } from "@/lib/rooms";
import { IMG } from "@/lib/assets";

// 06 客室一覧 / route: "/rooms"
export default function RoomsPage() {
  const moto = ROOMS.filter((r) => r.hotel === "moto-akuoji");
  const bukko = ROOMS.filter((r) => r.hotel === "bukkoji");

  return (
    <>
      <section className="relative h-[40vh] min-h-[320px] overflow-hidden">
        <Placeholder label="HERO — 客室の静けさ" fill variant="charcoal" icon={<Icon.Room />} src={IMG.heroRooms} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/15 to-black/55" />
        <div className="relative z-10 h-full max-w-content mx-auto px-5 md:px-10 flex flex-col justify-end pb-16 text-cream">
          <Eyebrow tone="light">客室 & スイート</Eyebrow>
          <h1 className="mt-5 h-display text-4xl md:text-6xl">
            静けさの中で
            <br />
            <em className="h-latin not-italic">眠る場所。</em>
          </h1>
        </div>
      </section>

      {/* フィルタ */}
      <div className="border-b border-light-line bg-warm-off">
        <div className="max-w-content mx-auto px-5 md:px-10 py-5 flex gap-2 overflow-x-auto">
          {[
            { label: "すべて", active: true },
            { label: "moto-akuoji", sub: "(元悪王子)" },
            { label: "bukkoji", sub: "(仏光寺)" },
            { label: "スイート" },
          ].map((c) => (
            <button
              key={c.label}
              className={`whitespace-nowrap px-4 py-2 text-[12px] tracking-wider border transition ${
                c.active
                  ? "bg-charcoal text-cream border-charcoal"
                  : "bg-cream text-charcoal border-light-line hover:border-charcoal"
              }`}
            >
              {c.label}
              {c.sub && <span className="ml-1 text-mid">{c.sub}</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Moto セクション */}
      <RoomGroup
        eyebrow="moto-akuoji — 元悪王子"
        title={<>元悪王子の客室</>}
        rooms={moto}
        palette="earth"
      />

      {/* Bukko セクション */}
      <RoomGroup
        eyebrow="bukkoji — 仏光寺"
        title={
          <>
            <em className="h-latin not-italic text-chigusa-dark">仏光寺</em>の客室
          </>
        }
        rooms={bukko}
        palette="chigusa"
        tinted
      />
    </>
  );
}

function RoomGroup({
  eyebrow,
  title,
  rooms,
  palette,
  tinted,
}: {
  eyebrow: string;
  title: React.ReactNode;
  rooms: typeof ROOMS;
  palette: "earth" | "chigusa";
  tinted?: boolean;
}) {
  return (
    <section className={tinted ? "bg-chigusa-bg" : ""}>
      <div className="max-w-content mx-auto px-5 md:px-10 py-20 md:py-28">
        <Eyebrow tone={palette}>{eyebrow}</Eyebrow>
        <h2 className="mt-4 h-display text-3xl md:text-4xl">{title}</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {rooms.map((r) => (
            <Link
              key={r.slug}
              href={`/rooms/${r.slug}`}
              className="group bg-cream border border-light-line flex flex-col overflow-hidden"
            >
              <Placeholder label={`${r.name} — 客室画像`} ratio="3/2" variant={palette} icon={<Icon.Room />} src={IMG.rooms[r.slug]} />
              <div className="p-6 flex flex-col gap-3">
                <span className="text-[10px] tracking-[0.18em] uppercase text-mid">{r.categoryLabel}</span>
                <h3 className="h-display text-xl">{r.name}</h3>
                <p className="text-[13px] text-mid leading-relaxed">{r.body}</p>
                <div className="mt-3 pt-3 border-t border-light-line flex items-end justify-between">
                  <div>
                    <div className="h-display text-lg">{r.priceLabel}</div>
                    <div className="text-[11px] text-mid">{r.capacity}</div>
                  </div>
                  <span className="text-[11px] tracking-widest text-charcoal group-hover:text-mid">詳細を見る →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
