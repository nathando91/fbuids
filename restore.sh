curl googledriverlink --output ./db/fbid_phones.bson
docker cp db/fbid_phones.bson 5ff70a578138:fbid_phones.bson
docker cp db/fbid_phones.metadata.json 5ff70a578138:fbid_phones.metadata.json
docker exec -it 5ff70a578138 mongorestore --db fbid_phones fbid_phones.bson