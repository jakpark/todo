This is a TodoBackend implementation for a Express server + Postgres

Notes:
My local environment is Ubuntu 16.04 LTS
Node -v 8.11.3
npm -v 5.6.0
express@4.16.3
Postgres 9.5.13
pg@7.4.3
sequelize@4.38.0


The problem with Postgres is by default, it treats Linux connections
as trusted for logging into its own user database.
E.G. : create a database while logged in as username, the database
is called username.

pg_hba.conf is required to be set to different settings (trust on my machine)
and then the postgres service needs to be reset:
sudo systemctl restart postgresql.service

NO IDEA how the flow should work on MacOS.

Status:

I have finished the first 2 tests on:

https://www.todobackend.com/specs/index.html?http://localhost:4000

GET and POST

The setup for this stupid config was the longest and most frustrating thing.
I have not committed .env to my source code but it involves a dotenv variable
to allow my app to connect to Postgres database. Otherwise you'll find 
migrations not working or any other way to access the server not working.

OK, now I realize the env file doesn't do anything when everything is set to TRUST.

That's a later problem to fix.

TODO:
☑ Get app responding to HTTP
☑ POST api successful and returns created object
☐ DELETE 
☐ GET: empty array
etc

FIX:
☒ BROKEN env files for database auth
