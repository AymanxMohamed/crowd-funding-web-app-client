import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import useAuth from "../../../../services/hooks/useAuthSlice";
import useProjectsApi from "../../../../services/hooks/useProjectsApi";
import Loading from "../../../common/SharedComponents/Loading";
import imageLink from "../../../common/utils/imageLink";
import ImageGallery from 'react-image-gallery';

const HeroHome: React.FC = (): JSX.Element => {

    const {user} = useAuth();
    const [ready, setReady] = useState(false);
    const [imagesList, setImagesList] = useState<[{ original: string, thumbnail: string }] | []>([]);
    const [projects, setProjects] = useState([]);

    const projectsApi = useProjectsApi();

    useEffect(() => {
        projectsApi.getLatestProjects().then((projects) => {
            setProjects(projects);
            setReady(true)
        });
    }, []);
    useEffect(() => {
        projects.map((project) => {
            // @ts-ignore
            let image = imageLink(project.images[0])
            let imgObj = {
                original: image,
                thumbnail: image,
            };
            // @ts-ignore
            setImagesList(list => [...list, imgObj])
            console.log(imagesList)
        })
    }, [projects]);

    if (!ready)
        return <Loading/>
    return (
        <section className="relative">

            {/* Illustration behind hero content */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
                 aria-hidden="true">
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
                            <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out"
                               data-aos-delay="150">Creative work shows
                                us what’s possible. <br/> Help fund it here.</p>
                            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                                 data-aos="zoom-y-out"
                                 data-aos-delay="300">
                                <div>
                                    <Link
                                        className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                                        to={"/my-projects/new"}>
                                        Start a Project</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Hero image */}
                    <ImageGallery items={imagesList} showFullscreenButton={false} autoPlay={true} showPlayButton={false}/>
                </div>

            </div>
        </section>
    );
}

export default HeroHome;
