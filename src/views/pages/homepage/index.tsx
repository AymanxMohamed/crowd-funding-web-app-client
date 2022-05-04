import React from 'react';
import Header from './components/Header';
import HeroHome from './components/HeroHome';
import FeaturesHome from './components/Features';
import LatestFeatured from './components/LatestFeatured';
import Feedbacks from './components/Feedbacks';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import LatestProjects from "./components/LatestProjects";
const HomePage: React.FC = (): JSX.Element => {
  return (
    <>
        <div className="flex flex-col min-h-screen overflow-hidden">

            {/*  Page content */}
            <main className="flex-grow">

                {/*  Page sections */}
                <HeroHome />
                <FeaturesHome />
                <LatestProjects />
                <LatestFeatured />
                <Feedbacks />
                <Newsletter />

            </main>

            {/*  Site footer */}
            <Footer />

        </div>
    </>
  );
};

export default HomePage;
