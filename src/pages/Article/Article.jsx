import React, { Component } from 'react';

export default class Article extends Component {
  static displayName = 'Article';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="article-page" />;
  }
}
