// بيانات درجات المخالفات السبع والبنود المعتمدة
const DEGREES_DATA = [
  {
    num: 1,
    title: "بنود الدرجة الأولى",
    subtitle: "إنذارات خفيفة - غرامة من 100 إلى 500 ألف حسب الرتبة",
    badgeClass: "bg-emerald-950 text-amber-300 border-amber-400/30",
    items: [
      ["1-1", "استيقاف مروري أو جنائي خاطئ"],
      ["1-2", "مخالفة قوانين نقاط التفتيش"],
      ["1-3", "إبقاء الحجز في المركبة وبمباشرة جهة أخرى"],
      ["1-4", "إهانة عسكري أو مواطن"],
      ["1-5", "عدم تسليم المضبوطات"],
      ["1-6", "مخالفة سياسة الخدمة"],
      ["1-7", "عدم الالتزام بالمسمى الوظيفي أو عدم التغيير"],
      ["1-8", "مخالفة قوانين السجون وتسجيل الخروج"],
      ["1-9", "مباشرة الميدان برتبة شخصية"],
      ["1-10", "مخالفة قوانين المشاركة العسكرية"],
      ["1-11", "سوء استخدام المركبة العسكرية"],
      ["1-12", "عدم تسجيل الدخول في الخدمة العسكرية"],
      ["1-13", "القيادة غير النظامية"],
      ["1-14", "تعطيل مركبة حكومية"]
    ]
  },
  {
    num: 2,
    title: "بنود الدرجة الثانية",
    subtitle: "إنذار وظيفي - غرامة من 150 إلى 500 ألف حسب الرتبة",
    badgeClass: "bg-emerald-950 text-amber-300 border-amber-400/35",
    items: [
      ["2-1", "دخول موجات غير معتمدة"],
      ["2-2", "عدم التجاوب في الموجة"],
      ["2-3", "مخالفة الالتزام بالعدد المعتمد"],
      ["2-4", "سجن شخص (٥٠ شهر) بدون إذن ضابط"],
      ["2-5", "عدم الالتزام بالمظهر العسكري (الشعر، الوشوم، اللبس)"],
      ["2-6", "عدم الالتزام بالنظافة العسكرية"],
      ["2-7", "تكرار مخالفات بسيطة بعد التنبيه"],
      ["2-8", "التمثل في شات (رسائل حرس الحدود)"],
      ["2-9", "النزول الميداني بدون تصنيف"],
      ["2-10", "المجادلة أمام القادة (تقديرية)"],
      ["2-11", "عدم الالتزام ببروتوكولات الراديو"],
      ["2-12", "استعمال مخالفات غير مستحقة"],
      ["2-13", "البقاء في المركز فترة دون مبرر (سبب)"],
      ["2-14", "مباشرة العمليات الميدانية دون إذن (إلا في حالة مواجهة)"],
      ["2-15", "مخالفة قوانين السجون (رسائل حرس الحدود)"],
      ["2-16", "غموض أكثر من 10 دقائق"],
      ["2-17", "عدم الالتزام بصيغة التقارير"],
      ["2-18", "عدم أخذ الدورات اللازمة"]
    ]
  },
  {
    num: 3,
    title: "بنود الدرجة الثالثة",
    subtitle: "توبيخ وظيفي - غرامة من 300 إلى 700 ألف حسب الرتبة",
    badgeClass: "bg-emerald-950 text-amber-300 border-amber-400/40",
    items: [
      ["3-1", "عدم التقيد بقواعد المطاردات"],
      ["3-2", "مخالفة قوانين الاعتقال والتعامل مع المتهمين"],
      ["3-3", "إهانة عسكري أو مواطن"],
      ["3-4", "مخالفة قوانين الكلية العسكرية"],
      ["3-5", "مخالفة قوانين التوجه للحالات"],
      ["3-6", "مخالفة قوانين الحواجز والحدود"],
      ["3-7", "دخول موجة بدون إذن"],
      ["3-8", "الهروب من استلام مهام العمليات"],
      ["3-9", "مخالفة قوانين العمليات"],
      ["3-10", "التدخل في مهمات الوحدات الأخرى"],
      ["3-11", "تسجيل دخول مباشرة حالة ثم تسجيل خروج"],
      ["3-12", "إضافة مخالفات أو نقص في التحقيقات"],
      ["3-13", "إطلاق النار بشكل عشوائي"],
      ["3-14", "تحرير الرهائن بدون إذن أو بدون تحريرها"],
      ["3-15", "مخالفة قوانين القيادة العسكرية"],
      ["3-16", "كشف هوية البلاغ الجنائي"],
      ["3-17", "الانسحاب من موقع البلاغ دون إذن"],
      ["3-18", "عدم الالتزام بضوابط التفاوض"],
      ["3-19", "استخدام سلاح غير مصرح برتبة (يشمل إساءة المواطنين)"],
      ["3-20", "إسقاط عزل"],
      ["3-21", "عدم الالتزام بأوامر العمليات"],
      ["3-22", "مخالفة قوانين مدة السجن"],
      ["3-23", "مخالفة قوانين المصادرات بشكل عام"],
      ["3-24", "الكلاشن أثناء الإسقاط"]
    ]
  },
  {
    num: 4,
    title: "بنود الدرجة الرابعة",
    subtitle: "عقوبات مشددة - غرامة من 500 ألف إلى مليون + احتمال فصل",
    badgeClass: "bg-amber-950/70 text-amber-300 border-amber-400/50",
    items: [
      ["4-1", "مخالفة قوانين (نداء الاستغاثة، استنفار أمني)"],
      ["4-2", "التقصير في النداء الطارئ والميدان"],
      ["4-3", "عدم الالتزام بالمسار العسكري المحدد بالتكتيك"],
      ["4-4", "رسملة شكوى أو بلاغات بطريقة خاطئة"],
      ["4-5", "مباشرة الميدان دون الوجود بالموجة"],
      ["4-6", "إهمال الميدان"],
      ["4-7", "عدم احترام أو مضايقة (رتبة تقديرية)"],
      ["4-8", "اسم غير مطابق (الشخصية أو المدنية)"],
      ["4-9", "استخدام أوامر F8 بشكل خاطئ"]
    ]
  },
  {
    num: 5,
    title: "بنود الدرجة الخامسة",
    subtitle: "عسكرية مباشرة - إمكانية الفصل حسب التقدير",
    badgeClass: "bg-amber-950/80 text-amber-200 border-amber-400/55",
    items: [
      ["5-1", "سجن عسكري (بقصد الاستهتار)"],
      ["5-2", "التلاعب على المسؤولين (تقديرية)"],
      ["5-3", "مخالفة قوانين عدم الإفصاح"],
      ["5-4", "محاولة تهريب مواطن"],
      ["5-5", "سوء التعامل مع الحالات أو التعدي على مواطن أو إساءة له (تقديرية)"],
      ["5-6", "عدم التقيد بالأنظمة الصحية"],
      ["5-7", "التوجه خارج الرتب العسكرية"],
      ["5-8", "الخروج من الميدان (تقديرية)"],
      ["5-9", "سجن عسكري بدون أوامر"],
      ["5-10", "التخريب الوظيفي (تقديرية)"],
      ["5-11", "عدم الجدية أثناء الدوام العسكري (تقديرية)"],
      ["5-12", "إساءة استخدام القطاعات الحكومية"],
      ["5-13", "عدم احترام تسلسل الرتب"],
      ["5-14", "التمرد العسكري"],
      ["5-15", "تهديد الأمن العسكري"],
      ["5-16", "التلاعب بالتقارير"],
      ["5-17", "الإساءة إلى الشرطة العسكرية بأي شكل"],
      ["5-18", "سوء استخدام السلاح (إطلاق نار عشوائي أو إيذاء)"]
    ]
  },
  {
    num: 6,
    title: "بنود الدرجة السادسة",
    subtitle: "فصل من الخدمة - لا تقبل الأعذار إلا بقرار قيادي",
    badgeClass: "bg-red-950/70 text-amber-200 border-amber-400/50",
    items: [
      ["6-1", "التمرد على زملائك بغاية الحقد سواء بسبب أو بدون سبب"],
      ["6-2", "عدم احترام الرتب العليا"],
      ["6-3", "الخروج عن حدود الدولة (الدسكورد)"],
      ["6-4", "خيانة الأمانة"],
      ["6-5", "غير لائق عسكري"],
      ["6-6", "التلاعب بعدد العهد"],
      ["6-7", "التخريب بوظيفة حرس الحدود ويجب أخذ إذن الحكم قبل الفصل"],
      ["6-8", "عدم تواجد لفترة طويلة تزيد عن 3 أسابيع"],
      ["6-9", "إثارة الجدل الفني"],
      ["6-10", "الفساد العسكري"],
      ["6-11", "نشر أسماء سيرفرات أخرى"],
      ["6-12", "تعديل المخالفات دون إذن"],
      ["6-13", "استخدام السلطة أو الوظيفة لمصلحة شخصية بغير وجه حق"]
    ]
  },
  {
    num: 7,
    title: "بنود الدرجة السابعة",
    subtitle: "فصل نهائي - رفع للقيادة العليا",
    badgeClass: "bg-red-950/85 text-amber-300 border-amber-400/60",
    items: [
      ["7-1", "مخالفة عدم احترام القيادة"],
      ["7-2", "عدم الانضباط لأوامر القيادة"],
      ["7-3", "التخريب بأشخاص أو إصابات"]
    ]
  }
];

