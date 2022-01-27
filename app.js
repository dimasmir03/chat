window.addEventListener('load', () => {
   console.log("SW")
   if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
         .then(function (registration) {
            console.log('Registration successful, scope is:', registration.scope);
         })
         .catch(function (error) {
            console.log('Service worker registration failed, error:', error);
         })
   } else alert("браузер не поддерживает service worker")
})