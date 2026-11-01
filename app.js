const montenegroTrip = [
    {
        day: 1, date: "19/09 (ש')", region: "טיסת הלוך ובודווה", icon: "✈️",
        hotelName: "Infinity Hotel & More, Budva - כולל ארוחת בוקר", 
        hotelUrl: "https://www.booking.com/hotel/me/infinity-budva.he.html",
        spots: [
            { time: "09:10", name: "✈️ טיסת הלוך: ISRAIR 6H:173", desc: "המראה מנתב\"ג בשעה 09:10. <a href='https://www.iaa.gov.il/airports/ben-gurion/flight-board/' target='_blank' rel='noopener' style='color:#2563eb;text-decoration:underline;'>ללוח הטיסות של רשות שדות התעופה</a>", map: "Ben Gurion Airport", waze: "Ben Gurion Airport" },
            { time: "נחיתה", name: "נחיתה בנמל התעופה טיבאט (Tivat)", desc: "נחיתה במונטנגרו, איסוף המזוודות והרכב השכור בדלפק.", map: "Tivat Airport", waze: "Tivat Airport" },
            { time: "נסיעה", name: "🚘 נסיעה לפארק לובצ'ן", desc: "זמן נסיעה מוערך: כ-45 דקות מרחק מנמל התעופה.", map: "Njegos Mausoleum", waze: "Njegos Mausoleum" },
            { time: "תחנה 1", name: "פארק לובצ'ן ומאוזוליאום נייגוש", desc: "טיפוס 461 מדרגות למאוזוליאום לתצפית פנורמית מרהיבה.", map: "Njegos Mausoleum", waze: "Njegos Mausoleum" },
            { time: "נסיעה", name: "🚘 נסיעה לבודווה", desc: "זמן נסיעה מוערך: כ-50 דקות בירידה לכיוון החוף.", map: "Infinity Hotel Budva", waze: "Infinity Hotel Budva" },
            { time: "תחנה 2", name: "הגעה למלון בבודווה", desc: "צ'ק-אין במלון, התארגנות ומנוחה.", map: "Infinity Hotel Budva", waze: "Infinity Hotel Budva" },
            { time: "ערב", name: "סיור ערב בבודווה", desc: "הליכה רגועה בסמטאות העיר העתיקה וארוחת ערב.", map: "Budva Old Town", waze: "Budva Old Town" }
        ]
    },
    {
        day: 2, date: "20/09 (א')", region: "בודווה", icon: "🏰",
        hotelName: "Infinity Hotel & More, Budva - כולל ארוחת בוקר", 
        hotelUrl: "https://www.booking.com/hotel/me/infinity-budva.he.html",
        spots: [
            { time: "בוקר", name: "מצודת הציטדלה וכנסיות העיר העתיקה", desc: "ביקור במבצר הציטדלה העתיק, תצפית מהחומות וכנסיות St. John & Holy Trinity.", map: "Citadel Budva", waze: "Citadel Budva" },
            { time: "לפנה\"צ", name: "חופי מורן (Mogren 1 & Mogren 2)", desc: "הליכה בטיילת ליד פסל הבלרינה, מעבר דרך שביל הסלעים לחוף Mogren 1 והמשך לחוף Mogren 2.", map: "Mogren Beach", waze: "Mogren Beach" },
            { time: "צהריים", name: "ארוחת דגים במרינה", desc: "דגים ופירות ים טריים במרינה הסמוכה לעיר העתיקה.", map: "Budva Marina", waze: "Budva Marina" },
            { time: "נסיעה", name: "🚘 נסיעה למנזר פודמאינה", desc: "זמן נסיעה מוערך: כ-10 דקות ממרכז העיר.", map: "Podmaine Monastery", waze: "Podmaine Monastery" },
            { time: "אחה\"צ", name: "מנזר פודמאינה (Podmaine Monastery)", desc: "ביקור במנזר אורתודוקסי שקט מהמאה ה-15 המשקיף על מפרץ בודווה.", map: "Podmaine Monastery", waze: "Podmaine Monastery" },
            { time: "נסיעה", name: "🚘 נסיעה לתצפית סווטי סטפן", desc: "זמן נסיעה מוערך: כ-15 דקות.", map: "Sveti Stefan Viewpoint", waze: "Sveti Stefan Viewpoint" },
            { time: "ערב", name: "סווטי סטפן (Sveti Stefan)", desc: "נסיעה לתצפית ב-E65 בשעת השקיעה.", map: "Sveti Stefan Viewpoint", waze: "Sveti Stefan Viewpoint" }
        ]
    },
    {
        day: 3, date: "21/09 (ב')", region: "אגם סקאדר ופטרובאץ", icon: "🛶",
        hotelName: "Infinity Hotel & More, Budva - כולל ארוחת בוקר", 
        hotelUrl: "https://www.booking.com/hotel/me/infinity-budva.he.html",
        spots: [
            { time: "08:30", name: "נסיעה לוירפאזאר", desc: "יציאה מבודווה ל-Virpazar דרך מנהרת Sozina או ההרים. זמן נסיעה מוערך: כ-45 דקות.", map: "Virpazar", waze: "Virpazar" },
            { time: "09:30", name: "שייט באגם סקאדר", desc: "שייט בסירה (שעה-שעתיים) לצפייה בלוטוסים ובציפורים.", map: "Lake Skadar", waze: "Lake Skadar" },
            { time: "נסיעה", name: "🚘 נסיעה לתצפית Pavlova Strana", desc: "זמן נסיעה מוערך: כ-35 דקות בכבישים נופיים צרים.", map: "Pavlova Strana Viewpoint", waze: "Pavlova Strana Viewpoint" },
            { time: "11:30", name: "תצפית Pavlova Strana", desc: "תצפית פנורמית על עיקול ה\"פרסה\" של הנהר.", map: "Pavlova Strana Viewpoint", waze: "Pavlova Strana Viewpoint" },
            { time: "נסיעה", name: "🚘 נסיעה לפטרובאץ", desc: "זמן נסיעה מוערך: כ-50 דקות.", map: "Petrovac Montenegro", waze: "Petrovac Montenegro" },
            { time: "13:00", name: "פטרובאץ (Petrovac) ומצודת קסטיו", desc: "ביקור במצודת קסטיו (Kastio) ותצפית על האיים.", map: "Kastio Castle Petrovac", waze: "Kastio Castle Petrovac" },
            { time: "14:00", name: "🌲 הליכה מהמצודה לחוף Fenix", desc: "המסלול מתחיל ממש מאחורי מצודת קסטיו לכיוון צפון. שביל הליכה מוסדר יחסית שעובר בתוך יער אורנים ומציע צל רב וריח נפלא.", map: "Fenix Beach Petrovac", waze: "Fenix Beach Petrovac" },
            { time: "15:00", name: "🔦 מעבר דרך המנהרות לחוף Fenix", desc: "אחד משיאי המסלול הוא המעבר דרך שלוש מנהרות חצובות בסלע. מומלץ להצטייד בפנס (או להשתמש בטלפון). מדובר בחוף קטן וחבוי (\"פנינה נסתרת\") שנמצא לפני שמגיעים למלון הגדול והנטוש.", map: "Fenix Beach Petrovac", waze: "Fenix Beach Petrovac" },
            { time: "18:00", name: "🚘 🚗 חזרה למלון בבודווה", desc: "נסיעה חזרה למלון. זמן נסיעה מוערך: כ-25 דקות להתארגנות וארוחת ערב.", map: "Infinity Hotel Budva", waze: "Infinity Hotel Budva" }
        ]
    },
    {
        day: 4, date: "22/09 (ג')", region: "סבטי סטפן, סנט סאווה ופרז'נו", icon: "🌅",
        hotelName: "Infinity Hotel & More, Budva - כולל ארוחת בוקר", 
        hotelUrl: "https://www.booking.com/hotel/me/infinity-budva.he.html",
        spots: [
            { time: "10:00", name: "תצפית E65 סבטי סטפן", desc: "עצירת צילום פנורמית. זמן נסיעה מבודווה: כ-15 דקות.", map: "Sveti Stefan Viewpoint", waze: "Sveti Stefan Viewpoint" },
            { time: "10:30", name: "ירידה לגשר האי ופארק מילוצ'ר", desc: "חניה ב-E-65 Parking, ירידה לגשר המחבר את האי והליכה מוצלת ב-Park Miločer.", map: "Sveti Stefan Beach", waze: "Sveti Stefan Beach" },
            { time: "12:00", name: "כפר פרז'נו וארוחת צהריים", desc: "המשך לכפר פרז'נו וארוחת צהריים במסעדות מומלצות כמו Konoba More או La Mar.", map: "Przno Montenegro", waze: "Przno Montenegro" },
            { time: "13:30", name: "חזרה לחניה ונסיעה לכנסיית סנט סאווה", desc: "חזרה רגלית לחניה ונסיעה לכנסיית סנט סאווה (St. Sava) בכביש מפותל ונופי העולה במעלה ההר.", map: "Church of St. Sava Montenegro", waze: "Church of St. Sava Montenegro" },
            { time: "14:30", name: "תצפית בכנסיית סנט סאווה", desc: "תצפית פנורמית מרהיבה על קו החוף ומפרץ סבטי סטפן.", map: "Church of St. Sava Montenegro", waze: "Church of St. Sava Montenegro" },
            { time: "16:00", name: "🚘 🚗 חזרה למלון בבודווה", desc: "נסיעה חזרה למלון (כ-20 דקות) להתארגנות ומנוחה.", map: "Infinity Hotel Budva", waze: "Infinity Hotel Budva" }
        ]
    },
    {
        day: 5, date: "23/09 (ד')", region: "ז'בליאק והצפון", icon: "🏔️",
        hotelName: "Holiday Home Vile Calimero, Žabljak", 
        hotelUrl: "https://www.booking.com/hotel/me/holiday-home-vile-calimero-zabljak.he.html",
        spots: [
            { time: "10:00", name: "🔑 יציאה מהמלון בבודווה", desc: "יציאה בשעה 10:00 בבוקר ונסיעה צפונה.", map: "Infinity Hotel Budva", waze: "Infinity Hotel Budva" },
            { time: "נסיעה", name: "🚘 נסיעה למנזר אוסטרוג", desc: "זמן נסיעה מוערך: כ-1.5 שעות דרך פודגוריצה.", map: "Ostrog Monastery", waze: "Ostrog Monastery" },
            { time: "צהריים", name: "מנזר אוסטרוג (Monastery Ostrog)", desc: "ביקור במנזר האורתודוקסי המרשים החצוב בתוך צלע הסלע.", map: "Ostrog Monastery", waze: "Ostrog Monastery" },
            { time: "נסיעה", name: "🚘 נסיעה לז'בליאק", desc: "זמן נסיעה מוערך: כ-2 שעות דרך ניקשיץ'.", map: "Zabljak Montenegro", waze: "Zabljak Montenegro" },
            { time: "אחה\"צ", name: "🛒 הגעה לז'בליאק והצטיידות", desc: "בהגעה לז'בליאק - עצירה להליכה לסופרמרקט קרוב וטוב להצטיידות לקראת הימים באזור.", map: "Zabljak Supermarket", waze: "Zabljak Supermarket" },
            { time: "צ'ק-אין", name: "הגעה למקום הלינה", desc: "צ'ק-אין בבית הנופש בעיירה הגבוהה בבלקן.", map: "Holiday Home Vile Calimero Zabljak", waze: "Holiday Home Vile Calimero Zabljak" },
            { time: "ערב", name: "ארוחת ערב בז'בליאק", desc: "מסעדות מומלצות: Restaurant Or'O או Restoran Durmitor.", map: "Restaurant Or'O Zabljak", waze: "Restaurant Or'O Zabljak" }
        ]
    },
    {
        day: 6, date: "24/09 (ה')", region: "טבעת דורמיטור", icon: "🌲",
        hotelName: "Holiday Home Vile Calimero, Žabljak", 
        hotelUrl: "https://www.booking.com/hotel/me/holiday-home-vile-calimero-zabljak.he.html",
        spots: [
            { time: "08:30", name: "האגם השחור (Crno Jezero)", desc: "הקפה מעגלית רגלית של האגם (כשעה וחצי).", map: "Black Lake Durmitor", waze: "Black Lake Durmitor" },
            { time: "תחנה", name: "🚗 תחילת מסלול טבעת דורמיטור (Durmitor Ring)", desc: "יציאה למסלול הנהיגה ההררי המפורסם סביב שמורת דורמיטור.", map: "Durmitor Ring", waze: "Durmitor Ring" },
            { time: "10:30", name: "תצפית צ'ורבאץ (Curevac)", desc: "מבט אל קניון נהר הטארה ממעוף הציפור.", map: "Curevac Viewpoint", waze: "Curevac Viewpoint" },
            { time: "נסיעה", name: "🚘 נסיעה לקניון סושיצה", desc: "זמן נסיעה מוערך: כ-45 דקות דרך נופים אלפיניים.", map: "Susica Canyon", waze: "Susica Canyon" },
            { time: "12:00", name: "קניון סושיצה (Sušica)", desc: "ירידה בפיתולים חדים אל הקניון דרך Mala Crna Gora.", map: "Susica Canyon", waze: "Susica Canyon" },
            { time: "14:00", name: "צהריים בכפר טרסה (Trsa)", desc: "עצירה כפרית ב-Etno Selo Montenegro או Restoran Trsa. נסיעה: כ-30 דקות.", map: "Trsa Montenegro", waze: "Trsa Montenegro" },
            { time: "15:30", name: "מעבר סדלו (Sedlo Pass)", desc: "נסיעה בגובה 1,907 מטר. זמן נסיעה: כ-35 דקות.", map: "Sedlo Pass Durmitor", waze: "Sedlo Pass Durmitor" },
            { time: "18:00", name: "🚘 🚗 חזרה למלון בז'בליאק", desc: "חזרה למקום הלינה בז'בליאק (כ-25 דקות נסיעה) למנוחה וארוחת ערב.", map: "Holiday Home Vile Calimero Zabljak", waze: "Holiday Home Vile Calimero Zabljak" }
        ]
    },
    {
        day: 7, date: "25/09 (ו')", region: "קולאשין", icon: "🌉",
        hotelName: "Wulfenia Hotel & Spa, Kolašin - כולל ארוחת בוקר", 
        hotelUrl: "https://www.booking.com/hotel/me/wulfenia-and-spa-kolasin.he.html",
        spots: [
            { time: "09:00", name: "🔑 יציאה מהמלון בז'בליאק", desc: "יציאה בשעה 09:00 בבוקר לכיוון גשר הטארה.", map: "Holiday Home Vile Calimero Zabljak", waze: "Holiday Home Vile Calimero Zabljak" },
            { time: "נסיעה", name: "🚘 נסיעה לגשר הטארה", desc: "זמן נסיעה מוערך: כ-25 דקות.", map: "Tara Bridge", waze: "Tara Bridge" },
            { time: "09:30", name: "גשר הטארה (Đurđevića Tara)", desc: "הליכה על הגשר בגובה 170 מטר ואומגה (Zipline).", map: "Tara Bridge", waze: "Tara Bridge" },
            { time: "נסיעה", name: "🚘 נסיעה לפארק ביוגרדסקה גורה", desc: "זמן נסיעה מוערך: כ-1.5 שעות לאורך קניון הטארה.", map: "Biogradska Gora", waze: "Biogradska Gora" },
            { time: "12:30", name: "פארק לאומי ביוגרדסקה גורה", desc: "מסלול הליכה מעגלי סביב האגם ביער בראשיתי עתיק.", map: "Biogradska Gora", waze: "Biogradska Gora" },
            { time: "נסיעה", name: "🚘 נסיעה לקולאשין", desc: "זמן נסיעה מוערך: כ-25 דקות.", map: "Wulfenia Hotel Kolasin", waze: "Wulfenia Hotel Kolasin" },
            { time: "16:00", name: "הגעה לקולאשין (Kolašin)", desc: "צ'ק-אין ב-Wulfenia Hotel & Spa 5* וסיור במרכז העיירה.", map: "Wulfenia Hotel Kolasin", waze: "Wulfenia Hotel Kolasin" },
            { time: "ערב", name: "ארוחת ערב ב-Konoba Vodenica", desc: "חובה להזמין Kačamak.", map: "Konoba Vodenica Kolasin", waze: "Konoba Vodenica Kolasin" }
        ]
    },
    {
        day: 8, date: "26/09 (ש')", region: "קולאשין (ספא)", icon: "💆",
        hotelName: "Wulfenia Hotel & Spa, Kolašin - כולל ארוחת בוקר", 
        hotelUrl: "https://www.booking.com/hotel/me/wulfenia-and-spa-kolasin.he.html",
        spots: [
            { time: "כל היום", name: "יום מנוחה ופינוק בספא", desc: "רוגע והתחדשות במתקני הספא והמסאז' במלון Wulfenia.", map: "Wulfenia Hotel Kolasin", waze: "Wulfenia Hotel Kolasin" },
            { time: "רשות", name: "סיור קל בעיירה", desc: "טיול רגלי קצר בגן הבוטני Dulovina או במרכז העיירה.", map: "Dulovina Botanical Garden", waze: "Dulovina Botanical Garden" }
        ]
    },
    {
        day: 9, date: "27/09 (א')", region: "צטיניה, סרפנטינות וקוטור", icon: "🏛️",
        hotelName: "Absolute Adriatic, Kotor", 
        hotelUrl: "https://www.booking.com/hotel/me/absolute-adriatic.he.html",
        spots: [
            { time: "09:00", name: "🔑 יציאה מהמלון בקולאשין", desc: "יציאה בשעה 09:00 בבוקר ונסיעה דרומה לכיוון צטיניה.", map: "Wulfenia Hotel Kolasin", waze: "Wulfenia Hotel Kolasin" },
            { time: "נסיעה", name: "🚘 נסיעה לצטיניה", desc: "זמן נסיעה מוערך: כ-1.5 שעות דרך קניון נהר המוראצ'ה ופודגוריצה.", map: "Cetinje", waze: "Cetinje" },
            { time: "תחנה", name: "🏛️ העיר צטיניה (Cetinje)", desc: "סיור בבירה ההיסטורית העתיקה של מונטנגרו, ארמונות ומנזר צטיניה.", map: "Cetinje", waze: "Cetinje" },
            { time: "נסיעה", name: "🚘 נסיעה לכפר נייגושי", desc: "זמן נסיעה מוערך: כ-30 דקות.", map: "Njegusi Montenegro", waze: "Njegusi Montenegro" },
            { time: "13:30", name: "טעימות בכפר נייגושי (Njeguši)", desc: "עצירה לטעימת פרושוטו וגבינות בלקניות מסורתיות.", map: "Njegusi Montenegro", waze: "Njegusi Montenegro" },
            { time: "נסיעה", name: "🚘 נסיעה בסרפנטינות לקוטור", desc: "זמן נסיעה מוערך: כ-45 דקות בירידה זהירה.", map: "Kotor Serpentine", waze: "Kotor Serpentine" },
            { time: "15:00", name: "סרפנטינות קוטור", desc: "ירידה מרהיבה למפרץ דרך 25 סיבובים חדים ותצפית עוצרת נשימה.", map: "Kotor Serpentine", waze: "Kotor Serpentine" },
            { time: "16:30", name: "צ'ק-אין בקוטור", desc: "מלון Absolute Adriatic, סיור סמטאות וארוחת ערב.", map: "Absolute Adriatic Kotor", waze: "Absolute Adriatic Kotor" }
        ]
    },
    {
        day: 10, date: "28/09 (ב')", region: "קוטור העתיקה", icon: "🛡️",
        hotelName: "Absolute Adriatic, Kotor", 
        hotelUrl: "https://www.booking.com/hotel/me/absolute-adriatic.he.html",
        spots: [
            { time: "08:00", name: "טיפוס למצודת סן ג'ובאני", desc: "טיפוס מוקדם של כ-1,350 מדרגות לאורך החומות.", map: "San Giovanni Fortress Kotor", waze: "San Giovanni Fortress Kotor" },
            { time: "11:00", name: "העיר העתיקה (Stari Grad)", desc: "שער הים, קתדרלת סנט טריפון, כיכר הנשק ומגדל השעון.", map: "Kotor Old Town", waze: "Kotor Old Town" },
            { time: "13:00", name: "צהריים במסעדת Tanjga", desc: "בשרים מעולים (BBQ) או מסעדת Konoba Scala Santa.", map: "Tanjga Kotor", waze: "Tanjga Kotor" },
            { time: "19:00", name: "קוקטייל בשקיעה", desc: "Roof Bar at Hotel Hippocampus.", map: "Hotel Hippocampus Kotor", waze: "Hotel Hippocampus Kotor" }
        ]
    },
    {
        day: 11, date: "29/09 (ג')", region: "פראסט והרצג נובי", icon: "⛵",
        hotelName: "Absolute Adriatic, Kotor", 
        hotelUrl: "https://www.booking.com/hotel/me/absolute-adriatic.he.html",
        spots: [
            { time: "09:00", name: "🔑 יציאה מהמלון בקוטור", desc: "יציאה בשעה 09:00 בבוקר ונסיעה לאורך המפרץ לפראסט.", map: "Absolute Adriatic Kotor", waze: "Absolute Adriatic Kotor" },
            { time: "נסיעה", name: "🚘 נסיעה לפראסט", desc: "זמן נסיעה מוערך: כ-20 דקות.", map: "Perast", waze: "Perast" },
            { time: "תחנה", name: "⛵ ביקור בעיירה פראסט (Perast)", desc: "הפלגה בסירה לאי 'גבירתנו של הסלעים' וקפה ב-Restaurant Conte.", map: "Perast", waze: "Perast" },
            { time: "נסיעה", name: "🚘 נסיעה להרצג נובי", desc: "זמן נסיעה מוערך: כ-40 דקות לאורך חוף המפרץ.", map: "Herceg Novi Old Town", waze: "Herceg Novi Old Town" },
            { time: "13:00", name: "הרצג נובי (Herceg Novi)", desc: "ביקור בעיר העתיקה, טיפוס למבצר Kanli Kula וארוחת צהריים.", map: "Herceg Novi Old Town", waze: "Herceg Novi Old Town" },
            { time: "16:30", name: "חזרה במעבורת המפרץ", desc: "נסיעה ל-Kamenari (כ-25 דקות) ועלייה למעבורת ל-Lepetane (~5 אירו לרכב).", map: "Kamenari Ferry", waze: "Kamenari Ferry" },
            { time: "17:30", name: "עצירת שקיעה ב-Verige 65", desc: "דרינק או ארוחה קלה למרגלות המעבורת.", map: "Verige 65", waze: "Verige 65" },
            { time: "19:00", name: "🚘 🚗 חזרה למלון בקוטור", desc: "חזרה למלון Absolute Adriatic (כ-15 דקות נסיעה) למנוחה וארוחת ערב.", map: "Absolute Adriatic Kotor", waze: "Absolute Adriatic Kotor" },
            { time: "סיום יום", name: "חזרה למלון", desc: "התארגנות ללילה האחרון בקוטור.", map: "Absolute Adriatic Kotor", waze: "Absolute Adriatic Kotor" }
        ]
    },
    {
        day: 12, date: "30/09 (ד')", region: "המערה הכחולה", icon: "🌊",
        hotelName: "Absolute Adriatic, Kotor", 
        hotelUrl: "https://www.booking.com/hotel/me/absolute-adriatic.he.html",
        spots: [
            { time: "בוקר", name: "נסיעה ל-Kayak Rental Veslo", desc: "הגעה לנקודת ההשכרה של הקיאקים בחוף Veslo. זמן נסיעה מקוטור: כ-40 דקות.", map: "Kayak Rental Veslo", waze: "Kayak Rental Veslo" },
            { time: "לפנה\"צ", name: "שייט בקיאק למערה הכחולה (Blue Cave)", desc: "שייט בקיאק למערה הכחולה והתרעננות בים.", map: "Blue Cave Montenegro", waze: "Blue Cave Montenegro" },
            { time: "אחה\"צ", name: "🚘 🚗 חזרה למלון בקוטור", desc: "נסיעה חזרה למלון Absolute Adriatic להתארגנות, מנוחה והחלפת בגדים.", map: "Absolute Adriatic Kotor", waze: "Absolute Adriatic Kotor" },
            { time: "ערב", name: "🍽️ ארוחת ערב מסכמת", desc: "יציאה מהמלון לארוחה חגיגית לסיכום הטיול בעיר העתיקה בקוטור.", map: "Kotor Old Town", waze: "Kotor Old Town" }
        ]
    },
    {
        day: 13, date: "01/10 (ה')", region: "חזרה ארצה", icon: "🏠",
        hotelName: "טיסה חזרה לישראל", 
        hotelUrl: "",
        spots: [
            { time: "08:30", name: "🚗 נסיעה לנמל התעופה טיבאט", desc: "נסיעה קצרה מקוטור ל-Tivat Airport. זמן נסיעה מוערך: כ-15 דקות.", map: "Tivat Airport", waze: "Tivat Airport" },
            { time: "11:00", name: "✈️ טיסת חזור: ISRAIR AIRLINES - 6H 178", desc: "המראה מטיבאט בשעה 11:00. <a href='https://www.iaa.gov.il/airports/ben-gurion/flight-board/' target='_blank' rel='noopener' style='color:#2563eb;text-decoration:underline;'>ללוח הטיסות של רשות שדות התעופה</a>", map: "Tivat Airport", waze: "Tivat Airport" }
        ]
    }
];

