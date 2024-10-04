"use client";

import { blogs } from "@/app/static/data";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { formatDate } from "@/lib/formatDate";
import { usePathname } from "next/navigation";
import React from "react";

type Props = object

export default function Page({}: Props) {
  const path = usePathname().split("/").pop();
  const blogData = blogs.find((blog) => blog.id === path);

  const createdDate = formatDate(blogData?.created_date);

  return (
    <Bounded className="w-full" as="article">
      <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20'">
        <Heading
          size="lg"
          as="h1"
          className="col-start-1 text-"
        >
            {blogData?.title}
        </Heading>
        <div className="flex gap-4 text-yellow-400">
          {blogData?.tags.map((techItem, index) => (
            <span key={index} className="text-lg font-bold">
              {techItem}
            </span>
          ))}
        </div>
        <p className="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300">
          {createdDate}
        </p>

        <div
          className="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20"
          dangerouslySetInnerHTML={
            blogData ? { __html: blogData.description } : undefined
          }
        />
      </div>
    </Bounded>
  );
}