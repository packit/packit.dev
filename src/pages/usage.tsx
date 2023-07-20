import React from "react";
import Layout from "@theme/Layout";

export default function Usage() {
  return (
    <Layout title="Usage" description="Usage statistics of Packit Service">
      <main className="container">
        <figure className="row">
          <embed
            className="col"
            type="image/svg+xml"
            src="/img/usage/srpm_builds.svg"
          />
        </figure>
        <figure className="row">
          <embed
            className="col"
            type="image/svg+xml"
            src="/img/usage/copr_build_groups.svg"
          />
        </figure>
        <figure className="row">
          <embed
            className="col"
            type="image/svg+xml"
            src="/img/usage/koji_build_groups.svg"
          />
        </figure>
        <figure className="row">
          <embed
            className="col"
            type="image/svg+xml"
            src="/img/usage/vm_image_build_targets.svg"
          />
        </figure>
        <figure className="row">
          <embed
            className="col"
            type="image/svg+xml"
            src="/img/usage/tft_test_run_groups.svg"
          />
        </figure>
        <figure className="row">
          <embed
            className="col"
            type="image/svg+xml"
            src="/img/usage/sync_release_runs.svg"
          />
        </figure>
      </main>
    </Layout>
  );
}
