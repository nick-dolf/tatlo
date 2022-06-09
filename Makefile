# development build command
dev:
	bundle exec jekyll serve -l

# staging server will run this command upon receiving webhook
staging:
	bundle exec jekyll build -d ~/staging/tatlo -b /staging/tatlo

# runs jekyll
serve:
	bundle exec jekyll serve
