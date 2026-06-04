let webManifest = {
    "name": "mObywatel",
    "short_name": "mObywatel",
    "theme_color": "#121212",
    "background_color": "#121212",
    "display": "standalone",
    "icons": [
        {
            "src": "assets/images/otM5jOA.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "assets/images/otM5jOA.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
};

let manifestElem = document.createElement('link');
manifestElem.setAttribute('rel', 'manifest');
manifestElem.setAttribute('href', 'data:application/manifest+json;base64,' + btoa(JSON.stringify(webManifest)));
document.head.prepend(manifestElem);