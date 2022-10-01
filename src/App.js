import {Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Homepage from "./Pages/hompage/Homepage";


function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
            <Route path="/" element={ <Homepage /> } />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
