# Voting on blockchain

1. Create *votings* directory and copy repo to it
```
git clone git@github.com:amrbz/voting.git voting
```
2. Run docker compose file and build required containers

```
cd voting
docker-compose up -d
```

3. Visit http://localhost:4203 to enter Crate IO panel and select *Console* tab. 
4. Create tables from */server/schema.sql*
5. Visit http://localhost:7210

To display server logs run:
```docker logs -f votings_server_1```


