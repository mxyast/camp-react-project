import axios from "axios"

export default class ProductService{
    getproduct(){
        return axios.get("http://localhost:41739/api/Products")
    }
}