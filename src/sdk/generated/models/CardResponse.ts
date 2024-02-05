/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CardStatus } from './CardStatus';
import type { TokenProvider } from './TokenProvider';
export type CardResponse = {
  id?: number;
  dateCreated?: string;
  lastUpdate?: string | null;
  customerId?: number;
  nameOnCard?: string | null;
  tokenProvider?: TokenProvider;
  cardExpiration?: string | null;
  isDefault?: boolean;
  last4?: string | null;
  expMonth?: string | null;
  expYear?: string | null;
  bank?: string | null;
  reUsable?: boolean;
  countryCode?: string | null;
  accountName?: string | null;
  status?: CardStatus;
  cardLimit?: number | null;
  isDeleted?: boolean;
  dateDeleted?: string | null;
};

