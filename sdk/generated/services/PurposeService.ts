/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PurposeResponse } from '../models/PurposeResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PurposeService {
  /**
   * @returns PurposeResponse Success
   * @throws ApiError
   */
  public static getApiPurposeQuery(): CancelablePromise<Array<PurposeResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/Purpose/query',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * @param purposeId
   * @returns PurposeResponse Success
   * @throws ApiError
   */
  public static getApiPurpose(
    purposeId: number,
  ): CancelablePromise<PurposeResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/Purpose/{PurposeId}',
      path: {
        'PurposeId': purposeId,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}
