
aws dynamodb scan --table-name $1  | jq '.Items' > data.json
genson data.json > meta.json
rm data.json
node schema.js
rm meta.json