import React from "react";
import Layout from "@theme/Layout";

import UsageGraph from "../components/UsageGraph";

const USAGES = [
  "/img/usage/srpm_builds",
  "/img/usage/copr_build_groups",
  "/img/usage/koji_build_groups",
  "/img/usage/vm_image_build_targets",
  "/img/usage/tft_test_run_groups",
  "/img/usage/sync_release_runs",
];

export default function Usage() {
  return (
    <Layout title="Usage" description="Usage statistics of Packit Service">
      <main className="container">
        {USAGES.map((path) => (
          <UsageGraph src={path} />
        ))}
      </main>
    </Layout>
  );
}
