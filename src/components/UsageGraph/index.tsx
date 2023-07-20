import React from "react";

export default function UsageGraph({ src }) {
  return (
    <figure className="row">
      <embed
        className="col light-mode-only"
        type="image/svg+xml"
        src={`${src}_light.svg`}
      />
      <embed
        className="col dark-mode-only"
        type="image/svg+xml"
        src={`${src}_dark.svg`}
      />
    </figure>
  );
}
