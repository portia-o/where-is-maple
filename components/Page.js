import React from "react";
import Head from "next/head";

export function Page({ title, children }) {
  return (
    <div className="page home__container">
      <Head>
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Oxygen+Mono&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="home__main">{children}</main>
    </div>
  );
}
