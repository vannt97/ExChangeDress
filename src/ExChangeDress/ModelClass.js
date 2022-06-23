import React, { Component } from "react";
import { connect } from "react-redux";
import { tryClothes } from "../Redux/Actions/actions";
class ModelClass extends Component {
  renderItemChose = () => {
    return this.props.clothesChose.map((item, index) => {
      console.log(item);
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

  render() {
    return (
      <div className="">
        <style>
          {this.props.clothesChose.map((item, index) => {
            return `
            .${item.id}{
              display: block;
              animation: ${item.id} 1s;
            }
            @keyframes ${item.id}{
            0% { top: ${item.fromTop};
                  right: ${item.fromRight};
                    transform: scale(${item.fromScale});
                }
                 100% { top: ${item.toTop};
                  right: ${item.toRight}; 
                  transform: scale(${item.toScale});
                }
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
        {this.renderItemChose()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    clothesChose: state.ExChangeDressReducer.clothesChose,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    tryClothes: (item) => {
      dispatch(tryClothes(item));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModelClass);
