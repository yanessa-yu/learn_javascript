let cacheName = 'serviceCache2'
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll([
          'http://localhost:8080/sources/5fea9f5663f0a.jpg',
          'http://localhost:8080/Public/Images/anniversary.png',
        ]);
        
      })
    );
  });

  self.addEventListener('activate', function(event) {
    var cacheWhitelist = ['serviceCache'];
  
    event.waitUntil(
      caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (cacheWhitelist.indexOf(key) === -1) {
            return caches.delete(key);
          }
        }));
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
      console.log(event.request)
    event.respondWith(caches.match(event.request).then(function(response) {
      if (response !== undefined) {
           return response;
      } else {
            return fetch(event.request).then(function (response) {
            let responseClone = response.clone();
            
            caches.open(cacheName).then(function (cache) {
                cache.put(event.request, responseClone);
            });
            return response;
            }).catch(function () {
                console.log('fetch catch')
            });
      }
    }));
  });
  