// Telegram Premium Fake Script
let body = $response.body;
let obj = JSON.parse(body);

// Fake Premium status
if (obj.result && obj.result.user) {
    obj.result.user.premium = true;
    obj.result.user.flags = obj.result.user.flags | 2048;
} else if (obj.result) {
    obj.result.premium = true;
    obj.result.is_premium = true;
}

obj.result = obj.result || {};
obj.result.premium_config = {
    is_premium: true,
    premium_since: Date.now(),
    premium_until: Date.now() + 86400000 * 365
};

$done({body: JSON.stringify(obj)});
