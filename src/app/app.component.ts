import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Store, select } from "@ngrx/store";
import * as fromReducer from "./app.reducer";
import { ProductService } from "./services/product.service";
import { LoaderComponent } from "./components/loader/loader.component";
import { ProductActions } from "./actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ngrx1";
  constructor(
    private _productService: ProductService,
    public loaderDialog: MatDialog,
    private store: Store<{ loader: fromReducer.AppState }>
  ) {
    // this.count$ = this.store.pipe(select(getCount));
  }
  ngOnInit() {
    this.store.select(fromReducer.getLoader).subscribe(response => {
      if (response === true)
        [
          this.loaderDialog.open(LoaderComponent, {
            panelClass: "transparent",
            disableClose: true
          })
        ];
    });
    this._productService.getProducts().subscribe(
      response => {
        this.store.dispatch(ProductActions.SetProducts({payload:response["products"]}));
      }
    );
  }
}
