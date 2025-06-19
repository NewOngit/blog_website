import axios from 'axios';

const axiosUrl=axios.create({
    baseURL:'http://localhost:3500',
    //withCredentials:true
});

export default axiosUrl;