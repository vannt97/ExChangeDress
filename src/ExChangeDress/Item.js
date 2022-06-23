import React from "react";
import { useDispatch } from "react-redux";
import { tryClothes } from "../Redux/Actions/actions";
export default function Item(props) {
  let { item } = props;
  let dispatch = useDispatch();
  return (
    <div className="item__content">
      <img src={item.imgSrc_jpg} alt={item.name} />
      <p>{item.name}</p>
      <button
        onClick={() => {
          dispatch(tryClothes(item));
        }}
      >
        Thử Đồ
      </button>
    </div>
  );
}
