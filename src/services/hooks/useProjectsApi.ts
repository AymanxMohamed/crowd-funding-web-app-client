import useAxios from "./useAxios";

const useProjectsApi = () => {
  const axiosClient = useAxios();

  const getProjects = async () => {
    const response = await axiosClient.get("projects");
    return response.data;
  };
  const getFeaturedProjects = async () => {
    const response = await axiosClient.get("projects/featured");
    return response.data;
  };
  const getLatestProjects = async () => {
    const response = await axiosClient.get("projects/latest");
    return response.data;
  };

  const getMyProjects = async () => {
    const response = await axiosClient.get(`projects/myprojects`);
    return response.data;
  };
  const getMyDonations = async () => {
    const response = await axiosClient.get(`donations/`);
    return response.data;
  };

  const getProject = async (id: number) => {
    const response = await axiosClient.get("projects/" + id);
    return response.data;
  };
  const searchProjects = async (keyword:string) => {
    const response = await axiosClient.get("projects/search/" + keyword);
    return response.data;
  };

  const postProject = async (formData: any) => {
    try {
      const response = await axiosClient.post("projects/create/", formData);
      if (response.status === 201) {
        return {
          success: true,
          createdProject: response.data,
        }
      }
      return response.data;
    } catch (err: any) {
      if (err.message === "Network Error") {
        throw new Error("Server is Offline Now");
      } else if (err.response.status === 400) {
        return {
          success: false,
          errors: err.response.data,
        }
      }
      return err.response.data;
    }
  }

  const getCategories = async () => {
    const response = await axiosClient.get("categories");
    return response.data;
  }

  const addComment = async (project:string,content:string) => {
      const formData = new FormData();
      formData.append('project',project)
      formData.append('content',content)
      return  await axiosClient.post("comments/create", formData);
  }
  const getTags = async () => {
    const response = await axiosClient.get("tags");
    return response.data;
  }

  return {
    getProject,
    getProjects,
    getMyProjects,
    getCategories,
    getTags,
    postProject,
    getFeaturedProjects,
    getLatestProjects,
    addComment,
    getMyDonations,
    searchProjects
  };
};

export default useProjectsApi;
