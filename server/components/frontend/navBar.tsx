/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import { h } from "https://crux.land/nanossr@0.0.4";
import Logo from "./assets/images/logo.tsx"


export default () => {
	return (
		<nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
		<div class="mb-2 sm:mb-0 flex items-center">
			<Logo />
			<a href="/" class="pl-2 text-2xl no-underline hover:text-indigo-800">Deno</a>
		</div>
		<div>
			<a href="/get-started" class="text-lg no-underline hover:text-indigo-800 ml-3">Get Started</a>
			<a href="/deno-deploy" class="text-lg no-underline hover:text-indigo-800 ml-3">Deno Deploy</a>
		</div>
		</nav>
	);
}