import React from 'react';
import Header from "../../../pages/homepage/components/Header";

const Wrapper: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header/>
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {children}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Wrapper;