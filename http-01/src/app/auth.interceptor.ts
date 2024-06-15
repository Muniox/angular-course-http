// import { HttpInterceptorFn } from '@angular/common/http';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return next.handle(req);
  }
}
