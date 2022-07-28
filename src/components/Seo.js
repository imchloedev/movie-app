import Head from "next/head"

export default function Seo({title, children}) {
  return (
    <Head>
      <title>{title} | Netflix</title>
      {children}
    </Head>
  )
}