import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "ideation-circuit" || "",
  apiKey: process.env.API_KEY || "",
});
