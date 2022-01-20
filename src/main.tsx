import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider }  from '@apollo/react-hooks'
import { BrowserRouter } from "react-router-dom";


const client: any = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

ReactDOM.render(
    <ApolloProvider client={client}> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
    </ApolloProvider>,
  document.getElementById('root')
)
