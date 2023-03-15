import type { NextPage } from "next";
import Link from "next/link";
import Mail from "../components/mail";
import GameRule from "../components/game_rule";
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
    <div className="w-full overflow-x-hidden">
      <header className="top-5 z-50 fixed w-full lg:block hidden">
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
        <img src="/mv_bg.png" alt="" className="hidden lg:block" />
        <img src="/mv_bg_sp.png" alt="" className="lg:hidden" />
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
      <div id="main" className="text-center w-11/12 m-auto mt-10 lg:mt-20">
        <div id="about" className="pt-20">
          <h2 className="font-bold text-lg lg:text-2xl">
            アイディエーション・サーキットとは
          </h2>
          <p className="pt-10 font-bold text-md lg:text-xl leading-10 lg:leading-7">
            部署、世代、役割を越境して
            <br className="lg:hidden" />
            口ばかりのDiversityを終わらせ、
            <br />
            “SameよりもDifferent、NeedよりWant”を
            <br className="lg:hidden" />
            尊重し全員がお互いの背景
            <br className="hidden lg:block" />
            を理解したうえで、
            <br className="lg:hidden" />
            みんなが発言できる状態にする為のツールです。
          </p>
        </div>

        <div id="three_merit" className="pt-16 lg:pt-20">
          <h2 className="font-bold text-2xl">3つの学び</h2>
          <div className="flex flex-col lg:flex-row gap-5 w-11/12 m-auto mt-4">
            <div className="w-11/12 lg:w-4/12 m-auto">
              <img
                src="/merit_ideation.png"
                alt=""
                width={150}
                className="m-auto"
              />
              <p className="font-bold text-xl mt-5">アイディエーション</p>
              <p className="mt-2 text-left lg:text-center">
                正解のない問いに対して様々な視点からアプローチし、具体化と抽象化を繰り返してアイデア発想の体質を実装します。
              </p>
            </div>
            <div className="w-11/12 lg:w-4/12 m-auto">
              <img
                src="/merit_teambuild.png"
                alt=""
                width={200}
                className="m-auto mt-7"
              />
              <p className="font-bold text-xl mt-5">チームビルド</p>
              <p className="mt-2  text-left lg:text-center">
                世代、部署を超えたチームと個人の目的のために協創する中で互いの立場や背景を考えます。
              </p>
            </div>
            <div className="w-11/12 lg:w-4/12 m-auto">
              <img
                src="/merit_businessliteracy.png"
                alt=""
                width={200}
                className="m-auto mt-12"
              />
              <p className="font-bold text-xl mt-5">ビジネスリテラシー</p>
              <p className="mt-2  text-left lg:text-center">
                人・モノ・カネ、そして時間を何に割き、今何をすべきかを考える。要素が複雑に絡む中で出てくる問題を解決しながら進むことでビジネスの地盤を固めます。
              </p>
            </div>
          </div>
        </div>

        <div
          id="about_game"
          className="pt-20 text-left w-11/12 lg:w-9/12 m-auto relative"
        >
          <h2 className="font-bold text-2xl text-center">ゲームの概要</h2>
          <div className="lg:absolute lg:top-70 lg:right-10">
            <img
              src="/theme_card.png"
              alt=""
              width={400}
              className="m-auto mt-4"
            />
          </div>
          <div className="lg:absolute z-10">
            <div className="font-bold text-lg lg:text-xl pt-10">
              <p className="about_game_main_phrase p-1">
                世の中を変えるためのアイデアを
              </p>
              <p className="about_game_main_phrase ml-16 p-1">
                ここから生み出してください
              </p>
            </div>

            <p className="w-11/12 m-auto lg:m-0 lg:w-7/12 pt-4 font-bold leading-8 bg-white">
              このゲームは役職が与えられたプレイヤーがチームを組んでクライアントから出されたテーマとターゲットに沿ったアイデアを考案しプレゼンテーションするゲームです。コインの運用・アイデアに役立つスキル・アイデアの量・人事評価・プレゼンテーション。本当の目的を見失わないようコイン・時間・チームをうまく使いながら、世の中を変えるアイデアをここから生み出してください。
              勝敗の決定：①保有コインの総額（チーム戦） ②人事評価（個人戦）
            </p>
          </div>
        </div>

        <div id="movie" className="pt-20 mt-18 lg:mt-96">
          <h2 className="font-bold text-2xl">
            動画でわかるアイディエーション・サーキット
          </h2>

          <iframe
            src="/trial.mp4"
            title="YouTube video player"
            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="movie mt-10 m-auto"
          ></iframe>
        </div>

        <GameRule />

        <div id="news" className="pt-20">
          <h2 className="font-bold text-2xl">ideation NEWS</h2>

          <div className="hidden lg:block">
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
          </div>
          <div className="lg:hidden">
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
                .slice(0, 1)}
            </ul>
          </div>

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
