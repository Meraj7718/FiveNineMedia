import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Routes, Route } from "react-router-dom";
import routes from "./app/routes";

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <Routes>
        {routes.map((route: any, idx: number) => (
          <Route
            key={idx}
            path={route.path}
            element={
              route.element
                ? route.element
                : route.component
                ? React.createElement(route.component)
                : null
            }
          />
        ))}
      </Routes>
    </StaticRouter>
  );
}