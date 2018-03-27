# AWS credential setup URL
https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html

# Deploy to AWS lambda
sls deploy --region ap-southeast-1

> Use this method when you have updated your Function, Event or Resource configuration in serverless.yml and you want to deploy that change (or multiple changes at the same time) to Amazon Web Services.

`Note: You can always enforce a deployment using the --force option.`

# run to local server
sls offline start

# logging
sls logs -f <fuctionName>