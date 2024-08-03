import React from "react";
import Link from "next/link";
import Image from "next/image";

function Social() {
  const social = [
    {
      name: "Github",
      href: "https://github.com/xanderbilla",
      color: "#2b3137",
      icon: "/icons/github.svg",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/xander.billa",
      color: "#4f5bd5",
      icon: "/icons/instagram.svg",
    },
    {
      name: "Linkedin",
      href: "https://linkedin.com/in/xanderbilla",
      color: "#0077b5",
      icon: "/icons/linkedin.svg",
    },
    {
      name: "Youtube",
      href: "https://youtube.com/devxanderbilla",
      color: "#CD201F",
      icon: "/icons/youtube.svg",
    },
    {
      name: "Email",
      href: "mailto:dev.xanderbilla@gmail.com",
      color: "#0072c6",
      icon: "/icons/mail.svg",
    },
  ];
  return (
    <div className="flex items-center justify-center gap-4 py-4">
      {social.map((item, index) => (
        <Link
          href={item.href}
          target="_blank"
          key={index}
          className="relative h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
        >
          <Image
            src={item.icon}
            layout="fill"
            objectFit="cover"
            alt={item.name}
            className="cursor-pointer"
          />
        </Link>
      ))}
    </div>
  );
}

export default Social;
