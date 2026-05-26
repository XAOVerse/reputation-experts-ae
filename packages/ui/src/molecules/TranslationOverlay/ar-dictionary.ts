import { AR_DICT_EXTRA } from "./ar-dictionary-extra";
import { AR_DICT_HOME } from "./ar-dictionary-home";
import { AR_DICT_PRICING } from "./ar-dictionary-pricing";
import { AR_DICT_AI_SEARCH } from "./ar-dictionary-ai-search";
import { AR_DICT_REVIEWS_V2 } from "./ar-dictionary-reviews-v2";
import { AR_DICT_BIZ } from "./ar-dictionary-business-services";
import { AR_DICT_SVC_BODIES } from "./ar-dictionary-services-bodies";

// Native-quality Arabic dictionary for reputationexperts.ae
// Adapted (not literally translated) for the GCC market — written in modern
// formal Arabic that an educated UAE / Khaleeji reader will recognise as
// native marketing copy, not Google-translated.
//
// Keys are EXACT English source strings as they appear on the rendered DOM
// (after trim()). When the same English string can mean different things in
// different contexts, we use whole sentences as keys to keep meaning stable.

export const AR_DICT: Record<string, string> = {
  // ─── Brand / wordmark ────────────────────────────────────────────────────
  "REPUTATION": "خبراء",
  "EXPERTS": "السمعة",
  "Reputation Experts": "خبراء السمعة",

  // ─── Header navigation ───────────────────────────────────────────────────
  "Solutions": "الحلول",
  "AI Search": "البحث بالذكاء الاصطناعي",
  "Reviews": "التقييمات",
  "Pricing": "الأسعار",
  "Insights": "مقالات وأبحاث",
  "Contact": "تواصل معنا",
  "Services": "خدماتنا",
  "Menu": "القائمة",
  "Home": "الرئيسية",
  "About": "من نحن",
  "About Us": "من نحن",
  "Careers": "الوظائف",
  "Blog": "المدونة",
  "Talk To Expert": "تحدث مع خبير",
  "Talk to Expert": "تحدث مع خبير",
  "Contact us": "تواصل معنا",
  "Contact Us": "تواصل معنا",
  "Get in Touch": "للتواصل معنا",
  "Get In Touch": "للتواصل معنا",
  "Free Assessment": "تقييم مجاني",
  "Get a Free Audit": "احصل على تدقيق مجاني",
  "Get a Free Assessment": "احصل على تقييم مجاني",
  "Book a Free Consultation": "احجز استشارة مجانية",
  "Schedule a Call": "حدد موعد مكالمة",
  "Learn More": "اعرف المزيد",
  "Read More": "اقرأ المزيد",
  "See How": "اكتشف كيف",
  "View All": "عرض الكل",
  "View More": "عرض المزيد",
  "Start Now": "ابدأ الآن",
  "Get Started": "ابدأ الآن",
  "Open menu": "فتح القائمة",
  "Close menu": "إغلاق القائمة",

  // ─── Solutions dropdown items ────────────────────────────────────────────
  "Google AI Overview & ChatGPT Optimisation": "تحسين الظهور في Google AI و ChatGPT",
  "Solutions for Hotels & Resorts": "حلول الفنادق والمنتجعات",
  "Solutions for Restaurants & Cafés": "حلول المطاعم والمقاهي",
  "Solutions for Aesthetic & Cosmetic Clinics": "حلول عيادات التجميل والجلدية",
  "Solutions for Real Estate Agencies": "حلول مكاتب العقارات",
  "Solutions for Car Rental Companies": "حلول شركات تأجير السيارات",
  "Solutions for Automotive Showrooms": "حلول معارض السيارات",
  "Solutions for Fit-Out Contractors": "حلول مقاولي التشطيبات",
  "Solutions for Bars, Lounges & Entertainment": "حلول قطاع الترفيه والفعاليات",
  "Solutions for Fitness, Spa & Wellness": "حلول النوادي الرياضية والسبا",
  "Solutions for Personal Care & Beauty Salons": "حلول صالونات التجميل والعناية الشخصية",
  "Solutions for Home Services": "حلول الخدمات المنزلية",
  "Solutions for Cleaning Services": "حلول شركات التنظيف",
  "Solutions for Auto Service Centres": "حلول مراكز خدمة السيارات",
  "Solutions for Financial Services": "حلول الخدمات المالية",
  "Solutions for Business Services": "حلول خدمات الأعمال",

  // ─── Hero section ────────────────────────────────────────────────────────
  "We Protect, Repair, and Grow Dubai Businesses Online Reputations.":
    "نحمي سمعة شركات دبي على الإنترنت، ونُصلح ما تضرر منها، ونعمل على تنميتها.",
  "We Protect, Repair,": "نحمي ونُصلح",
  "Grow Dubai Businesses Online Reputations.": "ننمّي السمعة الرقمية لشركات دبي.",
  "Dubai business online reputation management": "إدارة السمعة الرقمية لشركات دبي",

  // ─── "Online Reputation Experts" section ─────────────────────────────────
  "Online Reputation Experts": "خبراء السمعة الرقمية",
  "We help individuals and businesses manage, protect, and improve how they appear online — across search results, review platforms, and social media. Your online reputation shapes first impressions, whether you're addressing unwanted content or building a stronger digital presence, we can help.":
    "نساعد الأفراد والشركات على إدارة وحماية وتحسين صورتهم الرقمية في نتائج البحث ومنصات التقييم ومنصات التواصل الاجتماعي. سمعتك على الإنترنت هي أول انطباع يتركه عملاؤك عنك؛ سواء أردت معالجة محتوى يضرّ بك أو بناء حضور رقمي أقوى، نحن هنا لمساعدتك.",

  // ─── Trust / proof stripe ────────────────────────────────────────────────
  "Trusted by leading businesses": "تثق بنا شركات رائدة",
  "Featured in": "تم التعريف بنا في",
  "As featured in": "كما ظهرنا في",
  "Trusted by": "تثق بنا",

  // ─── Industries section (generic copy on homepage) ───────────────────────
  "Industries we serve": "القطاعات التي نخدمها",
  "Industries We Serve": "القطاعات التي نخدمها",
  "Our Industries": "قطاعاتنا",
  "Hotels & Resorts": "الفنادق والمنتجعات",
  "Restaurants & Cafés": "المطاعم والمقاهي",
  "Aesthetic & Cosmetic Clinics": "عيادات التجميل والجلدية",
  "Real Estate Agencies": "مكاتب العقارات",
  "Car Rental Companies": "شركات تأجير السيارات",
  "Automotive Showrooms": "معارض السيارات",
  "Fit-Out Contractors": "مقاولو التشطيبات",
  "Bars, Lounges & Entertainment": "الترفيه والفعاليات",
  "Fitness, Spa & Wellness": "اللياقة والسبا",
  "Personal Care & Beauty Salons": "صالونات التجميل والعناية الشخصية",
  "Home Services": "الخدمات المنزلية",
  "Cleaning Services": "شركات التنظيف",
  "Auto Service Centres": "مراكز خدمة السيارات",
  "Financial Services": "الخدمات المالية",
  "Business Services": "خدمات الأعمال",

  // ─── Services / Who We Serve ─────────────────────────────────────────────
  "Who We Serve": "من نخدم",
  "Our Services": "خدماتنا",
  "Our Solutions": "حلولنا",
  "What We Do": "ما الذي نقدمه",
  "How We Help": "كيف نساعدك",
  "How It Works": "كيف نعمل",
  "Our Process": "آلية عملنا",
  "Individuals": "الأفراد",
  "Small & Medium Businesses": "الشركات الصغيرة والمتوسطة",
  "Enterprise": "الشركات الكبرى",
  "Small Businesses": "الشركات الصغيرة",
  "Large Enterprises": "الشركات الكبرى",
  "For Individuals": "للأفراد",
  "For Businesses": "للشركات",
  "For Enterprise": "للشركات الكبرى",

  // Service titles
  "Online Reputation Audit": "تدقيق السمعة الرقمية",
  "Reputation Audit": "تدقيق السمعة",
  "Content & Search Management": "إدارة المحتوى ونتائج البحث",
  "Brand Monitoring & Alerts": "مراقبة العلامة التجارية والتنبيهات",
  "Brand Monitoring": "مراقبة العلامة التجارية",
  "Crisis & Issue Response": "إدارة الأزمات والاستجابة السريعة",
  "Crisis Management": "إدارة الأزمات",
  "Review Management": "إدارة التقييمات",
  "Review Generation": "تحفيز التقييمات الإيجابية",
  "Review Removal": "إزالة التقييمات المسيئة",
  "Digital PR & Authority Building": "العلاقات العامة الرقمية وبناء المرجعية",
  "Digital PR": "العلاقات العامة الرقمية",
  "Authority Building": "بناء المرجعية",
  "Personal Reputation Management": "إدارة السمعة الشخصية",
  "Personal Reputation": "السمعة الشخصية",
  "Business Reputation": "سمعة الشركات",
  "Search Results Management": "إدارة نتائج البحث",
  "AI Search Optimization": "تحسين الظهور في البحث بالذكاء الاصطناعي",
  "AI Visibility": "الظهور في الذكاء الاصطناعي",
  "Press & Media": "الصحافة والإعلام",

  // ─── Why Choose Us / Key Benefits ────────────────────────────────────────
  "Why Choose Us": "لماذا تختارنا",
  "Why Choose Reputation Experts": "لماذا تختار خبراء السمعة",
  "Why Us": "لماذا نحن",
  "Key Benefits": "أبرز الفوائد",
  "Our Advantages": "ما يميّزنا",
  "Trusted Experts": "خبرة موثوقة",
  "Proven Results": "نتائج مثبتة",
  "Discreet & Confidential": "السرية التامة",
  "Confidentiality": "السرية",
  "Dedicated Team": "فريق مخصص",
  "Local Presence": "حضور محلي",
  "24/7 Support": "دعم على مدار الساعة",
  "Dubai-based team": "فريق مقره دبي",
  "Local UAE expertise": "خبرة محلية إماراتية",

  // ─── Testimonials ────────────────────────────────────────────────────────
  "Client Stories": "قصص عملائنا",
  "Testimonials": "آراء عملائنا",
  "What our clients say": "ماذا يقول عملاؤنا",
  "What Our Clients Say": "ماذا يقول عملاؤنا",
  "Success Stories": "قصص نجاح",
  "Case Studies": "دراسات حالة",
  "Case Study": "دراسة حالة",

  // ─── Process steps ───────────────────────────────────────────────────────
  "Step 1": "الخطوة الأولى",
  "Step 2": "الخطوة الثانية",
  "Step 3": "الخطوة الثالثة",
  "Step 4": "الخطوة الرابعة",
  "Discovery": "الاستكشاف",
  "Strategy": "التخطيط",
  "Execution": "التنفيذ",
  "Reporting": "التقارير",
  "Monitoring": "المتابعة",
  "Audit & Discovery": "التدقيق والاستكشاف",
  "Plan & Strategy": "الخطة والاستراتيجية",
  "Execute & Monitor": "التنفيذ والمتابعة",

  // ─── FAQ ─────────────────────────────────────────────────────────────────
  "Frequently Asked Questions": "الأسئلة الشائعة",
  "FAQ": "الأسئلة الشائعة",
  "FAQs": "الأسئلة الشائعة",
  "Common Questions": "أسئلة متكررة",
  "Have a question?": "لديك سؤال؟",
  "Still have questions?": "ما زالت لديك أسئلة؟",

  // ─── CTAs (section) ──────────────────────────────────────────────────────
  "Ready to take control of your reputation?": "هل أنت مستعد لاستعادة زمام سمعتك؟",
  "Ready to Take Control?": "هل أنت مستعد للسيطرة على سمعتك؟",
  "Let's protect your reputation": "لنحمِ سمعتك معًا",
  "Start protecting your reputation today": "ابدأ بحماية سمعتك اليوم",
  "Get in touch with our team": "تواصل مع فريقنا",
  "Speak to a specialist": "تحدث إلى أحد متخصصينا",
  "Speak to an expert": "تحدث مع أحد خبرائنا",

  // ─── Contact section ─────────────────────────────────────────────────────
  "Send us a message": "أرسل لنا رسالة",
  "Send a message": "إرسال رسالة",
  "Send Message": "إرسال الرسالة",
  "Your name": "الاسم الكامل",
  "Full name": "الاسم الكامل",
  "Name": "الاسم",
  "Email": "البريد الإلكتروني",
  "Email address": "البريد الإلكتروني",
  "Your email": "بريدك الإلكتروني",
  "Phone": "رقم الهاتف",
  "Phone number": "رقم الهاتف",
  "Your phone": "رقم هاتفك",
  "Company": "الشركة",
  "Company name": "اسم الشركة",
  "Industry": "القطاع",
  "Message": "الرسالة",
  "Your message": "رسالتك",
  "Tell us how we can help": "أخبرنا كيف يمكننا مساعدتك",
  "How can we help?": "كيف يمكننا مساعدتك؟",
  "How can we help you?": "كيف يمكننا مساعدتك؟",
  "Required": "إلزامي",
  "Optional": "اختياري",
  "Submit": "إرسال",
  "Send": "إرسال",
  "Thank you": "شكرًا لك",
  "Thank you!": "شكرًا لك!",
  "Thanks!": "شكرًا!",
  "Thank you for your message": "شكرًا لرسالتك",
  "We'll be in touch shortly": "سنتواصل معك قريبًا",
  "We'll get back to you soon": "سنعود إليك في أقرب وقت",
  "Office": "المكتب",
  "Our Office": "مكتبنا",
  "Our Offices": "مكاتبنا",
  "Location": "الموقع",
  "Dubai": "دبي",
  "Business Bay, Dubai, United Arab Emirates": "الخليج التجاري، دبي، الإمارات العربية المتحدة",
  "Business Bay, Dubai, UAE": "الخليج التجاري، دبي، الإمارات",

  // ─── Footer ──────────────────────────────────────────────────────────────
  "Privacy Policy": "سياسة الخصوصية",
  "Terms of Service": "الشروط والأحكام",
  "Terms & Conditions": "الشروط والأحكام",
  "Terms": "الشروط",
  "Privacy": "الخصوصية",
  "Cookie Policy": "سياسة ملفات تعريف الارتباط",
  "Cookies": "ملفات تعريف الارتباط",
  "Sitemap": "خريطة الموقع",
  "Follow us": "تابعنا",
  "Follow Us": "تابعنا",
  "Newsletter": "النشرة البريدية",
  "Subscribe": "اشتراك",
  "Helping individuals and businesses take control of their digital reputation.":
    "نساعد الأفراد والشركات على استعادة زمام سمعتهم الرقمية.",
  "All rights reserved.": "جميع الحقوق محفوظة.",
  "Language selector": "اختيار اللغة",

  // ─── Pricing page ────────────────────────────────────────────────────────
  "PRICING": "الأسعار",
  "You don’t worry about reputation. We grind on it daily so you don’t have to.":
    "أنت لا تنشغل بسمعتك، نحن نعمل عليها يوميًا حتى لا تضطر إلى ذلك.",
  "You don't worry about reputation. We grind on it daily so you don't have to.":
    "أنت لا تنشغل بسمعتك، نحن نعمل عليها يوميًا حتى لا تضطر إلى ذلك.",
  "extended detail view": "العرض التفصيلي الموسّع",
  "extended detail view.": "العرض التفصيلي الموسّع.",

  "WHAT'S INCLUDED": "ما الذي تشمله الباقات",
  "WHAT’S INCLUDED": "ما الذي تشمله الباقات",
  "One table, every tier. No surprises later.": "جدول واحد، يشمل كل الباقات. بلا مفاجآت لاحقًا.",
  "OUTCOMES": "النتائج",
  "PLAN": "الخطة",
  "What you get": "ما تحصل عليه",
  "Best for": "الأنسب لـ",
  "Growth": "النمو",
  "Core": "الأساسية",
  "Pro": "المتقدمة",
  "RECOMMENDED": "موصى بها",
  "Recommended": "موصى بها",
  "Protection+": "الحماية+",
  "Review growth foundation": "أساس متين لنمو التقييمات",
  "Growth + harmful-content removal": "نمو التقييمات + إزالة المحتوى المسيء",
  "Growth + removals + AI + media": "نمو + إزالة + ذكاء اصطناعي + إعلام",
  "Full reputation protection": "حماية شاملة للسمعة",
  "Enterprise insurance & global press":
    "تأمين على مستوى الشركات الكبرى وتغطية صحفية عالمية",
  "New businesses building 5 stars":
    "الأعمال الجديدة التي تبني تقييم 5 نجوم",
  "Established businesses maintaining their score":
    "الأعمال القائمة التي تحافظ على تقييمها",
  "Multi-channel businesses growing across platforms":
    "الأعمال متعددة القنوات التي تتوسّع عبر المنصات",
  "Multi-location and high-stakes reputations":
    "الأعمال متعددة الفروع والسمعة الحساسة",
  "Luxury, hospitality, regulated, multi-emirate":
    "قطاع الفخامة والضيافة والقطاعات المنظَّمة على مستوى الإمارات",
  "month": "شهريًا",
  "/month": "/شهريًا",
  "per month": "شهريًا",
  "Most popular": "الأكثر طلبًا",
  "Choose plan": "اختر الباقة",
  "Choose Plan": "اختر الباقة",
  "Get this plan": "اشترك في هذه الباقة",
  "Compare plans": "قارن بين الباقات",
  "Pay as you go": "ادفع حسب الاستخدام",
  "PAYG": "ادفع حسب الاستخدام",
  "Included": "مشمول",
  "Unlimited": "غير محدود",

  // ─── Common feature labels ───────────────────────────────────────────────
  "Yes": "نعم",
  "No": "لا",
  "Provided": "متاح",
  "Limited": "محدود",
  "Partial": "جزئي",
  "Shared": "مشترك",
  "Dedicated manager": "مدير حساب مخصص",
  "Account manager": "مدير الحساب",
  "Monthly": "شهري",
  "Bi-weekly": "كل أسبوعين",
  "Weekly": "أسبوعي",
  "Daily": "يومي",
  "Quarterly": "ربع سنوي",
  "Annual": "سنوي",
  "Annually": "سنويًا",

  // ─── Industry page common scaffolding ────────────────────────────────────
  "Reputation Management for": "إدارة السمعة الرقمية لـ",
  "Reputation management for": "إدارة السمعة الرقمية لـ",
  "Tailored reputation solutions for": "حلول سمعة مصمّمة خصيصًا لـ",
  "Trusted by leading": "نخدم رواد",
  "Why reputation matters in this industry":
    "لماذا تُعدّ السمعة حاسمة في هذا القطاع",
  "The reputation challenges you face": "تحديات السمعة التي تواجهها",
  "How we help": "كيف نساعدك",
  "Real results": "نتائج حقيقية",
  "Talk to us": "تحدث إلينا",

  // Section headings that appear across many industry pages
  "The Problem": "المشكلة",
  "Our Approach": "منهجيتنا",
  "Our Approach to": "منهجيتنا في",
  "The Solution": "الحل",
  "Results": "النتائج",
  "About this industry": "نظرة على هذا القطاع",

  // ─── About page ──────────────────────────────────────────────────────────
  "About Reputation Experts": "عن خبراء السمعة",
  "Our Story": "قصتنا",
  "Our Mission": "رسالتنا",
  "Our Values": "قيمنا",
  "Our Team": "فريقنا",
  "Leadership": "القيادة",
  "Meet the team": "تعرّف على الفريق",
  "Meet the Team": "تعرّف على الفريق",

  // ─── Insights / Blog ────────────────────────────────────────────────────
  "Latest Insights": "أحدث المقالات",
  "Latest Articles": "أحدث المقالات",
  "Latest News": "آخر الأخبار",
  "Recent Posts": "أحدث المنشورات",
  "All Insights": "كل المقالات",
  "All Articles": "كل المقالات",
  "Read article": "اقرأ المقال",
  "Read the article": "اقرأ المقال",
  "Read full story": "اقرأ القصة كاملة",
  "min read": "دقائق قراءة",
  "minute read": "دقيقة قراءة",
  "By": "بقلم",
  "Published": "نُشر بتاريخ",
  "Updated": "حُدّث بتاريخ",
  "Category": "الفئة",
  "Tags": "الوسوم",

  // ─── Cookie banner / misc UI ─────────────────────────────────────────────
  "We use cookies": "نستخدم ملفات تعريف الارتباط",
  "Accept": "موافق",
  "Accept All": "قبول الكل",
  "Reject": "رفض",
  "Reject All": "رفض الكل",
  "Manage Preferences": "إدارة التفضيلات",
  "Cookie Settings": "إعدادات ملفات تعريف الارتباط",
  "We use cookies to improve your experience.":
    "نستخدم ملفات تعريف الارتباط لتحسين تجربتك على الموقع.",

  // ─── Common verbs / micro-copy ───────────────────────────────────────────
  "Loading": "جاري التحميل",
  "Loading...": "جاري التحميل...",
  "Please wait": "يرجى الانتظار",
  "Error": "خطأ",
  "Try again": "حاول مرة أخرى",
  "Try Again": "حاول مرة أخرى",
  "Close": "إغلاق",
  "Open": "فتح",
  "Next": "التالي",
  "Previous": "السابق",
  "Back": "رجوع",
  "Continue": "متابعة",
  "Search": "بحث",
  "Type to search": "اكتب للبحث",
  "No results": "لا توجد نتائج",
  "View on map": "عرض على الخريطة",
  "Email us": "راسلنا عبر البريد الإلكتروني",
  "Call us": "اتصل بنا",
  "WhatsApp us": "تواصل عبر واتساب",
  "Chat with us": "تواصل معنا الآن",

  // ─── Generic taglines / value props seen on multiple pages ───────────────
  "Protect": "نحمي",
  "Repair": "نُصلح",
  "Grow": "نُنمّي",
  "Protect Your Reputation": "احمِ سمعتك",
  "Repair Your Reputation": "أصلح سمعتك",
  "Grow Your Reputation": "نمِّ سمعتك",
  "Protect, Repair, Grow": "نحمي، نُصلح، نُنمّي",
  "Restore Trust": "استعادة الثقة",
  "Build Trust": "بناء الثقة",
  "Win Back Customers": "استعادة العملاء",
  "Increase Revenue": "زيادة الإيرادات",
  "More 5-star reviews": "تقييمات 5 نجوم أكثر",
  "Better search results": "نتائج بحث أفضل",
  "Stronger brand": "علامة تجارية أقوى",

  // ─── 404 / status pages ──────────────────────────────────────────────────
  "Page not found": "الصفحة غير موجودة",
  "Page Not Found": "الصفحة غير موجودة",
  "Go back home": "العودة إلى الرئيسية",
  "Return to homepage": "العودة إلى الصفحة الرئيسية",

  // ─── Legal pages headings ────────────────────────────────────────────────
  "Last updated": "آخر تحديث",
  "Effective date": "تاريخ السريان",
  "Introduction": "مقدمة",
  "Information We Collect": "البيانات التي نجمعها",
  "How We Use Your Information": "كيف نستخدم بياناتك",
  "Sharing of Information": "مشاركة البيانات",
  "Your Rights": "حقوقك",
  "Contact Information": "بيانات التواصل",
  "Changes to this Policy": "التعديلات على هذه السياسة",
  "Acceptance of Terms": "قبول الشروط",
  "Use of Service": "استخدام الخدمة",
  "Limitation of Liability": "حدود المسؤولية",
  "Governing Law": "القانون الحاكم",

  // ─── Time / date relative ────────────────────────────────────────────────
  "Today": "اليوم",
  "Yesterday": "أمس",
  "This week": "هذا الأسبوع",
  "Last week": "الأسبوع الماضي",
  "This month": "هذا الشهر",
  "Last month": "الشهر الماضي",
};

// Compound year-bearing copyright phrases (current & near years)
for (const year of [2024, 2025, 2026, 2027]) {
  AR_DICT[`© ${year} Reputation Experts. All rights reserved.`] =
    `© ${year} خبراء السمعة. جميع الحقوق محفوظة.`;
}

// Merge second-pass dictionary entries
Object.assign(AR_DICT, AR_DICT_EXTRA);
Object.assign(AR_DICT, AR_DICT_HOME);
Object.assign(AR_DICT, AR_DICT_PRICING);
Object.assign(AR_DICT, AR_DICT_AI_SEARCH);
Object.assign(AR_DICT, AR_DICT_REVIEWS_V2);
Object.assign(AR_DICT, AR_DICT_BIZ);
Object.assign(AR_DICT, AR_DICT_SVC_BODIES);
