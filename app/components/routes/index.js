'use strict';

import ContentDelivery from '../pages/content-delivery';

const Router = ReactRouter;
const Route = Router.Route;
const RouteHandler = Router.RouteHandler;
const DefaultRoute = Router.DefaultRoute;
const Redirect = Router.Redirect;

export default (
    <Route handler={ContentDelivery}>
        <DefaultRoute handler={ContentDelivery} />
    </Route>
)
