import type { NextPage } from "next";
import Link from "next/link";
import Mail from "../components/mail";
import { Link as Scroll } from "react-scroll";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { client } from "../libs/client"; // srcから見た絶対パスで指定
import type { News } from "../types/news"; // srcから見た絶対パスで指定

type Props = {
  news: Array<News>;
};

export default function Home({ news }: Props) {
  return (
    <div>
      <header className="top-5 z-50 fixed w-full">
        <div className="flex w-9/12 m-auto justify-between bg-white px-4 py-2 font-bold">
          <Scroll
            to="about"
            smooth={true}
            offset={-50}
            className="cursor-pointer"
          >
            サービス概要
          </Scroll>
          <Scroll
            to="three_merit"
            smooth={true}
            offset={-50}
            className="cursor-pointer"
          >
            3つの学び
          </Scroll>
          <Scroll
            to="about_game"
            smooth={true}
            offset={-50}
            className="cursor-pointer"
          >
            ゲームの概要
          </Scroll>
          <Scroll
            to="movie"
            smooth={true}
            offset={-50}
            className="cursor-pointer"
          >
            研修動画
          </Scroll>
          <Scroll
            to="rule"
            smooth={true}
            offset={-50}
            className="cursor-pointer"
          >
            ルール
          </Scroll>
          <Scroll
            to="news"
            smooth={true}
            offset={-50}
            className="cursor-pointer"
          >
            お知らせ
          </Scroll>
          <Scroll
            to="training_step"
            smooth={true}
            offset={-50}
            className="cursor-pointer"
          >
            研修までの流れ
          </Scroll>
          <Scroll
            to="mail"
            smooth={true}
            offset={-50}
            className="cursor-pointer"
          >
            お問い合わせ
          </Scroll>
        </div>
      </header>
      <div id="mv" className="w-full">
        <img src="/mv_bg.png" alt="" />
      </div>
      <div id="ロゴ"></div>
      <img src="/man_1.png" alt="" width={400} className="absolute man-1" />
      <img src="/man_2.png" alt="" width={300} className="absolute man-2" />
      <img src="/man_3.png" alt="" width={300} className="absolute man-3" />
      <img src="/man_4.png" alt="" width={300} className="absolute man-4" />
      <img src="/man_5.png" alt="" width={400} className="absolute man-5" />
      <img src="/man_6.png" alt="" width={300} className="absolute man-6" />
      <img src="/man_7.png" alt="" width={250} className="absolute man-7" />
      <img src="/man_8.png" alt="" width={300} className="absolute man-8" />
      <div id="main" className="text-center w-10/12 m-auto mt-20">
        <div id="about" className="pt-20">
          <h2 className="font-bold text-2xl">
            アイディエーション・サーキットとは
          </h2>
          <p className="pt-10 font-bold text-xl leading-10">
            部署、世代、役割を越境して口ばかりのDiversityを終わらせ、
            <br />
            “SameよりもDifferent、NeedよりWant”を尊重し全員がお互いの背景
            <br />
            を理解したうえで、みんなが発言できる状態にする為のツールです。
          </p>
        </div>

        <div id="three_merit" className="pt-20">
          <h2 className="font-bold text-2xl">3つの学び</h2>
          <div className="flex gap-5 w-11/12 m-auto mt-4">
            <div className="w-4/12 m-auto">
              <img
                src="/merit_ideation.png"
                alt=""
                width={150}
                className="m-auto"
              />
              <p className="font-bold text-xl mt-5">アイディエーション</p>
              <p className="mt-2">
                正解のない問いに対して様々な視点からアプローチし、具体化と抽象化を繰り返してアイデア発想の体質を実装します。
              </p>
            </div>
            <div className="w-4/12 m-auto">
              <img
                src="/merit_teambuild.png"
                alt=""
                width={200}
                className="m-auto mt-7"
              />
              <p className="font-bold text-xl mt-5">チームビルド</p>
              <p className="mt-2">
                世代、部署を超えたチームと個人の目的のために協創する中で互いの立場や背景を考えます。
              </p>
            </div>
            <div className="w-4/12 m-auto">
              <img
                src="/merit_businessliteracy.png"
                alt=""
                width={200}
                className="m-auto mt-12"
              />
              <p className="font-bold text-xl mt-5">ビジネスリテラシー</p>
              <p className="mt-2">
                人・モノ・カネ、そして時間を何に割き、今何をすべきかを考える。要素が複雑に絡む中で出てくる問題を解決しながら進むことでビジネスの地盤を固めます。
              </p>
            </div>
          </div>
        </div>

        <div id="about_game" className="pt-20 text-left w-9/12 m-auto relative">
          <h2 className="font-bold text-2xl text-center">ゲームの概要</h2>

          <div className="absolute z-10">
            <div className="font-bold text-xl pt-10">
              <p className="about_game_main_phrase p-1">
                世の中を変えるためのアイデアを
              </p>
              <p className="about_game_main_phrase ml-20 p-1">
                ここから生み出してください
              </p>
            </div>

            <p className="w-7/12 pt-4 font-bold leading-8 bg-white">
              このゲームは役職が与えられたプレイヤーがチームを組んでクライアントから出されたテーマとターゲットに沿ったアイデアを考案しプレゼンテーションするゲームです。コインの運用・アイデアに役立つスキル・アイデアの量・人事評価・プレゼンテーション。本当の目的を見失わないようコイン・時間・チームをうまく使いながら、世の中を変えるアイデアをここから生み出してください。
              勝敗の決定：①保有コインの総額（チーム戦） ②人事評価（個人戦）
            </p>
          </div>

          <div className="absolute top-70 right-10">
            <img
              src="/theme_card.png"
              alt=""
              width={400}
              className="m-auto mt-4"
            />
          </div>
        </div>

        <div id="movie" className="pt-20 mt-96">
          <h2 className="font-bold text-2xl">
            動画でわかるアイディエーション・サーキット研修
          </h2>

          <iframe
            width="700"
            height="400"
            src="https://www.youtube.com/embed/_JWtEUDhveo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="mt-10 m-auto"
          ></iframe>
        </div>

        <div id="game_rule" className="pt-20">
          <h2 className="font-bold text-2xl">ゲームルール</h2>
          <div
            id="オーダー受注"
            className="border-4 border-black rounded-sm w-10/12 m-auto py-10 mt-14"
          >
            <div className="w-11/12 m-auto text-left">
              <p className="flex items-center font-bold text-xl gap-2">
                <img src="/step_1.png" alt="" width={50} />
                <span className="text-5xl">01</span>オーダー受注
              </p>
              <p className="text-left text-lg pt-6 font-bold ">
                <span className="bg-half-gray">
                  3人から5人で1組のチームを作ります。
                </span>
                <br />
                <span className="bg-half-gray">
                  初期資産100コインを受け取ってください。
                </span>
                <br />
                <span className="bg-half-gray">
                  クライアントからテーマとターゲットのオーダーを受けアイデアブレストに入ります。
                </span>
              </p>
              <div className="flex mt-10 font-bold">
                <div className="w-3/6 m-auto">
                  <p className="font-bold text-2xl text-center">テーマカード</p>
                  <img
                    src="/theme_card.png"
                    alt=""
                    width={350}
                    className="m-auto mt-4"
                  />
                  <p className="text-md text-center mt-3">
                    考えるアイデアのテーマが書かれています。
                  </p>
                </div>
                <div className="w-3/6 m-auto mt-5">
                  <p className="font-bold text-2xl text-center">
                    ターゲットカード
                  </p>
                  <img
                    src="/target_card.png"
                    alt=""
                    width={350}
                    className="m-auto mt-4"
                  />
                  <p className="text-md text-center mt-3">
                    ターゲットとなる人物像の属性と趣向が書かれています。
                    <br />
                    ただし、趣向は明かされません。
                  </p>
                </div>
              </div>
              <p className="text-xl font-bold mt-20 text-center">
                【その他カード】
              </p>
              <div className="flex mt-7 font-bold">
                <div className="w-3/6 m-auto">
                  <p className="font-bold text-2xl text-center">
                    ユニークカード
                  </p>
                  <img
                    src="/unique_card.png"
                    alt=""
                    width={350}
                    className="m-auto mt-4"
                  />
                  <p className="text-md text-center mt-3">
                    独創性を加速させるキーワードが書かれています。
                  </p>
                </div>
                <div className="w-3/6 m-auto">
                  <p className="font-bold text-2xl text-center">ヒントカード</p>
                  <img
                    src="/hint_card.png"
                    alt=""
                    width={350}
                    className="m-auto mt-4"
                  />
                  <p className="text-md text-center mt-3">
                    アイデア発想を加速させるヒントが書かれています。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="role_decision"
            className="mt-14 border-4 border-black rounded-sm w-10/12 m-auto py-10"
          >
            <div className="w-11/12 m-auto text-left">
              <p className="flex items-center font-bold text-xl gap-2">
                <img src="/step_2.png" alt="" width={50} />
                <span className="text-5xl">02</span>役職決定
              </p>
              <p className="text-left text-lg pt-6 font-bold">
                <span className="bg-half-gray">
                  チームで誰がどの役職になるかを決めます。
                </span>
                <br />
                <span className="bg-half-gray">
                  役職カードはスキルと価値発揮ポイントを得るための条件が書いています。
                </span>
              </p>

              <p className="text-2xl font-bold mt-10 text-center">役職カード</p>

              <div className="mt-5">
                <Splide
                  aria-label=""
                  options={{
                    rewind: true,
                    perPage: 2,
                    perMove: 1,
                    type: "loop",
                  }}
                >
                  <SplideSlide>
                    <img
                      src="/boss.png"
                      alt=""
                      width={350}
                      className="m-auto"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <img
                      src="/manager.png"
                      alt=""
                      width={350}
                      className="m-auto"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <img
                      src="/creator.png"
                      alt=""
                      width={350}
                      className="m-auto"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <img
                      src="/producer.png"
                      alt=""
                      width={350}
                      className="m-auto"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <img
                      src="/marketer.png"
                      alt=""
                      width={350}
                      className="m-auto"
                    />
                  </SplideSlide>
                </Splide>
              </div>
            </div>
          </div>

          <div
            id="ゲーム進行"
            className="mt-14 border-4 border-black rounded-sm w-10/12 m-auto py-10"
          >
            <div className="w-11/12 m-auto text-left">
              <p className="flex items-center font-bold text-xl gap-2">
                <img src="/step_3.png" alt="" width={50} />
                <span className="text-5xl">03</span>ゲーム進行
              </p>
              <p className="text-left font-bold text-lg pt-6">
                <span className="bg-half-gray">
                  チームで誰がどの役職になるかを決めます。
                </span>
                <br />
                <span className="bg-half-gray">
                  役職カードにはスキルと最高人事評価Sを得るための条件が書いています。
                </span>
              </p>

              <div id="カード3枚" className="flex gap-6 mt-10">
                <div className="border-4 border-black rounded-lg p-5 w-4/12 font-bold">
                  <p className="text-2xl text-center">アイデアブレスト</p>
                  <p className="py-3">
                    スキルやコインを使わずにテーマに沿ったアイデアを出してみましょう
                  </p>
                  <p>例）テーマ 未来の交通手段</p>
                </div>
                <div className="border-4 border-black rounded-lg p-5 w-4/12 font-bold">
                  <p className="text-2xl  text-center">抽象化コンセプト</p>
                  <p className="text-left py-3">
                    1で出たアイデアを抽象化してみましょう。
                  </p>
                  <p>アイデア：1人用電車</p>
                  <p>抽象化：個別化/インフラ/ソロ</p>
                </div>
                <div className="border-4 border-black rounded-lg p-5 w-4/12 font-bold">
                  <p className="text-2xl text-center leading-4">
                    アイディエーション
                    <br />
                    <span className="text-xl">&</span>
                    <br />
                    プレゼン
                  </p>
                  <p className="pt-5">
                    スキルやコインを使いながら、アイデアを固めプレゼンテーションを行います。
                  </p>
                </div>
              </div>
              <div className="w-4/12 ml-auto">
                <p className="text-center font-bold text-3xl">↓</p>
              </div>

              <div className="flex border-4 border-black rounded-lg p-5">
                <div className="border-r-4 border-black border-dashed w-4/12 font-bold text-center p-3 text-xl">
                  <p className="text-center">スキルの使用 20コイン</p>
                  <p className="text-sm">ボスマネージャーは必要なし。</p>
                </div>
                <div className="border-r-4 border-black border-dashed w-4/12 font-bold p-3 text-xl">
                  <p className="text-center">登記 20コイン</p>
                  <p className="text-sm">
                    30コイン単位で融資を受けられます。
                    <br />
                    ゲーム終了前に40コイン単位で返済です。
                  </p>
                </div>
                <div className="w-4/12  font-bold  p-3 text-xl">
                  <p className="text-center">プレゼン 20コイン</p>
                  <p className="text-sm">
                    事務局でエントリー後、クライアントにプレゼン。1アイデアごとに評価が付くためプレゼンをすればするほど報酬をもらえる確率が上がります。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            id="ゲーム終了"
            className="mt-14 border-4 border-black rounded-sm w-10/12 m-auto py-10"
          >
            <div className="w-11/12 m-auto text-left">
              <h3 className="flex items-center font-bold gap-2 text-xl">
                <img src="/step_4.png" alt="" width={50} />
                <span className="text-5xl">04</span>ゲーム進行
              </h3>

              <h4 className="font-bold bg-half-gray text-3xl my-6">
                2つの勝敗
              </h4>
              <div className="pt-6">
                <h4 className="text-left text-xl bg-half-gray font-bold">
                  1.チーム優勝
                </h4>
                <p className="text-xl font-bold pt-2">
                  プレゼン順位で報酬が与えられ、チームごとのコイン総額を競う。
                </p>

                <p className="pt-3 font-bold">▶︎ 評価基準</p>
                <div className="flex gap-2 text-white pt-1">
                  <p className="base-evaluation  px-6 rounded-xl">新規制</p>
                  <p className="base-evaluation  px-6 rounded-xl">実現可能性</p>
                  <p className="base-evaluation  px-6 rounded-xl">
                    社会的インパクト
                  </p>
                </div>
                <img
                  src="/rank_coin_board.png"
                  alt=""
                  width={600}
                  className="pt-3"
                />
              </div>

              <div className="pt-10">
                <h4 className="text-left text-xl bg-half-gray font-bold">
                  2.個人優勝
                </h4>
                <p className="text-xl font-bold pt-2">
                  役職ごとの人事評価ランクにより1人1人の市場価値が割り出され個人優勝が決まる。
                </p>
                <img src="/part_board.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div id="news" className="pt-20">
          <h2 className="font-bold text-2xl">ideation NEWS</h2>

          <ul className="w-11/12 m-auto flex gap-10">
            {news
              .map((news) => (
                <li key={news.id} className="my-5 w-9/12 m-auto">
                  <Link
                    href={`/news/${news.id}`}
                    className="font-bold text-left"
                  >
                    <img
                      className="rounded-t-lg"
                      src={news.eyeCatch.url}
                      alt="Sunset in the mountains"
                    />
                    <p className="text-left border-b border-x px-3 pt-2 pb-6 border-black rounded-b-lg bg-gray-700 text-white">
                      {news.title}
                    </p>
                  </Link>
                </li>
              ))
              .slice(0, 3)}
          </ul>

          <div className="mt-10">
            <Link
              href={"/news"}
              className="mt-8 
          py-3 px-10 bg-red-500 text-white border rounded-lg"
            >
              記事一覧はこちら
            </Link>
          </div>
        </div>

        {/* <div id="研修" className="pt-20">
          <h2 className="font-bold text-2xl">研修までの流れ</h2>
        </div> */}

        <Mail />
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: "news" });

  return {
    props: {
      news: data.contents,
    },
  };
};
