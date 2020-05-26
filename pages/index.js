import Head from 'next/head';
import Header from '../components/Header.js';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Jo's Shop</title>
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <Header />

      <main>
        <div>Home</div>
      </main>
      <style jsx>{`
        .container {
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          background-color: lightgrey;
        }
      `}</style>
    </div>
  );
}
