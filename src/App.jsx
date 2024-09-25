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
import ControlDetalles from './pages/ControlDetalles'; // Importa el componente ControlDetalles
import DonanteCrematocrito from './pages/DonanteCrematocrito'; // Importa el componente DonanteCromatocrito
import CrematocritoDetalles from './pages/CrematocritoDetalles';
import Acidez from './pages/Acidez';
import AcidezDetalles from './pages/AcidezDetalles';// Importa el componente CrematocritoDetalles

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/',
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
          <Route path="/ControlDetalles/:id" element={<ControlDetalles />} />
          <Route path="/agregarCrematocrito/:id" element={<DonanteCrematocrito />} />
          {/* Nueva ruta para ver detalles del Cromatocrito */}
          <Route path="/CrematocritoDetalles/:id" element={<CrematocritoDetalles />} />
          <Route path="/agregarAcidez/:id" element={<Acidez />} />
          <Route path="/AcidezDetalles/:id" element={<AcidezDetalles />} />
        </Routes>
      </ApolloProvider>
    </Router>
  );
}

export default App;
