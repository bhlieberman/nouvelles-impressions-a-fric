export default {
    build: {
        rollupOptions:
        {
            output: {
                manualChunks: {
                    "base": ["public/js/app/base.js"],
                    "storage": ["public/js/app/storage.js"],
                    "views": ["public/js/app/views.js"],
                    "core": ["public/js/app/core.js"],
                }
            }
        },
        chunkSizeWarningLimit: 600,
        outDir: "../build",
    },
    base: "/nouvelles-impressions-a-fric/"
}