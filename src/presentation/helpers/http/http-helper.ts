import { HttpResponse, HttpStatusCode } from '@src/presentation/protocols';
import { ServerError, UnauthorizedError } from '@src/presentation/errors';

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: HttpStatusCode.badRequest,
  body: error,
});

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: HttpStatusCode.forbidden,
  body: error,
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: HttpStatusCode.serverError,
  body: new ServerError(error.stack as string),
});

export const ok = (data: any): HttpResponse => ({
  statusCode: HttpStatusCode.ok,
  body: data,
});

export const created = (data: any): HttpResponse => ({
  statusCode: HttpStatusCode.created,
  body: data,
});

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError(),
});
