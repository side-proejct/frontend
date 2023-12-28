// vite.config.js
import { defineConfig } from "file:///C:/projects/frontend/service/node_modules/vite/dist/node/index.js";
import react from "file:///C:/projects/frontend/service/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  test: {
    globals: true,
    environment: "jsdom"
    //  setupFiles: ['./src/setup.ts'],
  },
  plugins: [react()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxwcm9qZWN0c1xcXFxmcm9udGVuZFxcXFxzZXJ2aWNlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxwcm9qZWN0c1xcXFxmcm9udGVuZFxcXFxzZXJ2aWNlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9wcm9qZWN0cy9mcm9udGVuZC9zZXJ2aWNlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gICAgdGVzdDoge1xyXG4gICAgICAgIGdsb2JhbHM6IHRydWUsXHJcbiAgICAgICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXHJcbiAgICAgICAgLy8gIHNldHVwRmlsZXM6IFsnLi9zcmMvc2V0dXAudHMnXSxcclxuICAgIH0sXHJcbiAgICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThRLFNBQVMsb0JBQW9CO0FBQzNTLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixNQUFNO0FBQUEsSUFDRixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUE7QUFBQSxFQUVqQjtBQUFBLEVBQ0EsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUNyQixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
