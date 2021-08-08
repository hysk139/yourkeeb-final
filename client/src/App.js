
import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Navbar } from '../src/components';
import { 
  Home, NullPage, Product, Info, ProductSingular, AdminAddOrEdit, Edit
} from './pages';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/edit" component={Edit} />
        <Route 
        exact path="/product" 
        render={(props) => 
          <Product {...props} type={`keyboard`} />}
        />
        <Route 
        exact path="/product/keyboard" 
        render={(props) => 
          <Product {...props} type={`keyboard`} />}
        />
        <Route 
        exact path="/product/keyboard/:id" 
        render={(props) => 
          <ProductSingular {...props} type={`keyboard`} />}
        />
        <Route 
        exact path="/product/switch" 
        render={(props) => 
          <Product {...props} type={`switch`} />}
        />
        <Route 
        exact path="/product/switch/:id" 
        render={(props) => 
          <ProductSingular {...props} type={`switch`} />}
        />
        <Route 
        exact path="/info" 
        render={(props) => 
          <Info {...props} type={`brand`} />}
        />
        <Route 
        exact path="/info/brand" 
        render={(props) => 
          <Info {...props} type={`brand`} />}
        />
        <Route 
        exact path="/info/layout" 
        render={(props) => 
          <Info {...props} type={`layout`} />}
        />

        <Route 
          exact
          path="/edit/keyboard/:id" 
          render={(props) => 
            <AdminAddOrEdit {...props} addOrEdit={false} type={`keyboard`} />}
        />

        <Route 
          exact
          path="/edit/switch/:id" 
          render={(props) => 
            <AdminAddOrEdit {...props} addOrEdit={false} type={`switch`} />}
        /> 
        <Route 
          exact
          path="/edit/brand/:id" 
          render={(props) => 
            <AdminAddOrEdit {...props} addOrEdit={false} type={`brand`} />}
        /> 
        <Route 
          exact
          path="/edit/layout/:id" 
          render={(props) => 
            <AdminAddOrEdit {...props} addOrEdit={false} type={`layout`} />}
        /> 
         

        <Route 
          exact
          path="/add/keyboard/" 
          render={(props) => 
            <AdminAddOrEdit {...props} addOrEdit={true} type={`keyboard`} />}
        />
        <Route 
          exact
          path="/add/switch/" 
          render={(props) => 
            <AdminAddOrEdit {...props} addOrEdit={true} type={`switch`} />}
        />
        <Route 
          exact
          path="/add/layout/" 
          render={(props) => 
            <AdminAddOrEdit {...props} addOrEdit={true} type={`layout`} />}
        />
        <Route 
          exact
          path="/add/brand/" 
          render={(props) => 
            <AdminAddOrEdit {...props} addOrEdit={true} type={`brand`} />}
        />

        {/* <Route exact path="/projects" component={Project} />
        <Route exact path="/experience" component={Experience} /> */}
        <Route component ={NullPage} />
      </Switch>
    </>
  );
}

export default App;

