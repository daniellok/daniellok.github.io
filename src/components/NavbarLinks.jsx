import React from "react";
import { navigate } from "@reach/router";
import { pageHierarchy } from "../App";
import "../index.css";

function NavbarLink({ link }) {
  return (
    <div className="navbar-link" onClick={() => navigate(link.pagePath)}>
      <pre>{link.pageName}</pre>
    </div>
  );
}

class NavbarLinks extends React.PureComponent {
  makeSuggestion(pagePath, pageName) {
    return {
      pageName,
      pagePath
    };
  }

  render() {
    const currentPage = pageHierarchy[this.props.path];
    const pageLinks = currentPage.links.map(pagePath => {
      const pageName = pageHierarchy[pagePath].name;
      return { pageName, pagePath };
    });
    if (currentPage.parent != null) {
      const parentSuggestion = this.makeSuggestion(
        currentPage.parent,
        `.. (${pageHierarchy[currentPage.parent].name})`
      );
      pageLinks.unshift(parentSuggestion);
    }

    return (
      <div className="navbar-links-wrapper">
        {pageLinks.map(link => (
          <NavbarLink key={link.pagePath} link={link} />
        ))}
      </div>
    );
  }
}

export default NavbarLinks;
