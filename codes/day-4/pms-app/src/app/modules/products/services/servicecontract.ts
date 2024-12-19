import { Product } from "../../../models/product";

export interface ServiceContract {
    getProducts(): Product[];
}