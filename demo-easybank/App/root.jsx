// import type { LinksFunction } from "@remix-run/node";
// import styles from "./tailwind.css";

import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
  } from "@remix-run/react";
  
  import Homepage from "./Components/Homepage/Homepage"
  import styles from "./Styles.css"

  export const links = () => [
    {
        rel: "stylesheet",
        href: styles,
    }
  ];
  
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
          <Homepage>
            
          </Homepage>

          <div className="text-lg pt-6">
            this is a footer
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
