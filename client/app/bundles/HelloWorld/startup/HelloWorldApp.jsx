import React from 'react';
import ReactOnRails from 'react-on-rails';

import HelloWorldContainer from '../containers/HelloWorldContainer';
import Message from '../components/Message';

// _railsContext is the Rails context, providing contextual information for rendering
const HelloWorldApp = (props, _railsContext) => (
  <HelloWorldContainer {...props} />
);

// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({
  HelloWorldApp,
  Message,
});
