import { GetServerSideProps } from "next";
import { client } from "../../libs/client";
import { News } from "../../types/news";

type Props = {
  news: News;
};

export default function NewsDetail({ news }: Props) {
  return (
    <div className="bg-gray-50">
      <div className="px-10 py-6 mx-auto">
        <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50">
          <img
            className="object-cover w-44 shadow-sm h-full"
            src={news.eyeCatch.url}
          />
          <div className="mt-2">
            <div className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-blue-500">
              {news.title}
            </div>
          </div>
          <div className="mt-2">
            <div
              className="text-2xl text-gray-700 mt-4 rounded "
              dangerouslySetInnerHTML={{
                __html: ` ${news.body}`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: "news",
    contentId: idExceptArray,
  });

  return {
    props: {
      news: data,
    },
  };
};
