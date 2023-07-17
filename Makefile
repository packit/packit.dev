run-dev: import
	yarn start

install-dependencies: import
	sudo dnf -y install yarnpkg
	yarn install

import:
	# Deployment
	([[ -d .deployment-docs ]] && rm -rf .deployment-docs deployment) || true

	# temporary workaround to fix the build
	git clone https://github.com/mfocko/deployment.git .deployment-docs
	(cd .deployment-docs && git checkout docusaurus)

	mv .deployment-docs/docs/deployment deployment

	# Research
	([[ -d .research-docs ]] && rm -rf .research-docs research) || true

	# temporary workaround to fix the build
	git clone https://github.com/mfocko/research.git .research-docs
	(cd .research-docs && git checkout docusaurus)

	mv .research-docs/research research

.PHONY: run-dev import
