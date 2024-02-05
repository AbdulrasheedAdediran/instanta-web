/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountStatus } from '../models/AccountStatus';
import type { AddCustomerRequest } from '../models/AddCustomerRequest';
import type { ChangePasswordRequest } from '../models/ChangePasswordRequest';
import type { CustomerAuthenticationResponse } from '../models/CustomerAuthenticationResponse';
import type { CustomerLoginRequest } from '../models/CustomerLoginRequest';
import type { CustomerMiniResponse } from '../models/CustomerMiniResponse';
import type { MobileNumberVerificationRequest } from '../models/MobileNumberVerificationRequest';
import type { ValidateAccountRequest } from '../models/ValidateAccountRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CustomerService {
  /**
   * @param requestBody
   * @returns CustomerAuthenticationResponse Success
   * @throws ApiError
   */
  public static postApiCustomerAuthenticate(
    requestBody?: CustomerLoginRequest,
  ): CancelablePromise<CustomerAuthenticationResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/Customer/authenticate',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * @param requestBody
   * @returns CustomerMiniResponse Success
   * @throws ApiError
   */
  public static postApiCustomerSignupFirstStep(
    requestBody?: AddCustomerRequest,
  ): CancelablePromise<CustomerMiniResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/Customer/signup/first-step',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * @param customerId
   * @param requestBody
   * @returns CustomerMiniResponse Success
   * @throws ApiError
   */
  public static postApiCustomerSignupValidateEmail(
    customerId: number,
    requestBody?: ValidateAccountRequest,
  ): CancelablePromise<CustomerMiniResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/Customer/signup/validate-email/{customerId}',
      path: {
        'customerId': customerId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * @param customerId
   * @returns CustomerMiniResponse Success
   * @throws ApiError
   */
  public static postApiCustomerSignupResendEmailOtp(
    customerId: number,
  ): CancelablePromise<CustomerMiniResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/Customer/signup/resend-email-otp/{customerId}',
      path: {
        'customerId': customerId,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * @param requestBody
   * @returns CustomerMiniResponse Success
   * @throws ApiError
   */
  public static postApiCustomerSignupSecondStep(
    requestBody?: MobileNumberVerificationRequest,
  ): CancelablePromise<CustomerMiniResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/Customer/signup/second-step',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * @param customerId
   * @param requestBody
   * @returns CustomerMiniResponse Success
   * @throws ApiError
   */
  public static postApiCustomerSignupValidatePhone(
    customerId: number,
    requestBody?: ValidateAccountRequest,
  ): CancelablePromise<CustomerMiniResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/Customer/signup/validate-phone/{customerId}',
      path: {
        'customerId': customerId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * @param customerId
   * @returns CustomerMiniResponse Success
   * @throws ApiError
   */
  public static postApiCustomerSignupResendPhoneOtp(
    customerId: number,
  ): CancelablePromise<CustomerMiniResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/Customer/signup/resend-phone-otp/{customerId}',
      path: {
        'customerId': customerId,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * @param requestBody
   * @returns CustomerMiniResponse Success
   * @throws ApiError
   */
  public static postApiCustomerChangePassword(
    requestBody?: ChangePasswordRequest,
  ): CancelablePromise<CustomerMiniResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/Customer/change-password',
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
   * @param isEmailVerified
   * @param isMobileVerified
   * @param accountStatus
   * @param page
   * @param pageSize
   * @returns CustomerMiniResponse Success
   * @throws ApiError
   */
  public static getApiCustomerQuery(
    name?: string,
    email?: string,
    isEmailVerified?: boolean,
    isMobileVerified?: boolean,
    accountStatus?: AccountStatus,
    page?: number,
    pageSize?: number,
  ): CancelablePromise<CustomerMiniResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/Customer/query',
      query: {
        'Name': name,
        'Email': email,
        'IsEmailVerified': isEmailVerified,
        'IsMobileVerified': isMobileVerified,
        'AccountStatus': accountStatus,
        'Page': page,
        'PageSize': pageSize,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}
