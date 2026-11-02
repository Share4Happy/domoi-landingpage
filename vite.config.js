import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Custom Vite plugin để nạp HTML Partials (header, footer, từng section)
 * Cú pháp hỗ trợ: <include src="src/partials/tên-file.html" />
 */
function htmlPartialsPlugin() {
  return {
    name: 'vite-plugin-html-partials',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        // Regex khớp cú pháp <include src="..." /> hoặc <include src="..."></include>
        const includeRegex = /<include\s+src=["']([^"']+)["']\s*(?:\/>|><\/include>)/g;
        return html.replace(includeRegex, (match, srcPath) => {
          const resolvedPath = path.resolve(process.cwd(), srcPath);
          if (fs.existsSync(resolvedPath)) {
            return fs.readFileSync(resolvedPath, 'utf-8');
          }
          console.warn(`[vite-plugin-html-partials] File partial không tồn tại: ${resolvedPath}`);
          return `<!-- [Lỗi: Không tìm thấy partial tại ${srcPath}] -->`;
        });
      }
    },
    handleHotUpdate({ file, server }) {
      if (file.endsWith('.html')) {
        server.ws.send({
          type: 'full-reload',
          path: '*'
        });
      }
    }
  };
}

export default defineConfig({
  base: './',
  plugins: [htmlPartialsPlugin()],
  server: {
    port: 3000,
    open: true,
    cors: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'esbuild'
  }
});

