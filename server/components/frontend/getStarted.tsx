/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import { h } from "https://crux.land/nanossr@0.0.4";


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

	return (
		<div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
			<div class="space-y-4 mb-8 lg:mb-8">
				<h2 class="text-4xl font-extrabold tracking-tight sm:text-4xl">Installation</h2>
			</div>
			<div class="grid grid-cols-1 gap-y-10 items-center sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8  mb-12">
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
			<div class="space-y-4 mb-12 lg:mb-8">
				<h2 class="text-4xl font-extrabold tracking-tight sm:text-4xl">Tooling</h2>
			</div>
			<div class="grid grid-cols-1 gap-y-10 items-center sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
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
		</div>
	)
}