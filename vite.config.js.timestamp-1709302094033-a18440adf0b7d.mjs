// vite.config.js
import { defineConfig } from "file:///C:/Users/ricar/Desktop/camel%202024/camel-ui/node_modules/vite/dist/node/index.js";
import { VitePWA } from "file:///C:/Users/ricar/Desktop/camel%202024/camel-ui/node_modules/vite-plugin-pwa/dist/index.js";
import react from "file:///C:/Users/ricar/Desktop/camel%202024/camel-ui/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///C:/Users/ricar/Desktop/camel%202024/camel-ui/node_modules/@svgr/rollup/dist/index.js";
var vite_config_default = defineConfig({
  // build: {
  //   outDir: 'dist',
  //   assetsDir: 'assets',
  // },
  plugins: [
    svgr(),
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: { enabled: true },
      injectRegister: "auto",
      includeAssets: ["favicon.ico", "icon.png", "icon.svg"],
      manifest: {
        name: "camel-ui",
        short_name: "camel",
        description: "Um site para vendas de produtos eletr\xF4nicos",
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          }
        ],
        theme_color: "#f08605",
        background_color: "#2d3143",
        display: "standalone",
        start_url: "/signin",
        orientation: "portrait",
        screenshots: [
          {
            src: "login_540x720.png",
            type: "image/png",
            sizes: "540x720",
            form_factor: "narrow"
          },
          {
            src: "cadastro_540x720.png",
            type: "image/png",
            sizes: "540x720",
            form_factor: "wide"
          }
        ]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxyaWNhclxcXFxEZXNrdG9wXFxcXGNhbWVsIDIwMjRcXFxcY2FtZWwtdWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHJpY2FyXFxcXERlc2t0b3BcXFxcY2FtZWwgMjAyNFxcXFxjYW1lbC11aVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvcmljYXIvRGVza3RvcC9jYW1lbCUyMDIwMjQvY2FtZWwtdWkvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXHJcbmltcG9ydCBzdmdyIGZyb20gJ0BzdmdyL3JvbGx1cCdcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgLy8gYnVpbGQ6IHtcclxuICAvLyAgIG91dERpcjogJ2Rpc3QnLFxyXG4gIC8vICAgYXNzZXRzRGlyOiAnYXNzZXRzJyxcclxuICAvLyB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHN2Z3IoKSxcclxuICAgIHJlYWN0KCksXHJcbiAgICBWaXRlUFdBKHtcclxuICAgICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXHJcbiAgICAgIGRldk9wdGlvbnM6IHsgZW5hYmxlZDogdHJ1ZSB9LFxyXG4gICAgICBpbmplY3RSZWdpc3RlcjogJ2F1dG8nLFxyXG5cclxuICAgICAgaW5jbHVkZUFzc2V0czogWydmYXZpY29uLmljbycsICdpY29uLnBuZycsICdpY29uLnN2ZyddLFxyXG5cclxuICAgICAgbWFuaWZlc3Q6IHtcclxuICAgICAgICBuYW1lOiAnY2FtZWwtdWknLFxyXG4gICAgICAgIHNob3J0X25hbWU6ICdjYW1lbCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdVbSBzaXRlIHBhcmEgdmVuZGFzIGRlIHByb2R1dG9zIGVsZXRyXHUwMEY0bmljb3MnLFxyXG4gICAgICAgIGljb25zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogJ2FuZHJvaWQtY2hyb21lLTE5MngxOTIucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiAnYW5kcm9pZC1jaHJvbWUtNTEyeDUxMi5wbmcnLFxyXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICAgICAgcHVycG9zZTogJ2FueScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICdhcHBsZS10b3VjaC1pY29uLnBuZycsXHJcbiAgICAgICAgICAgIHNpemVzOiAnMTgweDE4MCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxyXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogJ2FuZHJvaWQtY2hyb21lLTUxMng1MTIucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHRoZW1lX2NvbG9yOiAnI2YwODYwNScsXHJcbiAgICAgICAgYmFja2dyb3VuZF9jb2xvcjogJyMyZDMxNDMnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdzdGFuZGFsb25lJyxcclxuICAgICAgICBzdGFydF91cmw6ICcvc2lnbmluJyxcclxuICAgICAgICBvcmllbnRhdGlvbjogJ3BvcnRyYWl0JyxcclxuICAgICAgICBzY3JlZW5zaG90czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICdsb2dpbl81NDB4NzIwLnBuZycsXHJcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxyXG4gICAgICAgICAgICBzaXplczogJzU0MHg3MjAnLFxyXG4gICAgICAgICAgICBmb3JtX2ZhY3RvcjogJ25hcnJvdycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICdjYWRhc3Ryb181NDB4NzIwLnBuZycsXHJcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxyXG4gICAgICAgICAgICBzaXplczogJzU0MHg3MjAnLFxyXG4gICAgICAgICAgICBmb3JtX2ZhY3RvcjogJ3dpZGUnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4VCxTQUFTLG9CQUFvQjtBQUMzVixTQUFTLGVBQWU7QUFDeEIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUdqQixJQUFPLHNCQUFRLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSzFCLFNBQVM7QUFBQSxJQUNQLEtBQUs7QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFlBQVksRUFBRSxTQUFTLEtBQUs7QUFBQSxNQUM1QixnQkFBZ0I7QUFBQSxNQUVoQixlQUFlLENBQUMsZUFBZSxZQUFZLFVBQVU7QUFBQSxNQUVyRCxVQUFVO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsUUFDWixhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxRQUNGO0FBQUEsUUFDQSxhQUFhO0FBQUEsUUFDYixrQkFBa0I7QUFBQSxRQUNsQixTQUFTO0FBQUEsUUFDVCxXQUFXO0FBQUEsUUFDWCxhQUFhO0FBQUEsUUFDYixhQUFhO0FBQUEsVUFDWDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFlBQ1AsYUFBYTtBQUFBLFVBQ2Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxhQUFhO0FBQUEsVUFDZjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
