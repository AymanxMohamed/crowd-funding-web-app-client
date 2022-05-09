import React from 'react';
import Moment from 'moment';
import moneyFormat from "../../../common/utils/moneyFormat";
import {Link} from "react-router-dom";
import imageLink from "../../../common/utils/imageLink";



const ProjectDetailsCard: React.FC<any> = ({project}): JSX.Element => {
  return (
      <>
        <div className="w-100 p-4 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 text-left">
          <div className="flex justify-between items-center mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Details</h5>
          </div>
          <div className="flow-root">
              <article className="md:gap-8 md:grid md:grid-cols-3">
                  <div>
                      <div className="flex items-center mb-6 space-x-4">
                          <img className="w-10 h-10 rounded-full" src={imageLink(project.owner.profile_picture )}/>
                              <div className="space-y-1 font-medium dark:text-white">
                                  <p>{project.owner?.first_name + " " + project.owner?.last_name}</p>
                              </div>
                      </div>
                      <ul className="space-y-4 text-sm text-gray-700 dark:text-gray-400">
                          <li className="flex items-center">
                              Start Date: <b>{Moment(project.start_date).format("DD MMM YYYY")}</b>
                          </li>
                          <li className="flex items-center">
                              End Date: <b>{Moment(project.end_date).format("DD MMM YYYY")}</b>
                          </li>
                          <li className="flex items-center">
                              Total Target: <b>{moneyFormat(project.total_target)}</b>
                          </li>
                          <li className="flex items-center">
                              Total Donations: <b> {moneyFormat(project.total_donations |0 )}</b>
                          </li>

                      </ul>
                  </div>
                  <div className="col-span-2 mt-6 md:mt-0 flex flex-col justify-between">
                      <div className="flex items-start mb-5">
                          <div className="pr-4">
                              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                  {project.title}
                              </h4>
                          </div>

                      </div>
                      <p className="mb-2 font-light text-gray-500 dark:text-gray-400">{project.details}</p>
                        <div>
                            {project.tags.map((tag:{id:number, name:string})=>
                                <Link to="/projects/tag/1" key={tag.id} className="inline-block bg-gray-200 hover:bg-gray-300  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    #{tag.name}
                                </Link>
                            )}

                        </div>
                  </div>
              </article>
          </div>
        </div>

      </>
  );
};

export default ProjectDetailsCard;
