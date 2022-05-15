import useAxios from "./useAxios";

const useAccountApi = () => {
  const axiosClient = useAxios();


  const removeAccount = async (password:string) => {
      const formData = new FormData();
      formData.append('password',password)
      return  await axiosClient.post("users/remove",formData);
  }

  return {
    removeAccount,
  };
};

export default useAccountApi;
