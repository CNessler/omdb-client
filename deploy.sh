aws s3 sync . s3://nessler-claire-omdb-client --acl public-read --exclude '.git/*'
open http://nessler-claire-omdb-client.s3-website-us-west-2.amazonaws.com/
