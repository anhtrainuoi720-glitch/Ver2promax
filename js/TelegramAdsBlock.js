// Telegram Ads Block Script
let body = $response.body;
let obj = JSON.parse(body);

// Lọc sponsored messages
if (obj.result) {
    if (obj.result.messages) {
        obj.result.messages = obj.result.messages.filter(msg => {
            return !msg.sponsored && !msg.from_ads && !msg.promoted;
        });
    }
    if (obj.result.dialogs) {
        obj.result.dialogs = obj.result.dialogs.filter(dialog => {
            return !dialog.sponsored && !dialog.ads;
        });
    }
    if (obj.result.chats) {
        obj.result.chats = obj.result.chats.filter(chat => {
            return !chat.ads && !chat.sponsored;
        });
    }
}

$done({body: JSON.stringify(obj)});
