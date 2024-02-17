import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../../components/buttons/Button";
import BlogCard from "@/components/cards/blog_cards";

import { getPosts } from "@/lib/sanity";

function Hero() {
  return (
    <div className="w-full h-[400px] bg-slate-800 relative">
      <Image
        className="w-full h-full object-cover brightness-50"
        src="/bg/service_bg_01.png"
        alt="Service Background Cover"
        fill
      />
      <div className="absolute w-full h-full top-0 flex justify-center items-center z-10">
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-bold text-3xl lg:text-4xl">
            Our Blog
          </h1>
          <p className=" lg:w-1/2 text-center">
            Source Point Delivers Next Generation Technology Services Designed
            To Optimize Your Business Via Secure & Redundant Cloud-based
            Infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
}

async function GetPosts() {
  const posts = await getPosts();

  return (
    <div>
      <div className="h-5"></div>
      <div className="w-full flex flex-wrap justify-center gap-4">
        {posts.map((post) => (
          <div
            className="bg-slate-800 w-full flex rounded-lg border border-cyan-500 lg:w-[400px] xl:w-[500px] mx-4 lg:mx-0"
            key={post.title}
          >
            <div className="w-1/3 h-full relative rounded-lg">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={post.image}
                alt="Blog Cover"
                fill
              />
            </div>

            <div className="w-2/3 p-4 flex flex-col items-start gap-2">
              <p className="font-semibold text-xl text-start">{post.title}</p>
              <p className="font-semibold text-start">{post.author.name}</p>
              <p className="text-start flex gap-2">
                {post.categories.map((item) => (
                  <span
                    key={item.title}
                    className="px-2 py-1 bg-slate-700 rounded-full"
                  >
                    {item.title}
                  </span>
                ))}
              </p>
              <Link href={"/blog/" + post.slug}>
                <Button>Read More</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BlogPage() {
  return (
    <div>
      <div className="h-10"></div>
      <Hero />
      <div className="h-20"></div>
      <GetPosts />
      <div className="h-20"></div>
      <BlogCard />
    </div>
  );
}

export default BlogPage;
