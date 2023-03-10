import { createTransport } from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const transporter = createTransport({
    port: 465,
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: "ytk.jagaimo@gmail.com",
      pass: "llbfcxsvmyitgkqt",
    },
  });

  const data = JSON.parse(req.body);

  // リプライメール
  await transporter.sendMail({
    from: "ideation-circuit<noreply@example.com>",
    to: data.email,
    subject: "以下の内容でお問い合わせを受け付けました",
    text: `
    会社名
    ${data.company}

    名前
    ${data.name}
    
    メールアドレス
    ${data.email}

    電話番号
    ${data.phoneNumber}
    
    お問い合わせ内容
    ${data.msg}
    `,
  });

  // 管理者に送信されるメール
  await transporter.sendMail({
    from: "ideation-circuit<noreply@example.com>",
    to: "ytk0202@outlook.jp",
    subject: `【お問い合わせ】${data.name}様より`,
    text: `
    会社名
    ${data.company}

    名前
    ${data.name}
    
    メールアドレス
    ${data.email}

    電話番号
    ${data.phoneNumber}
    
    お問い合わせ内容
    ${data.msg}
    `,
  });

  res.status(200).json({
    success: true,
  });
};
