import React from "react";
import { navigate } from "@reach/router";
import { routeHierarchy } from "../App";
import "../index.css";

function NavbarSuggestion({ suggestion }) {
  return (
    <div
      className="navbar-suggestion"
      onClick={() => navigate(suggestion.route)}
    >
      <pre>{suggestion.displayName}</pre>
    </div>
  );
}

class NavbarSuggestions extends React.PureComponent {
  makeSuggestion(route, displayName = null) {
    return {
      displayName: displayName != null ? displayName : route,
      route
    };
  }

  render() {
    const routeObj = routeHierarchy[this.props.path];
    const parentName = routeObj.parent;
    const parentObj = parentName != null ? routeHierarchy[parentName] : null;

    const parentSuggestion =
      parentObj != null
        ? this.makeSuggestion(parentName, ".. (" + parentObj.name + ")")
        : null;
    const routeSuggestions = routeObj.children.map(route =>
      this.makeSuggestion(route)
    );
    if (parentSuggestion != null) {
      routeSuggestions.unshift(parentSuggestion);
    }

    return (
      <div className="navbar-suggestions-wrapper">
        {routeSuggestions.map(suggestion => (
          <NavbarSuggestion key={suggestion.route} suggestion={suggestion} />
        ))}
      </div>
    );
  }
}

export default NavbarSuggestions;
