import { HttpClient } from "@angular/common/http";
import { Product } from "../../../models/product";
import { ServiceContract } from "./servicecontract";
import { API_URL } from "../../../utils/constants";
import { ApiResponse } from "../../../models/apiresponse";
import { Observable } from "rxjs";

export class ProductService implements ServiceContract {

    constructor(private http: HttpClient) {

    }

    getProducts() {
        // const apiResponse: Observable<ApiResponse<Product[]>> = this.http.get<ApiResponse<Product[]>>(API_URL)
        // return apiResponse
        return this.http.get<ApiResponse<Product[]>>(API_URL)
    }
}