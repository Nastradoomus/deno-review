/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import { h } from "https://crux.land/api/get/7GrKMy.ts";
import Deno from "./assets/images/deno.tsx"


export default () => {

	const denoDeploy = [
			{
				header: "Develop Locally, Deploy Globally",
				link: "https://deno.com/deploy/docs",
				text: "Deno Deploy is built on the same underlying infrastructure as the Deno CLI, allowing you to develop locally without internet access."
			},
			{
				header: "No Vendor Lock In",
				link: "https://deno.com/deploy/docs",
				text: "The service deeply integrates the V8 JavaScript runtime with a high performance asynchronous web server to provide optimal performance without unnecessary intermediate abstractions."
			},
			{
				header: "Built For Performance",
				link: "https://deno.com/deploy/docs",
				text: "Deno is built on the fastest server technologies available: Rust, V8, Hyper, and Tokio. Never miss a beat."
			},
		]

	return (
		<div class="mx-auto grid grid-cols-2 py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
			<div class="mt-24 ml-12 row-span-2">
				<Deno />
			</div>
			<div class="space-y-4 mb-2">
				<h2 class="text-4xl font-extrabold tracking-tight sm:text-4xl text-indigo-600 ml-12">Deno Deploy</h2>
			</div>
			<div class="items-center mb-12">
			{denoDeploy.map((d) => (
					<div key={d.header} class="group">
						<div class="w-full overflow-hidden">
							<ul>
							<li>
								<h3 class="mt-4  text-lg font-medium text-gray-900 mb-2">{d.header}</h3>
								<a class="no-underline hover:text-indigo-800" href={d.link}>{d.text}</a>
							</li>
							</ul>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}


