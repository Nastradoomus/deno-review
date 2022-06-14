/*
	 _       U  ___ u   ____
	|"|       \/"_ \/U /"___|u
U | | u     | | | |\| |  _ /
 \| |/__.-,_| |_| | | |_| |
	|_____|\_)-\___/   \____|
	//  \\      \\     _)(|_
 (_")("_)    (__)   (__)__)

*/

//CONSOLE
import * as colors from "https://deno.land/std@0.140.0/fmt/colors.ts"

/*
export default function log(property: keyof typeof colors, message: string) {
	if (Object.prototype.hasOwnProperty.call(colors, property)) {
		//console.log(colors[property](message, true))
	}
}
*/

export function blueTimestamp(message: string): void {
	const now = new Date()
	console.log(colors.blue(now.toISOString() + ": " + message))
}

export function greenTimestamp(message: string): void {
	const now = new Date()
	console.log(colors.green(now.toISOString() + ": " + message))
}

export function greenBoldTimestamp(message: string): void {
	const now = new Date()
	console.log(colors.green(colors.bold(now.toISOString() + ": " + message)))
}

export function redTimestamp(message: string): void {
	const now = new Date()
	console.log(colors.red(now.toISOString() + ": " + message))
}
export function redBoldTimestamp(message: string): void {
	const now = new Date()
	console.log(colors.red(colors.bold(now.toISOString() + ": " + message)))
}

export function red(message: string): void {
	console.log(colors.red(message))
}

export function brightMagenta(message: string): void {
	console.log(colors.brightMagenta(message))
}

export function yellow(message: string): void {
	console.log(colors.yellow(message))
}

export function cyan(message: string): void {
	console.log(colors.cyan(message))
}

export function bgRed(message: string): void {
	console.log(colors.bgRed(message))
}

export function blue(message: string): void {
	console.log(colors.blue(message))
}
export function green(message: string): void {
	console.log(colors.green(message))
}
