import React from "react";
import {
  LineChart,
  Line,
  // XAxis,
  // YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Sale } from "../../type";
import "./Graph.css";

const Graph: React.FC = () => {
  const sales : Sale[] | undefined  = useSelector((state : RootState) => state.data.data[0]?.sales);
  return (
    <div className="graph">
      <LineChart
        width={900}
        height={500}
        data={sales || []}
        margin={{ top: 20, right: 30, left: 20, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        {/* <XAxis dataKey="weekEnding" /> */}
        <Tooltip />
        <Line type="monotone" dataKey="retailSales" stroke="#44A7F6" />
        <Line type="monotone" dataKey="wholesaleSales" stroke="#9AA5BE" />
      </LineChart>
    </div>
  );
};
export default Graph;
