import React from "react";
import imageLink from "../../../common/utils/imageLink";
import moneyFormat from "../../../common/utils/moneyFormat";
import {Link} from "react-router-dom";
const ProjectCards: React.FC<any> = ({project}): JSX.Element => {
        return (
            <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                        src={imageLink(project.images[0])}
                        alt=""
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <Link to={"/projects/"+ project.id}>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {project.title.substring(0,20)}
                            </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{project.category_name}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{moneyFormat(project.total_donations)} / {moneyFormat(project.total_target)}</p>
                </div>
            </div>
        )
    }
export default ProjectCards;