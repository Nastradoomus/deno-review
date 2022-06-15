/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import { serve } from "https://deno.land/std@0.133.0/http/server.ts";
import { router } from "https://crux.land/api/get/uYQG.ts";
import { h, ssr } from "https://crux.land/api/get/7GrKMy.ts";

import NavBar from "./navBar.tsx";
import Deno from "./deno.tsx";
import DenoDeploy from "./denoDeploy.tsx";
import GetStarted from "./getStarted.tsx";
import NotFound from "./notFound.tsx";

const render = (component: string) => ssr(() => <App>{component}</App>);
export const serveApp = () => {
  serve(
    router({
      "/": () => render(<Deno />),
      "/get-started": () => render(<GetStarted />),
      "/deno-deploy": () => render(<DenoDeploy />),
    }, () => render(<NotFound />)),
    {
      port: 1337,
    },
  );
};

function App({ children }: Record<string, string>) {
  return (
    <div class="min-h-screen">
      <NavBar />
      {children}
    </div>
  );
}
