import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "09p9rr7d",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2022-03-07", // use current date (YYYY-MM-DD) to target the latest API version
});

export async function getPosts() {
  const posts = await client.fetch(`*[_type == "post"]{
        _id,
        title,
        "slug": slug.current,
        "image": mainImage.asset->url,
        publishedAt,
        "body": pt::text(body),
        "author": *[_type == 'author' && _id == ^.author._ref][0]{
          _id,
          name,
          "slug": slug.current,
          },
          categories[]->{
          _id,
          title
        },
        "content": body,
      }`);
  return posts;
}

export async function getTwoPosts() {
  const posts = await client.fetch(`*[_type == "post"]{
          _id,
          title,
          "slug": slug.current,
          "image": mainImage.asset->url,
          publishedAt,
          "body": pt::text(body),
          "author": *[_type == 'author' && _id == ^.author._ref][0]{
            _id,
            name,
            "slug": slug.current,
            },
            categories[]->{
            _id,
            title
          },
          "content": body,
        } | order(publishedAt desc) [0..1]`);
  return posts;
}
