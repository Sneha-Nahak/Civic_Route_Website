import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import AuthorityUpdates from "./components/AuthorityUpdates.jsx";
import UserDashboard from './components/UserDashboard'
import IssueForm from './components/IssueForm.jsx';
import Navbar from './components/Navbar';

function App() {
 

  return (
    <>
    <Navbar />
    {/* Routes*/}
    <Routes>
      <Route path='/' element={<UserDashboard/>}/>
      <Route path='/issue-form' element={<IssueForm/>}/>
      <Route path='/authority-updates' element={<AuthorityUpdates/>}/>
    </Routes>

    </>
  )
}

export default App
