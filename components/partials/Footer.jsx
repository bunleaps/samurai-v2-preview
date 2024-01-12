import { TitleLine, TitleLineWhite } from "../TitleBar";
import {
  SOCIALS,
  QUICK_LINKS,
  USEFUL_LINKS,
  EXTRA_USEFUL_LINKS,
} from "@/constants";
import Link from "next/link";
import Image from "next/image";
import Button from "../buttons/Button";

import { getTwoPosts } from "@/lib/sanity";

async function Industries() {
  const posts = await getTwoPosts();
  // console.log(posts);

  return (
    <div className="w-full py-10 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <TitleLine>Industries</TitleLine>
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-2xl lg:text-3xl px-3">
            News For Our Industries
          </h1>
          <p className="lg:w-2/3 px-4">
            Source Point Delivers Next Generation Technology Services Designed
            To Optimize Your Business Via Secure & Redundant Cloud-based
            Infrastructure.
          </p>
        </div>
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
    </div>
  );
}

function Newsletter() {
  return (
    <div className="w-full h-[300px] py-10 bg-gradient-to-r from-cyan-500 to-blue-700 flex justify-center">
      <div className="w-full lg:w-3/4 h-full flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full lg:w-1/2 h-full">
          <div className="h-full flex flex-col justify-center gap-2 items-center lg:items-start text-center lg:text-start">
            <TitleLineWhite>Newsletter</TitleLineWhite>
            <h1 className="font-bold text-2xl lg:text-3xl">
              Subscribe Our Newsletter
            </h1>
            <p className="w-3/4">
              This Newsletter Provides the latest news about Cyber Security
              Services. Hope you like it.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full p-4">
          <div className="h-full flex flex-col justify-center gap-2 items-center lg:items-start text-center lg:text-start">
            <form className="mt-4 w-full flex flex-row">
              <input
                className="h-16 bg-white w-full py-3 px-6 outline-none text-lg text-slate-900 rounded rounded-l-full"
                type="text"
                placeholder="Enter your email address"
              />
              <span className="flex items-center bg-white rounded rounded-r-full pr-2">
                <button className="bg-gredient-dark hover:bg-gredient-light text-lg text-slate-900 bg-cyan-500 font-semibold py-3 px-7 rounded-full">
                  Subscribe
                </button>
              </span>
            </form>
            <p className="text-center">We Promise not to Spam you!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainFooter() {
  return (
    <div className="w-full h-[500px] lg:h-[350px] py-10 flex justify-center">
      <div className="w-full lg:w-3/4 h-full flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full lg:w-1/2 h-full p-4">
          <div className="h-full flex flex-col justify-center gap-2 items-start text-start">
            <Link href="/">
              <Image src="/logo.svg" alt="logo" width={111} height={44} />
            </Link>
            <p>
              We at BookRx are devoted to make the communication between Users
              and Pharmacies easy at every level possible. Users can easily book
              appointments with pharmacies, And our platform.
            </p>
            <div className="h-2"></div>
            <p className="font-semibold">Extra Links</p>
            <div className="text-xl flex gap-3">
              {SOCIALS.map((content) => (
                <a
                  className="hover:text-cyan-500"
                  key={content.key}
                  href={content.href}
                >
                  {content.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full p-4">
          <div className="h-full flex flex-col justify-center gap-2 items-start text-start">
            <div className="flex gap-10 lg:gap-15">
              <div>
                <h3 className="font-semibold text-primary">Quick Links</h3>
                <ul>
                  {QUICK_LINKS.map((link) => (
                    <li
                      className="mt-2 cursor-pointer hover:text-cyan-500"
                      key={link.key}
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Useful Links</h3>
                <ul>
                  {USEFUL_LINKS.map((link) => (
                    <li
                      className="mt-2 cursor-pointer hover:text-cyan-500"
                      key={link.key}
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Extra Links</h3>
                <ul>
                  {EXTRA_USEFUL_LINKS.map((link) => (
                    <li
                      className="mt-2 cursor-pointer hover:text-cyan-500"
                      key={link.key}
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Copyright() {
  return (
    <div className="text-center p-4 border-t border-slate-700">
      © Copyright {new Date().getFullYear()}, All Rights Reserved
    </div>
  );
}

function Footer() {
  return (
    <div className="text-white">
      <Industries />
      <Newsletter />
      <MainFooter />
      <Copyright />
    </div>
  );
}

export default Footer;
