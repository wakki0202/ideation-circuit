export type News = {
  id: string;
  body: string;
  title: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  eyeCatch: {
    url: string;
    height: number;
    width: number;
  };
};
