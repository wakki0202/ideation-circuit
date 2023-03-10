import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { client } from "../libs/client"; // srcから見た絶対パスで指定
import type { News } from "../types/news"; // srcから見た絶対パスで指定
import Link from "next/link";

type Props = {
  news: Array<News>;
};

const News = ({ news }: Props) => {
  return (
    <div className=" w-11/12 m-auto">
      <ul className="w-11/12 m-auto flex gap-10">
        {news.map((news) => (
          <li key={news.id} className="my-5 w-10/12 m-auto">
            <Link href={`/news/${news.id}`} className="font-bold text-left">
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
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: "news" });

  return {
    props: {
      news: data.contents,
    },
  };
};

export default News;
