// 客室データ。/rooms と /rooms/[slug] が共通で参照する。
export type Room = {
  slug: string;
  hotel: "moto-akuoji" | "bukkoji";
  hotelName: string;
  category: "superior" | "deluxe" | "suite";
  categoryLabel: string;
  name: string;
  body: string;
  longBody: string[];
  priceLabel: string;
  capacity: string;
  size: string;
  view: string;
  bath: string;
  amenities: string[];
};

export const ROOMS: Room[] = [
  {
    slug: "moto-superior",
    hotel: "moto-akuoji",
    hotelName: "元悪王子",
    category: "superior",
    categoryLabel: "スペリオールルーム",
    name: "町家スペリオール",
    body: "温かなアーストーン、天然木、そして庭の眺め。元悪王子体験への入口となる客室。",
    longBody: [
      "町家スペリオールは、元悪王子の世界観への入口。低い障子越しに庭の緑が映り込み、朝の光がゆっくりと部屋を満たしていきます。",
      "テキスタイルは、路地を三軒先の織物工房から仕入れたもの。",
    ],
    priceLabel: "¥ —— ,000 /泊",
    capacity: "最大2名",
    size: "32 ㎡",
    view: "町家中庭",
    bath: "シャワーブース",
    amenities: ["天然木の家具", "和紙照明", "アースカラー", "中庭ビュー"],
  },
  {
    slug: "moto-deluxe",
    hotel: "moto-akuoji",
    hotelName: "元悪王子",
    category: "deluxe",
    categoryLabel: "デラックスルーム",
    name: "アース デラックス",
    body: "隣の織物工房から仕入れた手織りテキスタイルに囲まれた、広々としたリビングスペース。",
    longBody: [
      "ベッドエリアと低座リビングを緩やかに区切った広めのレイアウト。職人の手織りテキスタイルが空間を縁取ります。",
      "東向きの窓からは朝日が射し、夕方には路地の灯りが優しく揺れます。",
    ],
    priceLabel: "¥ —— ,000 /泊",
    capacity: "最大2名",
    size: "42 ㎡",
    view: "路地ビュー",
    bath: "深い檜の浴槽",
    amenities: ["手織りテキスタイル", "間接照明", "低座リビング", "下京の窯元の酒器"],
  },
  {
    slug: "moto-suite",
    hotel: "moto-akuoji",
    hotelName: "元悪王子",
    category: "suite",
    categoryLabel: "スイート",
    name: "町家スイート",
    body: "個室の座敷と厳選された職人の工芸品が揃う、町家インスパイアの本格的な客室。",
    longBody: [
      "町家スイートは、元悪王子が目指した姿の最も完成された形です。低いテーブルを囲む個室の居間、中庭を望む寝室、そして満たすのに20分かかる深い桧の浴槽。ゲストはいつも、思っていたより長くその中に留まります。",
      "ベッドとクッションのテキスタイルは、路地を三軒先の織物工房から仕入れています——開業以来ずっとホテルに納めてくれている工房です。棚の陶器の酒器は、下京の窯元で焼かれたもの。",
    ],
    priceLabel: "¥ ——— ,000 /泊",
    capacity: "最大2名",
    size: "52 ㎡",
    view: "中庭ビュー",
    bath: "プライベート桧温泉",
    amenities: ["プライベート桧風呂", "独立した居室", "中庭の眺め", "職人のテキスタイル & 陶器セット"],
  },
  {
    slug: "bukko-superior",
    hotel: "bukkoji",
    hotelName: "仏光寺",
    category: "superior",
    categoryLabel: "スペリオールルーム",
    name: "千草スペリオール",
    body: "セージトーンの壁と手染めのテキスタイルアクセント。仏光寺の世界への入口となる客室。",
    longBody: [
      "千草色の壁が、光をやわらかく抱きこむ部屋。窓の外には、目覚める前の街の静けさが広がります。",
      "テキスタイルは、当ホテルの浴衣も染める中京の藍染め工房によるもの。",
    ],
    priceLabel: "¥ —— ,000 /泊",
    capacity: "最大2名",
    size: "30 ㎡",
    view: "路地ビュー",
    bath: "シャワーブース",
    amenities: ["千草色の壁", "藍染めテキスタイル", "和紙照明", "陶器のタイル"],
  },
  {
    slug: "bukko-deluxe",
    hotel: "bukkoji",
    hotelName: "仏光寺",
    category: "deluxe",
    categoryLabel: "デラックスルーム",
    name: "セージ デラックス",
    body: "和紙の天井パネルと仏光寺の屋根を望む眺め。ゆとりある空間。",
    longBody: [
      "和紙の天井パネルが光を拡散させ、空間に淡い陰影をつくります。仏光寺の瓦屋根を借景に、夕暮れの鐘の音までも部屋の一部となります。",
    ],
    priceLabel: "¥ —— ,000 /泊",
    capacity: "最大2名",
    size: "40 ㎡",
    view: "仏光寺ビュー",
    bath: "深い檜の浴槽",
    amenities: ["和紙天井", "仏光寺の屋根を望む", "藍染め浴衣", "千草色のしつらえ"],
  },
  {
    slug: "bukko-suite",
    hotel: "bukkoji",
    hotelName: "仏光寺",
    category: "suite",
    categoryLabel: "スイート",
    name: "千草スイート",
    body: "窯焼きの陶器の意匠と中庭を望むプライベートラウンジを備えた、本格スイート。",
    longBody: [
      "中庭を望むプライベートラウンジを備えた、本格的なスイート。窯焼きの陶器のタイルが空間に質感を与え、ベッドサイドには中京の作家による一輪挿しを。",
      "夜には、坪庭の灯りが障子越しに揺れます。",
    ],
    priceLabel: "¥ ——— ,000 /泊",
    capacity: "最大2名",
    size: "55 ㎡",
    view: "中庭ビュー",
    bath: "プライベート檜温泉",
    amenities: ["プライベート坪庭", "窯焼きの陶器タイル", "和紙天井", "陶器の茶器セット"],
  },
];

export function getRoom(slug: string) {
  return ROOMS.find((r) => r.slug === slug);
}
