import { HttpInterceptorFn } from "@angular/common/http";

export const correlationInterceptor: HttpInterceptorFn = (req, next) => {

  const correlationId = crypto.randomUUID();

  const newReq = req.clone({
    setHeaders: {
      'x-correlation-id': correlationId
    }
  });

  console.log({
    event: 'HTTP_REQUEST',
    correlationId
  });

  return next(newReq);
};
