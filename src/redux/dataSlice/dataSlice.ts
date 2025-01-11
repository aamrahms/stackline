import salesData from "../../data/stackline_frontend_assessment_data_2021.json";
import {ProductData} from "../../type"
interface DataState{
  data : ProductData[];
}

const initialState: DataState = {
  data: salesData as ProductData[],
};

console.log('Loaded Sales Data:', initialState.data[0].tags);
export default function dataReducer(state = initialState, action: {type: string}) {
  switch (action.type) {
    default:
      return state;
  }
}
