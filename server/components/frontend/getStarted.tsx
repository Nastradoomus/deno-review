/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import { h } from "https://crux.land/api/get/7GrKMy.ts";


export default () => {

	const install = [
		{
			name: "Github",
			link: "https://github.com/denoland/deno/releases",
			text: "Download from GitHub releases"
		},
		{
			name: "Install scripts",
			link: "https://deno.land/manual/getting_started/installation",
			text: "Install with Shell, Scoop, Chocolatey and Homebrew or build with Cargo (rust)"
		},
	]

	const tooling = [
		{
			name: "Velociraptor",
			link: "https://velociraptor.run/",
			text: "The script runner for Deno.",
		},
		{
			name: "VSCode Deno extension",
			link: "https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno",
			text: "Support for linting and formatting Deno environment. Remember to enable after install.",
		},
	];

	const stacks = [
		{
			name: "Yup",
			link: "https://github.com/jquense/yup",
			text: "Dead simple validation. You can for example import it from skypack or github: import * as yup from 'https://cdn.skypack.dev/yup?dts'",
		},
		{
			name: "Oak",
			link: "https://deno.land/x/oak",
			text: "A middleware framework for Deno's native HTTP server, Deno Deploy and Node.js 16.5 and later. It also includes a middleware router. Based on Koa."
		},
		{
			name: "deno_mongo",
			link: "https://deno.land/x/mongo",
			text: "MongoDB database driver developed for Deno. supports Deno Deploy as well. Currently a bit poor support for MongoDB Atlas.",
		},
		{
			name: "AlephJS",
			link: "https://github.com/alephjs/aleph.js",
			text: "The Fullstack Framework in Deno.",
		},
		{
			name: "Nano JSX",
			link: "https://deno.land/x/nano_jsx",
			text: "Written in TypeScript. Works on Node and Deno. Designed to build ultra fast MPAs and SPAs.",
		},
		{
			name: "Awesome Deno",
			link: "https://github.com/denolib/awesome-deno",
			text: "Awesome Deno is a collection of the best Deno modules and resources.",
		},
	];

	return (
		<div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
			<div class="space-y-4 mb-2">
				<h2 class="text-4xl font-extrabold tracking-tight sm:text-4xl text-indigo-600 col-span-2 ml-12">Installation</h2>
			</div>
			<div class="grid grid-cols-1 gap-y-10 items-center sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8 mb-12">
				{install.map((i) => (
					<div key={i.name} class="group">
						<div class="w-full overflow-hidden">
							<ul>
							<li>
								<h3 class="mt-4  text-lg font-medium text-gray-900">{i.name}</h3>
								<a class="no-underline hover:text-indigo-800" href={i.link}>{i.text}</a>
							</li>
							</ul>
						</div>
					</div>
				))}
			</div>
			<div class="space-y-4 mb-2">
				<h2 class="text-4xl font-extrabold tracking-tight sm:text-4xl text-indigo-600 col-span-2 ml-12">Tooling</h2>
			</div>
			<div class="grid grid-cols-1 gap-y-10 items-center sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8  mb-12">
				{tooling.map((t) => (
					<div key={t.name} class="group">
						<div class="w-full overflow-hidden">
							<ul>
							<li>
								<h3 class="mt-4  text-lg font-medium text-gray-900">{t.name}</h3>
								<a class="no-underline hover:text-indigo-800" href={t.link}>{t.text}</a>
							</li>
							</ul>
						</div>
					</div>
				))}
			</div>
			<div class="space-y-4 mb-2">
				<h2 class="text-4xl font-extrabold tracking-tight sm:text-4xl text-indigo-600 col-span-2 ml-12">Popular or usefull stacks</h2>
			</div>
			<div class="grid grid-cols-1 gap-y-10 items-center sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8 mb-12">
				{stacks.map((s) => (
					<div key={s.name} class="group">
						<div class="w-full overflow-hidden">
							<ul>
							<li>
								<h3 class="mt-4  text-lg font-medium text-gray-900">{s.name}</h3>
								<a class="no-underline hover:text-indigo-800" href={s.link}>{s.text}</a>
							</li>
							</ul>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}