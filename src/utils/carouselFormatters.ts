const carouselFormatters = {
	getAltText: ({ data, index }: { data: { caption: string }; index: number }) =>
		data.caption || `${index + 1}. kép`,

	getNextLabel: ({
		currentIndex,
		views,
	}: {
		currentIndex: number;
		views: { [key: string]: unknown }[];
	}) => `Mutasd a(z) ${currentIndex + 2}. képet a(z) ${views.length} közül`,
	getPrevLabel: ({
		currentIndex,
		views,
	}: {
		currentIndex: number;
		views: { [key: string]: unknown }[];
	}) => `Mutasd a(z) ${currentIndex}. képet a(z) ${views.length} közül`,

	getNextTitle: () => "Következő (jobbra nyíl)",
	getPrevTitle: () => "Előző (balra nyíl)",

	getCloseLabel: () => "Bezárás (esc)",
	getFullscreenLabel: ({ isFullscreen }: { isFullscreen: boolean }) =>
		isFullscreen
			? "Kilépés a teljes képernyős nézetből (f)"
			: "Teljes képernyőre váltás (f)",
};

// eslint-disable-next-line import/no-default-export
export default carouselFormatters;
