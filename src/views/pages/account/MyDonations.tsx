import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import useProjectsApi from '../../../services/hooks/useProjectsApi';
import Loading from "../../common/SharedComponents/Loading";
import imageLink from "../../common/utils/imageLink";
import moneyFormat from "../../common/utils/moneyFormat";
import moment from "moment";

const MyDonations: React.FC = (): JSX.Element => {
  const [loaded, setLoaded] = useState(false);
  const [donations, setDonations] = useState([]);


  const projectsApi = useProjectsApi();

  useEffect(() => {
    projectsApi.getMyDonations().then((donations) => {
      setDonations(donations);
      setLoaded(true)
    });
  }, []);
  return !loaded ? <Loading/> : (
      <>
        <div className="block p-6 text-left w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 self-start text-2xl font-bold tracking-tight text-gray-900 dark:text-white">My Donations</h5>
          <hr/>
          <ul role="list" className="divide-y divide-gray-200">
            {donations.map((donation:any) => (
                <li key={donation.id} className="py-4">
                  <div className="flex space-x-3">
                    <img className="h-6 w-6 rounded-full" src={imageLink(donation.project_picture)} alt="" />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium">{donation.project}</h3>
                        <p className="text-sm text-gray-500 text-green-600">+{moneyFormat(donation.amount)}</p>
                      </div>
                      <p className="text-sm text-gray-500">
                        {moment(donation.created_at).format('YYYY-MM-DD HH:mm')}
                      </p>
                    </div>
                  </div>
                </li>
            ))}
          </ul>
        </div>

      </>
  )

};

export default MyDonations;
