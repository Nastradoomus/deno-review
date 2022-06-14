/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import { h } from "https://crux.land/nanossr@0.0.4";


export default () => {

	const bagels = [
		{
			name: "Salmon Bagel",
			price: 5.39,
			image: "https://images.unsplash.com/photo-1592767049184-0fda840ae4e7?w=1080",
		},
		{
			name: "Cream Cheese Bagel",
			price: 2.49,
			image: "https://images.unsplash.com/photo-1585841393012-e4ded4a6e2d0?w=1080",
		},
		{
			name: "Bacon and Rucola Bagel",
			price: 4.19,
			image: "https://images.unsplash.com/photo-1603712469481-e25f0bdb63aa?w=1080",
		},
		{
			name: "Egg and Ham Bagel",
			price: 3.79,
			image: "https://images.unsplash.com/photo-1605661479369-a8859129827b?w=1080",
		},
		{
			name: "Jam Bagel",
			price: 3.00,
			image: "https://images.unsplash.com/photo-1579821401035-450188d514da?w=1080",
		},
		{
			name: "Bagel Sandwich with Egg, Ham, Tomato, Lettuce & Mayo",
			price: 6.00,
			image: "https://images.unsplash.com/photo-1627308595325-182f10f20126?w=1080",
		},
	];

	return (
		<div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
			<div class="space-y-4 mb-12 lg:mb-8">
				<h2 class="text-4xl font-extrabold tracking-tight sm:text-4xl">Find the right bagel for yourself!</h2>
			</div>
			<div class="grid grid-cols-1 gap-y-10 items-center sm:grid-cols-3 gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
				{bagels.map((bagel) => (
					<div key={bagel.name} class="group">
						<div class="w-full bg-gray-200 rounded-lg overflow-hidden">
							<img
								src={bagel.image}
								class="w-full h-full object-center object-cover group-hover:opacity-75"
								alt=""
							/>
						</div>
						<h3 class="mt-4 text-sm text-gray-700">{bagel.name}</h3>
						<p class="mt-1 text-lg font-medium text-gray-900">${bagel.price.toFixed(2)}</p>
					</div>
				))}
			</div>
		</div>
	)
}