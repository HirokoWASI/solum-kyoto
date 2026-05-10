# public/images/ — 画像アセット投入先

このフォルダ配下に **下記の決まったファイル名で画像を置く** と、
ビルド時に該当する Placeholder が自動で実画像に切り替わります。
未投入のファイルは CSS グラデのプレイスホルダのまま表示され続けます。

- 推奨形式: **JPEG** (`.jpg`)  
  ※ 透過が必要な場合のみ PNG、写真は JPEG が軽量で◎
- 推奨サイズ: ヒーローは横 2000px 程度、カード用は 1200px 程度
- 画像差し替え後は `npm run build` で確認できます

---

## 1. ヒーロー（HERO）

`hero/` 配下。トップページのヒーローは **ローテーション** するため複数枚必要です。

| パス | 用途 |
|---|---|
| `hero/home-01.jpg` 〜 `home-05.jpg` | トップページのスライドショー（5 枚推奨、増減可） |
| `hero/about.jpg` | コンセプト |
| `hero/moto-akuoji.jpg` | 元悪王子 ホテルページ |
| `hero/bukkoji.jpg` | 仏光寺 ホテルページ |
| `hero/rooms.jpg` | 客室一覧 |
| `hero/area.jpg` | エリア情報 |
| `hero/access.jpg` | アクセス |
| `hero/news.jpg` | ニュース |
| `hero/faqs.jpg` | FAQ |

---

## 2. ホテル外観 / ロビー / 施設ベントー

`hotels/` 配下。元悪王子 / 仏光寺の両方を用意。

### 元悪王子
- `hotels/moto-exterior.jpg` — 外観 / 路地
- `hotels/moto-lobby.jpg` — ロビー / 内観
- `hotels/moto-bento-1.jpg` — 施設ベントー大（ラウンジなど）
- `hotels/moto-bento-2.jpg` — 施設ベントー小1（朝食）
- `hotels/moto-bento-3.jpg` — 施設ベントー小2（浴室）

### 仏光寺
- `hotels/bukko-exterior.jpg` — 外観 / 路地
- `hotels/bukko-lobby.jpg` — ロビー / 内観
- `hotels/bukko-bento-1.jpg` — 施設ベントー大（ラウンジなど）
- `hotels/bukko-bento-2.jpg` — 施設ベントー小1（朝食）
- `hotels/bukko-bento-3.jpg` — 施設ベントー小2（中庭）

---

## 3. 客室

`rooms/` 配下。**slug 名と一致** させる必要があります。

| パス | 部屋 |
|---|---|
| `rooms/moto-superior.jpg` | 町家スペリオール |
| `rooms/moto-deluxe.jpg` | アース デラックス |
| `rooms/moto-suite.jpg` | 町家スイート |
| `rooms/bukko-superior.jpg` | 千草スペリオール |
| `rooms/bukko-deluxe.jpg` | セージ デラックス |
| `rooms/bukko-suite.jpg` | 千草スイート |

---

## 4. 施設

`facilities/` 配下。

| パス | 施設 |
|---|---|
| `facilities/communal-bath.jpg` | 共同浴室（元悪王子） |
| `facilities/lounge.jpg` | ラウンジ & ライブラリー（元悪王子） |
| `facilities/breakfast.jpg` | 朝食ルーム（元悪王子） |
| `facilities/courtyard.jpg` | 中庭（仏光寺） |
| `facilities/bike-station.jpg` | 自転車ステーション（仏光寺） |

---

## 5. 体験プログラム

`experiences/` 配下。

| パス | 体験 |
|---|---|
| `experiences/pottery.jpg` | 陶芸ワークショップ |
| `experiences/bike.jpg` | 自転車レンタル / 厳選ルート |
| `experiences/breakfast-seasonal.jpg` | 季節の朝食 |
| `experiences/temple-walk.jpg` | 寺院の朝散歩 |
| `experiences/weaving.jpg` | 織物工房訪問 |
| `experiences/indigo-dye.jpg` | 藍染めワークショップ |
| `experiences/concierge.jpg` | コンシェルジュ / おもてなし |

---

## 6. ニュース

`news/` 配下。slug 名と一致。

| パス | 記事 |
|---|---|
| `news/winter-light.jpg` | 下京の冬の光 |
| `news/pottery-workshop.jpg` | 陶芸ワークショップ提携 |
| `news/bukkoji-bell.jpg` | 仏光寺の鐘の音 |
| `news/autumn-breakfast.jpg` | 秋の朝食メニュー |

---

## 7. エリア（観光スポット）

`area/` 配下。

| パス | スポット |
|---|---|
| `area/nishiki.jpg` | 錦市場 |
| `area/yoshiquan.jpg` | 吉泉 |
| `area/kawai.jpg` | 河井寬次郎記念館 |
| `area/bukkoji-temple.jpg` | 仏光寺（寺） |
| `area/ippodo.jpg` | 一保堂茶舗 |
| `area/weekenders.jpg` | ウィークエンダーズコーヒー |
| `area/rokkakudo.jpg` | 六角堂 |
| `area/textile.jpg` | 西陣織会館 |
| `area/craft-museum.jpg` | 京都工芸繊維大学美術工芸資料館 |

---

## まとめ

不足分は何も置かなくて OK（プレイスホルダのまま表示）。
撮影できた分から少しずつ追加してください。
