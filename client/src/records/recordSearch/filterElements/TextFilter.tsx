import React from "react";
import { Input } from "antd";
import { SearchFilters } from "../RecordSearchFilters";

type Props = {
    onChange: (text: React.FormEvent<HTMLInputElement>) => void;
    filters: SearchFilters
  };

const TextFilter = (props: Props) => {
    const { onChange, filters } = props;

    return (   
        <Input
        placeholder="Search text..."
        value={filters.query}
        onChange={onChange}
        />
    )
}

export default TextFilter