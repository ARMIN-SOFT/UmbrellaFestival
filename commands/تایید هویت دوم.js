/*CMD
  command: تایید هویت دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
⁉️پرسش اول:کد ملی خود را وارد کنید.
➖➖➖➖➖➖➖➖➖➖
⚠️نکته:کد ملی را با اعداد فارسی وارد کنید.
  ANSWER
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

if(data.message=="۱۲۲۰۰۲۳۳۰۲"){

Bot.sendMessage("🔄ربات در حال بررسی کد ملی می باشد...", {is_reply: true});

Bot.sendMessage("✔️کد ملی وارد شده صحیح می باشد.", {is_reply: true});

Bot.runCommand("تایید هویت سوم");
}

else {
Bot.sendMessage("🔄ربات در حال بررسی کد ملی می باشد...", {is_reply: true});

let Buttons = [
{title: "🔁تلاش مجدد", command: "تایید هویت دوم" },
{title: "🏠بازگشت به منوی اصلی", command: "منوی خدمات ربات" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons, "❌کد ملی وارد شده در سیستم ثبت نشده است.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.", {is_reply: true});
}
