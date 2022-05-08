import useAxios from "./useAxios";

const useProjectsApi = () => {
  const axiosClient = useAxios();

  const getProjects = async () => {
    const response = await axiosClient.get("projects");
    return response.data;
  };
  const getUserProjects = async (id:number) => {
    const response = await axiosClient.get(`users/${id}/projects`);
    return response.data;
  };
  const getProject = async (id:number) => {
    const response = await axiosClient.get("users/projects/"+id);
    return response.data;
  };

  return {
    getProject,
    getProjects,
    getUserProjects,
  };
};

export default useProjectsApi;
