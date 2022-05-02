import React  from "react";
import Wrapper from "../../common/SharedComponents/ui/wrapper";
import Breadcrumb from "../../common/SharedComponents/ui/Breadcrumb";

const Profile: React.FC = (): JSX.Element => {

  return (
    <Wrapper>
      <Breadcrumb title={"Settings"} parents={[{title:"Account",link:'accounts'}]}></Breadcrumb>
    </Wrapper>
  );
};

export default Profile;
