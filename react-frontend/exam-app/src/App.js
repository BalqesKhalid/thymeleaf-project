import './App.css';
import ListExamComponent from './components/ListExamComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ViewExamComponent from './components/ViewExamComponent';
//import UpdateExamComponent from './components/UpdateExamComponent';
import CreateExamComponent from './components/CreateExamComponent';
function App() {
  return (
    

<div className="container">
        <Router>
                    <Switch> 
                          <Route path = "/" exact component = {ListExamComponent}></Route>
                          <Route path = "/exams" exact component = {ListExamComponent}></Route>
                         { /* <Route path = "/update-exam/:id" exact component = {UpdateExamComponent}></Route> */}
                          <Route path = "/add-exam/:id" component = {CreateExamComponent}></Route>
                          <Route path = "/view-exam/:id" exact component = {ViewExamComponent}></Route> 
                    </Switch>
        </Router>
        </div>
                
  );
}

export default App;
