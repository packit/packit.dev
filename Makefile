import:
	# Deployment
	([[ -d .deployment-docs ]] && rm -rf .deployment-docs deployment) || true

	# temporary workaround to fix the build
	git clone https://github.com/mfocko/deployment.git .deployment-docs
	(cd .deployment-docs && git checkout docusaurus)

	mv .deployment-docs/docs/deployment deployment

	# Research
	# ([[ -d .research-docs ]] && rm -rf .research-docs research) || true
	# git clone https://github.com/packit/research.git .research-docs
	# mv .research-docs/research research
