export default {
    build: {
        rollupOptions:
        {
            output: {
                manualChunks: {
                    "base": ["public/js/base.js"],
                    "storage": ["public/js/storage.js"],
                    "views": ["public/js/views.js"],
                    "core": ["public/js/core.js"],
                }
            }
        },
        chunkSizeWarningLimit: 600,
        outDir: "dist"
    }
}