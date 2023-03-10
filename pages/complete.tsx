const Complete = () => {
  return (
    <div className="lg:w-6/12 w-11/12 m-auto">
      <div className="text-center font-bold lg:text-3xl text-xl pt-36">
        <h1>
          お問い合わせありがとうございます。
          <br />
          送信が完了しました
        </h1>
      </div>

      <div className="text-center lg:pt-28 pt-24 pb-36">
        <p className="text-left lg:text-xl text-sm">
          お問い合わせありがとうございました。
          <br />
          内容を確認でき次第、ご連絡いたします。
          <br />
          送信後、確認メールが送られてこない場合は、入力ミスの可能性があります。再度、送信お願い致します。
        </p>
      </div>
    </div>
  );
};

export default Complete;
