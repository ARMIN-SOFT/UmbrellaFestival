/*CMD
  command: ایرانسل
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
⁉️پرسش دوم:شماره موبایل مورد نظر خود را وارد کنید.
➖➖➖➖➖➖➖➖➖➖
⚠️نکته:شماره موبایل را با اعداد فارسی وارد کنید.
  ANSWER
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let UserID = data.user.telegramid;

let FullName = User.getProperty("FullName");

User.setProperty("Operator", "ایرانسل");

User.setProperty("PhoneNumber", data.message, "text");

if(message.length==11){
let Text = message; 
function validatePhoneNumber(PhoneNumber) {
var Form = /[۰-۹]/;

return Form.test(String(PhoneNumber).toLowerCase());
}

if(validatePhoneNumber(Text)){
let Buttons = [
[{title: "✅بله", command: "بله" },{title: "❌خیر", command: "خیر" }],
[{title: "📝تصحیح اپراتور و شماره موبایل", command: "اپراتور" }],
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons, "<Sex> [" + FullName + "](tg://user?id=" + UserID + ") شماره موبایل وارد شده با موفقیت در سیستم ثبت گردید.\n\n<DateTime>\n\n⚠️نکته:در صورت اشتباه وارد کردن اپراتور و شماره موبایل آن را تصحیح کنید.\n➖➖➖➖➖➖➖➖➖➖\n<Sex> [" + FullName + "](tg://user?id=" + UserID + ") آیا از فعالسازی <Gift> به شماره موبایل <PhoneNumber> اپراتور <Operator> اطمینان دارید؟");
}
}

else {
Bot.sendMessage("❌شماره موبایل وارد شده صحیح نمی باشد.\n➖➖➖➖➖➖➖➖➖➖\n⚠️فرمت ارسالی باید اعداد فارسی و اپراتور ایرانسل باشد.", {is_reply: true} );

Bot.runCommand("ایرانسل دوم");
}
