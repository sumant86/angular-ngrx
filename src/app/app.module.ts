import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./modules/material.module";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./app.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { GenericDialogComponent } from "./components/generic-dialog/generic-dialog.component";
import { HighlightPipe } from "./pipes/highlight.pipe";
import { HomeComponent } from "./components/home/home.component";
import { TopHeaderComponent } from "./components/top-header/top-header.component";
import { MenubarComponent } from "./components/menubar/menubar.component";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductDetailsComponent,
    LoaderComponent,
    BreadcrumbComponent,
    GenericDialogComponent,
    HighlightPipe,
    HomeComponent,
    TopHeaderComponent,
    MenubarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoaderComponent]
})
export class AppModule {}
