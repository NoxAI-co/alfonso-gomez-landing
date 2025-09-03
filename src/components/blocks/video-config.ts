// Configuración del video de YouTube para el Hero
export const VIDEO_CONFIG = {
  // URL del video de YouTube (reemplaza TU_VIDEO_ID con el ID real)
  youtubeUrl: "https://www.youtube.com/watch?v=9E98zMcdwAs",
  
  // Configuración del iframe de YouTube
  iframeConfig: {
    autoplay: 1,
    mute: 1,
    loop: 1,
    controls: 0,
    showinfo: 0,
    rel: 0,
    disablekb: 1,
    modestbranding: 1,
    playsinline: 1,
    enablejsapi: 1,
    origin: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000'
  },
  
  // Configuración del overlay
  overlay: {
    initialOpacity: 0.5,
    finalOpacity: 0.3,
    transitionDuration: 0.2
  }
};

// Función para convertir URL de YouTube a formato embed
export const getYouTubeEmbedUrl = (url: string): string => {
  if (url.includes('embed')) {
    return url;
  }
  
  const videoId = url.split('v=')[1]?.split('&')[0];
  if (!videoId) {
    return url;
  }
  
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    loop: '1',
    controls: '0',
    showinfo: '0',
    rel: '0',
    disablekb: '1',
    modestbranding: '1',
    playlist: videoId // Para que el loop funcione
  });
  
  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
};
