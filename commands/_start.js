/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let FirstName = data.user.first_name;
let UserID = data.user.telegramid;

Api.sendSticker({
sticker: "https://www.online-convert.com/downloadfile/ca92090d-410f-49a7-a8ae-00696417d93b/8f0b85af-9996-460b-8b5d-4606c168f616"
});

Api.getUserProfilePhotos({
user_id: user.telegramid, on_result: "پروفایل کاربری",
});

let Buttons = [
{title: "🛠منوی خدمات ربات", command: "منوی خدمات ربات" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons, "🌹کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") به ربات جشنواره آمبرلا خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");

Bot.runCommand("کاربردی");
