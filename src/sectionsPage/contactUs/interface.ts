export interface IContactForm {
  name: string;
  email: string;
  companyName: string;
  role: string;
  phone?: string;
  message: string;
}

export interface IPhoneInputCountry {
  name: string;
  regions: string[];
  iso2: string;
  countryCode: string;
  dialCode: string;
  format: string;
  priority: number;
}
