import React from "react";
import { useState } from "react";
import Router from "next/router";

import type { NextPage } from "next";

const Mail: NextPage = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    msg: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phoneNumber: form.phoneNumber,
        msg: form.msg,
      }),
    })
      .then((res) => {
        Router.push("/complete");
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
        } else {
          console.log(`Error: Status Code ${res.status}`);
        }
      })
      .catch((e) => {
        console.log(`Error: ${e}`);
      });
  };

  return (
    <div data-aos="fade-up" data-aos-duration="800">
      <div id="お問い合わせ" className="py-20 mb-20">
        <h2 className="font-bold text-2xl">お問い合わせ</h2>

        <div className="w-9/12 m-auto bg-white border border-gray rounded-lg py-10 px-16 mt-6 flex flex-col gap-5">
          <div className="form-group">
            <label>お名前</label>
            <input
              onChange={(e) => {
                const val = e.currentTarget.value;
                setForm((props) => ({
                  ...props,
                  name: val !== null ? val : "",
                }));
              }}
              value={form.name}
              name="name"
              type="text"
              className="border rounded-md ml-auto w-9/12"
            />
          </div>
          <div className="form-group">
            <label>メールアドレス</label>
            <input
              onChange={(e) => {
                const val = e.currentTarget.value;
                setForm((props) => ({
                  ...props,
                  email: val !== null ? val : "",
                }));
              }}
              name="email"
              type="text"
              className="border rounded-md  ml-auto w-9/12"
            />
          </div>
          <div className="form-group">
            <label>電話番号</label>
            <input
              onChange={(e) => {
                const val = e.currentTarget.value;
                setForm((props) => ({
                  ...props,
                  phoneNumber: val !== null ? val : "",
                }));
              }}
              name="phoneNumber"
              type="text"
              className="border rounded-md  ml-auto w-9/12"
            />
          </div>
          <div className="textarea-group">
            <label>お問い合わせ内容</label>
            <textarea
              onChange={(e) => {
                const val = e.currentTarget.value;
                setForm((props) => ({
                  ...props,
                  msg: val !== null ? val : "",
                }));
              }}
              name="text"
              className="border rounded-md  ml-auto w-9/12"
              id=""
              placeholder="お問い合わせ内容を入力してください"
              cols={30}
              rows={10}
            ></textarea>
          </div>
          <div className="text-center">
            <input
              className="border w-4/12 py-2 rounded-lg m-auto text-white bg-red-500"
              onClick={() => setShowModal(true)}
              type="button"
              value="送信する"
            />
          </div>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5  border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold"></h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        送信します。よろしいですか？
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6  border-solid border-slate-200 rounded-b">
                      <button
                        className="text-[#0F3E6C] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        キャンセル
                      </button>
                      <input
                        className="bg-[#0F3E6C] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        onClick={async (e) => {
                          await handleSubmit(e);
                        }}
                        type="submit"
                        value="送信する"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Mail;
