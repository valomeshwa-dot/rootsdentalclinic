const https = require('https');

https.get('https://www.google.com/maps/place/Ayushi+Density/@28.6167136,77.2888741,14z/data=!4m10!1m2!2m1!1sayushi+dental!3m6!1s0x390ce5398f8ac4b3:0x21daad1b1d37c548!8m2!3d28.5957077!4d77.3152384!15sCg1heXVzaGkgZGVudGFsWg8iDWF5dXNoaSBkZW50YWySARNkZW50YWxfc3VwcGx5X3N0b3JlmgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ0a2FXTXdlR0ZOVld4ellrWmpNRTlITlVKWU1rWnBWMFZSTTB4VlJSQULgAQD6AQQIABAu!16s%2Fg%2F11vy7cm_9t', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const titleMatch = data.match(/<title>(.*?)<\/title>/);
    console.log('Title:', titleMatch ? titleMatch[1] : 'Not found');
    const metaMatch = data.match(/<meta content="([^"]+)" itemprop="description">/);
    console.log('Meta:', metaMatch ? metaMatch[1] : 'Not found');
  });
}).on('error', (err) => {
  console.log('Error:', err.message);
});
