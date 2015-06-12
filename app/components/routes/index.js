'use strict';

import Index from '../pages/content-delivery';
import ArtistDetails from '../pages/content-delivery/artist-details';

const Router = ReactRouter;
const Route = Router.Route;
const RouteHandler = Router.RouteHandler;
const DefaultRoute = Router.DefaultRoute;
const Redirect = Router.Redirect;

const App = React.createClass({
    render() {
        return (<RouteHandler />);
    }
});

export default (
    <Route handler={App}>
        <DefaultRoute handler={Index} />
        <Route name="index" path="/" handler={Index} />
        <Route name="artist" path="/artists/:id" handler={ArtistDetails} />
    </Route>
)