// مصفوفة العقوبات للدرجات من 1 إلى 4 حسب الرتبة
const PENALTY_MATRICES = [
  {
    deg: 1,
    title: "الدرجة الأولى - إنذارات خفيفة",
    rows: [
      ["جندي", "إنذار شفهي + 100 ألف"],
      ["جندي أول", "إنذار شفهي + 100 ألف"],
      ["عريف / وكيل رقيب", "إنذار شفهي + 150 ألف"],
      ["رقيب / رقيب أول", "إنذار شفهي + 200 ألف"],
      ["رئيس رقباء", "إنذار شفهي + 300 ألف"],
      ["ملازم", "إنذار شفهي + 350 ألف"],
      ["ملازم أول", "إنذار شفهي + 400 ألف"],
      ["نقيب فما أعلى", "إنذار شفهي + 500 ألف"]
    ]
  },
  {
    deg: 2,
    title: "الدرجة الثانية - إنذار وظيفي",
    rows: [
      ["جندي", "إنذار وظيفي + 150 ألف"],
      ["جندي أول", "إنذار وظيفي + 150 ألف"],
      ["عريف / وكيل رقيب", "إنذار وظيفي + 300 ألف"],
      ["رقيب / رقيب أول", "إنذار وظيفي + 300 ألف"],
      ["رئيس رقباء", "إنذار وظيفي + 400 ألف"],
      ["ملازم", "إنذار وظيفي + 400 ألف"],
      ["ملازم أول", "إنذار وظيفي + 500 ألف"],
      ["نقيب فما أعلى", "إنذار وظيفي + 500 ألف"]
    ]
  },
  {
    deg: 3,
    title: "الدرجة الثالثة - توبيخ",
    rows: [
      ["جندي", "توبيخ + 300 ألف"],
      ["جندي أول", "توبيخ + 300 ألف"],
      ["عريف / وكيل رقيب", "توبيخ + 350 ألف"],
      ["رقيب / رقيب أول", "توبيخ + 400 ألف"],
      ["رئيس رقباء", "توبيخ + 500 ألف"],
      ["ملازم", "توبيخ + 500 ألف"],
      ["ملازم أول", "توبيخ + 600 ألف"],
      ["نقيب فما أعلى", "توبيخ + 700 ألف"]
    ]
  },
  {
    deg: 4,
    title: "الدرجة الرابعة - عقوبات مشددة",
    rows: [
      ["جندي", "توبيخ + 500 ألف"],
      ["جندي أول", "توبيخ + 500 ألف"],
      ["عريف / وكيل رقيب", "توبيخ + 700 ألف"],
      ["رقيب / رقيب أول", "توبيخ + 1 مليون"],
      ["رئيس رقباء", "توبيخ + 1 مليون"],
      ["ملازم", "توبيخ + 1 مليون"],
      ["ملازم أول", "توبيخ + 1 مليون + حرمان ترقية"],
      ["نقيب فما أعلى", "فصل من الخدمة (تقديري)"]
    ]
  }
];

