/*CMD
  command: جشنواره فعال
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

let UserID = data.user.telegramid;

let Sex = User.getProperty("Sex");

let FullName = User.getProperty("FullName");

let Gift_Title = Bot.getProperty("Gift_Title");

function canRun(){
var last_run_at = User.getProperty("last_run_at");
if(!last_run_at){ return true }

var minutes = (Date.now() - last_run_at) /2000;
var minutes_in_day = 2 * 2
var next = minutes_in_day - minutes
var wait_hours = Math.floor(next / 2)
next -= wait_hours * 2
var wait_minutes = Math.floor(next)
var seconds = Math.floor((next - wait_minutes) * 2)

if (minutes < minutes_in_day) {
Api.answerCallbackQuery({
callback_query_id: request.id,
text: " " + Sex + " " + FullName + " به مدت "+ seconds+" ثانیه از ربات محروم شدید.\n\n🙇‍♂لطفا به آرامی از ربات استفاده کنید.",
show_alert: true
})
return
}

return true;
}

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}

Api.answerCallbackQuery({
callback_query_id: request.id,
text:"🔄جشنواره فعال در حال بار گذاری می باشد...",
show_alert: false
})

let Buttons = [
{title: " " + Gift_Title + " ", command: "شب یلدا" },
{title: "🔙بازگشت به منوی قبل", command: "منوی جشنواره" },
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد جشنواره آمبرلا" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons, "<Sex> [" + FullName + "](tg://user?id=" + UserID + ") به بخش جشنواره فعال خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰جشنواره فعال بدین شرح است:\n\n📄نام:<Gift_Title>\n🎁هدیه:<Gift>\n📱اپراتور:<Gift_Operator>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
