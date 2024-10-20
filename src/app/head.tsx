"use client";

import { usePathname } from "next/navigation";
import React from "react";

const Head = () => {
  const pathname = usePathname();

  const title = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Pedro Silva ${
      pathname === "/" ? "" : "• " + title.replace(/[-/]/g, " ")
    }`,
    description:
      "I'm a Senior Front End Developer. I love to build things for the web and mobile devices. I love to learn new things and I'm always looking for new challenges.",
    keywords:
      "Pedro Silva, Front End, Front End Developer, Senior Front End, Web Developer, Software Engineer, Full Stack Developer, React, Next.js, Node.js, JavaScript, TypeScript, Tailwind CSS, MongoDB, Express.js, GraphQL, Prisma, PostgreSQL, MySQL, SQLite, Firebase, AWS, GCP, Web Development, Mobile Development, Figma.",
    type: "website",
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta name="keywords" content={meta.keywords} />
      <meta
        property="og:url"
        content={`https://pedrosilvadev.vercel.app${pathname}`}
      />
      <link
        rel="canonical"
        href={`https://pedrosilvadev.vercel.app${pathname}`}
      />

      <link rel="shortcut icon" href="/favicon.png" />
      <link rel="me" href="mailto:comercial.pedrosilvadev@gmail.com" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Pedro Silva" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
    </>
  );
};

export default Head;
