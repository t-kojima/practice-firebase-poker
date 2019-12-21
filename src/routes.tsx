import React from 'react';
import { Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';

const routeObjs = [
  {
    exact: true,
    path: '/',
    component: Dashboard
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
