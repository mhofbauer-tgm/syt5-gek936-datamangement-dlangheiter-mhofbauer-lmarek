# "Datamanagement - Synchronization"
This is currently running at: https://unicorn.tgm.thekingdave.com/  
The db is running at: https://couch.redt6a.thekingdave.com/

##
Project to have a synchronized shopping list between client devices.

## Task
You can find the task details under [Task Description](TASK.md) which describes the required steps for realization.

## Participantss
  - David Langheiter
  - Matthias Hofbauer
  - Lukas Marek

## Execute
To execute this project you need to have Node/NPM and Docker/docker-compose installed.

There are two parts to this project:

### The WebApp
This is a React based OnePage Application.

To run the following commands you need to go into the folder `unicorn-webshop`.

To install all necessary dependencies run
```shell script
npm install
```

For development run
```shell script
npm start
```
This will open a server on port 3000. This will autoreload if you make changes to the src's.

If you want to deploy it run
```shell script
npm run build
```
This will build the application into the directory build. This can be hosted by any webserver (Apache, ...).

### The DB-Server  
The DB-server is a simple couchbase server hosted in docker.

To run the db server cd into the directory `server`. Then run
```shell script
docker-compose up -d
```
This will start the db server in disconnected (-d) mode.

**On First startup** you need to setup the db. This setups all necessary databases and users.
```shell script
bash setup-db.sh
```

The default login credentials are admin admin.

## Implementation
For our project we use React and PouchDB for the WebApp and CouchDB as server, for reasons, which are explained here: [Latex](UnicornWebshop.pdf)

### Responsibilities
To achieve our project we split it into three parts, that will be managed by one person each.
  - David Langheiter will be responsible for the DB-Server(CouchDB)
  - Matthias Hofbauer will manage the synchronization between all the parts(PouchDB)
  - Lukas Marek will create the WebApp(React)

### Tasks
* [x] **DB Server** Langheiter
* [x] **UI** Marek 
* [x] **Client DB Synchronization** Hofbauer 
* [x] **Ui Api sync** Langheiter
* [ ] **Testing**

## Resources

[Docker Couchbase](https://hub.docker.com/_/couchbase)

[Pouch Db](https://couchdb.apache.org/)

[React](https://reactjs.org )



