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
        external:['index.html'],
        input:{
          main:'./dist/main.jsx',
          film:'./dist/film.jsx',
        },
      },
    },
  };