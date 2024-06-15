// import { HttpInterceptorFn } from '@angular/common/http';

import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

// export const authInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };

export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // if (req.url) {} //jeśli chcemy kontrolować do jakiego url możemy przesyłać żądanie
    console.log('Request is on its way');
    console.log(req.url);
    const modifiedRequest = req.clone({
      headers: req.headers.append('Auth', 'xyz'),
    });
    return next.handle(modifiedRequest).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          console.log('Response arrived, body data:');
          console.log(event.body);
        }
      })
    );
  }
}
