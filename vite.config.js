export default {
    build: {
        rollupOptions:
        {
            output: {
                manualChunks: {
                    "base": ["public/js/blobs/base.js"],
                    "storage": ["public/js/blobs/storage.js"],
                    "views": ["public/js/blobs/views.js"],
                    "core": ["public/js/blobs/core.js"],
                }
            }
        },
        chunkSizeWarningLimit: 600,
        outDir: "dist"
    }
}