import { client, getPosts } from "../../../lib/sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const SingleBlogPage = async ({ params }) => {
  const posts = await getPosts();
  const postID = params.id[0];

  const singlePost = posts.find((post) => post.slug === postID);

  //   console.log(posts);
  //   console.log(postID);
  //   console.log(singlePost.content);

  const component = {
    block: {
      h1: ({ children }) => (
        <h1 className="text-3xl font-bold mb-1">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-2xl font-bold mb-1">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-xl font-bold mb-1">{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-lg font-bold mb-1">{children}</h4>
      ),
      normal: ({ children }) => <p className="mb-4">{children}</p>,
      blockquote: ({ children }) => (
        <blockquote className="border-l-purple-500">{children}</blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
      number: ({ children }) => <ol className="mt-lg">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => (
        <li style={{ listStyleType: "disclosure-closed" }}>{children}</li>
      ),
    },
    marks: {
      link: ({ value, children }) => {
        const target = (value?.href || "").startsWith("http")
          ? "_blank"
          : undefined;
        return (
          <a
            className="text-cyan-500"
            href={value?.href}
            target={target}
            rel={target === "_blank" && "noindex nofollow"}
          >
            {children}
          </a>
        );
      },
    },
    types: {
      image: (props) => (
        <div className="w-full h-80 relative my-10 rounded-lg">
          <Image
            src={urlFor(props.value.asset).url()}
            alt={singlePost.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      ),
    },
  };

  return (
    <div>
      <div className="h-10"></div>
      <div className="w-full h-[400px] bg-slate-800 relative">
        <Image
          className="w-full h-full object-cover brightness-50"
          src={singlePost.image}
          alt="Blog Cover"
          fill
        />
        <div className="absolute w-full h-full top-0 flex justify-center items-center z-10">
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-bold text-3xl lg:text-4xl">
              {singlePost.title}
            </h1>
            <p className="text-center">
              By <span className="font-semibold">{singlePost.author.name}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="h-10"></div>
      <div className="flex justify-center">
        <div className="w-full lg:w-1/2">
          <PortableText value={singlePost.content} components={component} />
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
