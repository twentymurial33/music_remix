
import {
  Links,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";
import Layout from "./components/Layout";

export default function App() {
  return (
    <html>
       <Layout>
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Hello world!</h1>
        <Outlet />

        <Scripts />
      </body>
      </Layout>
    </html>
  );
}