// عقوبات الدرجات العليا (5 - 7)
const UPPER_DEGREES = [
  {
    icon: "⚫",
    title: "الدرجة الخامسة - عسكرية",
    desc: "عسكرية مباشرة + إمكانية الفصل (حسب التقدير)"
  },
  {
    icon: "⚠️",
    title: "الدرجة السادسة - فصل",
    desc: "فصل من الخدمة"
  },
  {
    icon: "⛔",
    title: "الدرجة السابعة - فصل نهائي",
    desc: "فصل نهائي + رفع للقيادة العليا"
  }
];

// الضوابط العامة المعتمدة
const GENERAL_RULES = [
  'تكرار المخالفة = <strong class="text-amber-300">مضاعفة العقوبة ×2</strong>',
  "في حال مخالفة غير مدرجة يتم التقدير حسب الأقرب لها",
  "جميع الغرامات تُسلَّم لمجلس القضاء العسكري",
  'عدم حضور الاستدعاء خلال <strong class="text-amber-300">24 ساعة</strong> = مضاعفة العقوبة',
  "القرارات النهائية بيد القيادة المختصة"
];

// مراجع عناصر الواجهة
const degreesContainer = document.getElementById("degreesContainer");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const searchMeta = document.getElementById("searchMeta");
const emptyState = document.getElementById("emptyState");
const resetEmptyBtn = document.getElementById("resetEmptyBtn");
const totalLawsCount = document.getElementById("totalLawsCount");
const toastNotice = document.getElementById("toastNotice");
const toastText = document.getElementById("toastText");
let toastTimer = null;

