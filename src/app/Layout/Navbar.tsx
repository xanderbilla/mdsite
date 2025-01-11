"use client";

import clsx from "clsx";
import React, { useState } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import { navLinks } from "../static/data";
import Image from "next/image";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  console.log(pathname);

  return (
    <Bounded className="py-0 md:px-6 md:py-0 lg:py-0">
      <nav aria-label="Main navigation">
        <ul className="flex flex-col justify-between rounded-b-lg bg-slate-50 px-4 py-2 md:m-4 md:flex-row md:items-center md:rounded-xl">
          <div className="flex items-center justify-between">
            <NameLogo logo="/images/logo.png" />
            <button
              aria-expanded={open}
              aria-label="Open menu"
              className="block p-2 text-2xl text-slate-800 md:hidden"
              onClick={() => setOpen(true)}
            >
              <MdMenu />
            </button>
          </div>
          <div
            className={clsx(
              "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden",
              open ? "translate-x-0" : "translate-x-[100%]"
            )}
          >
            <button
              aria-label="Close menu"
              aria-expanded={open}
              className="fixed right-4 top-3 block p-2 text-2xl text-slate-800 md:hidden "
              onClick={() => setOpen(false)}
            >
              <MdClose />
            </button>
            {navLinks.map(({ link, label }, index) => (
              <React.Fragment key={label}>
                <li className="first:mt-8">
                  <Link
                    className={clsx(
                      "group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900 "
                    )}
                    href={link}
                    onClick={() => setOpen(false)}
                    aria-current={pathname.includes(link) ? "page" : undefined}
                  >
                    <span
                      className={clsx(
                        "absolute inset-0 z-0 h-full translate-y-12 rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                        pathname.includes(link)
                          ? "translate-y-6"
                          : "translate-y-18"
                      )}
                    />
                    <span className="relative">{label}</span>
                  </Link>
                </li>
                {index < navLinks.length - 1 && (
                  <span
                    className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
                    aria-hidden="true"
                  >
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
            <li>
            <Button linkField="https://zalgorythmix.vercel.app/" label="What I Know?" className="ml-3" />
            </li>
          </div>
          <DesktopMenu
            pathname={pathname}
            asLink={(link) => link}
            navLinks={navLinks}
          />
        </ul>
      </nav>
    </Bounded>
  );
}

function NameLogo({ logo }: { logo: string }) {
  return (
    <Link
      href="/"
      aria-label="Home page"
      className="text-xl font-extrabold tracking-tighter text-slate-900"
    >
      <Image
        src={logo}
        alt="Logo"
        width={150}
        height={100}
        layout="fixed"
      />
    </Link>
  );
}

function DesktopMenu({
  pathname,
  asLink,
  navLinks,
}: {
  pathname: string;
  asLink: (link: string) => string;
  navLinks: { link: string; label: string }[];
}) {
  return (
    <div className="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex">
      {navLinks.map(({ link, label }, index) => (
        <React.Fragment key={label}>
          <li>
            <Link
              className={clsx(
                "group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900"
              )}
              href={link}
              aria-current={
                pathname.includes(asLink(link) as string) ? "page" : undefined
              }
            >
              <span
                className={clsx(
                  "absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
                  pathname.includes(asLink(link) as string)
                    ? "translate-y-6"
                    : "translate-y-8"
                )}
              />
              <span className="relative">{label}</span>
            </Link>
          </li>
          {index < navLinks.length - 1 && (
            <span
              className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
              aria-hidden="true"
            >
              /
            </span>
          )}
        </React.Fragment>
      ))}
      <li>
        <Button linkField="https://zalgorythmix.vercel.app/" label="What I Know?" className="ml-3" />
      </li>
    </div>
  );
}
