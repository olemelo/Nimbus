'use strict';

var Remote          = window.require('electron').remote; // hack for browserify

var React           = require('react');
var Router          = require('react-router');

var nimbusApp      = require('./components/nimbusApp');

var About           = require('./components/aboutView');
var Likes           = require('./components/likesView');
var Feed            = require('./components/feedView');
var Playlists       = require('./components/playlistsView');

var settings        = Remote.require('electron-settings');
var SoundCloud      = require('./utils/soundcloud');

/**
 * Router
 */
var Route  = Router.Route;
var routes = (
  <Route handler={nimbusApp} >
    <Router.DefaultRoute name="feed" handler={Feed}/>
    <Route name="likes" handler={Likes}/>
    <Route name="playlists" handler={Playlists}/>
    <Route name="about" handler={About}/>
  </Route>
);

/**
 * Start the router and render nimbus
 */
function run() {
  Router.run(routes, function(Root) {
    React.render(<Root/>, document.getElementById('react'));
  });
}

/**
 * Configure the SoundCloud SDK
 */
settings.get('access_token')
  .then(token => {
    SoundCloud.initialize({
      'access_token' : token,
      'client_id'    : '1wThG4yQFJWJ5bkJhOlpBlrRVF1mxmVD'
    });
    run();
  })
  .catch(err => {
    throw new Error('Refusing to initialize application, authentication token not found.')
  })

module.exports = nimbusApp;
