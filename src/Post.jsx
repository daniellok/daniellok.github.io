import React from "react";
import { Link } from "@reach/router";
import "./index.css";

function Post({ title, content, preview }) {
  let displayedContent;
  if (preview) {
    displayedContent = content.props.children[0];
  } else {
    displayedContent = content;
  }
  return (
    <Link to={title}>
      <div className="post-wrapper">
        <h1>{"==> " + title + " <=="}</h1>
        {displayedContent}
      </div>
    </Link>
  );
}

export default Post;
