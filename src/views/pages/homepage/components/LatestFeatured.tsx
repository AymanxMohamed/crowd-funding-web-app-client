import React, {useEffect, useState} from 'react';
import moneyFormat from "../../../common/utils/moneyFormat";
import {useNavigate} from "react-router-dom";
import useProjectsApi from "../../../../services/hooks/useProjectsApi";
import Loading from "../../../common/SharedComponents/Loading";
import imageLink from "../../../common/utils/imageLink";

const LatestFeatured: React.FC = (): JSX.Element => {
    const [ready, setReady] = useState(false);
    const [projects, setProjects] = useState([]);

    const projectsApi = useProjectsApi();

    useEffect(() => {
        projectsApi.getFeaturedProjects().then((projects) => {
            setProjects(projects);
            setReady(true)
        });
    }, []);
    if(!ready)
        return <Loading/>
    else
        return (
    <section className="relative" id="featured">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/4 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Latest 5 Featured Projects</h2>
          </div>

          {/* Items */}
          <div className="mx-auto flex flex-wrap gap-6 items-center w-full">

              {projects.map((project:any,key) =>
            <div className="relative flex flex-col items-center rounded  rounded-t-lg flex-1 " key={key}>
                    <div className="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img className="rounded-t-lg" src={imageLink(project.images[0])}
                                 alt=""/>
                        </a>
                        <div className="p-6 flex justify-between flex place-items-center">
                            <h5 className="text-gray-900 text-xl font-medium mb-2 whitespace-nowrap">{project.title}</h5>
                            <span className="text-2xl inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded-full">{moneyFormat(project.total_donations)} / {moneyFormat(project.total_target)}</span>
                        </div>
                    </div>
                </div>
                  )}

          </div>

        </div>
      </div>
    </section>
  );
}

export default LatestFeatured;
