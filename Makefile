server:
	hugo server -D

generate:
	rm -rf ./docs/
	hugo
