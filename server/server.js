const express = require("express");
// const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require('./schemas')
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
}

const root = require('path').join(__dirname, '../client', 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
// });

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start()
    server.applyMiddleware({ app });
    db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`API running on port ${PORT}`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      })
    })
  };

startApolloServer(typeDefs, resolvers);
