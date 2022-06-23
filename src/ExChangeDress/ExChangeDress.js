import React, { useEffect } from "react";
import "./ExChangeDress.css";
import Collections from "./Collections";
import Model from "./Model";
import { useDispatch } from "react-redux";
import { getArrData } from "../Redux/Actions/actions";
import ModelClass from "./ModelClass";

export default function ExChangeDress(props) {
  const dispatch = useDispatch();
  const getData = () => {
    fetch("./assets/Data.json")
      .then(function (res) {
        return res.json();
      })
      .then(function (dataJson) {
        dispatch(getArrData(dataJson));
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1 className="title">Đồ án - Phòng thay đồ</h1>
      <div className="content">
        <div className="content__left">
          <Collections />
        </div>
        <div className="content__right">
          <ModelClass />
        </div>
      </div>
    </div>
  );
}
