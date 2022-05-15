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
  const makeDonation = async (project:string,message:string,amount:number) => {
      const formData = new FormData();
      formData.append('project',project)
      formData.append('message',message)
      formData.append('amount',amount+"")
      return  await axiosClient.post("donations/create", formData);
  }
  const reportProject = async (project_id:string,details:string) => {
      const formData = new FormData();
      formData.append('related_comment',project_id)
      formData.append('details',details)
      return  await axiosClient.post("reports/projects/create/", formData);
  }
  const reportComment = async (comment_id:string,details:string) => {
      const formData = new FormData();
      formData.append('related_comment',comment_id)
      formData.append('details',details)
      return  await axiosClient.post("reports/comments/create/", formData);
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
    searchProjects,
    makeDonation,
    reportProject,
    reportComment
  };
};

export default useProjectsApi;
