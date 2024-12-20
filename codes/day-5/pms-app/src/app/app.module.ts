import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './modules/products/products.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './modules/shared/shared.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes/approutes';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
