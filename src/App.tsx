
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Navigate, Route, Routes } from 'react-router-dom';
import NewNote from './components/NewNote';



function App() {
  return (
    <Container className='my-4'>
    <Routes>
      <Route path='/' element={<div>clint</div>} />
      <Route path='/new' element={<NewNote />} />
      <Route path='*' element={<Navigate to={'/'} />} />
      <Route path='/:id'>
        <Route index element={<div>show</div>}/>
        <Route path='edit' element={<div>edit</div>}/>
      </Route>
    </Routes>
    </Container>
  );
}

export default App;
