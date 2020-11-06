import React from 'react';
import ShopHome from './HomeShop'
import ShopCart from './CartShop'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,

} from 'react-router-dom';

export default function ShoppingCart(){
    return(
        <Router>
            <Link to = '/home'>HOME</Link>

               Shopping Cart

            <Link to = '/cart'>CART</Link>
            <Switch>
                <Route exact path = '/home'>
                    <ShopHome/>
                </Route>
                <Route exact path = '/cart'>
                    <ShopCart/>
                </Route>
            </Switch>
        </Router>
    );
}