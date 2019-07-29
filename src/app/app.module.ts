import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
