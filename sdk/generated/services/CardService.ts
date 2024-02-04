/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CardResponse } from '../models/CardResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CardService {
  /**
   * @param customerId
   * @param bank
   * @returns CardResponse Success
   * @throws ApiError
   */
  public static getApiCardQuery(
    customerId?: number,
    bank?: string,
  ): CancelablePromise<Array<CardResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/Card/query',
      query: {
        'CustomerId': customerId,
        'Bank': bank,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * @param cardId
   * @returns CardResponse Success
   * @throws ApiError
   */
  public static getApiCard(
    cardId: number,
  ): CancelablePromise<CardResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/Card/{CardId}',
      path: {
        'CardId': cardId,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}
