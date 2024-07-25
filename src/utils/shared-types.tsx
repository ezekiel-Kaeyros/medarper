export type reportType = {
  identity?: string;
  description?: string;
  organizationType?: string[];
  organizationTypeFreeField?: string;
  numberOfEmployees?: string;
  valueDate?: string;
  dateRangeState?: string;
  _id?: string;
  location?: string;
  locationOnline?: string;
  stadtteil?: string;
  onGoingIncident?: string;

  haveYouReported?: string;
  haveYouReportedYes?: string[];
  haveYouReportedYesFreeField1?: string;
  haveYouReportedYesFreeField2?: string;
  gender?: string;
  genderFreeField?: string;
  age?: string;
  causesOfDiscrimination?: string[];
  causesOfDiscriminationFreeField?: string;
  otherForms?: string;
  otherFormsYes?: string[];
  otherFormsYesFreeField?: string;
  createdAt?: string;
  status?: string;
  category?: any[];
  updatedAt?: string;

  updatereport?: {
    category?: any[];

    description?: string;

    status?: string;
  };
};

export type reportType2 = {
  identity?: string;
  description?: string;
  organizationType?: string[];
  organizationTypeFreeField?: string;
  numberOfEmployees?: string;
  valueDate?: string;
  dateRangeState?: string;
  _id?: string;
  location?: string;
  locationOnline?: string;
  stadtteil?: string;
  onGoingIncident?: string;
  updatedAt?: string;

  haveYouReported?: string;
  haveYouReportedYes?: string[];
  haveYouReportedYesFreeField1?: string;
  haveYouReportedYesFreeField2?: string;
  gender?: string;
  genderFreeField?: string;
  age?: string;
  causesOfDiscrimination?: string[];
  causesOfDiscriminationFreeField?: string;
  otherForms?: string;
  otherFormsYes?: string[];
  otherFormsYesFreeField?: string;
  createdAt?: string;
  status2?: string;
  category2?: any[];
  status?: string;
  category?: any[];
  description2?: string;
  updatereport?: {
    category?: any[];

    description?: string;

    status?: string;
  };
};