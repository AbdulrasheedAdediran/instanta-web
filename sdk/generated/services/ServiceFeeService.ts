/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddServiceFeeRequest } from '../models/AddServiceFeeRequest';
import type { RemmittanceMode } from '../models/RemmittanceMode';
import type { ServiceFeeResponse } from '../models/ServiceFeeResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ServiceFeeService {
  /**
   * @param requestBody
   * @returns ServiceFeeResponse Success
   * @throws ApiError
   */
  public static postApiServiceFee(
    requestBody?: AddServiceFeeRequest,
  ): CancelablePromise<ServiceFeeResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/ServiceFee',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * @param receiverTypeId
   * @param remmittanceMode
   * @param currencyId
   * @returns ServiceFeeResponse Success
   * @throws ApiError
   */
  public static getApiServiceFeeQuery(
    receiverTypeId?: number,
    remmittanceMode?: RemmittanceMode,
    currencyId?: number,
  ): CancelablePromise<Array<ServiceFeeResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/ServiceFee/query',
      query: {
        'ReceiverTypeId': receiverTypeId,
        'RemmittanceMode': remmittanceMode,
        'CurrencyId': currencyId,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * @param serviceFeeId
   * @returns ServiceFeeResponse Success
   * @throws ApiError
   */
  public static getApiServiceFee(
    serviceFeeId: number,
  ): CancelablePromise<ServiceFeeResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/ServiceFee/{ServiceFeeId}',
      path: {
        'serviceFeeId': serviceFeeId,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}
