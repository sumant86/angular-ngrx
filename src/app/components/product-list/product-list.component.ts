import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Iproduct } from "../../models/models";
import * as fromReducer from "./../../app.reducer";
import { map } from "rxjs/operators";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  constructor(
    private _productService: ProductService,
    private store: Store<{ Allproducts: fromReducer.AppState }>
  ) {}
  errorMessage: string;
  products$: Observable<Iproduct[]>;
  ngOnInit() {
    // this.products$ = this.store.pipe(map(state => state.Allproducts));
    this.products$ = this.store.select(fromReducer.getAllProducts);
    // console.log(this.store.select(fromReducer.getAllProducts));
    // console.log(this.store);
    // this.store.subscribe(data => {
    //   this.products$= data;
    // });
  }
}