// إظهار تنبيه النسخ المؤقت
function showToast(msg) {
  if (!toastNotice || !toastText) return;
  toastText.textContent = msg;
  toastNotice.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastNotice.classList.add("hidden");
  }, 2200);
}

// نسخ نص بأمان متوافق مع مختلف البيئات
function copyTextSafe(text) {
  try {
    const temp = document.createElement("textarea");
    temp.value = text;
    temp.setAttribute("readonly", "");
    temp.style.position = "absolute";
    temp.style.left = "-9999px";
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
  } catch (err) {
    console.error("تعذر نسخ النص:", err);
  }
}

// حماية النصوص من محارف HTML الخاصة
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

// حماية السلاسل النصية داخل تعبير منتظم
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// تظليل نتائج البحث داخل النصوص
function highlightText(text, query) {
  const safe = escapeHtml(text);
  if (!query) return safe;
  const regex = new RegExp(`(${escapeRegex(escapeHtml(query))})`, "gi");
  return safe.replace(regex, '<mark class="hit">$1</mark>');
}

// بناء وعرض أقسام المخالفات وفق نص البحث
function renderDegrees(query = "") {
  const trimmed = query.trim();
  const lower = trimmed.toLowerCase();
  let totalMatches = 0;
  let html = "";

  DEGREES_DATA.forEach((deg) => {
    const filteredItems = trimmed
      ? deg.items.filter(
          ([code, desc]) =>
            code.toLowerCase().includes(lower) || desc.toLowerCase().includes(lower)
        )
      : deg.items;

    if (!filteredItems.length) return;
    totalMatches += filteredItems.length;

    const itemsHtml = filteredItems
      .map(
        ([code, desc]) => `
        <div
          data-copy="${escapeHtml(`${code} - ${desc}`)}"
          title="اضغط لنسخ البند"
          class="law-item-card cursor-pointer flex items-start justify-between gap-3 p-3.5 rounded-xl bg-[#0f2318]/90 border border-amber-400/15 hover:border-amber-400/45 transition"
        >
          <div class="flex items-start gap-3 min-w-0">
            <span class="shrink-0 px-2.5 py-1 rounded-lg text-xs font-extrabold bg-emerald-950 text-amber-300 border border-amber-400/30">
              ${highlightText(code, trimmed)}
            </span>
            <span class="text-sm leading-relaxed text-emerald-50/95">
              ${highlightText(desc, trimmed)}
            </span>
          </div>
          <span class="copy-badge opacity-0 translate-y-0.5 transition shrink-0 text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-400/15 text-amber-300 border border-amber-400/30">
            نسخ
          </span>
        </div>
      `
      )
      .join("");

    html += `
      <section id="deg-${deg.num}" class="surface-card rounded-2xl p-5 sm:p-6 scroll-mt-24">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-amber-400/15">
          <div class="flex items-center gap-3.5">
            <div class="w-11 h-11 rounded-xl gold-glow-btn flex items-center justify-center text-lg font-black shrink-0">
              ${deg.num}
            </div>
            <div>
              <h2 class="text-xl sm:text-2xl font-extrabold text-white">${deg.title}</h2>
              <p class="text-xs sm:text-sm text-emerald-100/75 mt-0.5">${deg.subtitle}</p>
            </div>
          </div>
          <span class="self-start sm:self-center px-3 py-1 rounded-full text-xs font-bold border ${deg.badgeClass}">
            ${filteredItems.length} بند
          </span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          ${itemsHtml}
        </div>
      </section>
    `;
  });

  degreesContainer.innerHTML = html;
  emptyState.classList.toggle("hidden", totalMatches > 0);
  clearSearchBtn.classList.toggle("hidden", !trimmed);

  if (trimmed) {
    searchMeta.textContent = `نتائج البحث عن "${trimmed}": ${totalMatches} بند`;
  } else {
    searchMeta.textContent = "";
  }
}

