# Voting on Waves platform blockchain

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
5. Enter valid private keys to your config file
```
VOTERS_WALLET_PRIV_KEY = ''
OPTIONS_WALLET_PRIV_KEY = ''
VOTINGS_WALLET_PRIV_KEY = ''
TITLES_WALLET_PRIV_KEY = ''
DESCRIPTIONS_WALLET_PRIV_KEY = ''
```
Create five wallets and make sure to have positive balance on each of them

6. Visit http://localhost:7210

To display server logs run:
```docker logs -f votings_server_1```


