import Admin from './component/midterm/Admin';
import Home from './component/midterm/Home';
import React from 'react';

const routes = [{
    path: '/',
    exact: true,
    main: () => <Home />
},
{
    path: '/Admin',
    exact: true,
    main: ({ history }) => <Admin history={history} />
},
{
    path: "*",
    main: () => <div>Error</div>
}
];
export default routes;
