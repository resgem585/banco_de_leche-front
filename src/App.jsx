import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { SignUpForm } from './components/SignUpForm';
import { Home } from './pages/Home';
import { Donante } from './pages/Donante';
import { ListaDonadoras } from './pages/ListaDonadoras';
import { DonanteDetalles } from './pages/DonanteDetalles';
import { EditarDonante } from './pages/EditarDonante';
import { DonanteControl } from './pages/DonanteControl';
import  ControlDetalles  from './pages/ControlDetalles';  // Importa el componente ControlDetalles

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
          <Route path="/donante" element={<Donante />} />
          <Route path="/listaDonadoras" element={<ListaDonadoras />} />
          <Route path="/DonanteDetalles/:id" element={<DonanteDetalles />} />
          <Route path="/EditarDonante/:id" element={<EditarDonante />} />
          <Route path="/agregarControl/:id" element={<DonanteControl />} />
          {/* Agrega la nueva ruta para ControlDetalles */}
          <Route path="/ControlDetalles/:id" element={<ControlDetalles />} />
        </Routes>
      </ApolloProvider>
    </Router>
  );
}

export default App;
