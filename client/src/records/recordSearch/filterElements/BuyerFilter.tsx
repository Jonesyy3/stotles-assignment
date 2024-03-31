import { Select } from "antd";
import React from "react";
import Api, { Buyer } from "../../../api/Api";
import { useState } from "react";

type Props = {
    onChange: (string: string) => void;
  };
  
const BuyerFilter = (props: Props) => {
    const { onChange } = props;
    const { Option } = Select;

    const [buyers, setBuyers] = useState<Buyer[]>(
      [{id: "0", name: 'Any buyer', country: null}]
    );

    /**
     * Some thoughts on how to make this more performant if it was used in production
     * with 100,000's of buyers (by all means not the only options).
     *      - Add an index to the Database to increase query performance
     *      - Add pagination of the results in a similar manner to how is currently 
     *          done for the procurement records
     *      - As is would have major performance issues on the client side I would 
     *          introduce lazy loading of the options so to not add too much weight 
     *          to the DOM
     */
    React.useEffect(() => {
        void (async () => {
            const api = new Api();
            const response = await api.getBuyers();

            setBuyers([...buyers, ...response])
        })();
      }, []);

    return(
        <Select defaultValue="Any buyer" style={{ width: 400 }} onChange={onChange}>
        {buyers.map((buyer) => (
          <Option key={buyer.id} value={buyer.name === 'Any buyer' ? '%' : buyer.name}>
            {buyer.name}
          </Option>
        ))}
      </Select>
    )
}

export default BuyerFilter