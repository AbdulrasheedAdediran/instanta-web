export enum ButtonVariants {
  FILLED_BLUE = "filled_blue",
  FILLED_RED = "filled_red",
  FILLED_PUMPKIN = "filled_pumpkin",
  FILLED_WHITE = "filled_white",
  OUTLINE_BLUE = "outline_blue",
  OUTLINE_WHITE = "outline_white",
  UNDERLINE_BLUE = "underline_blue",
  UNDERLINE_WHITE = "underline_white",
  TEXT = "text",
  TEXT_BLUE = "text-blue",
}

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  variant?: ButtonVariants;
  size?: Sizes.XS | Sizes.SM | Sizes.MD | Sizes.LG;
  isLoading?: boolean;
  isActive?: boolean;
  disabled?: boolean;
  applyBaseClassName?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
  href?: string;
  type?: "button" | "submit" | "reset" | undefined;
}
export enum Sizes {
  XXS = "xxs",
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
  XXL = "xxl",
}

export enum AllowedFileTypes {
  PDF_AND_IMAGES = "pdf_and_images",
  PDF_ONLY = "pdf_only",
  IMAGES_ONLY = "images_only",
}

export interface IFileUpload
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className?: string;
  label?: string;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  allowedFileType: AllowedFileTypes;
}

export interface IProperty {
  createdAt: string;
  updatedAt: string;
  _id: string;
  name: string;
  description: string;
  type: string;
  unitPrice: number;
  status: string;
  expectedRoi: number;
  dividend: number;
  dividendFrequency: number;
  totalQuantity: number;
  availableQuantity: number;
  address: string;
  percentageCompleted: number;
  expectedCompletionDate: string;
  expectedGrossYeild: number;
  lastFiveYearsRentelRevenue: number[];
  expectedRentalYeild: number;
  roiInFiveYears: number;
  grossRentPerYear: number;
  netRent: number;
  serviceCharge: number;
  ownerId: string;
}

export interface ICreatePropertyData {
  // page 1
  name: string;
  address: string;
  total_value?: string;
  property_type: "DEFAULT" | "OFF_PLAN" | "RENTAL_READY";
  description: string;
  fractions: string;
  price_per_fraction: string;
  percentage_completed: string;
  expected_completion_date: string;
  expected_gross_yield: string;
  rental_revenue_past_five: string;
  expected_rental_yield: string;
  expected_return_in_five_years: string;
  dividend_payment_frequency?: "DEFAULT" | "MONTHLY" | "QUARTERLY" | "ANNUALLY";
  gross_rent_per_year: string;
  service_charge: string;
  net_rent: string;
  tax: string;
  expiry_date: string;
  images: string[];
  accept_condition: boolean;
}

export interface IHeading extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children: React.ReactNode;
}

export interface IActionReturnType {
  data?: any;
  success: boolean;
  error?: string;
  message?: string;
}

export enum PropertyActionTypes {
  // ONLY ADMIN
  APPROVE_REQUEST = "APPROVE_REQUEST",
  APPROVE_SUCCESS = "APPROVE_SUCCESS",
  APPROVE_FAILURE = "APPROVE_FAILURE",

  REJECT_REQUEST = "REJECT_REQUEST",
  REJECT_SUCCESS = "REJECT_SUCCESS",
  REJECT_FAILURE = "REJECT_FAILURE",

  // ONLY OWNER
  SUBMIT_REQUEST = "SUBMIT_REQUEST",
  SUBMIT_SUCCESS = "SUBMIT_SUCCESS",
  SUBMIT_FAILURE = "SUBMIT_FAILURE",

  // ONLY ADMIN & OWNER
  DELETE_REQUEST = "DELETE_REQUEST",
  DELETE_SUCCESS = "DELETE_SUCCESS",
  DELETE_FAILURE = "DELETE_FAILURE",

  // ONLY INVESTOR
  SELL_REQUEST = "SELL_REQUEST",
  SELL_SUCCESS = "SELL_SUCCESS",
  SELL_FAILURE = "SELL_FAILURE",

  INVEST_REQUEST = "INVEST_REQUEST",
  INVEST_SUCCESS = "INVEST_SUCCESS",
  INVEST_FAILURE = "INVEST_FAILURE",
}

export type PropertyAction =
  | { type: PropertyActionTypes.APPROVE_REQUEST }
  | { type: PropertyActionTypes.APPROVE_SUCCESS; message: string }
  | { type: PropertyActionTypes.APPROVE_FAILURE; error: string }
  | { type: PropertyActionTypes.REJECT_REQUEST }
  | { type: PropertyActionTypes.REJECT_SUCCESS; message: string }
  | { type: PropertyActionTypes.REJECT_FAILURE; error: string }
  | { type: PropertyActionTypes.DELETE_REQUEST }
  | { type: PropertyActionTypes.DELETE_SUCCESS; message: string }
  | { type: PropertyActionTypes.DELETE_FAILURE; error: string }
  | { type: PropertyActionTypes.SELL_REQUEST }
  | { type: PropertyActionTypes.SELL_SUCCESS; message: string }
  | { type: PropertyActionTypes.SELL_FAILURE; error: string }
  | { type: PropertyActionTypes.SUBMIT_REQUEST }
  | { type: PropertyActionTypes.SUBMIT_SUCCESS; message: string }
  | { type: PropertyActionTypes.SUBMIT_FAILURE; error: string }
  | { type: PropertyActionTypes.INVEST_REQUEST }
  | { type: PropertyActionTypes.INVEST_SUCCESS; message: string }
  | { type: PropertyActionTypes.INVEST_FAILURE; error: string };

export interface IPropertyActionState {
  error: string | null;
  message: string | null;
  isApproving: boolean;
  approveSuccess: boolean;
  isRejecting: boolean;
  rejectSuccess: boolean;
  isDeleting: boolean;
  deleteSuccess: boolean;
  isSelling: boolean;
  sellSuccess: boolean;
  isSubmitting: boolean;
  submitSuccess: boolean;
  isInvesting: boolean;
  investSuccess: boolean;
}