// عرض مصفوفات العقوبات والدرجات العليا والضوابط العامة
function renderPenalties() {
  const matricesEl = document.getElementById("penaltyMatrices");
  if (matricesEl) {
    matricesEl.innerHTML = PENALTY_MATRICES.map(
      (m) => `
      <div class="surface-card rounded-2xl p-5">
        <div class="flex items-center gap-3 mb-4 pb-3 border-b border-amber-400/15">
          <span class="w-8 h-8 rounded-lg gold-glow-btn flex items-center justify-center text-sm font-black">
            ${m.deg}
          </span>
          <h3 class="text-base sm:text-lg font-extrabold text-white">${m.title}</h3>
        </div>
        <div class="divide-y divide-amber-400/10 text-sm">
          ${m.rows
            .map(
              ([rank, penalty]) => `
            <div class="py-2.5 flex items-center justify-between gap-3">
              <span class="font-bold text-emerald-100">${rank}</span>
              <span class="font-semibold text-amber-300 text-left">${penalty}</span>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `
    ).join("");
  }

  const upperEl = document.getElementById("upperDegreesCards");
  if (upperEl) {
    upperEl.innerHTML = UPPER_DEGREES.map(
      (u) => `
      <div class="surface-card rounded-2xl p-5">
        <div class="text-base font-extrabold text-amber-400 mb-2">${u.icon} ${u.title}</div>
        <p class="text-sm text-emerald-50/90"><strong class="text-white">جميع الرتب:</strong> ${u.desc}</p>
      </div>
    `
    ).join("");
  }

  const rulesEl = document.getElementById("generalRulesList");
  if (rulesEl) {
    rulesEl.innerHTML = GENERAL_RULES.map(
      (rule) => `
      <li class="flex items-start gap-2.5 p-3 rounded-xl bg-[#0f2318]/90 border border-amber-400/15">
        <span class="text-amber-400 font-black mt-0.5">•</span>
        <span>${rule}</span>
      </li>
    `
    ).join("");
  }
}

// تهيئة التطبيق وربط الأحداث
function initApp() {
  const allCount = DEGREES_DATA.reduce((acc, d) => acc + d.items.length, 0);
  if (totalLawsCount) {
    totalLawsCount.textContent = allCount;
  }

  searchInput?.addEventListener("input", (e) => renderDegrees(e.target.value));

  clearSearchBtn?.addEventListener("click", () => {
    searchInput.value = "";
    renderDegrees("");
    searchInput.focus();
  });

  resetEmptyBtn?.addEventListener("click", () => {
    searchInput.value = "";
    renderDegrees("");
  });

  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("chip-active"));
      chip.classList.add("chip-active");
      if (chip.dataset.filter === "all" && searchInput) {
        searchInput.value = "";
        renderDegrees("");
      }
    });
  });

  degreesContainer?.addEventListener("click", (e) => {
    const card = e.target.closest(".law-item-card");
    if (!card) return;
    const textToCopy = card.getAttribute("data-copy") || "";
    copyTextSafe(textToCopy);
    showToast(`تم نسخ البند: ${textToCopy}`);
  });

  renderDegrees("");
  renderPenalties();
}

initApp();