/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrencyResponse } from '../models/CurrencyResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CurrencyService {
  /**
   * @param name
   * @param code
   * @param countryId
   * @returns CurrencyResponse Success
   * @throws ApiError
   */
  public static getApiCurrencyQuery(
    name?: string,
    code?: string,
    countryId?: number,
  ): CancelablePromise<Array<CurrencyResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/Currency/query',
      query: {
        'Name': name,
        'Code': code,
        'CountryId': countryId,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * @param currencyId
   * @returns CurrencyResponse Success
   * @throws ApiError
   */
  public static getApiCurrency(
    currencyId: number,
  ): CancelablePromise<CurrencyResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/Currency/{CurrencyId}',
      path: {
        'CurrencyId': currencyId,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}
