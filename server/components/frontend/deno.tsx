/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import { h } from "https://crux.land/api/get/7GrKMy.ts";


export default () => {
	return (
		<div>
			<div class="flex justify-center items-center">
				<div class="max-w-7xl py-12 px-4 py-24 px-8 flex items-center justify-between">
					<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
						<span class="block">What is Deno?</span>
						<span class="block text-indigo-600">A modern runtime for JavaScript and TypeScript.</span>
					</h2>
					<div class="flex mt-3 flex-shrink-0 ml-8">
						<div class="inline-flex rounded-md shadow">
							<a href="/get-started" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> Get started </a>
						</div>
					</div>
				</div>
			</div>
			<div class="flex justify-center items-center">
				<div class="max-w-3xl py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
					<div>
						<h3 class="tracking-tight text-gray-900 font-bold text-xl mb-3">
							<span class="block">Deno is a simple, modern and secure runtime for JavaScript, TypeScript, and <a href="https://webassembly.org/" class="no-underline hover:text-indigo-800">WebAssembly</a> that uses <a href="https://v8.dev/" class="no-underline hover:text-indigo-800">V8</a> and is built in <a href="https://www.rust-lang.org/" class="no-underline hover:text-indigo-800">Rust</a>.</span>
						</h3>
						<ol class="ml-8 list-disc text-gray-700 text-xl">
							<li>Provides <a class="no-underline hover:text-indigo-800" href="https://deno.land/manual/runtime/web_platform_apis.md" >web platform functionality</a> and adopts web platform standards.</li>
							<li>Secure by default. No file, network, or environment access, unless explicitly enabled.</li>
							<li>Supports <a class="no-underline hover:text-indigo-800" href="https://deno.land/manual/typescript">TypeScript</a> out of the box.</li>
							<li>Ships only a single executable file.</li><li>Has <a class="no-underline hover:text-indigo-800" href="https://deno.land/manual/tools">built-in development tooling</a> like a dependency inspector (<a class="no-underline hover:text-indigo-800" href="https://deno.land/manual/tools/dependency_inspector"><code class="py-1 px-2 font-mono bg-gray-100 text-sm break-all rounded-[6px]">deno info</code></a>) and a code formatter (<a class="no-underline hover:text-indigo-800" href="https://deno.land/manual/tools/formatter"><code class="py-1 px-2 font-mono bg-gray-100 text-sm break-all rounded-[6px]">deno fmt</code></a>).</li><li>Has a set of reviewed (audited) standard modules that are guaranteed to work with Deno: <a href="https://doc.deno.land/https://deno.land/std" class="no-underline hover:text-indigo-800">deno.land/std</a>.</li><li>Has a number of <a href="https://github.com/denoland/deno/wiki#companies-interested-in-deno" class="no-underline hover:text-indigo-800">companies interested in using and exploring Deno.</a></li>
						</ol>
					</div>
				</div>
		</div>
	</div>
	);
}