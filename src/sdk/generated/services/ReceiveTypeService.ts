/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReceiveTypeResponse } from '../models/ReceiveTypeResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ReceiveTypeService {
  /**
   * @param countryId
   * @param isActive
   * @returns ReceiveTypeResponse Success
   * @throws ApiError
   */
  public static getApiReceiveTypeQuery(
    countryId?: number,
    isActive?: boolean,
  ): CancelablePromise<Array<ReceiveTypeResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/ReceiveType/query',
      query: {
        'CountryId': countryId,
        'IsActive': isActive,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * @param receiveTypeId
   * @returns ReceiveTypeResponse Success
   * @throws ApiError
   */
  public static getApiReceiveType(
    receiveTypeId: number,
  ): CancelablePromise<ReceiveTypeResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/ReceiveType/{ReceiveTypeId}',
      path: {
        'ReceiveTypeId': receiveTypeId,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}
