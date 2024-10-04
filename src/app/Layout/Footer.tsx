import clsx from "clsx";
import React from "react";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { navLinks, footerData } from "../static/data";
import Image from "next/image";

export default async function Footer() {
  return (
    <Bounded as="footer" className="text-slate-600">
      <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row ">
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
          >
            <Image
              src="/images/logo_w.png"
              alt="Logo"
              className="overflow-hidden"
              width={100}
              height={100}
              layout="fixed"
            />
          </Link>
          <span
            className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
            aria-hidden={true}
          >
            /
          </span>
          <p className=" text-sm text-slate-300 ">
            © {new Date().getFullYear()} {footerData.name}
          </p>
        </div>
        <nav className="navigation" aria-label="Footer Navigation">
          <ul className="flex items-center gap-1">
            {navLinks.map(({ link, label }, index) => (
              <React.Fragment key={label}>
                <li>
                  <Link
                    target="_blank"
                    className={clsx(
                      "group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400"
                    )}
                    href={link}
                  >
                    {label}
                  </Link>
                </li>
                {index < navLinks.length - 1 && (
                  <span
                    className="text-4xl font-thin leading-[0] text-slate-400"
                    aria-hidden="true"
                  >
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
        <div className="socials inline-flex justify-center sm:justify-end">
          {footerData?.github_link && (
            <Link
              href={footerData.github_link}
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label={footerData.name + " on GitHub"}
            >
              <FaGithub />
            </Link>
          )}
          {footerData?.linkedin_link && (
            <Link
              href={footerData.linkedin_link}
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label={footerData.name + " on LinkedIn"}
            >
              <FaLinkedin />
            </Link>
          )}
        </div>
      </div>
    </Bounded>
  );
}
