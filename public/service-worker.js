/* eslint-disable no-restricted-globals */
const CACHE = "network-or-cache-v1"

const cachedFile = [
    'index.html',
    '/src/index.js',
    '/src/index.css',
]



self.addEventListener("install", async event => {
    const cache = await caches.open(CACHE)
    await cache.addAll(cachedFile)
})

