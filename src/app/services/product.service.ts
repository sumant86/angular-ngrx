import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { Iproduct } from "../models/models";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private _productsURL = "./assets/data/products.json";
  constructor(private _http: HttpClient) {}

  getProducts(): Observable<Iproduct[]|any> {
    return this._http
      .get<Iproduct[]>(this._productsURL)
      .pipe(catchError(this.handleError as any));
  }
  private handleError(err:any) {
    console.log(err.message);
  }
}
