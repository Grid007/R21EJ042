import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AllProducts} />
        <Route path="/product/:id" component={ProductPage} />
      </Switch>
    </Router>
  );
}

export default App;
