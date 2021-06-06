import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { LoaderService } from "../services/loader.service";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor(public loaderService: LoaderService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.isLoading.next(true);
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': 'b61123449amsh66f7c0a325fa79fp15567bjsn2b157cba78b3',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      },
      setParams: {
        key: '04f453ac096e4d5da2e3bb386854ea5c',
      }
    });
    return next.handle(req).pipe(
      finalize(
        () => {
          this.loaderService.isLoading.next(false);
        }
      )
    );
  }
}