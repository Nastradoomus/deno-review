/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import { h } from "https://crux.land/nanossr@0.0.4";


export default () => {
	return (
		<div class="min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
			<div class="max-w-max mx-auto">
				<main class="sm:flex">
					<p class="text-4xl font-extrabold text-indigo-600 sm:text-5xl">404</p>
					<div class="sm:ml-6">
						<div class="sm:border-l sm:border-gray-200 sm:pl-6">
							<h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found</h1>
							<p class="mt-1 text-base text-gray-500">Please check the URL in the address bar and try again.</p>
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}