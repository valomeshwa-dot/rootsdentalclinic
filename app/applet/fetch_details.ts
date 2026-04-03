import fs from 'fs';

async function fetchDetails() {
  const url = 'https://www.google.com/maps/place/Ayushi+Density/@28.6167136,77.2888741,14z/data=!4m10!1m2!2m1!1sayushi+dental!3m6!1s0x390ce5398f8ac4b3:0x21daad1b1d37c548!8m2!3d28.5957077!4d77.3152384!15sCg1heXVzaGkgZGVudGFsWg8iDWF5dXNoaSBkZW50YWySARNkZW50YWxfc3VwcGx5X3N0b3JlmgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ0a2FXTXdlR0ZOVld4ellrWmpNRTlITlVKWU1rWnBWMFZSTTB4VlJSQULgAQD6AQQIABAu!16s%2Fg%2F11vy7cm_9t';
  
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  const text = await res.text();
  
  const titleMatch = text.match(/<title>(.*?)<\/title>/);
  console.log('Title:', titleMatch ? titleMatch[1] : 'Not found');
  
  const metaMatch = text.match(/<meta content="([^"]+)" itemprop="description">/);
  console.log('Meta:', metaMatch ? metaMatch[1] : 'Not found');
  
  // Extract phone numbers
  const phoneMatches = text.match(/\+91\s?\d{5}\s?\d{5}|\b\d{10}\b/g);
  if (phoneMatches) {
    console.log('Phones:', [...new Set(phoneMatches)]);
  }
}

fetchDetails();
