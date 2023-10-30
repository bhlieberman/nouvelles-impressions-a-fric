export default {
    build: {
        rollupOptions:
        {
            output: {
                manualChunks: {
                    "base": ["public/js/blobs/base.js"],
                    "core": ["public/js/blobs/core.js"],
                    "views": ["public/js/blobs/views.js"],
                    "storage": ["public/js/blobs/storage.js"]
                }
            }
        },
        chunkSizeWarningLimit: 600,
        outDir: "dist"
    }
}