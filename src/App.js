import {Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Contact from './Pages/contact/Contact';
import Homepage from "./Pages/hompage/Homepage";
import Projects from './Pages/projects/Projects';
import Calculator from './Pages/projects/projectsfolder/calculator/Calculator';
import TodoApp from './Pages/projects/projectsfolder/todoapp/TodoApp';


function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
            <Route path="/" element={ <Homepage /> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='/projects' element={ <Projects /> } />
            <Route path='/projects/calculator' element={ <Calculator /> } />
            <Route path='/projects/todoapp' element={ <TodoApp/> } />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
