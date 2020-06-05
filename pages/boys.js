import Head from 'next/head';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default function Boys() {
  return (
    <div className="container">
      <Head>
        <title>Jo's Shop</title>
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <Header />
      <main>
        <div>Boys</div>
      </main>
      <Footer />
      <style jsx>{`
        .container {
        }

        main {
          margin-top: 100px;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          margin-top: 0;
          margin-left: 0;
          background-color: white;
        }
      `}</style>
    </div>
  );
}
