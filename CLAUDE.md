# プロジェクト概要
今井建設の新しいホテルブランド、solum-kyotoのマーケティング用WEBサイトです。

## 作業ルール
- 修正したら必ずPRを作成すること
- コメントは日本語で書くこと
- デザインはsrc/components/内の既存コンポーネントに合わせること

## フォルダ構成
- ページ：src/pages/
- コンポーネント：src/components/
- スタイル：src/styles/

## 使用技術
- フレームワーク：Next.js
- スタイリング：Tailwind CSS

---

## ワイヤーフレーム修正プロセス（Mid Wireframe）

### ファイル命名規則
- 元ファイル（触らない）: `solmu-kyoto-ja_mid-wifi-ja_rev{N}_{YYYYMMDD}.html`
- 新ファイル（修正版）: `solmu-kyoto-ja_mid-wifi-ja_rev{N+1}_{YYYYMMDD}.html`
- リポジトリルート（`/home/user/solum-kyoto/`）に格納

### 作業フロー
1. **指示書の取得**: Google Drive のリンク（.md ファイル）から修正指示を取得
2. **修正対象の確認**: Notion「Wireframe フィードバック DB」の「修正確認結果」列が「要修正」の行のみ対応
   - 「済」「要確認」「空欄」は対応しない
3. **ファイルコピー**: 元ファイルを新ファイル名でコピー（元ファイルは変更しない）
4. **修正適用**: 指示書の内容に従い新ファイルに修正を加える
5. **セルフレビュー**: PR作成前に必ず以下を確認する（下記「レビューチェックリスト」参照）
6. **コミット・プッシュ**: 作業ブランチ（`claude/update-website-KI466`）にコミット＆プッシュ
7. **PR作成**: ユーザーに依頼（または明示的に指示された場合のみ作成）

### レビューチェックリスト（PR作成前に必ず確認）

#### カラー
- [ ] ホテル固有カラー（motoakuoji: `#d6c7b6` 系 / bukoji: `#92b1a5` 系）が**共通ページ**（01ホーム・02コンセプト・06客室一覧・10体験・11ニュース・13FAQ等）で使われていないか
- [ ] 予約ボタンにホテル固有カラーが使われていないか（`#333333` または白背景に統一）

#### フォント
- [ ] 英数字フォントが `Ysabeau Office` になっているか
- [ ] 日本語タイトル・項目名が `Zen Old Mincho Bold 18px` になっているか
- [ ] 日本語本文が `Noto Sans JP Regular 12px` になっているか
- [ ] 左上 "solmu kyoto" が `Ysabeau Office weight:200` になっているか

#### ボタン・UI
- [ ] 指示書で削除を求めたボタンが実際に削除されているか
- [ ] 04・05ホテルページの予約ボタン背景が白になっているか

#### テキスト・表示
- [ ] 指示されたテキスト追加・修正が正しく反映されているか
- [ ] 元ファイル（前rev）が変更されていないか

### rev2 → rev3 修正履歴（2026-05-18）
- ① ヘッダーにロゴマークプレースホルダー追加
- ② ホテルカード画像を450px化・説明文を12pxに縮小
- ③ ホーム・ニュースページにダミー台風情報追加
- ④ 客室一覧に `?from=bukoji` URLパラメータ対応追加
- ⑤ 客室詳細ページにbukoji客室詳細セクション追加
- ⑥ 客室詳細・体験詳細・施設詳細のレイアウト差別化
- ⑦ 共通ページのベースカラー変更・予約ボタンを#333333に統一
- ⑧ ホテル名をアルファベット小文字（motoakuoji / bukoji / solmu kyoto）に統一

### rev3 → rev4 修正履歴（2026-05-18）
- 元悪王子・仏光寺の正式カラーパレット反映（砂#d6c7b6・銅#a26748・刈枯#9ba582・薄緑#bdd7ca等）
- 白練#fcfaf2 を --shironeri に適用
- フォント変更：Cormorant Garamond → Ysabeau Office、Shippori Mincho → Zen Old Mincho
- 仏光寺ベースカラーを #92b1a5 に修正
- 共通ページのホテルカラーを #333333 に統一（21箇所）
- 04・05ホテルページにロゴ画像（shijo karasuma / takakura bukkoji）挿入

### rev4 → rev5 修正履歴（2026-05-19）
- 共通ページ12箇所のホテルカラーをvar(--charcoal)に変更（01・02・06・11・13）
- 04・05の「ご予約はこちら」ボタンを白背景・charcoal枠に変更
- 07客室詳細の「元悪王子を予約」ボタン削除
- nav-brand: Ysabeau Office weight:200、letter-spacing:0.25em
- 日本語項目名: Zen Old Mincho Bold 18px、本文: Noto Sans JP Regular 12px
- ロゴに mix-blend-mode:multiply 適用

### rev5 → rev6 修正履歴（2026-05-19）
- 01ホームヒーロー「この街が、」の下に「あなたのものになる。」を白文字で追加
- 04・05ナビバーの予約ボタン（元悪王子を予約/仏光寺を予約）削除
- ロゴ透過改善（mix-blend-mode:multiply + filter:contrast(1.2)）
- ロゴ下バッジ（MOTOAKUOJI/BUKKOJI）を Ysabeau Office Regular に変更

### rev6 → rev7 修正履歴（2026-05-19）
- 07客室詳細の「眺望」→「部屋」に変更
- 全ページで "bukoji" → "bukkoji" に統一（CSS変数・JS識別子は維持）
- 04・05の「客室タイプs」→「客室タイプ」に修正
- 07客室詳細を2ページに分割（07:motoakuoji詳細 / 08:bukkoji詳細）
- 旧タブ08〜14を09〜15に繰り下げ

### rev7 → rev8 修正履歴（2026-05-19）
- 03ホテルの地図・アクセス情報を04（元悪王子）・05（仏光寺）のフッター前に挿入
- 02コンセプトの「bukkoji」フォントを Ysabeau Office Regular に修正
- 02コンセプト緑背景の大テキスト「bukkoji」→「仏光寺」に変更
- 04・05の「一目でわかる」〜「対応言語（中国語）」を枠ごと削除
- 04・05の「ホテルの特徴s」→「ホテルの特徴」に修正
- 12ニュースを「共通」「motoakuoji」「bukoji」の3パートに分割

### rev8 → rev9 修正履歴（2026-05-19）
- 04「全客室を見る→」リンクを14FAQから06客室一覧（go(5)）に修正
- 05「全客室を見る→」リンクを06のbukkojiセクション（#bukko-rooms）にスクロール対応
- 06「bukkojiの客室」見出しのem要素にYsabeau Office Regular / font-style:normalを適用（斜体解除）
- 12ニュースの「motoakuoji」「bukoji」セクションヘッダーをYsabeau Office Regularに変更

### 正式ホテル名・表記ルール
- ブランド名: `solmu kyoto`
- 元悪王子ホテル: `motoakuoji`（ロゴ: shijo karasuma）
- 仏光寺ホテル: `bukkoji`（ロゴ: takakura bukkoji）
- CSS変数・JS識別子は旧表記（`--color-bukoji`、`tab-bukoji`等）を維持してよい

### GitHub Pages デプロイ手順
修正完了後、`.github/workflows/pages.yml` の「Assemble deploy directory」に新revのコピー行を追加してPR・マージすること：
```yaml
cp solmu-kyoto-ja_mid-wifi-ja_rev{N}_{YYYYMMDD}.html deploy/
```
