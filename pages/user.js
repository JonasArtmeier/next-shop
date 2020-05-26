import Head from 'next/head';
import Header from '../components/Header.js';

export default function User() {
  return (
    <div className="container">
      <Head>
        <title>Jo's Shop</title>
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <Header />
      <main>
        <div>User</div>
      </main>
    </div>
  );
}