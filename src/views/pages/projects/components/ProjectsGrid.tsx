import { Link } from 'react-router-dom';
import ProjectCard from "./ProjectCard";

const ProjectsGrid: React.FC<any> = ({ title, projects }): JSX.Element => {
    return (
        <div className="block p-6 text-left w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex">
                <h5 className="grow mb-2 self-start text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <Link to={"/my-projects/new"} type="button" className="mb-2 grow-0 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
                    New Project
                </Link>
            </div>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 place-content-evenly mt-8">

                {projects.length > 0 && projects.map((project: any) => (
                    <ProjectCard
                        key={project.id}
                        projectData={project}
                        projectUrl={`projects/${project.id}`}
                        actionButton="DONATE"
                    />
                ))}
                {projects.length === 0 && <h2 className="text-center col-span-full text-xl">No Projects Found</h2>}
            </div>
        </div>

    );
};

export default ProjectsGrid;
