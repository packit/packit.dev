.PHONY: docs server

server:
	hugo server -D

docs:
	rm -rf ./docs/
	hugo -d docs
