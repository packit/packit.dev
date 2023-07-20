run-dev: import generate-usage
	yarn start

install-dependencies: import
	sudo dnf -y install yarnpkg
	yarn install

generate-usage:
	python3 files/generate_usage.py

import:
	# Deployment
	([[ -d .deployment-docs ]] && rm -rf .deployment-docs deployment) || true
	git clone https://github.com/packit/deployment.git .deployment-docs
	mv .deployment-docs/docs/deployment deployment

	# Research
	([[ -d .research-docs ]] && rm -rf .research-docs research) || true
	git clone https://github.com/packit/research.git .research-docs
	mv .research-docs/research research

.PHONY: run-dev import
