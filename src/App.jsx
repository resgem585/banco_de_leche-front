import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { SignUpForm } from './components/SignUpForm';
import { Home } from './pages/Home';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/'
  });

  return (
    <Router>
      <ApolloProvider client={client}>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/create" element={<SignUpForm />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </ApolloProvider>
    </Router>
  );
}

export default App;
