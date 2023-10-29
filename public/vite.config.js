export default {
    build: {
        rollupOptions:
        {
            output: {
                manualChunks: {
                    "base": ["./js/blobs/base.js"],
                    "core": ["./js/blobs/core.js"],
                    "blobs": ["./js/blobs/blobs.js"]
                }
            }
        }
    }
}