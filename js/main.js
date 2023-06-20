const mapData = {
	mapwidth: '2000',
	mapheight: '1500',
	defaultstyle: 'light',
	styles: [
		{
			class: 'light',
			hover: { fill: '#f4f4f4' },
			active: { fill: '#fff' },
		},
		{
			class: 'dark',
			hover: { fill: '#666' },
			active: { fill: '#555' },
		},
	],
	categories: [
		{
			id: '1',
			title: 'Banking & Financial Services',
			color: '#71D1D9',
			legend: 'false',
			icon: './themes/custom/haben/components/haben-interactive-maps/category-icons/icon-1.png',
		},
		{
			id: '2',
			title: 'Discount Variety',
			color: '#71D1D9',
			legend: 'false',
			icon: './themes/custom/haben/components/haben-interactive-maps/category-icons/icon-2.png',
		},
		{
			id: '3',
			title: 'Fashion & Accessories',
			color: '#F68266',
			legend: 'false',
			icon: './themes/custom/haben/components/haben-interactive-maps/category-icons/icon-3.png',
		},
		{
			id: '4',
			title: 'Fast Food & Casual Dining',
			color: '#FDC85E',
			legend: 'false',
			icon: './themes/custom/haben/components/haben-interactive-maps/category-icons/icon-4.png',
		},
		{
			id: '5',
			title: 'Fresh Food',
			color: '#9B8DC2',
			legend: 'false',
			icon: './themes/custom/haben/components/haben-interactive-maps/category-icons/icon-5.png',
		},
		{
			id: '6',
			title: 'General Retail & Services',
			color: '#79CB9E',
			legend: 'false',
			icon: './themes/custom/haben/components/haben-interactive-maps/category-icons/icon-6.png',
		},
		{
			id: '7',
			title: 'Health & Beauty Services & Retail',
			color: '#79CB9E',
			legend: 'false',
			icon: './themes/custom/haben/components/haben-interactive-maps/category-icons/icon-7.png',
		},
		{
			id: '8',
			title: 'Supermarkets & Liquor',
			color: '#EB7EB4',
			legend: 'false',
			icon: './themes/custom/haben/components/haben-interactive-maps/category-icons/icon-8.png',
		},
		{
			id: '9',
			title: 'Telecommunications',
			color: '#71D1D9',
			legend: 'false',
			icon: './themes/custom/haben/components/haben-interactive-maps/category-icons/icon-9.png',
		},
		{
			id: '10',
			title: 'Arts, Craft & Stationery',
			color: '#F58167',
			legend: 'false',
			icon: './themes/custom/haben/components/haben-interactive-maps/category-icons/icon-10.png',
		},
		{
			id: '11',
			title: 'Department Stores',
			color: '#9C8EC2',
			legend: 'false',
			icon: './themes/custom/haben/components/haben-interactive-maps/category-icons/icon-11.png',
		},
		{
			id: '12',
			title: 'Electronics, Technology & Gaming',
			color: '#76CB9F',
			legend: 'false',
			icon: './themes/custom/haben/components/haben-interactive-maps/category-icons/icon-12.png',
		},
		{
			id: '13',
			title: 'Homewares, Lifestyle & Appliances',
			color: '#FDC85B',
			legend: 'false',
			icon: './themes/custom/haben/components/haben-interactive-maps/category-icons/icon-13.png',
		},
		{
			id: '14',
			title: 'Leisure & Entertainment',
			color: '#F58167',
			legend: 'false',
			icon: './themes/custom/haben/components/haben-interactive-maps/category-icons/icon-14.png',
		},
		{
			id: '15',
			title: 'Office',
			color: '#9C8EC2',
			legend: 'false',
			icon: './themes/custom/haben/components/haben-interactive-maps/category-icons/icon-15.png',
		},
		{
			id: '16',
			title: 'Sports & Outdoors',
			color: '#76CB9F',
			legend: 'false',
			icon: './themes/custom/haben/components/haben-interactive-maps/category-icons/icon-16.png',
		},
	],
	levels: [
		{
			id: 'fhc_lvl_3',
			title: 'LVL3',
			map: 'map/FHC-Mapplic-LVL3.svg',
		},
		{
			id: 'fhc_lvl_2',
			title: 'LVL2',
			map: 'map/FHC-Mapplic-LVL2.svg',
		},
		{
			id: 'fhc_lvl_1',
			title: 'LVL1',
			map: 'map/FHC-Mapplic-LVL1.svg',
		},
	],
};

var map = $('#mapplic').mapplic({
	source: mapData,
	csv: 'map/location-data.csv',
	height: 600,
	lightbox: true,
	marker: 'hidden',
	maxscale: 1,
	sidebartoggle: true,
	fullscreen: true,
	thumbholder: true,
	developer: true,
});

setTimeout(() => {
	console.log('ready...');
	const posX = document.querySelector('.mapplic-coordinates-x');
	const posY = document.querySelector('.mapplic-coordinates-y');
	const mapElements = document.querySelectorAll('.mapplic-clickable');
	mapElements.forEach((el) => {
		el.addEventListener('contextmenu', (e) => {
			e.preventDefault();
			const copyText = `${posX.innerText},${posY.innerText}`;
			var dummy = document.createElement('input');
			document.body.appendChild(dummy);
			dummy.value = copyText;
			dummy.select();
			document.execCommand('copy');
			document.body.removeChild(dummy);
			console.log(`copied: ${copyText}`);
		});
	});
}, 3000);
