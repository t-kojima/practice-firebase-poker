import React from 'react';
import { Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Game from './components/game/Game';

const routeObjs = [
  {
    exact: true,
    path: '/',
    component: Dashboard
  },
  {
    exact: true,
    path: '/game',
    component: Game
  }
];

export default function routes(extraProps: any) {
  return (
    <div>
      {routeObjs.map((route, i) => {
        const { exact, path, render, props } = route as any;
        return (
          <Route
            exact={exact}
            path={path}
            render={
              render ||
              ((_: any) => (
                <route.component {..._} {...props} {...extraProps} />
              ))
            }
            key={i}
          />
        );
      })}
    </div>
  );
}
