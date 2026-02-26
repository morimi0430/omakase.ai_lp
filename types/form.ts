export interface FormData {
    lastName: string;
    firstName: string;
    company: string;
    department: string;
    position: string;
    email: string;
    phone: string;
    website: string;
    /** 希望日時（一択）(YYYY-MM-DDTHH:mm)。HubSpot 裏送り用 */
    preferredDate?: string;
    agreedToTerms: boolean;
  }

export interface InquiryFormData {
    lastName: string;
    firstName: string;
    company: string;
    department: string;
    position: string;
    email: string;
    phone: string;
    inquiryType: string;
    inquiryDetail: string;
    agreedToTerms: boolean;
  }