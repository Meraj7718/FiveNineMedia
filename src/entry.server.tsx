import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import routes from "./app/routes";

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      {routes}
    </StaticRouter>
  );
}