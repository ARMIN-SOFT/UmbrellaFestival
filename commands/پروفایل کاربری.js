/*CMD
  command: پروفایل کاربری
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

let DateTime = Bot.getProperty("DateTime");

Bot.runCommand("تاریخ و زمان");

let Photos = options.result.photos;
for(let User in Photos)

Api.sendPhoto({
photo: Photos[User][0].file_id,
caption: "🤖نام ربات:جشنواره آمبرلا\n🆔 @UmbrellaFestival_BOT\n📚درباره ربات:جشنوارت آنلاین سرور آمبرلا\n👨‍💻توسعه دهنده:نرم افزاری و امنیتی آمبرلا\n➖➖➖➖➖➖➖➖➖➖\n" + DateTime + " ",
})
