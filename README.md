# Atlan SQL Query Editor

Web App to Run SQL Query and get results

## Brief Working

### Front End :

→ Built using `React.Js`

→ Styling : `Material-UI`

→ Form : `Formik`

→ Client takes in the query from user and send request to Server using `Axios`

→ Server sends back the response which is rendered on the client-side in the form of `Data-Grid/Alert`

→ Validation has been handled on frontend

### Back End :

→ Built using `Node.Js`, `Express.Js`

→ Database : `MySQL` hosted on `Clever-Cloud`

→ Middleware : `morgan`, `cors`

→ Server accepts the SQL query coming from client & forwards it to `mysql` plugin that processes & returns the response in JSON format

→ The JSON response is then sent to front-end

#### `P.S` :

Due to some recent changes in the webpack 5.0 release , `mysql` plugin couldn't be implemented directly onto frontend and hence has to be filtered through a express server, & adding a server increased the user's experience as well

## Libraries / Framework / packages used :

`React.Js` → React is a free and open-source front-end JavaScript library for building user interfaces based on UI components

`Material-UI` → Material-UI offers comprehensive range of production-ready UI components which gives great styling options to the application

`Formik` → Build forms in React, with ease

`Axios` → Promise based http client for web applications and node js development. It makes fetch requests easier to handle

`express` → Minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. t is designed for building web applications and APIs

`mysql` → A node.js driver for mysql

## Links :

### Live Links :

[Frontend](https://atlan-sql-query-editor.netlify.app/) → https://atlan-sql-query-editor.netlify.app/

[Server](https://sql-query-server.herokuapp.com/) → https://sql-query-server.herokuapp.com/query?q={q}

### Source Code :

[Frontend](https://github.com/saikatXshrey/atlan-frontend-challenge/tree/master) → https://github.com/saikatXshrey/atlan-frontend-challenge/tree/master

[Server](https://github.com/saikatXshrey/atlan-frontend-challenge/tree/server) → https://github.com/saikatXshrey/atlan-frontend-challenge/tree/server

## Speed Test :

Mobile → 91/100

Desktop → 78/100

[Report 🚀](https://www.browserstack.com/speedlab/report/ace52103e09cbe98b5ecedac9f09c5d0b7c35901)
