import React from "react";
import { Input } from "antd";
import { SearchFilters } from "../RecordSearchFilters";

type Props = {
    onChange: (text: React.FormEvent<HTMLInputElement>) => void;
    query: string
  };

const TextFilter = (props: Props) => {
    const { onChange, query } = props;

    return (   
        <Input
        placeholder="Search text..."
        value={query}
        onChange={onChange}
        />
    )
}

export default TextFilter