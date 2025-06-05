# Smarter package maintenance with Packit (Flock 2025)

## 🎯 Goal

The main goal of this workshop is to **set up a complete Fedora release pipeline** for your package using the following Packit jobs:

- `pull_from_upstream` (alternatively `propose_downstream`, if you already use Packit in upstream)
- `koji_build`
- `bodhi_update`

By the end of this session, you should have a working configuration that automates these steps in the Fedora package release lifecycle.

---

## 🛠️ Instructions

### Prerequisites

- Ensure you have a **Fedora package** you maintain/co-maintain. Ideally, pick one that has a **pending upstream release**, as this allows trying things out easily.

### Setup

For detailed setup instructions, you can follow [the documentation](https://packit.dev/docs/fedora-releases-guide/dist-git-onboarding#setup). You can find a brief summary below:

#### Create a working branch

Before creating the configuration file, review [this section on how you'll be trying out the setup](https://packit.dev/docs/fedora-releases-guide/dist-git-onboarding#release-syncing).
Based on that, create a new branch in your dist-git repository for your Packit configuration
(e.g., `packit-setup`).

#### Create the Packit configuration file

Packit uses a YAML configuration file, named `(.)packit.yaml`, to define its behavior. This file needs to be placed in your **dist-git repository**,
in general in the `rawhide` branch, but for experimentation during the workshop in a new branch, trying things out in a pull request.

Then, the simplest ways of creating the config:

- Use `packit dist-git init` (requires `packit` installed locally, e.g. `dnf install packit`)

  1.  In your cloned dist-git repository, switch to the target branch.
  2.  Run the command:
      ```bash
      packit dist-git init
      ```

- Use our template

  1.  Manually create a `.packit.yaml` file in your target branch.
  2.  Copy the content from the [Downstream configuration template](https://packit.dev/docs/configuration/downstream_configuration_template#template) and adjust it to your needs.

#### Push your config

Push your config to the dist-git repository target branch and open a pull request.

#### Monitoring of the package

For the `pull_from_upstream` job to work, the monitoring needs to be enabled for the package, see [details](https://packit.dev/docs/fedora-releases-guide/dist-git-onboarding#2-monitoring-of-the-package).

### Test your setup

Now, verify that the Packit jobs are working correctly.
Everything on how to test it out is described [here](https://packit.dev/docs/fedora-releases-guide/dist-git-onboarding#how-to-try-that-for-real).

Check the [Packit service dashboard](https://dashboard.packit.dev/jobs/pull-from-upstream) for detailed feedback and logs from your Packit jobs,
more information also [here](https://packit.dev/docs/fedora-releases-guide/dist-git-onboarding#ui).

---

## 📚 Video materials

For a visual walkthrough and more in-depth explanations of the Packit jobs and concepts, please refer to our previous workshop materials:

- [Packit workshops materials](https://packit.dev/docs/workshops-materials)
