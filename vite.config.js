export default {
    root: 'dist', // Specify your source directory
    publicDir: 'public', // Specify your public directory
    server: {
      hmr: {
        overlay: true, 
      },
    },
    build:{
      rollupOptions:{
        input:{
          main:'./index.html',
          film:'./film.html',
        },
      },
    },
  };