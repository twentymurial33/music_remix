import {
  Links,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";
import MainNavigation from "~/components/MainNavigation";
import stylesheet from "~/tailwind.css?url";


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
          <header>
          <MainNavigation />
        </header>

        <Outlet />

        <Scripts />
      </body>
      </Layout>
    </html>
  );
}
export function links() {
  [{rel: "stylesheet", href: stylesheet }]
}