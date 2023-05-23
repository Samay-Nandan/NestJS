import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PORT } from '@src/environment';

@Injectable()
export class GlobalInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    const { url, method } = request;

    return next.handle().pipe(
      map((result) => {
        const payload = {
          status: true,
          url: `http://localhost:${PORT}${url}`,
          method,
          timestamp: new Date().toISOString(),
          result,
        };
        return { data: payload };
      }),
    );
  }
}
