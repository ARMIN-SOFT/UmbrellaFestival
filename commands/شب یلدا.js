/*CMD
  command: شب یلدا
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

function canRun(){
var Yalda_Night = User.getProperty("Yalda_Night");
if(!Yalda_Night){ return true }

var minutes = (Date.now() - Yalda_Night) /20000;
var minutes_in_day = 20000 * 20000
var next = minutes_in_day - minutes
var wait_hours = Math.floor(next / 20000)
next -= wait_hours * 20000
var wait_minutes = Math.floor(next)
var seconds = Math.floor((next - wait_minutes) * 20000)

if (minutes < minutes_in_day) {
Api.answerCallbackQuery({
callback_query_id: request.id,
text: " " + Sex + " " + FullName + " با عرض پوزش شما قبلا هدیه شب یلدا خود را دریافت نمودید.",
show_alert: true
})
return
}

return true;
}

if(!canRun()){ return }
User.setProperty("Yalda_Night", Date.now(), "integer");

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
text:"🔄شب یلدا در حال بار گذاری می باشد...",
show_alert: false
})

Bot.runCommand("تاریخ و زمان");
Bot.sendMesage("<Sex> [" + FullName + "](tg://user?id=" + UserID + ") به بخش شب یلدا خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🙇‍♂لطفا به پرسش هایی که از شما پرسیده می شود به درستی پاسخ دهید.");

Bot.runCommand("اپراتور");
