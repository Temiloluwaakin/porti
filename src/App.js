import {Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Contact from './Pages/contact/Contact';
import Homepage from "./Pages/hompage/Homepage";


function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
            <Route path="/" element={ <Homepage /> } />
            <Route path='/contact' element={ <Contact /> } />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
