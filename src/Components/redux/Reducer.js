import {FetchBlogData, FetchSkinMedicaData} from "../redux/action"
import { FetchBestSellersData } from "../redux/action";
import { FetchNeocutisData } from "../redux/action";
import { FetchTrendingData } from "../redux/action";
import { FetchNewarraivals } from "../redux/action";




const initState = { productsofskinMedica: [],productsofbestsellers:[],productsofneocutis:[],productsoftrending:[],productsofarrival:[],productsofblog:[]};

export const Reducer = (state = initState, action) => {
  switch (action.type) {
    case FetchSkinMedicaData:
      return {
        ...state,
        productsofskinMedica: action.payload,
       
      };
      case FetchBestSellersData:
        return{
          ...state,
          productsofbestsellers:action.payload,
         
        };
      case FetchNeocutisData:
        return{
          ...state,
          productsofneocutis:action.payload,
        };
      case FetchTrendingData:
        return{
          ...state,
          productsoftrending:action.payload,
        };
      case FetchNewarraivals:
        return{
          ...state,
          productsofarrival:action.payload,
        }
      case FetchBlogData:
        return{
          ...state,
          productsofblog:action.payload,
        }
    default:
      return state;
  }
};
