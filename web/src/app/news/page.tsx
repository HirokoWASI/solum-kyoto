import Link from "next/link";
import { Placeholder } from "@/components/Placeholder";
import { Icon } from "@/components/PlaceholderIcons";
import { Eyebrow } from "@/components/Eyebrow";
import { NEWS } from "@/lib/news";
import { IMG } from "@/lib/assets";

// 11 ニュース / route: "/news"
export default function NewsPage() {
  const featured = NEWS[0];
  const rest = NEWS.slice(1);

  return (
    <>
      <section className="bg-warm-off pt-32 pb-16">
        <div className="max-w-content mx-auto px-5 md:px-10">
          <Eyebrow>ジャーナル</Eyebrow>
          <h1 className="mt-4 h-display text-5xl md:text-6xl">
            ニュース & <em className="h-latin not-italic">ストーリー</em>
          </h1>
        </div>
      </section>

      {/* 共通お知らせ */}
      <section className="max-w-content mx-auto px-5 md:px-10 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <Eyebrow>solmu kyoto — 全体のお知らせ</Eyebrow>
            <h2 className="mt-3 h-display text-2xl md:text-3xl">
              共通<em className="h-latin not-italic">お知らせ</em>
            </h2>
            <p className="mt-2 text-[11px] text-mid">台風・休業情報など両施設共通の情報はこちら</p>
          </div>
          <Link href="#" className="btn btn--ghost">すべて見る</Link>
        </div>

        <Link href={`/news/${featured.slug}`} className="grid lg:grid-cols-[2fr_1fr] gap-8 group">
          <Placeholder
            label={featured.title}
            ratio="3/2"
            variant={featured.variant}
            icon={<Icon.News />}
            src={IMG.news[featured.slug]}
          />
          <div className="flex flex-col gap-3">
            <span className="text-[10px] tracking-widest uppercase text-mid">{featured.tag}</span>
            <span className="h-latin text-sm text-mid">{featured.date}</span>
            <h3 className="h-display text-2xl md:text-3xl leading-snug group-hover:text-mid transition">
              {featured.title}
            </h3>
            <p className="text-[13px] text-mid leading-relaxed">{featured.excerpt}</p>
            <span className="mt-3 inline-flex btn btn--ghost self-start">続きを読む</span>
          </div>
        </Link>
      </section>

      {/* その他 */}
      <section className="bg-shironeri">
        <div className="max-w-content mx-auto px-5 md:px-10 py-20">
          <div className="grid md:grid-cols-3 gap-6">
            {rest.map((n) => (
              <Link key={n.slug} href={`/news/${n.slug}`} className="group bg-cream border border-light-line flex flex-col">
                <Placeholder label={n.title} ratio="3/2" variant={n.variant} icon={<Icon.News />} src={IMG.news[n.slug]} />
                <div className="p-5 flex flex-col gap-2">
                  <span className="text-[10px] tracking-widest uppercase text-mid">{n.tag}</span>
                  <span className="h-latin text-sm text-mid">{n.date}</span>
                  <h3 className="h-display text-lg leading-snug group-hover:text-mid transition">
                    {n.title}
                  </h3>
                  <p className="text-[13px] text-mid leading-relaxed mt-1">{n.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
