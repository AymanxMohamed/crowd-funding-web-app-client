import useAxios from "./useAxios";

const useProjectsApi = () => {
  const axiosClient = useAxios();

  const getProjects = async () => {
    const response = await axiosClient.get("projects");
    return response.data;
  };

  return {
    getProjects,
  };
};

export default useProjectsApi;
