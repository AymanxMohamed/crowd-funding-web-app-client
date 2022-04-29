import React from 'react';
import {useParams} from 'react-router-dom';

const AccountDetailView: React.FC = (): JSX.Element => {
  const params = useParams();
  return <>{`View Account ID "${params.id}"`}</>;
};

export default AccountDetailView;
