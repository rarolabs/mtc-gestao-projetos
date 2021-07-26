import React from 'react';
// import $ from 'jquery';

// window.jQuery = $;
// window.$ = $;
// global.jQuery = $;

// const OtherSamplePage = React.lazy(() => import('./Projects/Dashboard/SamplePage'));
const Dashboard = React.lazy(() => import('./Projects/Dashboard/Dashboard'));

const routes = [
    { path: '/project-crm/pc-dashboard', exact: true, name: 'Project & CRM Dashboard', component: Dashboard },
];

export default routes;