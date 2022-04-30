import React from 'react';
import Header from './components/Header';
import HeroHome from './components/HeroHome';
import FeaturesHome from './components/Features';
import FeaturesBlocks from './components/FeaturesBlocks';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
const HomePage: React.FC = (): JSX.Element => {
  return (
    <>
        <div className="flex flex-col min-h-screen overflow-hidden">

            {/*  Site header */}
            <Header />

            {/*  Page content */}
            <main className="flex-grow">

                {/*  Page sections */}
                <HeroHome />
                <FeaturesHome />
                <FeaturesBlocks />
                <Testimonials />
                <Newsletter />

            </main>

            {/*  Site footer */}
            <Footer />

        </div>
    </>
  );
};

export default HomePage;
