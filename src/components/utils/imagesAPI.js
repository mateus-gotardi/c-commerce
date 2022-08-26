
import axios from "axios";

const imagesAPI = axios.create({
    baseURL: 'https://e-commerce-nextjs.s3.amazonaws.com/'
})
export default imagesAPI