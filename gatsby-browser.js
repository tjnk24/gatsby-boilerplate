const React = require('react');
const Layout = require('./src/containers/layout').default;

exports.wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;
