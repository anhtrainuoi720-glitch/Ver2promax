// Telegram Cache Script
let url = $request.url;
let headers = $request.headers;

// Thêm cache headers
headers['Cache-Control'] = 'max-age=604800';
headers['If-None-Match'] = 'telegram-cache-v1';

$done({headers: headers});
