// תוכנית טיול מפורטת ל-8 ימים בדרום פולין (מבוסס על קובץ ה-PDF)
const polandTrip = [
    {
        day: 1, date: "יום 1", region: "נחיתה • פארק לאומי אויצוב • קניות בקרקוב • נסיעה לזאב", icon: "🌲",
        hotelName: "Hotel Redyk Ski Relax, Ząb",
        hotelUrl: "https://www.booking.com/hotel/pl/redyk-ski-relax.he.html",
        spots: [
            { time: "09:00 - 10:30", name: "✈️ נחיתה והשכרת רכב", desc: "נחיתה בשדה התעופה (קרקוב/קטוביץ'). סיום סידורי דרכונים, איסוף המזוודות וניגשים לדלפק השכרת הרכב לקבלת המפתח והמסמכים.", map: "Krakow Airport", waze: "Krakow Airport" },
            { time: "10:30 - 14:30", name: "🌲 טיול בפארק הלאומי אויצוב (Ojców)", desc: "סיור בטבע מרהיב: חניה במרכז אויצוב, הליכה לשער קרקוב ועמק פרונדניק, ולאחר מכן נסיעה קצרה לתצפית על מצבת הרקולס וטירת פיסקובה סקאלה.", map: "Parking Pod Zamkiem, Ojcow", waze: "Parking Pod Zamkiem, Ojcow" },
            { time: "14:30 - 17:00", name: "🛍️ קניות ב-Factory Kraków", desc: "נסיעה מפארק אויצוב למתחם האאוטלט Factory Kraków (כ-20-25 דקות נסיעה) לקניות והתרעננות. כתובת: Profesora Adama Rożańskiego 32, 32-085 Modlniczka.", map: "Factory Krakow", waze: "Factory Krakow" },
            { time: "17:00 - 18:30", name: "🚘 נסיעה והגעה למלון בזאב", desc: "יציאה ממתחם הקניות ונסיעה לכיוון האזור ההררי של זאב (כ-1:20 שעות). הגעה משוערת בשעה 18:30 ל-Hotel Redyk Ski Relax, צ'ק-אין ומנוחה. כתובת: Potoczki 20, 34-521 Ząb.", map: "Hotel Redyk Ski & Relax", waze: "Hotel Redyk Ski & Relax" }
        ],
        notes: [
            "איסוף רכב: מומלץ לבדוק תקינות הרכב, שריטות וציוד חובה (משולש אזהרה, אפוד צהוב) לפני היציאה.",
            "ציוד לפארק אויצוב: מומלץ להצטייד בנעלי הליכה נוחות ומים.",
            "תשלום חניה: בחניון פארק אויצוב התשלום מתבצע במדחנים או באפליקציות מקומיות."
        ]
    },
    {
        day: 2, date: "יום 2", region: "זקופנה • אגם מורסקו אוקו, צ'ארני סטאב ומרחצאות חוחולובסקה", icon: "🏔️",
        hotelName: "Hotel Redyk Ski Relax, Ząb",
        hotelUrl: "https://www.booking.com/hotel/pl/redyk-ski-relax.he.html",
        spots: [
            { time: "06:45 - 07:45", name: "🚘 יציאה מוקדמת ונסיעה לחניון מורסקו אוקו", desc: "יציאה מוקדמת ממלון Redyk בזאב ונסיעה בכביש Oswald Balzer לכיוון חניון Palenica Białczańska (כ-45 דקות נסיעה) כדי לתפוס את מקום החנייה המוזמן.", map: "Palenica Bialczanska", waze: "Palenica Bialczanska" },
            { time: "08:00 - 11:00", name: "🥾 מסלול הליכה לאגם מורסקו אוקו (Morskie Oko)", desc: "הליכה רגלית פסטורלית של כ-8 ק"מ (כ-2.5 שעות) על דרך אספלט מוסדרת בתוך שמורת הטבע הלאומית TPN, עד להגעה לבקתת ההרים והאגם האלפיני המרהיב.", map: "Morskie Oko", waze: "Morskie Oko" },
            { time: "11:00 - 13:00", name: "🏔️ טיפוס לאגם העליון - צ'ארני סטאב (Czarny Staw)", desc: "הקפת חלק מפורט של אגם מורסקו אוקו וטיפוס תלול (כ-40-50 דקות) לאגם השחור שמעליו לתצפית עוצרת נשימה מלמעלה.", map: "Czarny Staw pod Rysami", waze: "Czarny Staw pod Rysami" },
            { time: "13:00 - 15:30", name: "🥾 ירידה חזרה לחניון פאלניצה", desc: "הליכה חזרה מהאגם לכיוון חניון Palenica Białczańska. הפסקה קלה בדרך לרענון ומנוחה.", map: "Palenica Bialczanska", waze: "Palenica Bialczanska" },
            { time: "15:30 - 16:15", name: "🚘 נסיעה למרחצאות חוחולובסקה", desc: "איסוף הרכב מהחניון ונסיעה פסטורלית מסביב להרים (כ-45 דקות נסיעה) לכיוון מתחם Chochołowskie Termy.", map: "Chocholowskie Termy", waze: "Chocholowskie Termy" },
            { time: "16:30 - 20:00", name: "♨️ בילוי במרחצאות הטרמיים חוחולובסקה", desc: "בילוי חוויתי ומפנק במרחצאות החמים, בריכות ג'קוזי, בריכות פתוחות מול ההרים, ומגוון סאונות.", map: "Chocholowskie Termy", waze: "Chocholowskie Termy" },
            { time: "20:00 - 20:25", name: "🚘 נסיעה חזרה למלון בזאב", desc: "נסיעה קצרה של כ-20-25 דקות ממרחצאות חוחולובסקה בחזרה למלון בזאב להתארגנות, ארוחת ערב קלה ומנוחה.", map: "Hotel Redyk Ski & Relax", waze: "Hotel Redyk Ski & Relax" }
        ],
        notes: [
            "כרטיסי חנייה ושמורה: חובה לרכוש כרטיס חנייה ב-Palenica Białczańska מראש באתר הרשמי TPN!",
            "ציוד נדרש: נעלי הליכה נוחות, קרם הגנה, מים וגרביים להחלפה. למרחצאות: בגדי ים, מגבות וכפכפים.",
            "כרטיסי מרחצאות: מומלץ לרכוש כרטיסים מראש באתר Chochołowskie Termy כדי לעקוף את התורים."
        ]
    },
    {
        day: 3, date: "יום 3", region: "זקופנה • הר קספרובי וורך ומדרחוב קרופובקי", icon: "🚠",
        hotelName: "Hotel Redyk Ski Relax, Ząb",
        hotelUrl: "https://www.booking.com/hotel/pl/redyk-ski-relax.he.html",
        spots: [
            { time: "10:00 - 10:30", name: "🚘 יציאה מהמלון ונסיעה לחנייה ברונדו", desc: "יציאה ממלון Redyk ונסיעה לכיוון זקופנה. חנייה באחד המגרשים המסודרים סביב Rondo Jan Pawła II (כגון רחוב Karłowicza / Ul. Bronisława Czecha).", map: "Karlowicza Zakopane", waze: "Karlowicza Zakopane" },
            { time: "10:30 - 10:45", name: "🚐 מונית שירות לתחנת הרכבל", desc: "עלייה על מונית שירות/מיניבוס (Busik) בכיכר הרונדו לנסיעה קצרה של כ-3 דקות לתחנת הרכבל בקוז'ניצ'ה (Kuźnice). כניסת רכב פרטי אסורה.", map: "Kuznice Zakopane", waze: "Kuznice Zakopane" },
            { time: "11:00 - 15:30", name: "🚠 הר קספרובי וורך (Kasprowy Wierch) וירידה רגלית", desc: "עלייה ברכבל לתצפית בפסגה (1,987 מ'). ירידה במסלול אל עמק Hala Gąsienicowa, עצירה בבקתת Schronisko PTTK Murowaniec לשתייה חמה/מרק, והמשך ירידה לקוז'ניצ'ה.", map: "Kasprowy Wierch", waze: "Kasprowy Wierch" },
            { time: "15:30 - 16:00", name: "🚘 חזרה לרכב ונסיעה למרכז העיר", desc: "חזרה במיניבוס מקוז'ניצ'ה לרונדו, איסוף הרכב ונסיעה לחניון מוסדר סמוך למדרחוב קרופובקי (כגון Parking Krupówki ברחוב Mariusz Zaruskiego 4).", map: "Mariusz Zaruskiego 4 Zakopane", waze: "Mariusz Zaruskiego 4 Zakopane" },
            { time: "16:00 - 19:00", name: "🛍️ טיול במדרחוב קרופובקי (Krupówki)", desc: "סיור רגלי במדרחוב התוסס: חנויות אופנה ומזכרות, ודוכני גבינה מעושנת מקומית (Oscypek).", map: "Krupowki Zakopane", waze: "Krupowki Zakopane" },
            { time: "19:00+", name: "🚘 נסיעה חזרה למלון בזאב", desc: "חזרה לרכב ממתחם החנייה ונסיעה בחזרה למלון Hotel Redyk להתארגנות ומנוחה.", map: "Hotel Redyk Ski & Relax", waze: "Hotel Redyk Ski & Relax" }
        ],
        notes: [
            "רכבל לקספרובי: חובה לרכוש כרטיסים מראש באתר PKL לשעה מוגדרת. יש להגיע לתחנה כ-15-20 דקות לפני הזמן.",
            "אתגרי המסלול והירידה: הירידה הרגלית (כ-3.5 עד 4 שעות נטו) כוללת מדרגות סלע. חובה נעלי הליכה ומקלות הליכה.",
            "מזומן: הנסיעה במוניות השירות עולה כ-5-10 PLN לאדם. מומלץ להחזיק מזומן גם לבקתת Murowaniec."
        ]
    },
    {
        day: 4, date: "יום 4", region: "אושוויץ-בירקנאו, הגעה לקרקוב והחזרת הרכב", icon: "🏛️",
        hotelName: "The Loft Hotel Adults Only, Krakow",
        hotelUrl: "https://www.booking.com/hotel/pl/the-loft-adults-only.he.html",
        spots: [
            { time: "07:45 - 10:15", name: "🚘 יציאה מהמלון בזאב ונסיעה לאושוויץ", desc: "יציאה מוקדמת ממלון Redyk ונסיעה צפונה (כ-2.5 שעות נסיעה, ~140 ק"מ) לכיוון העיר אושוונצ'ים (Oświęcim) דרך כביש DK28 / DW933.", map: "Auschwitz I Museum", waze: "Auschwitz I Museum" },
            { time: "10:15 - 10:30", name: "🛂 הגעה, חנייה ובידוק ביטחוני", desc: "חנייה במגרש המסודר ברחוב Leszczyńskiej 16, מעבר בידוק ביטחוני קפדני והצגת דרכונים וכרטיסים מוזמנים.", map: "Leszczynskiej 16 Oswiecim", waze: "Leszczynskiej 16 Oswiecim" },
            { time: "10:30 - 14:00", name: "🎗️ סיור מודרך באושוויץ 1 ובבירקנאו", desc: "סיור עוצמתי בבלוקים של אושוויץ 1, מעבר בשאטל החינמי של המוזיאון למחנה בירקנאו, סיור ברציף הרכבות, הצריפים ושרידי המשרפות.", map: "Auschwitz II Birkenau", waze: "Auschwitz II Birkenau" },
            { time: "14:15 - 15:30", name: "🚘 נסיעה מאושוויץ לקרקוב", desc: "איסוף הרכב מהחניון ונסיעה מזרחה בכביש A4 האגרה לכיוון קרקוב (כ-1.15 שעות נסיעה).", map: "The Loft Hotel Krakow", waze: "The Loft Hotel Krakow" },
            { time: "15:30 - 16:30", name: "🏨 צ'ק-אין במלון The Loft Hotel בקרקוב", desc: "הגעה למלון The Loft Hotel Adults Only Krakow (כתובת: Dietla 113), פריקת המזוודות והתארגנות קצרה.", map: "The Loft Hotel Krakow", waze: "The Loft Hotel Krakow" },
            { time: "16:30 - 17:30", name: "🔑 נסיעה והחזרת הרכב השכור", desc: "יציאה מהמלון ונסיעה לנקודת החזרת הרכב בקרקוב (תחנה מרכזית / Galeria Krakowska / שדה התעופה), השלמת הליך החזרת הרכב וסיום פרק הנהיגה. חזרה למלון במונית/Uber.", map: "Galeria Krakowska", waze: "Galeria Krakowska" },
            { time: "18:00+", name: "🌆 סיור ערב רגוע וארוחת ערב", desc: "סיור רגלי פסטורלי בסביבת המלון: הליכה קצרה לרובע היהודי (Kazimierz), 15 דקות הליכה לכיכר השוק המרכזית (Rynek Główny), וארוחת ערב.", map: "Rynek Glowny Krakow", waze: "Rynek Glowny Krakow" }
        ],
        notes: [
            "כרטיסים ודרכונים: כניסה למוזיאון אושוויץ דורשת הזמנת מקום מראש. חובה להביא דרכון מקורי לכל משתתף!",
            "הגבלת תיקים: מותר להכניס תיקים קטנים בלבד שלא יעלו על 30x20x10 ס"מ (גודל דף A4). תיקים גדולים נשארים ברכב.",
            "החזרת רכב: מומלץ לצלם את מנגנון הדלק ומצב הרכב בעת ההחזרה ולוודא לקבל אישור סגירת חוזה חתום."
        ]
    },
    {
        day: 5, date: "יום 5", region: "קרקוב • העיר העתיקה, המוזיאון התת-קרקעי ושופינג ב-Bonarka", icon: "🏰",
        hotelName: "The Loft Hotel Adults Only, Krakow",
        hotelUrl: "https://www.booking.com/hotel/pl/the-loft-adults-only.he.html",
        spots: [
            { time: "09:30 - 12:30", name: "🚩 סיור מודרך מקיף בעברית (עם ניסן צור)", desc: "יציאה רגלית מהמלון למפגש בכיכר השוק המרכזית (Rynek Główny). סיור מודרך בעברית הכולל את העיר העתיקה, ארמון הוואוול, וסיור ברובע היהודי.", map: "Rynek Glowny Krakow", waze: "Rynek Glowny Krakow" },
            { time: "12:30 - 14:00", name: "🍽️ ארוחת צהריים במרכז העתיק", desc: "הפסקה לארוחת צהריים באחת המסעדות המצוינות סביב הכיכר המרכזית או ברחוב Florianska.", map: "Florianska Krakow", waze: "Florianska Krakow" },
            { time: "14:30 - 16:30", name: "🏺 המוזיאון התת-קרקעי (Rynek Podziemny)", desc: "כניסה לפי שעת כרטיס מוזמנת מראש למוזיאון האינטראקטיבי השוכן 4 מטרים מתחת לכיכר השוק, המציג את קרקוב בימי הביניים.", map: "Rynek Podziemny Krakow", waze: "Rynek Podziemny Krakow" },
            { time: "16:30 - 18:00", name: "🌳 טיול בפארק פלאנטי (Planty) ושער הברביקן", desc: "הליכה נעימה בטבעת הירוקה המקיפה את העיר העתיקה, ביקור בשער הברביקן הישן (Barbakan) ובשער פלוריאן (Brama Floriańska).", map: "Barbakan Krakow", waze: "Barbakan Krakow" },
            { time: "18:00 - 21:00", name: "🛍️ שופינג בקניון Bonarka City Center", desc: "הגעה במונית/Uber או בתחבורה ציבורית לקניון Bonarka בדרום קרקוב (כתובת: Kamieńskiego 11). קניון ענק עם מאות חנויות (כולל סניף Primark ענק).", map: "Bonarka City Center Krakow", waze: "Bonarka City Center Krakow" },
            { time: "21:00+", name: "🚕 חזרה למלון The Loft Hotel", desc: "חזרה במונית/Uber מהקניון למלון להתארגנות ומנוחה.", map: "The Loft Hotel Krakow", waze: "The Loft Hotel Krakow" }
        ],
        notes: [
            "סיור מודרך: מומלץ לתאם מראש עם ניסן צור דרך עמוד הפייסבוק ולוודא שעת מפגש מדויקת בכיכר השוק.",
            "כרטיסים למוזיאון התת-קרקעי: הכניסה מוגבלת למספר מבקרים בכל רבע שעה - חובה להגיע בזמן המוזמן.",
            "קניון Bonarka: פתוח מ-10:00 עד 21:00, כולל סניף פרימרק מוביל."
        ]
    },
    {
        day: 6, date: "יום 6", region: "קרקוב • מפעל שינדלר, כיכר הכיסאות והופעה של Rod Stewart", icon: "🎸",
        hotelName: "The Loft Hotel Adults Only, Krakow",
        hotelUrl: "https://www.booking.com/hotel/pl/the-loft-adults-only.he.html",
        spots: [
            { time: "09:00 - 11:30", name: "🏭 סיור מודרך במפעל שינדלר (Fabryka Schindlera)", desc: "הליכה קצרה מהמלון או נסיעת מונית קצרה (כ-1.5 ק"מ). ביקור במוזיאון המפורסם בתערוכה 'קרקוב תחת הכיבוש הנאצי', משרד שינדלר וחצר המפעל.", map: "Oskar Schindler's Enamel Factory", waze: "Oskar Schindler's Enamel Factory" },
            { time: "11:30 - 13:30", name: "🪑 גטו פודגורז'ה, כיכר הכיסאות ובית מרקחת 'תחת הנשר'", desc: "הליכה לרובע פודגורז'ה (Podgórze): ביקור בכיכר גיבורי הגטו (Plac Bohaterów Getta) עם אנדרטת הכיסאות, בית מרקחת 'תחת הנשר', שרידי החומה וגשר קלאטרה.", map: "Plac Bohaterow Getta Krakow", waze: "Plac Bohaterow Getta Krakow" },
            { time: "13:30 - 17:00", name: "🍽️ ארוחת צהריים, חזרה למלון ומנוחה", desc: "ארוחת צהריים באזור, חזרה רגלית למלון The Loft Hotel למנוחה והתארגנות לקראת ערב ההופעה.", map: "The Loft Hotel Krakow", waze: "The Loft Hotel Krakow" },
            { time: "17:30 - 22:30", name: "🎤 ערב הופעה: Rod Stewart ב-TAURON Arena", desc: "יציאה בחשמלית קו 1 או 22 מתחנת Hala Targowa לתחנת TAURON Arena Kraków (כ-10-12 דק'). מופע ענק! פתיחת שערים 18:00, תחילת המופע 19:30. חזרה מתוגברת בחשמלית.", map: "TAURON Arena Krakow", waze: "TAURON Arena Krakow" }
        ],
        notes: [
            "הנחיות הגעה להופעה: מ-The Loft Hotel צועדים 3 דקות לתחנת החשמלית הסמוכה Hala Targowa, עולים על קו 1 או 22 ויורדים בתחנת TAURON Arena Kraków Al. Pokoju.",
            "מונית/Uber להופעה: כ-10 דקות נסיעה. מומלץ להזמין לפחות שעה וחצי לפני תחילת המופע בשל עומסים.",
            "בחזרה בסיום המופע: החשמליות מתוגברות בסיום האירוע ונוסעות ישירות בחזרה לתחנת Hala Targowa הסמוכה למלון."
        ]
    },
    {
        day: 7, date: "יום 7", region: "קרקוב • סיור ברובע היהודי (קז'ימייז') ושופינג ב-Galeria Bronowice", icon: "✡️",
        hotelName: "The Loft Hotel Adults Only, Krakow",
        hotelUrl: "https://www.booking.com/hotel/pl/the-loft-adults-only.he.html",
        spots: [
            { time: "09:30 - 13:00", name: "🕍 סיור עומק ברובע היהודי (Kazimierz)", desc: "הליכה קצרה ופסטורלית מ-The Loft Hotel (כ-5-7 דקות) ללב הרובע היהודי. ביקור ברחוב שרוקה (Szeroka), בתי הכנסת ההיסטוריים (הישן, רמ"א, טמפל), חצר צילומי 'רשימת שינדלר', וטעמי זאפייקנקה בכיכר נובי.", map: "Szeroka 24 Krakow", waze: "Szeroka 24 Krakow" },
            { time: "13:30 - 18:00", name: "🛍️ קניות ושופינג בקניון Galeria Bronowice", desc: "נסיעה קצרה במונית/Uber או בחשמלית לקניון המודרני והמרווח Galeria Bronowice בצפון-מערב העיר (רחוב Stawowa 61). קניון שקט עם מגוון רשתות אופנה (Zara, H&M, Reserved, CCC, Auchan).", map: "Galeria Bronowice Krakow", waze: "Galeria Bronowice Krakow" },
            { time: "18:30 - 20:00", name: "🏨 חזרה למלון The Loft והתרעננות", desc: "חזרה ממתחם הקניות הישר למלון לפריקת השקיות והתרעננות לפני הערב.", map: "The Loft Hotel Krakow", waze: "The Loft Hotel Krakow" },
            { time: "20:00 - 22:30", name: "🎻 ערב ססגוני בקז'ימייז'", desc: "יציאה רגלית קצרה לרובע היהודי לארוחת ערב במסעדה עם מוזיקת כליזמרים חיה (כמו מסעדת Ariel / Klezmer Hois) או בר יין אינטימי.", map: "Plac Nowy Krakow", waze: "Plac Nowy Krakow" }
        ],
        notes: [
            "קרבה לרובע היהודי: המלון The Loft שוכן כ-500 מטרים בלבד מלב רובע קז'ימייז' - הכל נגיש ברגל.",
            "Galeria Bronowice: קניון מומלץ מאוד המציע חווית קניות רגועה וללא תורים ארוכים בקופות.",
            "קולינריה: מומלץ לא לפספס את מאפה הזאפייקנקה המסורתי במבנה העגול במרכז Plac Nowy."
        ]
    },
    {
        day: 8, date: "יום 8", region: "קרקוב • נהר הויסלה, Galeria Krakowska וטיסה חזרה", icon: "✈️",
        hotelName: "טיסה חזרה לישראל",
        hotelUrl: "",
        spots: [
            { time: "09:30 - 12:00", name: "🐉 צ'ק-אאוט מ-The Loft Hotel וטיול פרידה על הויסלה", desc: "צ'ק-אאוט מהמלון ושמירת המזוודות בקבלה. הליכה פסטורלית לאורך גדות נהר הויסלה (Wisła) וצפייה בפסל הדרקון היורק אש (Smok Wawelski) מתחת לגבעת ואוול.", map: "Smok Wawelski Krakow", waze: "Smok Wawelski Krakow" },
            { time: "12:30 - 16:30", name: "🛍️ השלמות קניות בגלריה קרקובקה (Galeria Krakowska)", desc: "הליכה/נסיעה קצרה לקניון המרכזי הצמוד לתחנה המרכזית (רחוב Pawia 5). זמן מצוין לקניית מזכרות אחרונות, מתנות, שוקולדים, וארוחת צהריים.", map: "Galeria Krakowska", waze: "Galeria Krakowska" },
            { time: "17:00 - 18:00", name: "🚆 איסוף מזוודות ונסיעה לשדה התעופה", desc: "איסוף הציוד מהמלון והגעה לתחנה המרכזית (Kraków Główny): הליכה רגלית קלה של כ-12-15 דקות (1.1 ק"מ) או חשמלית/Uber. עלייה לרכבת המהירה לשדה התעופה (17 דקות נסיעה).", map: "Krakow Glowny", waze: "Krakow Glowny" },
            { time: "18:30 - 21:30", name: "✈️ שדה התעופה וטיסה חזרה לישראל", desc: "הגעה לשדה התעופה קראקוב-בליצה (KRK), צ'ק-אין לטיסה, החזר מס (Tax Free במידת הצורך) וטיסה חזרה ארצה.", map: "Krakow Airport", waze: "Krakow Airport" }
        ],
        notes: [
            "כרטיסי אשראי: ניתן לשלם ב-100% מהמקומות בכרטיס אשראי בינלאומי או ב-Apple Pay / Google Pay.",
            "רכבת לשדה התעופה: יוצאת מדי 30 דקות מתחנת Kraków Główny ומגיעה לטרמינל ב-17 דקות בלבד (עלות כ-17 PLN).",
            "החזר מס (Tax Free): ברכישות מעל 200 PLN, בקשו טופס Tax Free והחתימו אותו במכס בשדה התעופה."
        ]
    }
];

// Service Worker Registration
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

/**
 * לוגיקת זיהוי יום אוטומטית לחלוטין מתוך שעון המכשיר:
 * ללא שום שדות קלט / אינפוט מהמשתמש.
 */
function getAutoDayFromDevice() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 1-12
    const date = now.getDate(); // 1-31

    // במידה והגדרתם תאריך טיול ספציפי ב-localStorage (אם תרצו בעתיד)
    // ברירת המחדל תמיד בודקת את תאריך המכשיר:
    // במידה והתאריך היום איננו בטווח ימי הטיול המוגדרים -> חוזר ליום 1
    const tripStartStr = localStorage.getItem('poland_trip_start_date');
    if (tripStartStr) {
        const parts = tripStartStr.split('-');
        if (parts.length === 3) {
            const start = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
            const current = new Date(year, month - 1, date);
            const end = new Date(start);
            end.setDate(start.getDate() + 7); // 8 ימים

            if (current >= start && current <= end) {
                const diffDays = Math.floor((current - start) / (1000 * 60 * 60 * 24)) + 1;
                return { day: diffDays, statusMsg: `📅 תאריך המכשיר: ${date}/${month}/${year} (יום ${diffDays} לטיול)` };
            }
        }
    }

    // אם התאריך לפני/אחרי או לא הוגדר טווח - האפליקציה נפתחת ישירות ביום 1
    const formattedDate = `${String(date).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;
    return { 
        day: 1, 
        statusMsg: `📅 תאריך המכשיר: ${formattedDate} (נפתח ביום 1)`
    };
}

function renderApp() {
    updateOnlineStatus();
    renderHotel();
    renderNav();
    renderSpots();
}

function renderHotel() {
    const hotelDiv = document.getElementById('hotelCard');
    const currentDay = polandTrip.find(d => d.day === activeDay);
    if (hotelDiv && currentDay) {
        if (currentDay.hotelUrl) {
            hotelDiv.innerHTML = `🏨 <strong style="color: #0f172a;">בסיס לינה:</strong> <a href="${currentDay.hotelUrl}" target="_blank" rel="noopener" style="color: #dc143c; text-decoration: underline; font-weight: 600;">${currentDay.hotelName}</a>`;
        } else {
            hotelDiv.innerHTML = `🏨 <strong style="color: #0f172a;">בסיס לינה:</strong> ${currentDay.hotelName}`;
        }
    }
}

function renderNav() {
    const nav = document.getElementById('daysNav');
    if (!nav) return;
    nav.innerHTML = polandTrip.map(d => `
        <button class="day-tab ${d.day === activeDay ? 'active' : ''}" onclick="switchDay(${d.day})">
            ${d.icon} יום ${d.day}
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
    const currentDay = polandTrip.find(d => d.day === activeDay);
    if (!currentDay) return;
    
    let html = `
        <h2 style="margin: 0 0 1.25rem 0; font-size: 1.25rem; font-weight: 700; color: #0f172a; border-right: 4px solid #dc143c; padding-right: 0.5rem;">${currentDay.icon} יום ${currentDay.day} - ${currentDay.region}</h2>
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

    if (currentDay.notes && currentDay.notes.length > 0) {
        html += `
            <div class="notes-card">
                <h3>📌 דגשים חשובים ליום זה</h3>
                <ul>
                    ${currentDay.notes.map(n => `<li>${n}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    list.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    const result = getAutoDayFromDevice();
    activeDay = result.day;
    
    const statusDiv = document.getElementById('statusDevice');
    if (statusDiv) {
        statusDiv.innerHTML = `<span>${result.statusMsg}</span> <span>📱 אוטומטי</span>`;
    }

    renderApp();
});
