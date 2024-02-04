/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountryResponse } from '../models/CountryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CountryService {
  /**
   * @param name
   * @param code
   * @param allowsTransfer
   * @returns CountryResponse Success
   * @throws ApiError
   */
  public static getApiCountryQuery(
    name?: string,
    code?: string,
    allowsTransfer?: boolean,
  ): CancelablePromise<Array<CountryResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/Country/query',
      query: {
        'Name': name,
        'Code': code,
        'AllowsTransfer': allowsTransfer,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * @param countryId
   * @returns CountryResponse Success
   * @throws ApiError
   */
  public static getApiCountry(
    countryId: number,
  ): CancelablePromise<CountryResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/Country/{CountryId}',
      path: {
        'CountryId': countryId,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}
