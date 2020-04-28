import React from "react";
import App from "./App";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";

let port = process.env.PORT || 5000;

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: 'http://localhost:5000/'
});

const client = new ApolloClient({
  link: link,
  cache: cache
});


export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
