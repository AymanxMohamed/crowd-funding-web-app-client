import React, {useEffect, useState} from 'react';
import useProjectsApi from "../../../../services/hooks/useProjectsApi";
import Loading from "../../../common/SharedComponents/Loading";
import ProjectCard from "./ProjectCard";

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
    if (!ready)
        return <Loading/>
    else
        return (
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-xl font-bold text-gray-900">Featured Projects</h2>

                    <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">

                        {projects.map((project: any, key) =>
                            <ProjectCard project={project} key={key}/>
                        )}
                    </div>
                </div>
            </div>
        );
}

export default LatestFeatured;
