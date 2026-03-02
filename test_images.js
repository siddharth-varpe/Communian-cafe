const https = require('https');

const urls = [
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1447&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1548943487-a2e4f43b3851?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1625937759405-341aebefd5b3?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=300"
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({url, status: res.statusCode});
      res.resume();
    }).on('error', (e) => {
      resolve({url, error: e.message});
    });
  });
}

(async () => {
   for(const url of urls) {
       const result = await checkUrl(url);
       console.log(`${result.status || result.error} - ${url.substring(0, 60)}...`);
   }
})();
