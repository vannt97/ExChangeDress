import { GETDATA, TRYCLOTHES } from "../Types/type";

export const getArrData = (data) => {
  return {
    type: GETDATA,
    data,
  };
};

export const tryClothes = (clothes) => ({
  type: TRYCLOTHES,
  clothes,
});
