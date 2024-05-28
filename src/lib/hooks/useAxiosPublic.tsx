import axios from "axios";

function useAxiosPublic() {

    return axios.create({
        baseURL: process.env.HOST_URI
    })

};

export default useAxiosPublic;