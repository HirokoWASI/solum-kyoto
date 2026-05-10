// 施設データ。/facilities/[slug] が静的生成する。
export type Facility = {
  slug: string;
  hotel: "moto-akuoji" | "bukkoji";
  hotelName: string;
  category: string;
  name: string;
  tagline: string;
  longBody: string[];
  hours: string;
  location: string;
  capacity: string;
  included: string[];
};

export const FACILITIES: Facility[] = [
  {
    slug: "communal-bath",
    hotel: "moto-akuoji",
    hotelName: "元悪王子",
    category: "ホテルの特徴",
    name: "共同浴室",
    tagline: "時を緩める、お風呂という名の場所。",
    longBody: [
      "元悪王子の共同浴室は、建物の地下にある深井戸の水を使用しています——元の町家が頼っていたのと同じ水源です。浴室には下京の窯元の手釉タイルが張られ、ヒノキのベンチと、空の四角い切り取りだけが見える小さな庭窓があります。",
      "ご利用は時間制——朝または夜の2時間制でご予約いただけます。タオル、浴衣、ヒノキの香り石鹸をご用意しています。携帯電話はご遠慮ください。",
    ],
    hours: "06:00–09:00 · 18:00–22:00",
    location: "地下1階（B1）",
    capacity: "1枠最大4名様まで",
    included: ["タオル & 浴衣", "ヒノキの香り石鹸", "入浴後の冷水", "スキンケアアメニティ"],
  },
  {
    slug: "lounge",
    hotel: "moto-akuoji",
    hotelName: "元悪王子",
    category: "共有スペース",
    name: "ラウンジ & ライブラリー",
    tagline: "町家の座敷で、本を一冊。",
    longBody: [
      "町家の座敷を模した低い家具のラウンジ。終日ご利用可能。自然光、手編みのラグ、地元の窯元の酒器が、ゲストを静かに迎えます。",
      "ライブラリーには京都にまつわる本、町家の意匠集、そして地元アーティストの作品集が並びます。",
    ],
    hours: "終日",
    location: "1階",
    capacity: "ゲスト共有",
    included: ["コーヒー & 煎茶", "選書ライブラリー", "地元の窯元の酒器", "手編みのラグ"],
  },
  {
    slug: "breakfast",
    hotel: "moto-akuoji",
    hotelName: "元悪王子",
    category: "ダイニング",
    name: "朝食ルーム",
    tagline: "錦市場の朝が、食卓に届く。",
    longBody: [
      "開業以来お付き合いの続く錦市場の生産者から仕入れた食材で、毎朝丁寧に仕立てます。1階ダイニングにて7:30よりご提供。",
      "季節ごとに変わるメニューは、その日の朝、市場で出会った素材で決まります。",
    ],
    hours: "07:30–10:00",
    location: "1階ダイニング",
    capacity: "宿泊ゲスト",
    included: ["季節の和朝食", "錦市場の食材", "煎茶 / 珈琲", "和菓子"],
  },
  {
    slug: "courtyard",
    hotel: "bukkoji",
    hotelName: "仏光寺",
    category: "共有スペース",
    name: "中庭",
    tagline: "石庭の余白、街が目覚める前。",
    longBody: [
      "建物の中心に佇む小さな石庭。季節の緑が彩り、夜明けからゲストに開放されます。街が目覚める前の、静かなひととき。",
      "苔と砂利、そして三本の楓。",
    ],
    hours: "終日",
    location: "中央吹き抜け",
    capacity: "ゲスト共有",
    included: ["眺望のためのベンチ", "朝の煎茶サービス（季節限定）"],
  },
  {
    slug: "bike-station",
    hotel: "bukkoji",
    hotelName: "仏光寺",
    category: "レンタル",
    name: "自転車ステーション",
    tagline: "毎朝、新しいルートカードを。",
    longBody: [
      "毎朝シティバイクをご用意。仏光寺の参道、錦市場、川沿いの道など、スタッフおすすめのルートカード付き。",
      "スタッフ自身も通うコーヒースポット立ち寄りルートもあります。",
    ],
    hours: "07:00–19:00",
    location: "エントランス左",
    capacity: "8台",
    included: ["シティバイク", "印刷済みルートカード", "ヘルメット", "鍵 & 雨具"],
  },
];

export function getFacility(slug: string) {
  return FACILITIES.find((f) => f.slug === slug);
}
