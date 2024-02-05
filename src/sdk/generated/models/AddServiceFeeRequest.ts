/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Currency } from './Currency';
import type { RemmittanceMode } from './RemmittanceMode';
export type AddServiceFeeRequest = {
  remmittanceMode?: RemmittanceMode;
  minimumAmount?: number;
  maximumAmount?: number;
  fee?: number;
  currency?: Currency;
};

