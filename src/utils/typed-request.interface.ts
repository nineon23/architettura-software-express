import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { Request } from 'express';

export interface TypedRequest<T = any, Q = ParsedQs, P = ParamsDictionary>
          extends Request<P, any, T, Q> { };

export { ParsedQs, ParamsDictionary };