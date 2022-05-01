import React, { useState } from 'react';
import Modal from '../utils/Modal';

import {Link} from "react-router-dom";
import moneyFormat from "../../../common/utils/moneyFormat";

const HeroHome: React.FC = (): JSX.Element => {

  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const projects = [
    {title:"Project 1",image:"https://mdbootstrap.com/img/Photos/Slides/img%20(13).jpg",raised:4000,description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    {title:"Project 2",image:"https://mdbootstrap.com/img/Photos/Slides/img%20(14).jpg",raised:4000,description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    {title:"Project 3",image:"https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg",raised:4000,description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
  ]
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%"/>
              <stop stopColor="#EAEAEA" offset="77.402%"/>
              <stop stopColor="#DFDFDF" offset="100%"/>
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128"/>
            <circle cx="155" cy="443" r="64"/>
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out">Bring <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">CREATIVE</span> Projects
              To Life</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Creative work shows
                us what’s possible. <br/> Help fund it here.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out"
                   data-aos-delay="300">
                <div>
                  <Link className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                        to="campaign/new">
                    Start a Campaign</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade relative" data-bs-ride="carousel">
              <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner relative w-full overflow-hidden">

                  {projects.map((project,key) =>
                      <div className={key === 1? "carousel-item active relative float-left w-full":"carousel-item relative float-left w-full"} key={key}>
                        <img
                            src={project.image}
                            className="block w-full"
                            alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                          <h3 className="text-xl">{project.title}</h3>
                          <h5 className="text-xl">{moneyFormat(project.raised)}</h5>
                          <p>{project.description}</p>
                        </div>
                      </div>
                  )}


              </div>
              <button
                  className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                  className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
              >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>


            {/* Modal */}
            <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen}
                  handleClose={() => setVideoModalOpen(false)}>
              <div className="relative pb-9/16">
                <iframe
                  className="absolute w-full h-full"
                  src="https://www.youtube.com/embed/0ZrzQYzWq68"
                  title="Video"
                  allowFullScreen/>
              </div>
            </Modal>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;
