if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/brainwave/sw.js', { scope: '/brainwave/' })})}