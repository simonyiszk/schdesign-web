const carouselFormatters = {
  getAltText: ({ data, index }: { data: { caption: string }; index: number }) =>
    data.caption || `${index + 1}. kép`,

  getNextLabel: ({
    currentIndex,
    views,
  }: {
    currentIndex: number;
    views: { [key: string]: any }[];
  }) => `Mutasd a(z) ${currentIndex + 2}. képet a(z) ${views.length} közül`,
  getPrevLabel: ({
    currentIndex,
    views,
  }: {
    currentIndex: number;
    views: { [key: string]: any }[];
  }) => `Mutasd a(z) ${currentIndex}. képet a(z) ${views.length} közül`,

  getNextTitle: () => 'Következő (jobbra nyíl)',
  getPrevTitle: () => 'Előző (balra nyíl)',

  getCloseLabel: () => 'Bezárás (esc)',
  getFullscreenLabel: ({ isFullscreen }: { isFullscreen: boolean }) =>
    isFullscreen
      ? 'Kilépés a teljes képernyős nézetből (f)'
      : 'Teljes képernyőre váltás (f)',
};

export default carouselFormatters;
