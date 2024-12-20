import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductContainerComponent } from "./components/product-container/product-container.component";
import { ViewProductComponent } from "./components/view-product/view-product.component";
import { UpdateProductComponent } from "./components/update-product/update-product.component";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { authGuard } from "../../auth/auth.guard";

const productsRoutes: Routes = [
    {
        path: 'products',
        //pathMatch: 'prefix',
        canActivate: [authGuard],
        children: [
            {
                path: '', component: ProductContainerComponent
            },
            {
                path: 'view/:id', component: ViewProductComponent
            },
            {
                path: 'update/:id', component: UpdateProductComponent
            },
            {
                path: 'add', component: AddProductComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(productsRoutes)
    ],
    exports: [RouterModule]
})
export class ProductsRoutingModule {
}