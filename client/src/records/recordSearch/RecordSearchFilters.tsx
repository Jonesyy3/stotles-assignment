import React from "react";
import BuyerFilter from "./filterElements/BuyerFilter";
import TextFilter from "./filterElements/TextFilter";

export type SearchFilters = {
  query: string;
  buyer: string;
};

type Props = {
  filters: SearchFilters;
  onChange: (newFilters: SearchFilters) => void;
};

function RecordSearchFilters(props: Props) {
  const { filters, onChange } = props;

  const handleQueryChange = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      onChange({
        ...filters,
        query: e.currentTarget.value,
      });
    },
    [onChange, filters]
  );

  const handleBuyerChange = React.useCallback(
    (e: string) => {
      onChange({
        ...filters,
        buyer: e,
      });
    },
    [onChange, filters]
  );

  return (
    <div>
      <TextFilter onChange={handleQueryChange} query={filters.query} />
      <BuyerFilter onChange={handleBuyerChange} />
    </div>
  );
}

export default RecordSearchFilters;
