/*CMD
  command: تایید هویت سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
⁉️پرسش دوم:شماره موبایل خود را وارد کنید.
➖➖➖➖➖➖➖➖➖➖
⚠️نکته:شماره موبایل را با اعداد فارسی وارد کنید.
  ANSWER
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let FullName = User.getProperty("FullName");

if(data.message=="۰۹۱۳۹۷۳۱۶۶۷"){

Bot.sendMessage("🔄ربات در حال بررسی شماره موبایل می باشد...", {is_reply: true});

Bot.sendMessage("✔️شماره موبایل وارد شده صحیح می باشد.", {is_reply: true});

let UserID = data.user.telegramid;

let Buttons1 = [
{title: "🗄داشبورد جشنواره آمبرلا", command: "داشبورد جشنواره آمبرلا" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons1, "<Sex> [" + FullName + "](tg://user?id=" + UserID + ") احراز هویت شما با موفقیت انجام گردید.\n➖➖➖➖➖➖➖➖➖➖\n🔰اطلاعات حساب شما بدین شرح است:\n\n🔮نوع شناسه:شخص حقیقی\n👤نام و نام خانوادگی:زینب طباطبائی\n🔖کد ملی:۱۲۲۰۰۲۳۳۰۲ (خوانسار،اصفهان)\n🗳کد پستی:۱۷۶۴۹۱۸۳۶۳\n📍آدرس:تهران،خیابان پیروزی،خیابان لرستانی،کوچه نجف آبادی\n📞شماره موبایل:۰۹۱۳۹۷۳۱۶۶۷\n☎️شماره تلفن:۰۲۱۳۳۰۷۷۱۴۰\n📧آدرس ایمیل:\nZ.S.Tabatabaei70@gmail.com\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
}

else {
Bot.sendMessage("🔄ربات در حال بررسی شماره موبایل می باشد...", {is_reply: true});

let Buttons2 = [
{title: "🔁تلاش مجدد", command: "تایید هویت سوم" },
{title: "🏠بازگشت به منوی اصلی", command: "منوی خدمات ربات" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons2, "❌شماره موبایل وارد شده در سیستم ثبت نشده است.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.", {is_reply: true});
}
