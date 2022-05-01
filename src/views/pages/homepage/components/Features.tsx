import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import ArtisticEndeavor from '../../../../assets/images/Artistic-Endeavor.jpg';
import UniqueInvention from '../../../../assets/images/Unique-Invention.jpg';
import CreativeIdeas from '../../../../assets/images/Creative-Ideas.png';

const Features: React.FC = (): JSX.Element => {

  const [tab, setTab] = useState(1);
  const tabs = useRef(null);
  const items = [
    {id:1,title:"Artistic Endeavor",image:ArtisticEndeavor},
    {id:2,title:"Creative Ideas",image:CreativeIdeas},
    {id:3,title:"Unique Invention",image:UniqueInvention}
  ]
  const heightFix = () => {
    // @ts-ignore
    if (tabs.current.children[tab]) {
      // @ts-ignore
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none " aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Fundraising Categories</h1>
            <p className="text-xl text-gray-600">The efforts of one person can't move mountains. It's the strength of us all working together that makes a change.</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">

              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                {items.map((item,key) =>
                    <a
                        className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== item.id ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                        href="src/views/pages/homepage/components/Features#"
                        onClick={(e) => { e.preventDefault(); setTab(item.id); }}
                        key={key}
                    >
                      <div>
                        <div className="font-bold leading-snug tracking-tight mb-1">Raise Money For Your {item.title}</div>
                      </div>
                      <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                        </svg>
                      </div>
                    </a>
                )}

              </div>
            </div>

            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                {items.map((item,key) =>
                    <Transition
                        show={tab === item.id}
                        appear={true}
                        className="w-full"
                        enter="transition ease-in-out duration-700 transform order-first"
                        enterStart="opacity-0 translate-y-16"
                        enterEnd="opacity-100 translate-y-0"
                        leave="transition ease-in-out duration-300 transform absolute"
                        leaveStart="opacity-100 translate-y-0"
                        leaveEnd="opacity-0 -translate-y-16"
                        key={key}
                    >
                      <div className="relative inline-flex flex-col">
                        <img className="md:max-w-none mx-auto rounded" src={item.image} width="500" height="462" alt="Features bg" />
                      </div>
                    </Transition>
                )}

              </div>
            </div >

          </div >

        </div >
      </div >
    </section >
  );
}

export default Features;
