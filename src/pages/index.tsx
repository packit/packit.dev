import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import {
  FeatureItem,
  HomepageFeatures,
} from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/guide"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function PackitDescription() {
  const about: FeatureItem[] = [
    {
      title: "What is Packit?",
      description: (
        <>
          An open source project aiming to ease the integration of your project
          with <Link to="https://getfedora.org/">Fedora Linux</Link>,{" "}
          <Link to="https://www.centos.org/centos-stream/">CentOS Stream</Link>{" "}
          and other distributions.
        </>
      ),
    },
    {
      title: "Who should use Packit?",
      description: (
        <>
          Upstream projects that want to build RPM packages out of pull
          requests, commits or releases, test their code changes and bring
          upstream releases to Fedora Linux.
        </>
      ),
    },
  ];

  function Feature({ title, description }: FeatureItem) {
    return (
      <div className={clsx("col")}>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="padding-top--lg">
      <div className="container">
        <div className="row">
          {about.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <h3>Why start using Packit?</h3>

          <ol>
            <li>
              <i>Easy to configure</i> — Feel free to jump into{" "}
              <Link to="/docs/guide">our guide</Link> or check directly the{" "}
              <Link to="/docs/configuration">configuration documentation</Link>{" "}
              and{" "}
              <Link to="/docs/configuration/examples">
                configuration examples
              </Link>
              .
            </li>
            <li>
              <i>Stable users</i> —{" "}
              <Link to="https://github.com/systemd/systemd/blob/45cab6e3c1d542d66c293a3a722c08412386f335/.packit.yml">
                systemd
              </Link>
              ,{" "}
              <Link to="https://github.com/cockpit-project/cockpit/blob/b0398fafe302b7c453db0e10a49f9d70e37727e2/packit.yaml">
                cockpit
              </Link>
              ,{" "}
              <Link to="https://github.com/avocado-framework/avocado/blob/73fd7259d6e87aad218ed87e5ccd4212c4a5042c/.packit.yml">
                avocado
              </Link>
              ,{" "}
              <Link to="https://github.com/ansible-community/ansible-lint/blob/0903650292b6dd057daec27aa6d9f2523cc9afdc/.packit.yaml">
                ansible-lint
              </Link>{" "}
              and many other projects. If you are interested, have a look at our{" "}
              <Link to="https://dashboard.packit.dev/usage">dashboard</Link> for
              the usage of Packit.
            </li>
            <li>
              <i>We are an active project</i> — We are open to any ideas on how
              to improve Packit and try to bring new features and fix bugs as
              soon as possible, so you can open an{" "}
              <Link to="https://github.com/packit/packit-service/issues/new">
                upstream issue
              </Link>{" "}
              any time.
            </li>
            <li>
              <i>We are here to help</i> — In case of any questions, feel free
              to contact{" "}
              <Link to="https://github.com/orgs/packit/people">us</Link>!
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

function Parts() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <h3>What does Packit consist of?</h3>
        </div>
        <div className="row">
          <ul>
            <li>
              A <Link to="/docs/cli">CLI tool</Link> which you can install
              locally and start using right away.
            </li>
            <li>
              A <Link to="/docs/guide">service</Link> which provides you
              feedback on how is your project integrated with{" "}
              <Link to="https://getfedora.org/">Fedora Linux</Link>,{" "}
              <Link to="https://www.centos.org/centos-stream/">
                CentOS Stream
              </Link>{" "}
              and other distributions.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contacts() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 id="contact">Contact</h2>
        <ul>
          <li>
            <Link to="https://matrix.to/#/%23packit:fedora.im">
              #packit:fedora.im
            </Link>{" "}
            (Matrix)
          </li>
          <li>
            <Link to="mailto:hello@packit.dev">hello@packit.dev</Link>
          </li>
          <li>
            <Link to="https://fosstodon.org/@packit" rel="me">
              @packit@fosstodon.org
            </Link>{" "}
            (Mastodon)
          </li>
        </ul>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Automate and ease the work of maintainers and developers"
    >
      <HomepageHeader />
      <PackitDescription />
      <main>
        <HomepageFeatures />
        <Why />
        <Parts />
        <Contacts />
      </main>
    </Layout>
  );
}
