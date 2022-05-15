import React from 'react';
import Moment from 'moment';
import imageLink from "../../../common/utils/imageLink";


type Props = {
  donations: {}[]
}
const ProjectDonationsList: React.FC<Props> = ({donations}): JSX.Element => {
  return (
      <>
        <div className="w-100 p-4 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 text-left">
          <div className="flex justify-between items-center mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Donations</h5>
          </div>
          <div className="flow-root">
              {donations.length===0 && <h2 className="text-center text-xl">No Donations Yet</h2>}
              {donations.length>0 &&
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
              {donations.map((donation:any,index)=>
                  <li className="py-3 sm:py-4" key={index}>
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={imageLink(donation.author_picture,'user.png')}/>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {donation.author_name}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {donation.message} - {Moment(donation.created_at).format('d MMM YYYY')}
                        </p>
                      </div>
                      <div className="text-green-500 inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        +${donation.amount}
                      </div>
                    </div>
                  </li>
              )}

            </ul>
              }
          </div>
        </div>

      </>
  );
};

export default ProjectDonationsList;
