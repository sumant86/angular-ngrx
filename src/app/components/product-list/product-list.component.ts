import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Iproduct, IColumnDefinition } from "../../models/models";
import * as fromReducer from "./../../app.reducer";
import { map } from "rxjs/operators";
import * as _ from "lodash";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  constructor(
    private _productService: ProductService,
    private store: Store<{ Allproducts: fromReducer.AppState }>
  ) {}
  errorMessage: string;
  products$: Observable<Iproduct[]>;
  colDefbyKey: {};
  colDef: IColumnDefinition[];
  currency_prefix: string;
  productList: any[];
  filteredProductList: any[];
  selection: any[];
  ngOnInit() {
    this.currency_prefix = "$";
    this.colDef = [
      {
        field: "name",
        name: "Product Name",
        sort: false,
        sortEnable: true,
        type: "",
        selectAll: false,
        className: "",
        prefix: "",
      },
      {
        field: "description",
        name: "Description",
        sort: false,
        sortEnable: true,
        type: "",
        selectAll: false,
        className: "",
        prefix: "",
      },
      {
        field: "available",
        name: "In Stock",
        sort: false,
        sortEnable: false,
        type: "tick",
        selectAll: false,
        className: "",
        prefix: "",
      },
      {
        field: "price",
        name: "Unit Price",
        sort: false,
        sortEnable: true,
        type: "",
        selectAll: false,
        className: "",
        prefix: this.currency_prefix,
      },
      {
        field: "",
        name: "",
        type: "checkbox",
        sort: false,
        sortEnable: false,
        selectAll: false,
        className: "",
        prefix: "",
      },
    ];
    this.colDefbyKey = _.keyBy(
      this.colDef.slice(0, this.colDef.length - 1),
      "field"
    );
    // this.products$ = this.store.pipe(map(state => state.Allproducts));
    this.products$ = this.store.select(fromReducer.getAllProducts);
    // console.log(this.store.select(fromReducer.getAllProducts));
    // console.log(this.store);
    this.products$.subscribe((response) => {
      if (response.length > 0) {
        this.productList = response;
        this.filteredProductList = this.productList;
      }
    });
  }
  sortColumn(column) {
    //Finding Actual column
    _.forEach(this.colDef, (coldef) => {
      //Setting Icon for Column when clicked.
      if (coldef.field === column.field) {
        if (coldef.sort === false) {
          coldef.sort = "asc";
        } else if (coldef.sort === "asc") {
          coldef.sort = "desc";
        } else {
          coldef.sort = false;
        }
      } else {
        //Resetting All other columns to default.
        coldef.sort = false;
      }
    });
    if (column.sort) {
      //Sorting based on column & its defined order.
      this.filteredProductList = _.orderBy(
        this.productList,
        [column.field.trim()],
        [column.sort]
      );
    } else {
      //Reset of filter icons.
      this.filteredProductList = this.productList;
    }
  }
  addToSelectedList(event, selected) {
    _.forEach(this.filteredProductList, (fpl) => {
      if (fpl["id"] === selected["id"]) {
        fpl.checked = true;
      } else {
        fpl.checked = false;
      }
    });

    this.selection = [];
    if (event.checked) {
      this.selection = [...this.selection, selected];
    }
    console.log(this.selection[0]);
  }
}
