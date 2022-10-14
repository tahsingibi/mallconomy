import Head from 'next/head';
import Intro from '../components/Intro';
import { useAll } from '../components/Context';
import AppHome from '../components/AppHome';

export default function Home() {
  const { login } = useAll();

  return (
    <div>
      <Head>
        <title>TestCase APP.</title>
        <meta name="description" content="Nextjs kullanılarak geliştirilmiştir." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{login ? <AppHome /> : <Intro />}</main>
    </div>
  );
}
