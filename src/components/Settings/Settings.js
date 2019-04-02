import React from "react";
import { IoMdSettings } from "react-icons/io";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      latitude: "",
      longitude: ""
    };
  }

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onLatChange = event => {
    this.setState({ latitude: event.target.value });
  };

  onLongChange = event => {
    this.setState({ longitude: event.target.value });
  };

  render() {
    const { onSubmitUpdate, positionErr } = this.props;
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
          className="dropdown-menu dropdown-menu-right ma0 w-70 ba b--white"
          aria-labelledby="dropdownMenuButton"
          style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
        >
          <p className="white ph3 mb1 f5">Enter your name</p>
          <div className="ph3 pv1">
            <input
              onChange={this.onNameChange}
              style={{ backgroundColor: "rbga(255,255,255,0.1)" }}
              className="pa1 ba b--transparent br2 bw1 w-100 input-reset"
              placeholder=""
              type="text"
              name="name"
              id="name"
            />
          </div>
          <p className="white ph3 mb1 f5">Enter your position</p>
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
              onClick={() => {
                onSubmitUpdate(
                  this.state.latitude,
                  this.state.longitude,
                  this.state.name
                );
              }}
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

export default Settings;
