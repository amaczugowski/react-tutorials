var React = require('react');
var ReactDOM = require('react-dom');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [
    {
      title: 'See Tutorials',
      number: 32,
      header: 'Learn React',
      description: 'React is amazing.',
      imageUrl: 'https://cdn.auth0.com/blog/react-js/react.png'
    },
    {
      title: 'See Tutorials',
      number: 25,
      header: 'Learn Gulp',
      description: 'Gulp is good.',
      imageUrl: 'https://uk.acquadiparma.com/skin/frontend/adp/default/node_modules/gulp-notify/assets/gulp-error.png'
    }
  ]
};

// ask react to render this class
var element = React.createElement(ThumbnailList, options);

// when we ask react to render this call, we will tell it where to place the
//   rendered element in the dom
ReactDOM.render(element, document.querySelector('.target'));
