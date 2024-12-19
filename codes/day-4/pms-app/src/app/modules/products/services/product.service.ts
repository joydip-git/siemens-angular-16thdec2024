import { HttpClient } from "@angular/common/http";
import { Product } from "../../../models/product";
import { ServiceContract } from "./servicecontract";
import { API_URL } from "../../../utils/constants";
import { ApiResponse } from "../../../models/apiresponse";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

//@Injectable({ providedIn: 'root' })
//equivalent to => @NgModule({providers:[ProductService]}) AppModule
@Injectable()
export class ProductService implements ServiceContract {

    constructor(private http: HttpClient) {

    }
    getProductById(id: number): Observable<ApiResponse<Product>> {
        return this.http.get<ApiResponse<Product>>(`${API_URL}/${id}`)
    }
    addProduct(p: Product): Observable<ApiResponse<Product[]>> {
        return this.http.post<ApiResponse<Product[]>>(API_URL, p)
    }
    updateProduct(id: number, p: Product): Observable<ApiResponse<Product[]>> {
        return this.http.put<ApiResponse<Product[]>>(`${API_URL}/${id}`, p)
    }
    deleteProduct(id: number): Observable<ApiResponse<Product[]>> {
        return this.http.delete<ApiResponse<Product[]>>(`${API_URL}/${id}`)
    }

    getProducts(): Observable<ApiResponse<Product[]>> {
        // const apiResponse: Observable<ApiResponse<Product[]>> = this.http.get<ApiResponse<Product[]>>(API_URL)
        // return apiResponse
        return this.http.get<ApiResponse<Product[]>>(API_URL)
    }
}