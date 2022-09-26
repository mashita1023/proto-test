.PHONY: gen-web

gen-web:
	buf generate --template buf.gen-web.yaml
	cd website && npx docusaurus generate-proto-docs && npm run build
