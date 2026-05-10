// 画像アセットの一元管理。
// public/images/ 配下に同名ファイルを置けば自動でサイトに反映される。
// 画像が無い間は Placeholder のグラデ + ラベルにフォールバックする。
//
// 命名規則：
//   /images/<section>/<purpose>.jpg
// セクション: hero / hotels / rooms / facilities / experiences / news / area
//
// すべて `.jpg` を想定（必要に応じて変換します）。

const dir = (p: string) => `/images/${p}`;

export const IMG = {
  /* ─── ヒーロー（ローテーション） ─── */
  heroHome: [
    { src: dir("hero/home-01.jpg"), alt: "京の路地、夜明けの光" },
    { src: dir("hero/home-02.jpg"), alt: "町家の縁側に注ぐ朝光" },
    { src: dir("hero/home-03.jpg"), alt: "夕暮れの石畳とカップル" },
    { src: dir("hero/home-04.jpg"), alt: "茶釜の湯気、静かな朝" },
    { src: dir("hero/home-05.jpg"), alt: "暖簾と灯り、宵の路地" },
  ],
  heroAbout: dir("hero/about.jpg"),
  heroMoto: dir("hero/moto-akuoji.jpg"),
  heroBukko: dir("hero/bukkoji.jpg"),
  heroRooms: dir("hero/rooms.jpg"),
  heroArea: dir("hero/area.jpg"),
  heroAccess: dir("hero/access.jpg"),
  heroNews: dir("hero/news.jpg"),
  heroFaqs: dir("hero/faqs.jpg"),

  /* ─── 特設の図解 ─── */
  accessRoutes: dir("hero/access-routes.jpg"), // 公式 4 ルート図
  areaMap: dir("area/area-map.jpg"),           // 公式エリアマップ

  /* ─── ホテル ─── */
  motoExterior: dir("hotels/moto-exterior.jpg"),
  motoLobby: dir("hotels/moto-lobby.jpg"),
  motoBento1: dir("hotels/moto-bento-1.jpg"),
  motoBento2: dir("hotels/moto-bento-2.jpg"),
  motoBento3: dir("hotels/moto-bento-3.jpg"),

  bukkoExterior: dir("hotels/bukko-exterior.jpg"),
  bukkoLobby: dir("hotels/bukko-lobby.jpg"),
  bukkoBento1: dir("hotels/bukko-bento-1.jpg"),
  bukkoBento2: dir("hotels/bukko-bento-2.jpg"),
  bukkoBento3: dir("hotels/bukko-bento-3.jpg"),

  /* ─── 客室（slug ベース） ─── */
  rooms: {
    "moto-superior": dir("rooms/moto-superior.jpg"),
    "moto-deluxe": dir("rooms/moto-deluxe.jpg"),
    "moto-suite": dir("rooms/moto-suite.jpg"),
    "bukko-superior": dir("rooms/bukko-superior.jpg"),
    "bukko-deluxe": dir("rooms/bukko-deluxe.jpg"),
    "bukko-suite": dir("rooms/bukko-suite.jpg"),
  } as Record<string, string>,

  /* ─── 施設（slug ベース） ─── */
  facilities: {
    "communal-bath": dir("facilities/communal-bath.jpg"),
    lounge: dir("facilities/lounge.jpg"),
    breakfast: dir("facilities/breakfast.jpg"),
    courtyard: dir("facilities/courtyard.jpg"),
    "bike-station": dir("facilities/bike-station.jpg"),
  } as Record<string, string>,

  /* ─── 体験 ─── */
  expPottery: dir("experiences/pottery.jpg"),
  expBike: dir("experiences/bike.jpg"),
  expBreakfast: dir("experiences/breakfast-seasonal.jpg"),
  expTempleWalk: dir("experiences/temple-walk.jpg"),
  expWeaving: dir("experiences/weaving.jpg"),
  expIndigo: dir("experiences/indigo-dye.jpg"),
  expConcierge: dir("experiences/concierge.jpg"),

  /* ─── ニュース ─── */
  news: {
    "shimogyo-winter-light": dir("news/winter-light.jpg"),
    "shimogyo-pottery-workshop": dir("news/pottery-workshop.jpg"),
    "bukkoji-bell": dir("news/bukkoji-bell.jpg"),
    "autumn-breakfast-2024": dir("news/autumn-breakfast.jpg"),
  } as Record<string, string>,

  /* ─── エリア ─── */
  areaNishiki: dir("area/nishiki.jpg"),
  areaYoshiquan: dir("area/yoshiquan.jpg"),
  areaKawai: dir("area/kawai.jpg"),
  areaBukkoji: dir("area/bukkoji-temple.jpg"),
  areaIppodo: dir("area/ippodo.jpg"),
  areaWeekenders: dir("area/weekenders.jpg"),
  areaRokkakudo: dir("area/rokkakudo.jpg"),
  areaTextile: dir("area/textile.jpg"),
  areaCraft: dir("area/craft-museum.jpg"),
};
