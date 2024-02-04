/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountStatus } from '../models/AccountStatus';
import type { AddAdminRequest } from '../models/AddAdminRequest';
import type { AdminChangePasswordRequest } from '../models/AdminChangePasswordRequest';
import type { AdminLoginRequest } from '../models/AdminLoginRequest';
import type { AdminResponse } from '../models/AdminResponse';
import type { AdminRole } from '../models/AdminRole';
import type { CustomerAuthenticationResponse } from '../models/CustomerAuthenticationResponse';
import type { CustomerMiniResponse } from '../models/CustomerMiniResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminService {
  /**
   * @param requestBody
   * @returns CustomerAuthenticationResponse Success
   * @throws ApiError
   */
  public static postApiAdminAuthenticate(
    requestBody?: AdminLoginRequest,
  ): CancelablePromise<CustomerAuthenticationResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/Admin/authenticate',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * @param requestBody
   * @returns AdminResponse Success
   * @throws ApiError
   */
  public static postApiAdmin(
    requestBody?: AddAdminRequest,
  ): CancelablePromise<AdminResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/Admin',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * @param requestBody
   * @returns AdminResponse Success
   * @throws ApiError
   */
  public static postApiAdminChangePassword(
    requestBody?: AdminChangePasswordRequest,
  ): CancelablePromise<AdminResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/Admin/change-password',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * @param name
   * @param email
   * @param mobileNumber
   * @param accountStatus
   * @param role
   * @param page
   * @param pageSize
   * @returns CustomerMiniResponse Success
   * @throws ApiError
   */
  public static getApiAdminQuery(
    name?: string,
    email?: string,
    mobileNumber?: string,
    accountStatus?: AccountStatus,
    role?: AdminRole,
    page?: number,
    pageSize?: number,
  ): CancelablePromise<CustomerMiniResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/Admin/query',
      query: {
        'Name': name,
        'Email': email,
        'MobileNumber': mobileNumber,
        'AccountStatus': accountStatus,
        'Role': role,
        'Page': page,
        'PageSize': pageSize,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}
