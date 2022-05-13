import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LoginComponent from './components/Login/LoginComponent';
import Register from './components/Register/Register';
import HomeScreen from './screens/Home/HomeScreen';

import RegisterStudent from './components/Register/RegisterStudent';
import LoginStudent from './components/Login/LoginStudent';
import Student from './screens/Student/StudentScreen';
import ProfileScreen from './screens/Profile/ProfileScreen';
import DashboardScreen from './screens/Dashboard/DashboardScreen';
import AdminProfileScreen from './screens/Dashboard/ProfileScreen';

import UserListScreen from './screens/Dashboard/UserListScreen';
import UserEditScreen from './screens/UserEdit/UserEditScreen';





const Layout = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/login" component={LoginComponent} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/loginstudent" component={LoginStudent} />
                    <Route exact path="/registerstudent" component={RegisterStudent} />
                    <Route exact path="/profile" component={ProfileScreen} />
                    <Route exact path="/student" component={Student} />
                    <Route exact path="/admin/userList" component={UserListScreen} />
                    <Route exact path="/admin/dashboard" component={DashboardScreen} />
                    <Route exact path="/admin/profile" component={AdminProfileScreen} />
                   
                    <Route exact path="/admin/user/:id/edit" component={UserEditScreen} />
               

                </Switch>
                <Footer />
            </Router>
        </>
    )
}

export default Layout
