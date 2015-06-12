'use strict';

import routes from './components/routes';

const Router = ReactRouter;
const historyLocation = Router.HistoryLocation;

Router.run(routes, historyLocation, (Root) => {
    React.render(<Root />, document.body);
});
