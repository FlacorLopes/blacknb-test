import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Header from '../components/header';
import MainSection from '../components/mainSection';
import Footer from '../components/footer';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Header />
      <MainSection />
      <Footer />
    </Layout>
  );
}
