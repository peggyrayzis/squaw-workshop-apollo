const simpleWrite = `import React from "react";
import { ApolloConsumer } from "react-apollo";
import Link from "./Link";

const FilterLink = ({ filter, children }) => (
  <ApolloConsumer>
    {cache => (
      <Link
        onClick={() => cache.writeData({ data: { filter } })}>
        {children}
      </Link>
    )}
  </ApolloConsumer>
);`;

const simpleRead = `import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_FILTER = gql\`
  {
    filter @client
  }
\`;

const FilterText = () => (
  <Query query={GET_FILTER}>
    {({ data }) => <p>{data.filter}</p>}
  </Query>
);`;

const boost = `import ApolloClient from 'apollo-boost';
import { resolvers } from './resolvers';

const client = new ApolloClient({
  uri: 'https://nx9zvp49q7.lp.gql.zone/graphql',
  clientState: {
    defaults: {
      filter: 'SHOW_ALL'
    },
    resolvers
  },
});`;

const delay = `import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import GET_TODOS from "./todos.graphql";

const TodosLink = ({ onClick }) => (
  <Query query={GET_TODOS} delay>
    {({ load }) => {
      <button onMouseOver={() => load()} onClick={onClick}>
        Get Todos
      </button>
    }}
  </Query>
);`;

const after = `const AddTodo = () => (
  <Mutation
    mutation={ADD_TODO}
    update={(cache, { data: { addTodo } }) => {
      cache.updateQuery({ query: GET_TODOS }, ({ todos }) => {
        return { todos: todos.concat([addTodo]) };
      })
    }}
  >
  {/* insert mutation render prop function */}
  </Mutation>
);`;

const code = {
  simpleWrite,
  simpleRead,
  boost,
  delay,
  after,
};

export default code;
