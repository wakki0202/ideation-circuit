import React from "react";
import type { NextPage } from "next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const Mail: NextPage = () => {
  return (
    <div id="game_rule" className="pt-20">
      <h2 className="font-bold text-2xl">ゲームルール</h2>
      <div
        id="オーダー受注"
        className="lg:border-4 lg:border-black rounded-sm w-11/12 lg:w-10/12 m-auto py-10 mt-20 lg:mt-14 relative"
      >
        <div className="w-11/12 m-auto text-left">
          <p className="rule-section-title flex  items-center font-bold text-xl lg:text-2xl gap-2">
            <img
              src="/step_1.png"
              alt=""
              width={60}
              className="hidden lg:block"
            />
            <img src="/step_1.png" alt="" width={40} className="lg:hidden" />
            <span className="text-5xl lg:text-7xl">01</span>オーダー受注
          </p>
          <p className="text-left text-md lg:text-lg pt-6 font-bold ">
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
          <div className="flex flex-col lg:flex-row mt-10 font-bold">
            <div className="w-full lg:w-3/6 m-auto">
              <p className="font-bold text-2xl text-center">テーマカード</p>

              <div id="card">
                <div className="back">
                  <img src="/theme_card.png" alt="" width={400} />
                </div>
                <div className="front">
                  <img src="/theme_front.png" alt="" width={400} />
                </div>
              </div>
              <p className="text-md text-left lg:text-center mt-3">
                考えるアイデアのテーマが書かれています。
              </p>
            </div>
            <div className="w-full lg:w-3/6 m-auto mt-5">
              <p className="font-bold text-2xl text-center">ターゲットカード</p>
              <div id="card">
                <div className="back">
                  <img src="/target_card.png" alt="" width={400} />
                </div>
                <div className="front">
                  <img src="/target_front.png" alt="" width={400} />
                </div>
              </div>

              <p className="text-md text-left lg:text-center mt-3">
                ターゲットとなる人物像の属性と趣向が書かれています。
                <br />
                ただし、趣向は明かされません。
              </p>
            </div>
          </div>
          <p className="text-xl font-bold mt-14 lg:mt-20 text-center">
            【その他カード】
          </p>
          <div className="flex flex-col lg:flex-row mt-7 font-bold">
            <div className="w-full lg:w-3/6 m-auto">
              <p className="font-bold text-2xl text-center">ユニークカード</p>
              <div id="card">
                <div className="back">
                  <img src="/unique_card.png" alt="" width={400} />
                </div>
                <div className="front">
                  <img src="/unique_front.png" alt="" width={400} />
                </div>
              </div>
              <p className="text-md text-left lg:text-center mt-3">
                独創性を加速させるキーワードが書かれています。
              </p>
            </div>
            <div className="w-full lg:w-3/6 m-auto">
              <p className="font-bold text-2xl text-center">ヒントカード</p>
              <div id="card">
                <div className="back">
                  <img src="/hint_card.png" alt="" width={400} />
                </div>
                <div className="front">
                  <img src="/hint_front.png" alt="" width={400} />
                </div>
              </div>
              <p className="text-md text-left lg:text-center mt-3">
                アイデア発想を加速させるヒントが書かれています。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="role_decision"
        className="mt-14 lg:border-4 lg:border-black rounded-sm w-11/12 lg:w-10/12 m-auto py-10 relative"
      >
        <div className="w-11/12 m-auto text-left">
          <p className="rule-section-title flex items-center font-bold text-xl lg:text-2xl gap-2">
            <img
              src="/step_2.png"
              alt=""
              width={60}
              className="hidden lg:block"
            />
            <img src="/step_2.png" alt="" width={40} className="lg:hidden" />
            <span className="text-5xl lg:text-7xl">02</span>役職決定
          </p>
          <p className="text-left text-md lg:text-lg pt-1 lg:pt-6 font-bold">
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
              className="hidden lg:block"
            >
              <SplideSlide>
                <img src="/boss.png" alt="" width={350} className="m-auto" />
              </SplideSlide>
              <SplideSlide>
                <img src="/manager.png" alt="" width={350} className="m-auto" />
              </SplideSlide>
              <SplideSlide>
                <img src="/creator.png" alt="" width={350} className="m-auto" />
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
            <Splide
              aria-label=""
              options={{
                rewind: true,
                perPage: 1,
                perMove: 1,
                type: "loop",
              }}
              className="lg:hidden"
            >
              <SplideSlide>
                <img src="/boss.png" alt="" width={350} className="m-auto" />
              </SplideSlide>
              <SplideSlide>
                <img src="/manager.png" alt="" width={350} className="m-auto" />
              </SplideSlide>
              <SplideSlide>
                <img src="/creator.png" alt="" width={350} className="m-auto" />
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
        className="mt-14 lg:border-4 lg:border-black rounded-sm w-11/12 lg:w-10/12 m-auto py-10 relative"
      >
        <div className="w-11/12 m-auto text-left">
          <p className="rule-section-title flex items-center font-bold text-xl lg:text-2xl gap-2">
            <img
              src="/step_3.png"
              alt=""
              width={60}
              className="hidden lg:block"
            />
            <img src="/step_3.png" alt="" width={40} className="lg:hidden" />
            <span className="text-5xl lg:text-7xl">03</span>ゲーム進行
          </p>
          <p className="text-left font-bold text-lg pt-1 lg:pt-6">
            <span className="bg-half-gray">
              チームで誰がどの役職になるかを決めます。
            </span>
            <br />
            <span className="bg-half-gray">
              役職カードにはスキルと最高人事評価Sを得るための条件が書いています。
            </span>
          </p>

          <div id="カード3枚" className="flex flex-col lg:flex-row gap-6 mt-10">
            <div className="card border-4 border-black rounded-lg p-5  w-full  lg:w-4/12 font-bold relative">
              <img src="/badge1.png" alt="" width={40} className="badge" />
              <p className="text-2xl text-center">アイデアブレスト</p>
              <p className="py-3">
                スキルやコインを使わずにテーマに沿ったアイデアを出してみましょう
              </p>
              <p>例）テーマ 未来の交通手段</p>
            </div>
            <div className="border-4 border-black rounded-lg p-5 w-full m-auto lg:w-4/12 font-bold  relative">
              <img src="/badge2.png" alt="" width={40} className="badge" />
              <p className="text-2xl  text-center">抽象化コンセプト</p>
              <p className="text-left py-3">
                1で出たアイデアを抽象化してみましょう。
              </p>
              <p>アイデア：1人用電車</p>
              <p>抽象化：個別化/インフラ/ソロ</p>
            </div>
            <div className="border-4 border-black rounded-lg p-5  w-full m-auto lg:w-4/12 font-bold  relative">
              <img src="/badge3.png" alt="" width={40} className="badge" />
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

          <div className="w-4/12 ml-auto lg:block hidden">
            <p className="text-center font-bold text-3xl">↓</p>
          </div>

          <div className="flex flex-col lg:flex-row border-4 border-black rounded-lg p-5 relative mt-10 lg:mt-0">
            <img src="/badge4.png" alt="" width={350} className="badge" />
            <div className="border-b-4 lg:border-b-0 lg:border-r-4 border-black border-dashed w-11/12 lg:w-4/12 font-bold text-center p-3 text-xl">
              <p className="text-center">スキルの使用 20コイン</p>
              <p className="text-sm">ボスマネージャーは必要なし。</p>
            </div>
            <div className="border-b-4 lg:border-b-0 lg:border-r-4 border-black border-dashed w-11/12 lg:w-4/12 font-bold p-3 text-xl">
              <p className="text-center">登記 20コイン</p>
              <p className="text-sm">
                30コイン単位で融資を受けられます。
                <br />
                ゲーム終了前に40コイン単位で返済です。
              </p>
            </div>
            <div className="w-11/12 lg:w-4/12  font-bold  p-3 text-xl">
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
        className="mt-32 lg:mt-14 lg:border-4 lg:border-black rounded-sm w-11/12 lg:w-10/12 m-auto pb-10"
      >
        <div className="w-11/12 m-auto text-left relative">
          <h3 className="rule-section-title4 flex items-center font-bold gap-2 text-xl lg:text-2xl">
            <img
              src="/step_4.png"
              alt=""
              width={60}
              className="hidden lg:block"
            />
            <img src="/step_4.png" alt="" width={40} className="lg:hidden" />
            <span className="text-5xl lg:text-7xl">04</span>ゲーム進行
          </h3>

          <h4 className="font-bold bg-half-gray text-3xl mt-16 mb-2">
            2つの勝敗
          </h4>
          <div className="pt-6">
            <h4 className="text-left text-xl bg-half-gray font-bold">
              1.チーム優勝
            </h4>
            <p className="text-lg lg:text-xl font-bold pt-2">
              プレゼン順位で報酬が与えられ、チームごとのコイン総額を競う。
            </p>

            <p className="pt-3 font-bold">▶︎ 評価基準</p>
            <div className="flex gap-2 text-white pt-1 text-sm">
              <p className="base-evaluation px-2 lg:px-6 rounded-xl">新規制</p>
              <p className="base-evaluation px-2 lg:px-6 rounded-xl">
                実現可能性
              </p>
              <p className="base-evaluation px-2 lg:px-6 rounded-xl">
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
            <img src="/part_board.png" alt="" className="hidden lg:block" />
            <div className="lg:hidden mt-10">
              <Splide
                aria-label=""
                options={{
                  rewind: true,
                  perPage: 1,
                  perMove: 1,
                  type: "loop",
                }}
                className="lg:hidden"
              >
                <SplideSlide>
                  <img src="/boss_sp.png" alt="" />
                </SplideSlide>
                <SplideSlide>
                  <img src="/manager_sp.png" alt="" />
                </SplideSlide>
                <SplideSlide>
                  <img src="/creator_sp.png" alt="" />
                </SplideSlide>
                <SplideSlide>
                  <img src="/producer_sp.png" alt="" />
                </SplideSlide>
                <SplideSlide>
                  <img src="/marketer_sp.png" alt="" />
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
