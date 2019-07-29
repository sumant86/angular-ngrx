import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { AppState } from "./reducers";
import { ProductActions, SetProducts } from "./actions/products.actions";
import { ProductService } from "./services/product.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ngrx1";
  constructor(
    private _productService: ProductService,
    private store: Store<AppState>
  ) {
    // this.count$ = this.store.pipe(select(getCount));
  }
  ngOnInit() {
    this._productService.getProducts().subscribe(
      response => {
        this.store.dispatch(new SetProducts(response["products"]));
      },
      error => {
        console.log("error");
      }
    );
  }
}
