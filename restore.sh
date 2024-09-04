curl googledriverlink --output ./db/fbid_phones.bson
docker cp db/fbid_phones.bson 1808562746b2:fbid_phones.bson
docker cp db/fbid_phones.metadata.json 1808562746b2:fbid_phones.metadata.json
docker exec -it 1808562746b2 mongorestore --db fbid_phones fbid_phones.bson