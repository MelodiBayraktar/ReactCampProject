import axios from "axios";

export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:5118/api/products/getall");
    }
}