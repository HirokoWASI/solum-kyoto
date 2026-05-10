import Link from "next/link";
import { notFound } from "next/navigation";
import { Placeholder, Icon } from "@/components/Placeholder";
import { Eyebrow } from "@/components/Eyebrow";
import { NEWS, getNews } from "@/lib/news";

// 12 記事詳細 / route: "/news/[slug]"
export function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export default async function NewsDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getNews(slug);
  if (!article) notFound();
  const related = NEWS.filter((n) => n.slug !== article.slug).slice(0, 3);

  return (
    <>
      <section className="bg-warm-off pt-32 pb-12">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <div className="flex items-center gap-3 text-[11px] text-mid">
            <span className="px-2 py-1 bg-charcoal text-cream tracking-widest">{article.tag}</span>
            <span>{article.date}</span>
          </div>
          <h1 className="mt-6 h-display text-3xl md:text-5xl leading-tight">{article.title}</h1>
          <div className="mt-6 flex gap-5 text-[12px] text-mid">
            <span>執筆：{article.author}</span>
            <span>読了時間：{article.readTime}</span>
          </div>
        </div>
      </section>

      <section>
        <Placeholder label="記事メイン画像" variant="charcoal" className="!aspect-[21/9] !static" icon={<Icon.Camera />} />
      </section>

      <section className="max-w-content mx-auto px-5 md:px-10 py-20 grid lg:grid-cols-[2fr_1fr] gap-12">
        <article className="prose-content space-y-7 text-[15px] md:text-[16px] leading-[1.95] text-charcoal/90">
          {article.body.map((block, i) => {
            if (block.type === "p") return <p key={i}>{block.text}</p>;
            if (block.type === "quote")
              return (
                <blockquote
                  key={i}
                  className="border-l-2 border-earth pl-6 py-2 my-8 h-display text-xl md:text-2xl leading-relaxed"
                >
                  {block.text}
                  {block.attribution && <div className="mt-3 text-sm text-mid">{block.attribution}</div>}
                </blockquote>
              );
            if (block.type === "image")
              return (
                <figure key={i} className="my-8">
                  <Placeholder label="記事画像" ratio="3/2" variant="earth" icon={<Icon.Camera />} />
                  {block.caption && <figcaption className="mt-3 text-[12px] text-mid">{block.caption}</figcaption>}
                </figure>
              );
            return null;
          })}
        </article>

        <aside className="flex flex-col gap-6">
          <div className="bg-cream border border-light-line p-5">
            <div className="eyebrow !text-[10px]">この記事について</div>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-14 h-14 rounded-full ph" />
              <div>
                <div className="text-sm font-medium">{article.author}</div>
                <div className="text-[11px] text-mid">京都・下京区から、街とゲストを繋ぐ物語をお届けします。</div>
              </div>
            </div>
          </div>

          <div className="bg-cream border border-light-line p-5">
            <div className="eyebrow !text-[10px] mb-3">タグ</div>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((t) => (
                <span key={t} className="text-[11px] border border-light-line px-2.5 py-1">{t}</span>
              ))}
            </div>
          </div>

          <div className="bg-cream border border-light-line p-5">
            <div className="eyebrow !text-[10px] mb-3">関連記事</div>
            <ul className="space-y-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/news/${r.slug}`} className="flex gap-3 items-start group">
                    <div className="w-16 h-16 shrink-0">
                      <Placeholder label={r.title} ratio="1/1" variant={r.variant} className="!aspect-square" icon={<Icon.News />} />
                    </div>
                    <div className="flex-1">
                      <div className="h-latin text-xs text-mid">{r.date}</div>
                      <div className="text-[12px] leading-relaxed group-hover:text-mid transition">{r.title}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-charcoal text-cream p-6">
            <div className="eyebrow !text-cream/70 !text-[10px]">この街に泊まる</div>
            <p className="mt-3 h-display text-lg leading-snug">
              記事の中の景色を、
              <br />
              実際に体験してみませんか。
            </p>
            <Link href="/rooms" className="btn btn--solid !bg-cream !text-charcoal !border-cream mt-5">
              客室を予約する
            </Link>
          </div>
        </aside>
      </section>

      {/* もっと読む */}
      <section className="bg-shironeri">
        <div className="max-w-content mx-auto px-5 md:px-10 py-20">
          <Eyebrow>もっと読む</Eyebrow>
          <h2 className="mt-3 h-display text-2xl md:text-3xl">他の記事</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.slug} href={`/news/${r.slug}`} className="group">
                <Placeholder label={r.title} ratio="3/2" variant={r.variant} icon={<Icon.News />} />
                <div className="mt-4 flex flex-col gap-2">
                  <span className="text-[10px] tracking-widest uppercase text-mid">{r.tag}</span>
                  <span className="h-latin text-xs text-mid">{r.date}</span>
                  <h3 className="text-base font-medium leading-snug group-hover:text-mid transition">{r.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
