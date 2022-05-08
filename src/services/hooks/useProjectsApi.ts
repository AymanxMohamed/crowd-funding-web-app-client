import useAxios from "./useAxios";

const useProjectsApi = () => {
  const axiosClient = useAxios();

  const getProjects = async () => {
    const response = await axiosClient.get("projects");
    return response.data;
  };
  const getProject = async (id:number) => {
    const response = await axiosClient.get("projects/"+id);
    return response.data;
  };

  return {
    getProject,
    getProjects,
  };
};

export default useProjectsApi;
