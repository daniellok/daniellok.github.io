/* @flow strict-local */
import React from "react";
import { navigate } from "@reach/router";
import { pages } from "../App";
import NavbarLinks from "./NavbarLinks";
import "../index.css";

const path = require("path");

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: "",
      index: 0,
      text: "",
      renderCaret: false
    };

    this.navRef = React.createRef();
  }

  parsePath(text) {
    let pathToParse;
    if (text.length === 0) {
      return;
    }

    if (text === "~" || text === "home") {
      pathToParse = "/";
    } else if (text.startsWith("/") || text.startsWith("~/")) {
      // parse as though it's the home dir
      pathToParse = "/" + text.slice(1);
    } else {
      pathToParse = this.props.path + text;
    }

    let normalizedPath = path.normalize(pathToParse);
    if (!normalizedPath.endsWith("/")) {
      normalizedPath = normalizedPath + "/";
    }
    console.log(normalizedPath);

    if (pages.includes(normalizedPath)) {
      if (normalizedPath !== this.props.path) {
        navigate(normalizedPath);
      } else {
        this.setState({
          index: 0,
          text: "",
          errorMessage: ""
        });
      }
      return;
    }

    this.setState({
      errorMessage: `cd: no such file or directory ${this.state.text}`
    });
  }

  _handleEnter = event => {
    if (event.key === "Enter") {
      this.parsePath(this.state.text);
    }
  };

  _handleChange = event => {
    if (event.target.value.length > 30) {
      return;
    }
    this.setState({ text: event.target.value });
  };

  _handleSelect = event => {
    this.setState({ index: event.target.selectionStart });
  };

  _toggleCaret = shouldRenderCaret => {
    if (shouldRenderCaret) {
      this.navRef.current.focus();
    }
    this.setState({
      renderCaret: shouldRenderCaret
    });
  };

  updateStateText(text, index, letter) {
    const prefix = text.slice(0, index);
    const suffix = text.slice(index);

    if (letter === "Backspace") {
      return prefix.slice(0, -1) + suffix;
    }
    if (letter === "Delete") {
      return prefix + suffix.slice(1);
    }
    return prefix + letter + suffix;
  }

  calculateGradientStops(text, index) {
    const textLength = text.length + 1;
    const caretStart = (index / textLength) * 100;
    const caretEnd = ((index + 1) / textLength) * 100;
    return [caretStart, caretEnd];
  }

  render() {
    const { errorMessage, text, index, renderCaret } = this.state;
    const [caretStart, caretEnd] = this.calculateGradientStops(text, index);
    console.log(renderCaret, caretStart, caretEnd);

    return (
      <div className="navbar">
        <div
          className="navbar-input-wrapper"
          tabIndex={1}
          onBlur={() => this._toggleCaret(false)}
          onFocus={() => this._toggleCaret(true)}
        >
          <pre className="navbar-path">{"~" + this.props.path}</pre>
          <pre> $ cd </pre>
          <input
            className="navbar-input"
            ref={this.navRef}
            type="text"
            style={{
              background: renderCaret
                ? `linear-gradient(
                to right, 
                #071630 0%, 
                #071630 ${caretStart}%, 
                #f569ff ${caretStart}%, 
                #f569ff ${caretEnd}%, 
                #071630 ${caretEnd}%, 
                #071630 100%
              )`
                : "#071630",
              minWidth: (text.length + 1) * 12,
              maxWidth: (text.length + 1) * 12
            }}
            value={text}
            onChange={this._handleChange}
            onSelect={this._handleSelect}
            onKeyPress={this._handleEnter}
          />
        </div>
        {errorMessage !== "" && (
          <div className="navbar-error-message">
            <pre>{errorMessage}</pre>
          </div>
        )}
        <NavbarLinks path={this.props.path} />
      </div>
    );
  }
}

export default Navbar;
