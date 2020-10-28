import React, { Component } from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import Clock from './components/clock';
import './style.scss';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* 顶上按钮 */}
        <div>
          <Link to="/home/clock">
            <button>时钟</button>
          </Link>
          <button>三角形</button>
          <button>圆</button>
        </div>
        {/* canvas */}
        <HashRouter>
          <Switch>
            <Route path="/home/clock" component={Clock}></Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default Home;
