import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard';
import AdminProduct from './AdminProduct/AdminProduct';
import AdminUser from './AdminUser/AdminUser';

function Routes(props) {
    return (
        <Switch>
            <Route path='/admin/' exact component={Dashboard}/>
            <Route path='/admin/customer' component={AdminUser}/>

            <Route path='/admin/product' component={AdminProduct}/>

        </Switch>
    );
}

export default Routes;