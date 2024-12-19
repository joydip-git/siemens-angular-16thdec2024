import { Observable } from "rxjs";
import { Product } from "../../../models/product";
import { ApiResponse } from "../../../models/apiresponse";

export interface ServiceContract {
    getProducts(): Observable<ApiResponse<Product[]>>;
    getProductById(id: number): Observable<ApiResponse<Product>>;
    addProduct(p: Product): Observable<ApiResponse<Product[]>>;
    updateProduct(id: number, p: Product): Observable<ApiResponse<Product[]>>;
    deleteProduct(id: number): Observable<ApiResponse<Product[]>>;
}