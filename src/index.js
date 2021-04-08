import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./redux/store/Store";
import { Provider } from 'react-redux';
import App from "./App";
import {BrowserRouter,  Redirect, Route} from "react-router-dom";
import Signin from "./components/Auth/Signin/Signin";
import Signup from "./components/Auth/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import {isLogin} from "./utils";


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                {isLogin()?<Dashboard/>:<Redirect to="/signin" /> }
            </App>
        </BrowserRouter>

    </Provider>,
  document.getElementById('root')
);

