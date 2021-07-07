#!/bin/sh
aws s3 sync --delete ./dist s3://autopilot.aubry.sh/
aws cloudfront create-invalidation --distribution-id $AUTOPILOT_CLOUDFRONT_ID --paths '/*'