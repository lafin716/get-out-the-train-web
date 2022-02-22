import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import IntroSection from '@/components/intro-section';
import ListSection from '@/components/list-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <Page>
      <NextSeo title="GOTT - Get Out the Train!" description="매번 지나치지 말고, 스마트하게 내리자!" />
      <Header />
      <main>
        <IntroSection />
        <ListSection />
      </main>
      <Footer />
    </Page>
  );
}
