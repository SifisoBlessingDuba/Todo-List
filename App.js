import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/layout/navbar';
import Dash from './components/dashboard/Dashboard';
import TodoList from './components/project/createprojet';
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dash />} />
            <Route path="/main" element={<TodoList />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path='/signUp' element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
