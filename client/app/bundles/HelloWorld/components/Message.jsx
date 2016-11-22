import React from 'react';

const Message = (props, railsContext) => (
  <div>
    Text: {props.text}
    <br />
    Locale: {railsContext.i18nLocale}
    <hr />
  </div>
);

Message.propTypes = {
  text: React.PropTypes.string,
};

export default Message;
