"use client";

import { useState } from "react";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

// 13 よくある質問 / route: "/faqs"
const GROUPS = [
  {
    heading: "ご予約",
    items: [
      {
        q: "ご予約はどのようにすればよいですか？",
        a: "ご予約は当ウェブサイト、メール、またはお電話にて直接承っております。直接ご予約いただくことで、ご来訪の準備を適切に整え、最適な客室をご用意することができます。",
      },
      {
        q: "キャンセルポリシーについて教えてください。",
        a: "宿泊日の14日前まで無料でキャンセル可能です。それ以降は所定のキャンセル料を申し受けます。詳細はご予約時にご案内いたします。",
      },
      {
        q: "アーリーチェックインやレイトチェックアウトは可能ですか？",
        a: "空き状況により対応可能です。事前にお問い合わせください。スタンダードはチェックイン15:00、チェックアウト11:00です。",
      },
    ],
  },
  {
    heading: "ご滞在",
    items: [
      {
        q: "チェックインとチェックアウトの時間は何時ですか？",
        a: "チェックインは15:00より、チェックアウトは11:00までとなります。レイトチェックアウトをご希望の場合は事前にご連絡ください。空き状況に応じてできる限り対応いたします。",
      },
      {
        q: "solum kyotoではペットを連れて宿泊できますか？",
        a: "申し訳ございませんが、ペット同伴のご宿泊はお断りしております。盲導犬・介助犬につきましては事前にご相談ください。",
      },
      {
        q: "館内全体でWi-Fiは利用できますか？",
        a: "全客室・共用エリアで高速Wi-Fiを無料でご利用いただけます。パスワードはチェックイン時にお渡しします。",
      },
    ],
  },
  {
    heading: "アクセス",
    items: [
      {
        q: "京都駅から元悪王子へはどのように行けばよいですか？",
        a: "京都駅から烏丸線で約10分、五条駅下車徒歩約8〜10分。タクシーをご利用の場合は約10分、料金の目安は1,200円程度です。",
      },
      {
        q: "二つの施設はどのくらい離れていますか？",
        a: "元悪王子と仏光寺は徒歩約7分の距離です。両施設の行き来は、自転車レンタルもご活用いただけます。",
      },
    ],
  },
];

export default function FAQsPage() {
  return (
    <>
      <section className="bg-warm-off pt-32 pb-16">
        <div className="max-w-content mx-auto px-5 md:px-10">
          <Eyebrow>サポート</Eyebrow>
          <h1 className="mt-4 h-display text-5xl md:text-6xl">
            よく寄せられる
            <br />
            <em className="h-latin not-italic">ご質問</em>
          </h1>
        </div>
      </section>

      <section className="max-w-content mx-auto px-5 md:px-10 py-20 grid lg:grid-cols-[2fr_1fr] gap-12">
        <div className="flex flex-col gap-12">
          {GROUPS.map((g) => (
            <FaqGroup key={g.heading} group={g} />
          ))}
        </div>

        <aside className="flex flex-col gap-5 lg:sticky lg:top-24 self-start">
          <div className="bg-cream border border-light-line p-6 shadow-sm">
            <h3 className="h-display text-xl">他にご質問がありますか？</h3>
            <p className="mt-3 text-[13px] text-mid leading-relaxed">
              チームは毎日9:00〜20:00（日本標準時）に対応しております。お問い合わせには数時間以内にご返信いたします。
            </p>
            <a href="#contact" className="btn btn--solid mt-5 self-start">お問い合わせ</a>
            <a href="mailto:info@example.com" className="btn btn--ghost mt-3 self-start">
              info@solum-kyoto.jp
            </a>
          </div>

          <div className="bg-warm-off p-6">
            <div className="eyebrow !text-[10px] mb-4">クイックリンク</div>
            <ul className="space-y-3 text-[13px]">
              <li><Link href="/access" className="hover:text-mid">アクセス・道順 →</Link></li>
              <li><a href="#" className="hover:text-mid">キャンセルポリシー →</a></li>
              <li><Link href="/rooms" className="hover:text-mid">客室を予約 →</Link></li>
              <li><Link href="/area" className="hover:text-mid">エリアガイド →</Link></li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}

function FaqGroup({ group }: { group: (typeof GROUPS)[number] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section>
      <Eyebrow>{group.heading}</Eyebrow>
      <ul className="mt-5 divide-y divide-light-line border-y border-light-line">
        {group.items.map((it, i) => (
          <li key={it.q}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left py-6 flex items-start justify-between gap-6"
            >
              <span className="text-[15px] font-medium pr-4">{it.q}</span>
              <span className={`shrink-0 mt-1 text-xl transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
            </button>
            {open === i && (
              <p className="pb-6 pr-10 text-[13px] text-mid leading-relaxed">{it.a}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
