const itinerary = [
  {
    day: 1,
    title: "יום 1: נחיתה • פארק לאומי אויצוב • קניות בקרקוב • נסיעה לזאב",
    timeline: [
      { time: "09:00 - 10:30", title: "נחיתה והשכרת רכב", desc: "נחיתה בשדה התעופה (קרקוב/קטוביץ'). סיום סידורי דרכונים, איסוף המזודות וקבלת הרכב." },
      { time: "10:30 - 14:30", title: "טיול בפארק הלאומי אויצוב (Ojców)", desc: "סיור בטבע: חניה במרכז אויצוב, הליכה לשער קרקוב ועמק פרונדניק, ונסיעה למצבת הרקולס וטירת פיסקובה סקאלה." },
      { time: "14:30 - 17:00", title: "קניות ב-Factory Kraków", desc: "נסיעה למתחם האאוטלט Factory Kraków לקניות והתרעננות." },
      { time: "17:00 - 18:30", title: "נסיעה והגעה למלון בזאב", desc: "נסיעה לאזור ההררי של זאב. הגעה ל-Hotel Redyk Ski Relax, צ'ק-אין ומנוחה." }
    ],
    places: [
      { name: "פארק אויצוב - נקודה 1 (מרכז)", note: "חניה מוסדרת בתשלום בכניסה למסלול", link: "https://maps.google.com/?q=Parking+Pod+Zamkiem,+Ojcow" },
      { name: "פארק אויצוב - נקודה 2 (טירה)", note: "חניה סמוכה למצבת הרקולס ולטירה", link: "https://maps.google.com/?q=Pieskowa+Skala+Castle+Parking" },
      { name: "Factory Krakow מתחם הקניות", note: "Prof. A. Rożańskiego 32, Modlniczka - חניה חופשית בשפע", link: "https://maps.google.com/?q=Prof.+A.+Rozanskiego+32,+Modlniczka" },
      { name: "מלון Redyk Ski&Relax", note: "Potoczki 20, 34-521 Ząb", link: "https://maps.google.com/?q=Potoczki+20,+34-521+Zab" }
    ],
    notes: [
      "איסוף רכב: מומלץ לבדוק תקינות הרכב, שריטות וציוד חובה לפני היציאה.",
      "ציוד לפארק אויצוב: מומלץ להצטייד בנעלי הליכה נוחות ומים.",
      "תשלום חניה: התשלום מתבצע במדחנים או באפליקציות מקומיות."
    ]
  },
  {
    day: 2,
    title: "יום 2: זקופנה • אגם מורסקו אוקו, צ'ארני סטאב ומרחצאות חוחולובסקה",
    timeline: [
      { time: "06:45 - 07:45", title: "יציאה מוקדמת ונסיעה לחניון", desc: "יציאה ממלון Redyk ונסיעה לחניון Palenica Białczańska (כ-45 דק')." },
      { time: "08:00 - 11:00", title: "מסלול הליכה לאגם מורסקו אוקו", desc: "הליכה רגלית פסטורלית של כ-8 ק"מ (כ-2.5 שעות) בתוך שמורת הטבע עד לאגם האלפיני." },
      { time: "11:00 - 13:00", title: "טיפוס לאגם העליון - צ'ארני סטאב", desc: "הקפת חלק מפורט של מורסקו אוקו וטיפוס תלול (40-50 דק') לאגם השחור." },
      { time: "13:00 - 15:30", title: "ירידה חזרה לחניון פאלניצה", desc: "הליכה חזרה מהאגם לכיוון החניון והפסקה קלה לרענון." },
      { time: "15:30 - 16:15", title: "נסיעה למרחצאות חוחולובסקה", desc: "איסוף הרכב ונסיעה פסטורלית (כ-45 דק') ל-Chochołowskie Termy." },
      { time: "16:30 - 20:00", title: "בילוי במרחצאות הטרמיים", desc: "בילוי במרחצאות החמים, בריכות ג'קוזי, בריכות פתוחות וסאונות." },
      { time: "20:00 - 20:25", title: "חזרה למלון בזאב", desc: "נסיעה קצרה (20-25 דק') חזרה למלון Redyk." }
    ],
    places: [
      { name: "נקודת מוצא - Hotel Redyk", note: "Potoczki 20, 34-521 Ząb", link: "https://maps.google.com/?q=Potoczki+20,+34-521+Zab" },
      { name: "חניון מורסקו אוקו", note: "Palenica Białczańska - חובה הזמנה מראש!", link: "https://maps.google.com/?q=Palenica+Bialczanska,+Jurgow" },
      { name: "מרחצאות חוחולובסקה", note: "Chochołów 400, 34-471 Chochołów", link: "https://maps.google.com/?q=Chocholow+400,+Chocholow" }
    ],
    notes: [
      "כרטיסי חנייה ושמורה: חובה לרכוש כרטיס חנייה ב-Palenica Białczańska מראש באתר TPN!",
      "ציוד נדרש: נעלי הליכה נוחות, קרם הגנה, מים, מגבות וכפכפים למרחצאות.",
      "כרטיסי מרחצאות: מומלץ לרכוש מראש לעקיפת התורים."
    ]
  },
  {
    day: 3,
    title: "יום 3: זקופנה • הר קספרובי וורך ומדרחוב קרופובקי",
    timeline: [
      { time: "10:00 - 10:30", title: "נסיעה וחנייה ברונדו", desc: "נסיעה מהמלון לחניון מסודר סביב Rondo Jan Pawła II בזקופנה." },
      { time: "10:30 - 10:45", title: "מונית שירות לתחנת הרכבל", desc: "עלייה על Busik בכיכר הרונדו לנסיעה קצרה לקוז'ניצ'ה (Kuźnice)." },
      { time: "11:00 - 15:30", title: "הר קספרובי וורך וירידה רגלית", desc: "עלייה ברכבל לתצפית בפסגה (1,987 מ'), ירידה רגלית לעמק Hala Gąsienicowa, עצירה בבקתת Murowaniec והמשך ירידה לקוז'ניצ'ה." },
      { time: "15:30 - 16:00", title: "חזרה לרכב ונסיעה למרכז העיר", desc: "חזרה במיניבוס לרונדו, איסוף הרכב ונסיעה לחניון ליד מדרחוב קרופובקי." },
      { time: "16:00 - 19:00", title: "טיול במדרחוב קרופובקי", desc: "סיור רגלי במדרחוב התוסס, חנויות אופנה, מזכרות ודוכני גבינה מעושנת (Oscypek)." },
      { time: "19:00+", title: "חזרה למלון", desc: "חזרה למלון Hotel Redyk להתארגנות ומנוחה." }
    ],
    places: [
      { name: "חניון רונדו (קוז'ניצ'ה)", note: "Karłowicza, 34-500 Zakopane - מעבר למיניבוס", link: "https://maps.google.com/?q=Karlowicza,+34-500+Zakopane" },
      { name: "תחנת רכבל Kasprowy", note: "Kuźnice 14, 34-500 Zakopane (גישה בשאטל)", link: "https://maps.google.com/?q=Kuznice+14,+34-500+Zakopane" },
      { name: "חניון מרכז קרופובקי", note: "Mariusz Zaruskiego 4, 34-500 Zakopane", link: "https://maps.google.com/?q=Mariusz+Zaruskiego+4,+34-500+Zakopane" }
    ],
    notes: [
      "רכבל לקספרובי: חובה לרכוש כרטיסים מראש באתר PKL לשעה מוגדרת.",
      "ציוד לירידה הרגלית: מומלץ להצטייד בנעלי הליכה ומקלות הליכה.",
      "מזומן: הנסיעה במוניות השירות עולה כ-5-10 PLN לאדם (להחזיק מזומן)."
    ]
  },
  {
    day: 4,
    title: "יום 4: אושוויץ-בירקנאו, הגעה לקרקוב והחזרת הרכב",
    timeline: [
      { time: "07:45 - 10:15", title: "נסיעה למוזיאון אושוויץ", desc: "יציאה מוקדמת מזאב ונסיעה צפונה (כ-2.5 שעות) לאושוונצ'ים." },
      { time: "10:15 - 10:30", title: "הגעה ובידוק ביטחוני", desc: "חנייה במגרש של אושוויץ 1, מעבר בידוק קפדני והצגת דרכונים." },
      { time: "10:30 - 14:00", title: "סיור מודרך באושוויץ 1 ובבירקנאו", desc: "סיור בבלוקים באושוויץ 1, מעבר בשאטל למחנה בירקנאו וסיור ברציף ובצריפים." },
      { time: "14:15 - 15:30", title: "נסיעה מאושוויץ לקרקוב", desc: "איסוף הרכב ונסיעה בכביש A4 האגרה לקרקוב." },
      { time: "15:30 - 16:30", title: "צ'ק-אין במלון The Loft", desc: "הגעה ל-The Loft Hotel Adults Only Krakow, פריקת מזודות והתארגנות." },
      { time: "16:30 - 17:30", title: "החזרת הרכב השכור", desc: "נסיעה לנקודת החזרת הרכב (תחנה מרכזית/שדה תעופה) וחזרה ב-Uber." },
      { time: "18:00+", title: "סיור ערב וארוחת ערב", desc: "סיור רגלי ברובע היהודי (Kazimierz) או בכיכר השוק (Rynek Glowny)." }
    ],
    places: [
      { name: "חניון מוזיאון אושוויץ 1", note: "Leszczyńskiej 16, Oświęcim", link: "https://maps.google.com/?q=Leszczynskiej+16,+Oswiecim" },
      { name: "The Loft Hotel", note: "Ul. Dietla 113, 31-031 Kraków", link: "https://maps.google.com/?q=Ul.+Dietla+113,+Krakow" },
      { name: "כיכר השוק / העיר העתיקה", note: "Rynek Główny 1, Kraków", link: "https://maps.google.com/?q=Rynek+Glowny+1,+Krakow" }
    ],
    notes: [
      "דרכונים: חובה להביא דרכון מקורי לכל משתתף לסיור באושוויץ!",
      "תיקים: מותר להכניס תיקים קטנים בלבד שלא יעלו על 30x20x10 ס"מ.",
      "החזרת רכב: מומלץ לצלם את מנגנון הדלק ומצב הרכב בעת ההחזרה."
    ]
  },
  {
    day: 5,
    title: "יום 5: קרקוב • העיר העתיקה, המוזיאון התת-קרקעי ושופינג ב-Bonarka",
    timeline: [
      { time: "09:30 - 12:30", title: "סיור מודרך בעברית (ניסן צור)", desc: "מפגש בכיכר השוק, סיור בעיר העתיקה, ארמון הוואוול, וברובע היהודי." },
      { time: "12:30 - 14:00", title: "ארוחת צהריים", desc: "הפסקה לארוחת צהריים באחת המסעדות בכיכר או ברחוב Florianska." },
      { time: "14:30 - 16:30", title: "המוזיאון התת-קרקעי (Rynek Podziemny)", desc: "סיור במוזיאון האינטראקטיבי מתחת לכיכר השוק (קרקוב בימי הביניים)." },
      { time: "16:30 - 18:00", title: "פארק פלאנטי ושער הברביקן", desc: "הליכה בטבעת הירוקה, ביקור בשער הברביקן ובשער פלוריאן." },
      { time: "18:00 - 21:00", title: "שופינג בקניון Bonarka City Center", desc: "הגעה ב-Uber/תחבורה ציבורית לקניון Bonarka (כולל סניף Primark ענק)." },
      { time: "21:00+", title: "חזרה למלון", desc: "חזרה במונית למלון The Loft." }
    ],
    places: [
      { name: "נקודת מפגש - כיכר השוק", note: "Rynek Główny 1, Kraków", link: "https://maps.google.com/?q=Rynek+Glowny+1,+Krakow" },
      { name: "המוזיאון התת-קרקעי", note: "Rynek Główny 1 (Sukiennice), Kraków", link: "https://maps.google.com/?q=Rynek+Glowny+1,+Krakow" },
      { name: "Bonarka City Center", note: "Kamieńskiego 11, Kraków", link: "https://maps.google.com/?q=Kamienskiego+11,+Krakow" }
    ],
    notes: [
      "סיור מודרך: מומלץ לתאם מראש מועד מדויק עם ניסן צור.",
      "המוזיאון התת-קרקעי: הכניסה מוגבלת בזמן - חובה להגיע בזמן המוזמן.",
      "Bonarka: פתוח מ-10:00 עד 21:00."
    ]
  },
  {
    day: 6,
    title: "יום 6: קרקוב • מפעל שינדלר, כיכר הכיסאות והופעה של Rod Stewart",
    timeline: [
      { time: "09:00 - 11:30", title: "סיור במפעל שינדלר", desc: "ביקור במוזיאון המפורסם בתערוכה 'קרקוב תחת הכיבוש הנאצי' ובמשרד שינדלר." },
      { time: "11:30 - 13:30", title: "גטו פודגורז'ה וכיכר הכיסאות", desc: "סיור בכיכר גיבורי הגטו (אנדרטת הכיסאות), בית מרקחת 'תחת הנשר' וגשר קלאטרה." },
      { time: "13:30 - 17:00", title: "ארוחת צהריים ומנוחה", desc: "חזרה למלון The Loft למנוחה והתארגנות לקראת ערב ההופעה." },
      { time: "17:30 - 22:30", title: "מופע Rod Stewart ב-TAURON Arena", desc: "יציאה לארנה (פתיחת שערים 18:00, תחילת מופע 19:30). חזרה קלה בחשמלית." }
    ],
    places: [
      { name: "מפעל שינדלר", note: "Lipowa 4, 30-702 Kraków", link: "https://maps.google.com/?q=Lipowa+4,+Krakow" },
      { name: "כיכר הכיסאות (גטו פודגורז'ה)", note: "Plac Bohaterów Getta, Kraków", link: "https://maps.google.com/?q=Plac+Bohaterow+Getta,+Krakow" },
      { name: "TAURON Arena Kraków", note: "Stanisława Lema 7, Kraków (גישה בחשמלית 1/22)", link: "https://maps.google.com/?q=Stanislawa+Lema+7,+Krakow" }
    ],
    notes: [
      "הגעה להופעה: מומלץ לקחת חשמלית קו 1 או 22 מתחנת Hala Targowa (כ-10 דק' נסיעה).",
      "Uber/מונית: מומלץ להזמין שעה וחצי מראש בשל העומסים.",
      "בסיום המופע: החשמליות מתוגברות ונוסעות ישירות בחזרה."
    ]
  },
  {
    day: 7,
    title: "יום 7: קרקוב • סיור ברובע היהודי (קז'ימייז') ושופינג ב-Galeria Bronowice",
    timeline: [
      { time: "09:30 - 13:00", title: "סיור עומק ברובע היהודי", desc: "ביקור ברחוב שרוקה, בתי הכנסת העתיקים, חצר 'רשימת שינדלר', וטעימת זאפייקנקה בכיכר נובי." },
      { time: "13:30 - 18:00", title: "שופינג ב-Galeria Bronowice", desc: "נסיעה במונית/חשמלית לקניון המודרני בצפון-מערב העיר (חוויית קניות רגועה)." },
      { time: "18:30 - 20:00", title: "חזרה למלון והתרעננות", desc: "פורקים שקיות ומתרעננים במלון The Loft." },
      { time: "20:00 - 22:30", title: "ערב ססגוני בקז'ימייז'", desc: "ארוחת ערב במסעדה עם מוזיקת כליזמרים חיה (כמו Ariel / Klezmer Hois)." }
    ],
    places: [
      { name: "מרכז הרובע היהודי", note: "Szeroka 24, 31-053 Kraków (5 דק' הליכה מהמלון)", link: "https://maps.google.com/?q=Szeroka+24,+Krakow" },
      { name: "Galeria Bronowice", note: "Stawowa 61, 31-346 Kraków", link: "https://maps.google.com/?q=Stawowa+61,+Krakow" }
    ],
    notes: [
      "נגישות: המלון במרחק 500 מטרים בלבד מלב רובע קז'ימייז'.",
      "קניות: Galeria Bronowice מציע חוויה שקטה ללא תורים.",
      "אוכל: מומלץ לנסות זאפייקנקה במבנה העגול ב-Plac Nowy."
    ]
  },
  {
    day: 8,
    title: "יום 8: קרקוב • נהר הויסלה, Galeria Krakowska וטיסה חזרה",
    timeline: [
      { time: "09:30 - 12:00", title: "צ'ק-אאוט וטיול על הויסלה", desc: "שמירת מזודות בקבלה, הליכה לאורך נהר הויסלה ופסל הדרקון (Smok Wawelski)." },
      { time: "12:30 - 16:30", title: "השלמות קניות בגלריה קרקובקה", desc: "קניות אחרונות במתחם הצמוד לתחנה המרכזית וארוחת צהריים." },
      { time: "17:00 - 18:00", title: "איסוף מזודות ונסיעה לשדה", desc: "איסוף הציוד, הליכה/חשמלית לתחנה המרכזית Kraków Główny ורכבת לשדה (17 דק')." },
      { time: "18:30 - 21:30", title: "שדה התעופה וטיסה חזרה", desc: "הגעה לשדה (KRK), צ'ק-אין, Tax Free וטיסה חזרה לישראל." }
    ],
    places: [
      { name: "קניון Galeria Krakowska", note: "Pawia 5, 31-154 Kraków", link: "https://maps.google.com/?q=Pawia+5,+Krakow" },
      { name: "תחנת רכבת מרכזית Kraków Główny", note: "רכבת ישירה לשדה התעופה (17 דקות)", link: "https://maps.google.com/?q=Krakow+Glowny+Station" },
      { name: "שדה התעופה קרקוב (KRK)", note: "Kapt. M. Medweckiego 1, Balice", link: "https://maps.google.com/?q=Kapt.+M.+Medweckiego+1,+Balice" }
    ],
    notes: [
      "תשלום: ניתן לשלם 100% באשראי/Apple Pay/Google Pay.",
      "רכבת לשדה: יוצאת כל 30 דקות (עלות ~17 PLN).",
      "Tax Free: ברכישות מעל 200 PLN לבקש טופס ולהחתימש במכס."
    ]
  }
];

function getInitialDay() {
  const startDateStr = localStorage.getItem('trip_start_date');
  if (!startDateStr) return 1;

  const today = new Date();
  const current = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const parts = startDateStr.split('-');
  const start = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
  const end = new Date(start);
  end.setDate(start.getDate() + 7);

  if (current >= start && current <= end) {
    const diffTime = current - start;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays;
  }

  return 1;
}

function renderNav(activeDay) {
  const nav = document.getElementById('day-nav');
  nav.innerHTML = '';
  itinerary.forEach(item => {
    const btn = document.createElement('button');
    btn.className = `day-btn ${item.day === activeDay ? 'active' : ''}`;
    btn.textContent = `יום ${item.day}`;
    btn.onclick = () => switchDay(item.day);
    nav.appendChild(btn);
  });
}

function renderDay(dayNum) {
  const data = itinerary.find(i => i.day === dayNum);
  const container = document.getElementById('content-area');

  let html = `<h2 class="day-title">${data.title}</h2>`;

  html += `<div class="section"><h3>לוח זמנים מפורט</h3>`;
  data.timeline.forEach(t => {
    html += `
      <div class="timeline-item">
        <div class="time">${t.time}</div>
        <div class="details">
          <h4>${t.title}</h4>
          <p>${t.desc}</p>
        </div>
      </div>
    `;
  });
  html += `</div>`;

  if (data.places && data.places.length > 0) {
    html += `<div class="section"><h3>נקודות ומיקומים ב-GPS</h3>`;
    data.places.forEach(p => {
      html += `
        <div class="place-card">
          <h4>${p.name}</h4>
          <p>${p.note}</p>
          <a href="${p.link}" target="_blank" class="btn-map">פתח בגוגל מפות 📍</a>
        </div>
      `;
    });
    html += `</div>`;
  }

  if (data.notes && data.notes.length > 0) {
    html += `<div class="section important-notes"><h3>דגשים חשובים ליום זה</h3><ul>`;
    data.notes.forEach(n => {
      html += `<li>${n}</li>`;
    });
    html += `</ul></div>`;
  }

  container.innerHTML = html;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchDay(dayNum) {
  renderNav(dayNum);
  renderDay(dayNum);
}

document.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.getElementById('trip-date');
  const storedDate = localStorage.getItem('trip_start_date');
  if (storedDate && dateInput) {
    dateInput.value = storedDate;
  }

  const initialDay = getInitialDay();
  renderNav(initialDay);
  renderDay(initialDay);

  if (dateInput) {
    dateInput.addEventListener('change', (e) => {
      localStorage.setItem('trip_start_date', e.target.value);
      const day = getInitialDay();
      switchDay(day);
    });
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(err => console.log('SW reg error:', err));
  }
});
