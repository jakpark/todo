This is a TodoBackend implementation for a Express server + Postgres

Notes:
My local environment is Ubuntu 16.04 LTS
Postgres 9.5.13
pg@7.4.3
express@4.16.3
Node -v 8.11.3
npm -v 5.6.0
sequelize@4.38.0


The problem with Postgres is by default, it treats Linux connections
as trusted for logging into its own user database.
E.G. : create a database while logged in as username, the database
is called username.

pg_hba.conf is required to be set to different settings (trust on my machine)
and then the postgres service needs to be reset:
sudo systemctl restart postgresql.service

NO IDEA how the flow should work on MacOS.