// רישום ה-Service Worker מתוך קובץ ה-sw.js החיצוני
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('SW registered successfully!', reg))
            .catch(err => console.log('SW registration failed:', err));
    });
}

let deferredPrompt;
const installBtn = document.getElementById('installBtn');
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (installBtn) installBtn.hidden = false;
});

if (installBtn) {
    installBtn.addEventListener('click', () => {
        installBtn.hidden = true;
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(() => { deferredPrompt = null; });
        }
    });
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
function updateOnlineStatus() {
    const banner = document.getElementById('offlineBanner');
    if (banner) banner.hidden = navigator.onLine;
}

let activeDay = 1;

function renderApp() {
    updateOnlineStatus();
    renderHotel();
    renderNav();
    renderSpots();
}

function renderHotel() {
    const hotelDiv = document.getElementById('hotelCard');
    const currentDay = montenegroTrip.find(d => d.day === activeDay);
    if (hotelDiv && currentDay) {
        if (currentDay.hotelUrl) {
            hotelDiv.innerHTML = `🏨 <strong style="color: #0f172a;">בסיס לינה:</strong> <a href="${currentDay.hotelUrl}" target="_blank" rel="noopener" style="color: #2563eb; text-decoration: underline; font-weight: 600;">${currentDay.hotelName}</a>`;
        } else {
            hotelDiv.innerHTML = `🏨 <strong style="color: #0f172a;">בסיס לינה:</strong> ${currentDay.hotelName}`;
        }
    }
}

