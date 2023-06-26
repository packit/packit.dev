import:
	([[ -d deployment-docs ]] && rm -rf deployment-docs) || true
	git clone https://github.com/packit/deployment.git deployment-docs
	mv deployment-docs/docs content/deployment-docs
