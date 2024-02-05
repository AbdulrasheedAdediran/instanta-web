/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BankAccountInformationResponse } from '../models/BankAccountInformationResponse';
import type { BankResponse } from '../models/BankResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BankService {
  /**
   * @param bankId
   * @param name
   * @param nIbbsCode
   * @returns BankResponse Success
   * @throws ApiError
   */
  public static getApiBankQuery(
    bankId?: number,
    name?: string,
    nIbbsCode?: string,
  ): CancelablePromise<Array<BankResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/Bank/query',
      query: {
        'BankId': bankId,
        'Name': name,
        'NIbbsCode': nIbbsCode,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * @param bankId
   * @returns BankResponse Success
   * @throws ApiError
   */
  public static getApiBank(
    bankId: number,
  ): CancelablePromise<BankResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/Bank/{bankId}',
      path: {
        'bankId': bankId,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * @returns boolean Success
   * @throws ApiError
   */
  public static postApiBankLoadNibbsBank(): CancelablePromise<boolean> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/Bank/load-nibbs-bank',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * @param accountNumber
   * @param bankCode
   * @returns BankAccountInformationResponse Success
   * @throws ApiError
   */
  public static getApiBankResolveBankAccount(
    accountNumber?: string,
    bankCode?: string,
  ): CancelablePromise<BankAccountInformationResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/Bank/resolve-bank-account',
      query: {
        'AccountNumber': accountNumber,
        'BankCode': bankCode,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}
