'use strict';

var React        = require('react')
var RouteHandler = require('react-router').RouteHandler

var Header       = require('./headerSection')
var MediaPlayer  = require('./mediaPlayer')

var nimbusApp   = React.createClass({

  render: function() {

    return (
      <div className="nimbusapp">
        <Header />
        <div className='content__wrapper'>
          <RouteHandler />
        </div>
        <MediaPlayer />
      </div>
    )
  }

})

module.exports = nimbusApp
