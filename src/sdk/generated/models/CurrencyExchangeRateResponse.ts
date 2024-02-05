/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrencyResponse } from './CurrencyResponse';
export type CurrencyExchangeRateResponse = {
  id?: number;
  dateCreated?: string;
  lastUpdate?: string | null;
  fromCurrencyId?: number;
  fromCurrency?: CurrencyResponse;
  toCurrencyId?: number;
  toCurrency?: CurrencyResponse;
  rate?: number;
  code?: string | null;
};

