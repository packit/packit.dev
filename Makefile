server:
	hugo server -D -w

generate:
	rm -rf ./docs/
	hugo
