import Head from 'next/head';
import Link from 'next/link';

export default function layout({ children }) {
  return (
    <>
      <Head>
        <title>Intro into Next by shaun THE GREAT!</title>
      </Head>

      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      { children }
    </>
  );
}
