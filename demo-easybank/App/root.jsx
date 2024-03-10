// import type { LinksFunction } from "@remix-run/node";
// import styles from "./tailwind.css";

import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
  } from "@remix-run/react";
  
  export default function App() {
    return (
      <html>
        <head>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"/>
          <link
            rel="icon"
            href="data:image/x-icon;base64,AA"
          />
          <Meta />
          <Links />
        </head>
        <body>
          <h1>
    something
          </h1>

          <div className="text-lg pt-6">
            this is a test
          </div>
          <Outlet />
  
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
  

// export const links: LinksFunction = () => [
//   { rel: "stylesheet", href: styles },
// ];
