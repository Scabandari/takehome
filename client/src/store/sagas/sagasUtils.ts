import { AxiosResponse } from 'axios';
import { call } from 'redux-saga/effects';

/**
 * This wrap the call from redux-saga inside a generator to allow to check for typescript
 * @param fn API function
 * @param args API arguments
 */
export function* callGenerator<
  Fn extends (...arg: any[]) => Promise<AxiosResponse<any>>
>(fn: Fn, ...args: Parameters<Fn>) {
  const value: Awaited<ReturnType<Fn>> = yield call(fn as any, ...args);
  return value;
}
