import React from "react";
import { IoMdSettings } from "react-icons/io";

class GearBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: "",
      longitude: ""
    };
  }

  onLatChange = event => {
    this.setState({ latitude: event.target.value });
  };

  onLongChange = event => {
    this.setState({ longitude: event.target.value });
  };

  onSubmitPosition = () => {};
  render() {
    const { onPositionChange, positionErr } = this.props;
    return (
      <div className="dropdown pt2 pr3 mr2 mt2 ma0">
        <p
          className="f3 pointer dark-gray"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <IoMdSettings />
        </p>
        <div
          className="dropdown-menu dropdown-menu-right ma0 w-70"
          aria-labelledby="dropdownMenuButton"
          style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
        >
          <p className="white ph3 mb1 f5">Enter your position:</p>
          <div className="ph3 pv1">
            <input
              onChange={this.onLatChange}
              style={{ backgroundColor: "rbga(255,255,255,0.1)" }}
              className="pa1 ba b--transparent br2 bw1 w-100 input-reset"
              placeholder="latitude..."
              type="text"
              name="lat"
              id="lat"
            />
          </div>
          <div className="ph3 pv1">
            <input
              onChange={this.onLongChange}
              className="pa1 ba b--white br2 bw1 w-100 input-reset"
              placeholder="longitude..."
              type="text"
              name="lat"
              id="lat"
            />
          </div>
          <div className="ph3 pv1">
            <input
              onClick={() =>
                onPositionChange(this.state.latitude, this.state.longitude)
              }
              className="b ph3 pv2 input-reset ba b--white br2 bg-transparent pointer f6 dib white w-100"
              type="submit"
              value="Update"
            />
          </div>
          {positionErr ? (
            <p className="ph3 pv1 red ma0">Invalid position</p>
          ) : null}
        </div>
      </div>
    );
  }
}

export default GearBtn;
