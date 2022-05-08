import {useAppDispatch} from "../../app/hooks";
import {setTokens, setUser} from "../reducers/auth";
import LoginData from "../types/loginData";
import User from "../types/User";
import {
    updateStorageUserData,
} from "../utils/auhUtils";
import useAxios from "./useAxios";

const useAuthApi = () => {
    const dispatch = useAppDispatch();
    const axiosClient = useAxios();

    const refreshUserData = (newUserData: User) => {
        dispatch(setUser(newUserData));
        updateStorageUserData(newUserData);
    };


    const register = async (values: any) => {
        const formData = new FormData();
        formData.append("email", values.email);
        formData.append("password", values.password);
        formData.append("first_name", values.first_name);
        formData.append("last_name", values.last_name);
        formData.append("phone_number", values.phone_number);
        if (values.picture)
            formData.append(
                "picture",
                values.picture,
                values.picture.name
            );
        try {
            const response = await axiosClient.post("users/register", formData);
            return response.data;
        } catch (err: any) {
            if (err.message === "Network Error") {
                throw new Error("Server is Offline Now");
            }
            throw err.response.data;
        }
    };

    const update = async (values: any) => {
        const formData = new FormData();

        for (let key in values)
            if (values[key]) formData.append(key, values[key]);

        try {
            let response = await axiosClient.patch("users/update", formData);
            refreshUserData(response.data);
        } catch (err: any) {
            if (err.message === "Network Error") {
                throw new Error("Server is Offline Now");
            }
            throw err.response.data;
        }
    };

    const login = async ({email, password, checked}: LoginData) => {
        try {
            const formData = new FormData();
            formData.append("email", email);
            formData.append("password", password);
            const response = await axiosClient.post("users/login", formData);

            console.log(response)
            if (checked.length) {
                localStorage.setItem("authTokens", JSON.stringify(response.data.tokens));
                localStorage.setItem("userData", JSON.stringify(response.data.user));
            } else {
                sessionStorage.setItem("authTokens", JSON.stringify(response.data.tokens));
                sessionStorage.setItem("userData", JSON.stringify(response.data.user));
            }
            dispatch(setTokens(response.data.tokens));
            dispatch(setUser(response.data.user));
        } catch (err: any) {
            if (err.message === "Network Error") {
                throw new Error("Server is Offline Now");
            }
            throw new Error(err.response.data.message);
        }
    };
    return {
        login,
        register,
        update,
    };
};

export default useAuthApi;
