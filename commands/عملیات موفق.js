/*CMD
  command: عملیات موفق
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let Sex = User.getProperty("Sex");

let FullName = User.getProperty("FullName");

let Gift = Bot.getProperty("Gift");

let PhoneNumber = User.getProperty("PhoneNumber");

let Operator = User.getProperty("Operator");

let DateTime = Bot.getProperty("DateTime");

Api.sendPhoto({
photo: "https://i.imgur.com/P5zmT03.jpg",
caption: " " + Sex  + " " + FullName + " بنا به درخواست شما بسته " + Gift + " برای شماره موبایل " + PhoneNumber + " " + Operator + " با موفقیت فعال گردید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n" + Sex + " " + FullName + " گروه نرم افزاری و امنیتی آمبرلا شب یلدا را بر شما و خانواده گرامی تبریک می گوید.\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "markdown",
reply_markup: { inline_keyboard: [
[{text: "🏠بازگشت به منوی اصلی" , callback_data: 'داشبورد جشنواره آمبرلا' }],
]
}
});
