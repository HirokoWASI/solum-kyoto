// サイト全体で使う定数とナビゲーション定義
export const SITE = {
  brandJa: "solum kyoto",
  brandKana: "ソルム キョウト",
  brandLatin: "SOLUM KYOTO",
  tagline: "京都に潜む、静謐の旅",
  copyright: "© Imai Kensetsu Co., Ltd. All rights reserved.",
} as const;

export const PRIMARY_NAV = [
  { label: "コンセプト", labelEn: "Concept", href: "/about" },
  { label: "元悪王子", labelEn: "Moto-Akuoji", href: "/hotels/moto-akuoji" },
  { label: "仏光寺", labelEn: "Bukkoji", href: "/hotels/bukkoji" },
  { label: "客室", labelEn: "Rooms", href: "/rooms" },
  { label: "エリア", labelEn: "Area", href: "/area" },
  { label: "ニュース", labelEn: "News", href: "/news" },
  { label: "FAQ", labelEn: "FAQs", href: "/faqs" },
  { label: "アクセス", labelEn: "Access", href: "/access" },
] as const;

export const FOOTER_NAV = [
  {
    heading: "宿",
    items: [
      { label: "元悪王子", href: "/hotels/moto-akuoji" },
      { label: "仏光寺", href: "/hotels/bukkoji" },
      { label: "客室一覧", href: "/rooms" },
    ],
  },
  {
    heading: "ブランド",
    items: [
      { label: "コンセプト", href: "/about" },
      { label: "ニュース", href: "/news" },
      { label: "エリア情報", href: "/area" },
    ],
  },
  {
    heading: "ご利用案内",
    items: [
      { label: "FAQ", href: "/faqs" },
      { label: "アクセス", href: "/access" },
      { label: "特定商取引法に基づく表記", href: "#" },
      { label: "プライバシーポリシー", href: "#" },
    ],
  },
];

export const HOTELS = {
  moto: {
    slug: "moto-akuoji",
    name: "元悪王子",
    nameLatin: "Moto-Akuoji",
    tagline: "町家の静寂、土壁の温度",
    area: "下京区 元悪王子町",
    rooms: 6,
    palette: "earth" as const,
  },
  bukko: {
    slug: "bukkoji",
    name: "仏光寺",
    nameLatin: "Bukkoji",
    tagline: "茶庭の余白、千種色の朝",
    area: "下京区 仏光寺通",
    rooms: 8,
    palette: "chigusa" as const,
  },
};
