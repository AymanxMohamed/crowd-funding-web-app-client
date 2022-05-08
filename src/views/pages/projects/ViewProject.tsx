import React, {useEffect, useState} from 'react'
import CircularProgress from "../../common/SharedComponents/CircularProgress";
import ProjectDonationsList from "./components/ProjectDonationsList";
import ProjectCommentsList from "./components/ProjectCommentsList";
import {Link, useParams} from "react-router-dom";
import ProjectDetailsCard from "./components/ProjectDetailsCard";
import {useAppSelector} from "../../../app/hooks";
import useProjectsApi from "../../../services/hooks/useProjectsApi";
import {Carousel} from "react-responsive-carousel";
import {MEDIA_URL} from "../../../app/config";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ViewProject: React.FC = (): JSX.Element => {
  const {id} = useParams()
  const [project, setProject] = useState({} as any)
  const [loaded,setLoaded] = useState(false)
  const projectAPI = useProjectsApi();
  useEffect(()=>{
    // @ts-ignore
    projectAPI.getProject(parseInt(id)).then(data => {
          setProject(data);
          setLoaded(true);
        }
    );
  },[id])

  if(!loaded)
    return <h4>Not Loaded</h4>
  return (
      <div className="bg-white">
          {/* Image gallery */}
          <div className="mx-auto">
              <Carousel autoPlay={true} showStatus={false} dynamicHeight={true} transitionTime={2000}>
                  {project.images.map((image: any,key:number)=>
                      <div key={key}>
                          <img src={MEDIA_URL + image.image_name} />
                          <p className="legend">{project.title}</p>
                      </div>
                  )}
              </Carousel>
          </div>
        <div className="border-t mt-8">
            <ul className="nav nav-tabs nav-justified flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
                id="tabs-tabJustify" role="tablist">
              <li className="nav-item flex-grow text-center" role="presentation">
                <a
                    href="#tabs-homeJustify"
                    className="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
                    id="tabs-home-tabJustify"
                    data-bs-toggle="pill"
                    data-bs-target="#tabs-homeJustify"
                    role="tab"
                    aria-controls="tabs-homeJustify"
                    aimage_namezria-selected="true"
                >
                  Details
                </a>
              </li>
              <li className="nav-item flex-grow text-center" role="presentation">
                <a
                    href="#tabs-profileJustify"
                    className="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                    id="tabs-profile-tabJustify"
                    data-bs-toggle="pill"
                    data-bs-target="#tabs-profileJustify"
                    role="tab"
                    aria-controls="tabs-profileJustify"
                    aria-selected="false"
                >
                  Comments
                </a>
              </li>
              <li className="nav-item flex-grow text-center" role="presentation">
                <a
                    href="#tabs-messagesJustify"
                    className="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                    id="tabs-messages-tabJustify"
                    data-bs-toggle="pill"
                    data-bs-target="#tabs-messagesJustify"
                    role="tab"
                    aria-controls="tabs-messagesJustify"
                    aria-selected="false"
                >
                  Donations
                </a>
              </li>
            </ul>
            <div className="tab-content" id="tabs-tabContentJustify">
              <div className="tab-pane fade show active" id="tabs-homeJustify" role="tabpanel"
                   aria-labelledby="tabs-home-tabJustify">
                <ProjectDetailsCard project={project}/>
              </div>
              <div className="tab-pane fade" id="tabs-profileJustify" role="tabpanel"
                   aria-labelledby="tabs-profile-tabJustify">
                <ProjectCommentsList comments={project.comments}/>
              </div>
              <div className="tab-pane fade" id="tabs-messagesJustify" role="tabpanel"
                   aria-labelledby="tabs-profile-tabJustify">
                <ProjectDonationsList donations={project.donations}/>
              </div>
            </div>

        </div>

      </div>
  )
}
export default ViewProject;