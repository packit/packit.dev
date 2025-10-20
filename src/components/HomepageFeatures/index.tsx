import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Building RPMs",
    description: (
      <>
        Packit uses{" "}
        <Link to="https://copr.fedorainfracloud.org">Copr build system</Link> to
        build RPMs from your code changes. This way, you can validate your
        package will be correctly built from each pull request and also have
        your changes installable by anyone via YUM repository created in Copr.{" "}
        <Link to="/docs/configuration/upstream/copr_build">Learn more.</Link>
      </>
    ),
  },
  {
    title: "Testing",
    description: (
      <>
        Packit runs your tests in{" "}
        <Link to="https://docs.testing-farm.io/Testing%20Farm/0.1/index.html">
          Testing Farm
        </Link>{" "}
        and can test either the RPM package built in Copr or trigger tests
        directly on different platforms.{" "}
        <Link to="/docs/configuration/upstream/tests">Learn more.</Link> It can
        also perform Static Application Security Testing through{" "}
        <Link to="https://openscanhub.dev/">OpenScanHub</Link> by running
        differential scans on{" "}
        <Link to="https://packit.dev/posts/openscanhub-prototype#setup">
          pull requests
        </Link>
        .
      </>
    ),
  },
  {
    title: "Automating Fedora Releases",
    description: (
      <>
        With Packit, you can easily get your upstream releases to the{" "}
        <Link to="https://src.fedoraproject.org/">Fedora dist-git</Link>,
        automatically submit builds in{" "}
        <Link to="https://koji.fedoraproject.org/koji/">Koji</Link> and create{" "}
        <Link to="https://bodhi.fedoraproject.org/">Bodhi</Link> updates!{" "}
        <Link to="/docs/fedora-releases-guide">Learn more.</Link>
      </>
    ),
  },
  {
    title: "Running as Fedora dist-git CI",
    description: (
      <>
        After successfuly validating upstream projects, Packit is now becoming a
        CI solution also for{" "}
        <Link to="https://src.fedoraproject.org/">Fedora dist-git</Link>.{" "}
        <Link to="/fedora-ci">Learn more.</Link>
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--3")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <h1>What key features does Packit offer?</h1>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { FeatureItem, Feature, HomepageFeatures };
