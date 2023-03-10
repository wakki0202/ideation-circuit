import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <header className="top-5 z-50 fixed w-full">
        <div className="flex w-9/12 m-auto justify-between bg-white px-4 py-2 font-bold">
          <a href="">サービス概要</a>
          <a href="">3つの学び</a>
          <a href="">ゲームの概要</a>
          <a href="">研修動画</a>
          <a href="">ルール</a>
          <a href="">お知らせ</a>
          <a href="">研修までの流れ</a>
          <a href="">お問い合わせ</a>
        </div>
      </header>
      <div id="mv" className="w-full">
        <img src="/mv_bg.png" alt="" />
      </div>
      <div id="ロゴ"></div>
      <div id="main" className="text-center w-10/12 m-auto mt-20">
        <div id="about" className="pt-20">
          <h2 className="font-bold text-2xl">
            アイディエーション・サーキットとは
          </h2>
          <p className="pt-10 font-bold text-xl">
            部署、世代、役割を越境して口ばかりのDiversityを終わらせ、
            <br />
            “SameよりもDifferent、NeedよりWant”を尊重し全員がお互いの背景
            <br />
            を理解したうえで、みんなが発言できる状態にする為のツールです。
          </p>
        </div>

        <div id="3つの学び" className="pt-20">
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

        <div id="ゲームの概要" className="pt-20 text-left w-9/12 m-auto">
          <h2 className="font-bold text-2xl text-center">ゲームの概要</h2>
          <div className="font-bold text-xl pt-10">
            <p className="about_game_main_phrase p-1">
              世の中を変えるためのアイデアを
            </p>
            <p className="about_game_main_phrase ml-20 p-1">
              ここから生み出してください
            </p>
          </div>

          <p className="w-7/12 pt-4 font-bold leading-8">
            このゲームは役職が与えられたプレイヤーがチームを組んでクライアントから出されたテーマとターゲットに沿ったアイデアを考案しプレゼンテーションするゲームです。コインの運用・アイデアに役立つスキル・アイデアの量・人事評価・プレゼンテーション。本当の目的を見失わないようコイン・時間・チームをうまく使いながら、世の中を変えるアイデアをここから生み出してください。
            勝敗の決定：①保有コインの総額（チーム戦） ②人事評価（個人戦）
          </p>
        </div>

        <div id="動画でわかるMarketing Town研修" className="pt-20">
          <h2 className="font-bold text-2xl">
            動画でわかるアイディエーション・サーキット研修
          </h2>

          <iframe
            width="700"
            height="400"
            src="https://www.youtube.com/embed/_JWtEUDhveo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="mt-10 m-auto"
          ></iframe>
        </div>

        <div id="ゲームルール" className="pt-20">
          <h2 className="font-bold text-2xl">ゲームルール</h2>
          <div
            id="オーダー受注"
            className="border-2 border-black rounded-sm w-10/12 m-auto py-10 mt-14"
          >
            <div className="w-11/12 m-auto text-left">
              <p className="flex items-center">
                <span className="text-3xl">01</span>オーダー受注
              </p>
              <p className="text-left">
                3人から5人で1組のチームを作ります。
                <br />
                初期資産100コインを受け取ってください。
                <br />
                クライアントからテーマとターゲットのオーダーを受けアイデアブレストに入ります。
              </p>
              <div className="flex mt-10">
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
              <div className="flex mt-7">
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
            id="役職決定"
            className="mt-14 border-2 border-black rounded-sm w-10/12 m-auto py-10"
          >
            <div className="w-11/12 m-auto text-left">
              <p className="flex items-center">
                <span className="text-3xl">02</span>役職決定
              </p>
              <p className="text-left">
                チームで誰がどの役職になるかを決めます。
                <br />
                役職カードはスキルと価値発揮ポイントを得るための条件が書いています。
              </p>

              <p className="text-2xl font-bold mt-10 text-center">役職カード</p>

              <div className="flex gap-5 justify-center mt-5">
                <img src="/boss.png" alt="" width={170} />
                <img src="/manager.png" alt="" width={170} />
                <img src="/creator.png" alt="" width={170} />
                <img src="/producer.png" alt="" width={170} />
                <img src="/marketer.png" alt="" width={170} />
              </div>
            </div>
          </div>

          <div
            id="ゲーム進行"
            className="mt-14 border-2 border-black rounded-sm w-10/12 m-auto py-10"
          >
            <div className="w-11/12 m-auto text-left">
              <p className="flex items-center">
                <span className="text-3xl">03</span>ゲーム進行
              </p>
              <p className="text-left font-bold">
                <span className="bg-half-gray">
                  チームで誰がどの役職になるかを決めます。
                </span>
                <br />
                <span className="bg-half-gray">
                  役職カードにはスキルと最高人事評価Sを得るための条件が書いています。
                </span>
              </p>
            </div>
          </div>
          <div
            id="ゲーム終了"
            className="mt-14 border-2 border-black rounded-sm w-10/12 m-auto py-10"
          >
            <div className="w-11/12 m-auto text-left">
              <h3 className="flex items-center">
                <span className="text-3xl">04</span>ゲーム進行
              </h3>
              <div>
                <h4 className="text-left text-2xl bg-half-gray">
                  1.チーム優勝
                </h4>
                <p className="text-xl">
                  プレゼン順位で報酬が与えられ、チームごとのコイン総額を競う。
                </p>

                <p>▶︎ 評価基準</p>
                <div className="flex">
                  <p>新規制</p>
                  <p>実現可能性</p>
                  <p>社会的インパクト</p>
                </div>
              </div>

              <div>
                <h4 className="text-left text-2xl bg-half-gray">2.個人優勝</h4>
                <p className="text-xl">
                  役職ごとの人事評価ランクにより1人1人の市場価値が割り出され個人優勝が決まる。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="ideation NEWS" className="pt-20">
          <h2 className="font-bold text-2xl">ideation NEWS</h2>
        </div>

        <div id="研修" className="pt-20">
          <h2 className="font-bold text-2xl">研修までの流れ</h2>
        </div>

        <div id="お問い合わせ" className="py-20 mb-20">
          <h2 className="font-bold text-2xl">お問い合わせ</h2>

          <div className="w-9/12 m-auto bg-white border border-gray rounded-lg py-10 px-16 mt-6 flex flex-col gap-5">
            <div className="form-group">
              <label>お名前</label>
              <input className="border rounded-md ml-auto w-9/12" type="text" />
            </div>
            <div className="form-group">
              <label>メールアドレス</label>
              <input
                className="border rounded-md  ml-auto w-9/12"
                type="text"
              />
            </div>
            <div className="form-group">
              <label>電話番号</label>
              <input
                className="border rounded-md  ml-auto w-9/12"
                type="text"
              />
            </div>
            <div className="form-group">
              <label>会社名</label>
              <input
                className="border rounded-md  ml-auto w-9/12"
                type="text"
              />
            </div>
            <div className="textarea-group">
              <label>お問い合わせ内容</label>
              <textarea
                className="border rounded-md  ml-auto w-9/12"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button className="border w-4/12 py-2 rounded-lg m-auto text-white bg-red-500">
              送信する
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
