/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RemmittanceMode } from './RemmittanceMode';
export type ServiceFeeResponse = {
  id?: number;
  dateCreated?: string;
  lastUpdate?: string | null;
  receiverTypeId?: number;
  remmittanceMode?: RemmittanceMode;
  minimumAmount?: number;
  maximumAmount?: number;
  fee?: number;
  currencyId?: number;
  currency?: string | null;
  isActive?: boolean;
};

