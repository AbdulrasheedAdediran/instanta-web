/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddRecipientRequest } from '../models/AddRecipientRequest';
import type { BeneficiaryResponse } from '../models/BeneficiaryResponse';
import type { CustomerMiniResponse } from '../models/CustomerMiniResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BeneficiaryService {
  /**
   * @param requestBody
   * @returns BeneficiaryResponse Success
   * @throws ApiError
   */
  public static postApiBeneficiary(
    requestBody?: AddRecipientRequest,
  ): CancelablePromise<BeneficiaryResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/Beneficiary',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * @param customerId
   * @param bankId
   * @returns CustomerMiniResponse Success
   * @throws ApiError
   */
  public static getApiBeneficiaryQuery(
    customerId?: number,
    bankId?: number,
  ): CancelablePromise<CustomerMiniResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/Beneficiary/query',
      query: {
        'CustomerId': customerId,
        'BankId': bankId,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * @param beneficiaryId
   * @returns CustomerMiniResponse Success
   * @throws ApiError
   */
  public static getApiBeneficiary(
    beneficiaryId: number,
  ): CancelablePromise<CustomerMiniResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/Beneficiary/{beneficiaryId}',
      path: {
        'beneficiaryId': beneficiaryId,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * @returns CustomerMiniResponse Success
   * @throws ApiError
   */
  public static getApiBeneficiaryRelationships(): CancelablePromise<CustomerMiniResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/Beneficiary/relationships',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * @param beneficiaryRelationshipId
   * @returns CustomerMiniResponse Success
   * @throws ApiError
   */
  public static getApiBeneficiaryRelationship(
    beneficiaryRelationshipId: number,
  ): CancelablePromise<CustomerMiniResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/Beneficiary/relationship/{beneficiaryRelationshipId}',
      path: {
        'beneficiaryRelationshipId': beneficiaryRelationshipId,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}
