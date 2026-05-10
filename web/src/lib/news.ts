// ニュース記事データ。
export type News = {
  slug: string;
  tag: string;
  variant: "default" | "earth" | "chigusa" | "charcoal";
  date: string;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  body: { type: "p" | "quote" | "image"; text?: string; caption?: string; attribution?: string }[];
  tags: string[];
};

export const NEWS: News[] = [
  {
    slug: "shimogyo-winter-light",
    tag: "両ホテル",
    variant: "charcoal",
    date: "2024年12月",
    title: "下京の冬の光：四度の訪問で見えてきた街の素顔",
    excerpt:
      "季節は街の表情をがらりと変える。夏が見せてくれるもの——夕方6時の錦市場に伸びる長い影——を、冬はすっかり塗り替え、もっと静かな何かと入れ替えてしまう。",
    author: "solmu チーム",
    readTime: "約5分",
    tags: ["季節のストーリー", "下京区", "錦市場", "冬"],
    body: [
      {
        type: "p",
        text: "季節は街の表情をがらりと変える。夏が見せてくれるもの——夕方6時の錦市場に伸びる長い影——を、冬はすっかり塗り替え、もっと静かな何かと入れ替えてしまう。",
      },
      {
        type: "p",
        text: "12月の下京は、観光客がまだ眠っている朝7時が最も美しい。仏光寺の参道に差し込む朝の光は、夏とはまったく違う角度から石畳を照らし、影の輪郭を鋭く彫り込む。常連の豆腐屋は変わらず6時に店を開け、湯気とともに一日を始める。この光景は四季を通じて繰り返されるが、冬だけが持つ空気の澄み方がある。",
      },
      {
        type: "quote",
        text: "「この街を知るには、同じ場所に何度も来る必要がある。一度目は驚き、二度目は気づき、三度目は親しみ、四度目に初めてここが自分の街になる。」",
        attribution: "— solmu kyoto 開業の辞より",
      },
      {
        type: "p",
        text: "錦小路の市場は、冬になると生牡蠣と白味噌の季節を迎える。私たちが朝食のメニューを変えるのも、この変化に寄り添うためだ。地元の生産者から届く食材が変わると、ゲストへ伝える話も変わる。食卓が季節と街を繋ぐ場所になる。",
      },
      {
        type: "image",
        caption: "錦小路の朝、仕入れの風景。",
      },
      {
        type: "p",
        text: "solmu kyotoが「旅人と街を結ぶ縁の結び目」と名乗るのは、こういうことだ。ホテルがただの宿泊地ではなく、その街の四季の変わり目を感じる窓口になること。訪れるたびに違う顔を見せる街に、何度でも戻ってきてほしい。",
      },
    ],
  },
  {
    slug: "shimogyo-pottery-workshop",
    tag: "元悪王子",
    variant: "earth",
    date: "2024年11月",
    title: "下京の窯元との新たな陶芸ワークショップ提携、スタート",
    excerpt:
      "今冬より、元悪王子に滞在されるゲストは、ホテルから東へ2ブロックの地元の窯元での2時間セッションにご参加いただけます。",
    author: "solmu チーム",
    readTime: "約3分",
    tags: ["体験プログラム", "元悪王子", "陶芸"],
    body: [
      { type: "p", text: "今冬より、元悪王子に滞在されるゲストは、ホテルから東へ2ブロックの地元の窯元での2時間の朝のセッションにご参加いただけます。" },
      { type: "p", text: "この街で40年間土を捏ねてきた陶芸家との時間。完成した器は、後日、ご自宅へお送りいたします。" },
    ],
  },
  {
    slug: "bukkoji-bell",
    tag: "仏光寺",
    variant: "chigusa",
    date: "2024年10月",
    title: "仏光寺の鐘の音：住職との対話",
    excerpt:
      "毎朝5時、鐘の音から一日が始まる。四百年変わらぬその営みを知るため、仏光寺の住職とともに座りました。",
    author: "solmu チーム",
    readTime: "約4分",
    tags: ["仏光寺", "対話", "朝"],
    body: [
      { type: "p", text: "毎朝5時、鐘の音から一日が始まる。四百年変わらぬその営みを知るため、仏光寺の住職とともに座りました。" },
      { type: "p", text: "「鐘は街のものです」と住職は語ります。" },
    ],
  },
  {
    slug: "autumn-breakfast-2024",
    tag: "両ホテル",
    variant: "default",
    date: "2024年9月",
    title: "2024年秋の季節の朝食メニュー——錦市場の生産者から仕入れて",
    excerpt: "今シーズンのメニューは、松茸と京都の白味噌を使った新作デザートをご用意しています。",
    author: "solmu チーム",
    readTime: "約3分",
    tags: ["朝食", "錦市場", "秋"],
    body: [{ type: "p", text: "今シーズンのメニューは、松茸と京都の白味噌を使った新作デザートをご用意しています。" }],
  },
];

export function getNews(slug: string) {
  return NEWS.find((n) => n.slug === slug);
}
