

## Tutorial:

- [http://frenchcoding.com/2014/09/17/comment-installer-mongodb-sur-son-poste-de-developpement/](http://frenchcoding.com/2014/09/17/comment-installer-mongodb-sur-son-poste-de-developpement/)
- [http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/](http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/)

- [https://scotch.io/tutorials/the-ins-and-outs-of-token-based-authentication](https://scotch.io/tutorials/the-ins-and-outs-of-token-based-authentication)
- [https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens](https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens)


## Create Mongodb database:

- Download and install it: [https://www.mongodb.org/downloads#production](https://www.mongodb.org/downloads#production)

- Start env: `PS C:\MongoDB\bin> ./mongod.exe --dbpath C:\wamp\www\ng2MapApp\server\data\`

- Connect: `PS C:\MongoDB\bin> ./mongo.exe`
- Create db: `use appmapdb`
- Insert: `db.usercollection.insert({ "username" : "testuser1", "email" : "testuser1@testdomain.com" })`
- Display: `db.usercollection.find().pretty()`
- List collections: `show collections`

## Commands:

- `nom install`

- `node server.js`
- OR `nodemon server.js` (+ `npm install -g nodemon`)





SERVER URL: [http://localhost:8080/](http://localhost:8080/)
