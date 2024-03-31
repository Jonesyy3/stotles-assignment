export type RecordSearchRequest = {
  textSearch?: string;
  buyerSearch?: string
  offset: number;
  limit: number;
};

export type BuyerDto = {
  id: string;
  name: string;
  country: string;
};

export type ProcurementRecordDto = {
  id: string;
  title: string;
  description: string;
  buyer: BuyerDto;
  publishDate: string;
  currency: string;
  value: number;
  stage: string;
  close_date: string;
  award_date: string;
};

export type RecordSearchResponse = {
  records: ProcurementRecordDto[];
  endOfResults: boolean; // this is true when there are no more results to search
};
