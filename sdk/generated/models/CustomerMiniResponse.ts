/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountStatus } from './AccountStatus';
export type CustomerMiniResponse = {
  id?: number;
  dateCreated?: string;
  lastUpdate?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  readonly fullName?: string | null;
  mobileNumber?: string | null;
  email?: string | null;
  accountStatus?: AccountStatus;
};

