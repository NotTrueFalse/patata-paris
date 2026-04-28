export default ({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
    server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ["patate.paris"]
  }
})
