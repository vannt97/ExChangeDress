import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tryClothes } from "../Redux/Actions/actions";

export default function Model(props) {
  let { clothesChose } = useSelector((state) => state.ExChangeDressReducer);
  let dispatch = useDispatch();
  const renderItemChose = () => {
    return clothesChose.map((item, index) => {
      return (
        <div
          key={index}
          className={`${item.type} ${item.id}`}
          style={{
            background: `url(${item.imgSrc_png})`,
          }}
        ></div>
      );
    });
  };
  useEffect(() => {
    return () => {};
  }, [clothesChose]);
  return (
    <div className="">
      <style>
        {clothesChose.map((item, index) => {
          return `
            .${item.id}{
              display: block;
              
              animation: ${item.type} 2s;
            }
            @keyframes ${item.type}{
            0% { top: ${item.fromTop};
                  right: ${item.fromRight};  }
                 100% { top: ${item.toTop};
                  right: ${item.toRight}; }
          }
          `;
        })}
      </style>
      <div className="body"></div>
      <div className="model"></div>
      <div
        className="bikinitop"
        // style={{ background: `url('${clothesChose.imgSrc_png}')` }}
      ></div>
      <div className="bikinibottom"></div>
      <div className="handbag"></div>
      <div className="feet"></div>
      <div className="feet_left"></div>
      <div className="feet_right"></div>
      <div className="background_demo"></div>
      {renderItemChose()}
    </div>
  );
}
