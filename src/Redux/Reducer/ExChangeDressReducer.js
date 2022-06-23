import { GETDATA, TRYCLOTHES } from "../Types/type";

const initialState = {
  isLoad: false,
  clothesChose: [],
};

const ExChangeDressReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETDATA: {
      return { ...state, data: { ...action.data }, isLoad: true };
    }
    case TRYCLOTHES: {
      let listClothes = [...state.clothesChose];
      let index = listClothes.findIndex(
        (clothes) => clothes.type === action.clothes.type
      );
      if (index === -1) {
        listClothes.push(action.clothes);
      } else {
        listClothes.splice(index, 1, action.clothes);
      }
      return { ...state, clothesChose: listClothes };
    }
    default:
      return { ...state };
  }
};

export default ExChangeDressReducer;
