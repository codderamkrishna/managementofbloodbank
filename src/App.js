import './App.css';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListBloodbankComponent from './components/ListBloodbankComponent';
import CreateBloodbankComponent from './components/CreateBloodbankComponent';


function App() {
  return (
    <div>
      <Router>
        
          <HeaderComponent />
            <div className="container">
              <Switch>
                  <Route path= "/" exact component={ListBloodbankComponent}></Route>
                  <Route path= "/bloodbanks" component={ListBloodbankComponent}></Route>
                  
                  {/* //step1 */}
                  <Route path= "/add-bloodbank/:id" component={CreateBloodbankComponent}></Route>
              </Switch>
            </div>
          <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