function renderNav() {
    const nav = document.getElementById('daysNav');
    if (!nav) return;
    nav.innerHTML = montenegroTrip.map(d => `
        <button class="day-tab ${d.day === activeDay ? 'active' : ''}" onclick="switchDay(${d.day})">
            ${d.icon} יום ${d.day} (${d.date.split(' ')[0]})
        </button>
    `).join('');
}

function switchDay(day) {
    activeDay = day;
    renderApp();
}

function renderSpots() {
    const list = document.getElementById('itineraryList');
    if (!list) return;
    const currentDay = montenegroTrip.find(d => d.day === activeDay);
    if (!currentDay) return;
    
    list.innerHTML = `
        <h2 style="margin: 0 0 1.25rem 0; font-size: 1.25rem; font-weight: 700; color: #0f172a; border-right: 4px solid #2563eb; padding-right: 0.5rem;">${currentDay.icon} ${currentDay.date} - ${currentDay.region}</h2>
        ${currentDay.spots.map(s => `
            <div class="spot-card">
                <div class="spot-header">
                    <h3 class="spot-title">${s.name}</h3>
                    <span class="spot-time">${s.time}</span>
                </div>
                <p class="spot-desc">${s.desc}</p>
                <div style="display: flex; gap: 0.75rem; margin-top: 0.5rem;">
                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.map)}" target="_blank" rel="noopener" class="spot-link">📍 Google Maps</a>
                    <a href="https://waze.com/ul?q=${encodeURIComponent(s.waze)}&navigate=yes" target="_blank" rel="noopener" class="spot-link" style="color: #059669;">🚘 Waze</a>
                </div>
            </div>
        `).join('')}
    `;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderApp);
} else {
    renderApp();
}