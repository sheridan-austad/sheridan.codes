// import './Bootstrap.css'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './components/Home'
import Header from './components/Header'
import NavBar from './components/NavBar'
// import TodoCard from './components/TodoCard'
// import UserProfile from './components/UserProfile'
// import TodoForm from './components/TodoForm'
// import TodoContainer from './containers/TodoContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        &nbsp;
        &nbsp;
        <Header slogan="Welcome to my website!" />
        <Switch>
          <Route path="/todos/profile">
            <UserProfile />
          </Route>

          <Route path="/todos/new">
            <TodoForm />
          </Route>

          <Route path="/todos/:id">
            <TodoCard />
          </Route>

          <Route path="/todos">
            <TodoContainer />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App