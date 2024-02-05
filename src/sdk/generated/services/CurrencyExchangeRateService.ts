/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrencyExchangeRateResponse } from '../models/CurrencyExchangeRateResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CurrencyExchangeRateService {
  /**
   * @param fromCurrencyId
   * @param toCurrencyId
   * @returns CurrencyExchangeRateResponse Success
   * @throws ApiError
   */
  public static getApiCurrencyExchangeRateQuery(
    fromCurrencyId?: number,
    toCurrencyId?: number,
  ): CancelablePromise<Array<CurrencyExchangeRateResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/CurrencyExchangeRate/query',
      query: {
        'FromCurrencyId': fromCurrencyId,
        'ToCurrencyId': toCurrencyId,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * @param currencyExchangeRateId
   * @returns CurrencyExchangeRateResponse Success
   * @throws ApiError
   */
  public static getApiCurrencyExchangeRate(
    currencyExchangeRateId: number,
  ): CancelablePromise<CurrencyExchangeRateResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/CurrencyExchangeRate/{CurrencyExchangeRateId}',
      path: {
        'CurrencyExchangeRateId': currencyExchangeRateId,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}
