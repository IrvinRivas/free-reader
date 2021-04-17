import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Author from './containers/Author';
import Book from './containers/Book';
import Category from './containers/Category';
import Editorial from './containers/Editorial';
import Home from './containers/Home';
import Search from './containers/Search';
import Tag from './containers/Tag';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home}/>
          <Route exact path="/book/:id" component={Book} />
          <Route exact path="/category/:name/:id" component={Category} />
          <Route exact path="/tag/:tag/:id" component={Tag} />
          <Route exact path="/author/:author" component={Author} />
          <Route exact path="/editorial/:editorial" component={Editorial} />
          <Route exact path="/search/:search" component={Search} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
