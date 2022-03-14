import './App.css';
import ListExamComponent from './components/ListExamComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ViewExamComponent from './components/ViewExamComponent';
import UpdateExamComponent from './components/UpdateExamComponent';
function App() {
  return (
    

<div className="container">
        <Router>
                    <Switch> 
                          <Route path = "/" exact component = {ListExamComponent}></Route>
                          <Route path = "/exams" exact component = {ListExamComponent}></Route>
                          <Route path = "/exams/:id" exact component = {ViewExamComponent}></Route>
                          <Route path = "/update-exam/:id" exact component = {UpdateExamComponent}></Route>
                    </Switch>
        </Router>
        </div>
                
  );
}

export default App;
