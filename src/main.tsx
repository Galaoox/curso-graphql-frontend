import ReactDOM from 'react-dom'
import App from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { BrowserRouter } from "react-router-dom";
import { API_URL } from './config/index';
import CssBaseline from '@mui/material/CssBaseline';



const client: any = new ApolloClient({
  uri: API_URL + "graphql"
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>

  </ApolloProvider>,
  document.getElementById('root')
)
