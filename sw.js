// Service worker mínimo: permite instalar o Salto 360 como aplicativo. Não guarda dados.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {});
