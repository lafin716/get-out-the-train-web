import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import IntroSection from '@/components/intro-section';
import ListSection from '@/components/list-section';
import Footer from '@/components/footer';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA0nggqDQ1qFwfl7WCdgEYta3U4nKJmzOw",
//   authDomain: "get-out-the-train.firebaseapp.com",
//   projectId: "get-out-the-train",
//   storageBucket: "get-out-the-train.appspot.com",
//   messagingSenderId: "535391521309",
//   appId: "1:535391521309:web:055ed1ff57775e2e1614f4",
//   measurementId: "G-WD3918NWVM"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

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
