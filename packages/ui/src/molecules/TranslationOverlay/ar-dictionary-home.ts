// Native-quality Arabic — third-pass expansion focused on the homepage.
// Covers every English string still rendering on https://www.reputationexperts.ae/
// after the first two passes: hero stripe, services accordion, AI Overview &
// Get-Recommended-by-AI sections, Industries grid, Case Studies, FAQ
// (5 Q&A blocks), 3-phase methodology paragraph, Platforms & Media outlets,
// "Who We Serve" segments, Confidential Handling / Global Coverage /
// Platform Policy benefit cards.
//
// Same conventions: keys are exact trimmed English source strings. Brand
// names (Forbes, Bloomberg, BBC, NBC, FOX, Reuters, Hertz, Virgin Active,
// Radisson, Jumeirah, Trustpilot, Google, ChatGPT, Claude, Grok, Meta,
// Yahoo Finance, Business Insider, Apple, Amazon, Khaleej Times etc.) are
// intentionally NOT translated — they keep their visual identity inside
// the Arabic copy. Same for email addresses and image alt-text where the
// alt is itself a brand name.

export const AR_DICT_HOME: Record<string, string> = {

  // ─── Page-level / SEO ────────────────────────────────────────────────────
  "Reputation Experts — Protect & Grow Your Online Reputation":
    "خبراء السمعة — نحمي سمعتك الرقمية ونعمل على تنميتها",

  // ─── Aria-labels / hidden labels ─────────────────────────────────────────
  "Hero": "القسم الرئيسي",
  "Main navigation": "القائمة الرئيسية",
  "Footer navigation": "روابط الفوتر",
  "Contact CTA": "زرّ التواصل",
  "Cookie consent": "إقرار ملفات تعريف الارتباط",

  // ─── "Online Reputation Experts" intro (homepage main copy) ──────────────
  "Online": "خبراء",
  "Reputation directly drives revenue. 87% of customers check online reviews before making an enquiry (unless existing clients). A business sitting at lower score stars loses customers to a competitor at a higher score every single day, even if the service quality is identical. We close that gap by removing unfair reviews that drag your rating down, generating a consistent stream of new 5-star reviews that push it up, and ensuring your business appears prominently when potential customers search on Google, ask ChatGPT, or browse AI Overviews. The result is more clicks, more calls, and more enquiries — clients typically see a 30–50% increase in new customer enquiries within the first three months.":
    "السمعة محرّك مباشر للإيرادات. 87% من العملاء يطّلعون على التقييمات قبل التواصل مع أي نشاط (ما لم يكونوا عملاء سابقين). أي نشاط تجاري بتقييم أقل يخسر عملاءه يوميًا لصالح منافس يتفوّق عليه بنصف نجمة، حتى وإن كانت جودة الخدمة متطابقة. نسدّ هذه الفجوة من ثلاث جهات: نُزيل التقييمات غير العادلة التي تسحب تقييمك إلى الأسفل، ونُولّد تدفّقًا منتظمًا من التقييمات الجديدة بخمس نجوم، ونضمن ظهور نشاطك بشكل بارز حين يبحث العملاء على Google أو يسألون ChatGPT أو يستعرضون إجابات AI Overview. والنتيجة: مزيد من النقرات، ومزيد من المكالمات، ومزيد من الاستفسارات — يحقّق عملاؤنا عادةً ارتفاعًا من 30% إلى 50% في استفسارات العملاء الجدد خلال أوّل ثلاثة أشهر.",

  // ─── 3-phase methodology paragraph (Industries section intro) ────────────
  "We work across three phases. First, we clean up, removing policy-violating reviews, suppressing negative search results, and fixing gaps in your Google Business Profile. Second, we strengthen, building a steady flow of genuine 5-star reviews from your existing customers using follow-up systems timed around enquiries, and publishing authoritative content that positions your business as a trusted name online. Third, we establish long-term authority, securing press coverage, optimising for Google AI Overviews and ChatGPT recommendations, and providing ongoing monitoring so your reputation stays protected month after month.":
    "نعمل على ثلاث مراحل. أولًا، التنظيف: نُزيل التقييمات المخالفة لسياسات المنصات، ونُخفي نتائج البحث السلبية، ونعالج الثغرات في ملف نشاطك على Google. ثانيًا، التعزيز: نبني تدفّقًا منتظمًا من التقييمات الحقيقية بخمس نجوم من عملائك الحاليين عبر أنظمة متابعة مدروسة التوقيت، وننشر محتوى مرجعيًا يُرسّخ مكانة نشاطك كاسم موثوق على الإنترنت. ثالثًا، ترسيخ المرجعية على المدى البعيد: نؤمّن لك تغطيات صحفية، ونُحسّن ظهورك في Google AI Overview وتوصيات ChatGPT، ونوفّر مراقبة مستمرة لتبقى سمعتك محميّة شهرًا بعد شهر.",

  // ─── Services accordion (Search & Content / PR & Media / AI Assistants) ─
  "Search & Content": "البحث والمحتوى",
  "PR & Media": "العلاقات العامة والإعلام",
  "AI Assistants": "مساعدو الذكاء الاصطناعي",
  "Reputation Recovery Strategy": "استراتيجية استعادة السمعة",
  "Reputation Recovery Strategy icon": "أيقونة استراتيجية استعادة السمعة",
  "Review Dispute & Removal": "الاعتراض على التقييمات وإزالتها",
  "Review Generation Strategy": "استراتيجية توليد التقييمات",
  "Search Result Management": "إدارة نتائج البحث",
  "Google Business Optimisation": "تحسين ملف Google للأنشطة التجارية",
  "AI Overview Optimisation": "تحسين الظهور في إجابات الذكاء الاصطناعي",
  "AI Overview": "إجابات الذكاء الاصطناعي",
  "Reputation Monitoring": "مراقبة السمعة",
  "Reputation Monitoring icon": "أيقونة مراقبة السمعة",
  "Reputation Protection": "حماية السمعة",
  "Ongoing Reputation Protection": "حماية مستمرة للسمعة",
  "Daily Monitoring and Protection": "مراقبة وحماية يوميّة",
  "Digital PR & Authority": "العلاقات العامة الرقمية وبناء المرجعية",
  "Get Recommended by AI": "كن العلامة التي يوصي بها الذكاء الاصطناعي",
  "Explore Solutions": "استكشف الحلول",
  "All Services": "كل الخدمات",
  "All Posts": "كل المقالات",
  "READ MORE": "اقرأ المزيد",

  // ─── Service card descriptions ───────────────────────────────────────────
  "We legally remove harmful, fake, malicious, and policy-violating reviews from online platforms like Google Maps that are damaging your reputation, on ongoing bases.":
    "نُزيل قانونيًا التقييمات المسيئة والمزيّفة والكيدية والمخالفة لسياسات المنصات — على Google Maps وغيرها — التي تضرّ بسمعتك، بشكل مستمر ومنتظم.",
  "We suppress damaging search results and replace them with authoritative, trust-building content that presents your business properly on page one.":
    "نُخفي نتائج البحث المسيئة، ونستبدلها بمحتوى مرجعي يبني الثقة ويُقدّم نشاطك بصورته الصحيحة في الصفحة الأولى.",
  "We help your business generate a steady stream of positive reviews that builds trust, strengthens your Google rating, and drives more customers to choose you over competitors.":
    "نساعد نشاطك على توليد تدفّق منتظم من التقييمات الإيجابية التي تبني الثقة، وتُعزّز تقييمك على Google، وتدفع العملاء لاختيارك دون منافسيك.",
  "We help strengthen your online presence so accurate and positive information becomes more visible to potential customers.":
    "نُعزّز حضورك الرقمي ليصبح المحتوى الإيجابي والدقيق هو الأكثر ظهورًا أمام عملائك المحتملين.",
  "Real-time alerts whenever your business is mentioned online. New review? We notify you. Negative article? We flag it — so you're never caught off guard again.":
    "تنبيهات فوريّة في كل مرّة يُذكر فيها نشاطك على الإنترنت. تقييم جديد؟ نُخبرك به فورًا. مقال سلبي؟ نرفع لك التنبيه — لتبقى دائمًا على اطّلاع، دون أي مفاجآت.",
  "We help businesses build brand authority through strategic features and articles across major, niche, and local media outlets, strengthening visibility in Google AI Overviews and recommendations in ChatGPT.":
    "نساعد الشركات على بناء مرجعية علامتها التجارية عبر تقارير ومقالات استراتيجية في كبرى وسائل الإعلام، والوسائل المتخصّصة والمحلية، ممّا يُعزّز ظهورها في Google AI Overview وتوصيات ChatGPT.",
  "Reputation Experts keeps your business visible in AI-driven search by optimising your Google Business Profile, driving consistent clients' reviews, and structuring your online presence so Google surfaces you, not your competitors.":
    "يضمن لك خبراء السمعة الظهور في البحث المدفوع بالذكاء الاصطناعي، عبر تحسين ملفك على Google للأنشطة التجارية، وضمان تدفّق منتظم من تقييمات العملاء، وهيكلة حضورك الرقمي بحيث يعرضك Google في المقدّمة، لا منافسيك.",
  "We start strengthening your online reputation immediately, from review removal and rating growth to Google AI Overview visibility, search positioning, and major media authority. You begin seeing movement within weeks.":
    "نبدأ فورًا بتعزيز سمعتك الرقمية — من إزالة التقييمات ورفع التقييم العام، إلى الظهور في Google AI Overview، وتحسين موقعك في نتائج البحث، وبناء مرجعية في كبرى وسائل الإعلام. ستلاحظ تحرّكًا فعليًا خلال أسابيع.",

  // ─── "Get Recommended by AI" long paragraph ──────────────────────────────
  "AI assistants are now the first place customers ask for recommendations, and their answers are shaped by what's published about you across the open web. ChatGPT, Claude and Grok pull from reviews, news coverage, Wikipedia, and trusted directories to decide which businesses to surface. Reputation Experts ensures every signal these models read is working in your favour: strong review profiles, suppressed negative content, and verified coverage in global publications. The result is consistent, positive recommendations across every major AI platform, turning AI conversations into qualified inbound leads.":
    "أصبح مساعدو الذكاء الاصطناعي اليوم الوجهة الأولى التي يسأل فيها العملاء عن التوصيات، وإجاباتهم تتشكّل ممّا يُنشر عنك في الويب المفتوح. تستقي ChatGPT و Claude و Grok معلوماتها من التقييمات والتغطيات الإخبارية و Wikipedia والأدلة الموثوقة، لتقرّر أي الشركات تستحقّ الظهور. يحرص خبراء السمعة على أن تعمل كل هذه الإشارات في صالحك: ملفات تقييم قويّة، ومحتوى سلبي مُخفى، وتغطيات موثَّقة في منشورات عالمية. النتيجة: توصيات إيجابية ومتّسقة على كل منصّات الذكاء الاصطناعي الكبرى، تتحوّل بها محادثات الذكاء الاصطناعي إلى عملاء مؤهّلين قادمين إليك.",

  // ─── "AI is Redefining Search" long paragraph ────────────────────────────
  "Search is changing. A growing share of traffic now comes from Google's AI Overviews, which deliver a single AI-generated answer instead of a list of links. To be recommended, your business needs the signals AI trusts most: a high volume of positive reviews, minimal negative content, and authoritative coverage from global publishers. Reputation Experts engineers all three. We grow your positive reviews, suppress damaging results, and secure editorial placements in the publications Google's AI treats as authoritative, so when AI recommends a business in your space, it recommends yours.":
    "البحث يتغيّر. حصّة متنامية من زيارات الويب باتت تأتي من Google AI Overview، التي تُقدّم إجابة واحدة مولَّدة بالذكاء الاصطناعي بدلًا من قائمة روابط. ولتحظى بالتوصية، يحتاج نشاطك إلى الإشارات التي يثق بها الذكاء الاصطناعي أكثر من غيرها: حجم كبير من التقييمات الإيجابية، وأدنى قدر من المحتوى السلبي، وتغطيات مرجعية من منشورات عالمية. يبني خبراء السمعة الثلاثة معًا: نُنمّي تقييماتك الإيجابية، ونُخفي النتائج المسيئة، ونؤمّن لك ظهورًا تحريريًا في المنشورات التي يعدّها ذكاء Google مرجعيّة. وحين يوصي الذكاء الاصطناعي بشركة في مجالك، يوصي بك أنت.",

  // ─── Who We Serve ────────────────────────────────────────────────────────
  "Solutions for Individuals and Executives": "حلول للأفراد والمدراء التنفيذيين",
  "Solutions for Small and Medium Businesses": "حلول للشركات الصغيرة والمتوسطة",
  "Solutions for Large Companies": "حلول للشركات الكبرى",

  // ─── Trust / benefit cards ───────────────────────────────────────────────
  "Confidential Handling": "تعامل بسرية تامة",
  "Confidential Handling icon": "أيقونة التعامل بسرية",
  "Global Platform Coverage": "تغطية على المنصات العالمية",
  "Global Platform Coverage icon": "أيقونة التغطية على المنصات العالمية",
  "Platform Policy Expertise": "خبرة بسياسات المنصات",
  "Platform Policy Expertise icon": "أيقونة الخبرة بسياسات المنصات",
  "Structured Dispute Process": "إجراءات اعتراض منظَّمة",
  "Structured Dispute Process icon": "أيقونة إجراءات الاعتراض المنظَّمة",
  "All cases are handled discreetly to protect your business, brand, and client relationships.":
    "كل القضايا تُعالج بسريّة تامّة لحماية نشاطك التجاري وعلامتك وعلاقاتك بعملائك.",
  "Experience working with major review and content platforms worldwide.":
    "خبرة عملية في التعامل مع كبرى منصات التقييم والمحتوى حول العالم.",
  "Our team understands how review platforms handle disputes and helps prepare reports aligned with their guidelines.":
    "يفهم فريقنا آلية تعامل منصات التقييم مع الاعتراضات، ويُعدّ معك التقارير الملائمة لسياسات كل منصة.",
  "We guide you through a clear process for reporting harmful reviews and misleading content using appropriate channels.":
    "نأخذك بيدك عبر مسار واضح للإبلاغ عن التقييمات المسيئة والمحتوى المضلّل، باستخدام القنوات المناسبة.",
  "Ongoing monitoring helps identify new reputation risks early so issues can be addressed before they escalate.":
    "المراقبة المستمرة تتيح اكتشاف مخاطر السمعة الجديدة باكرًا، ومعالجتها قبل أن تتفاقم.",

  // ─── "Platforms & Media Outlets" ─────────────────────────────────────────
  "Platforms": "المنصات",
  "Maps": "الخرائط",
  "Platforms & Media Outlets": "المنصات والمنابر الإعلامية",
  "Platforms and Media Outlets": "المنصات والمنابر الإعلامية",
  "Media Partners": "شركاء إعلاميون",
  "Partners": "الشركاء",

  // ─── Case Studies section ────────────────────────────────────────────────
  "Case": "دراسة حالة",
  "Case study 1": "دراسة حالة 1",
  "Case study 2": "دراسة حالة 2",
  "Case study 3": "دراسة حالة 3",
  "View case study: Luxury Car Rental Company": "اطّلع على دراسة الحالة: شركة تأجير سيارات فاخرة",
  "View case study: Swimming Pool Contractor": "اطّلع على دراسة الحالة: مقاول حمّامات سباحة",
  "Luxury Car Rental Company": "شركة تأجير سيارات فاخرة",
  "Swimming Pool Contractor": "مقاول حمّامات سباحة",
  "Aesthetics Clinic": "عيادة تجميل",
  "Commercial service vehicle": "مركبة خدمة تجارية",
  "Large open plan office": "مكتب واسع مفتوح التصميم",
  "Two business executives in conversation": "مدراء تنفيذيون في حوار عمل",
  "New aesthetics clinic in Jumeirah, suffered from low review count - no trust signals. Managed to build strong reputation bringing the overall score to over 4.9":
    "عيادة تجميل حديثة في جميرا، عانت من ضعف عدد التقييمات وغياب إشارات الثقة. نجحنا في بناء سمعة قويّة لها، حتى تجاوز تقييمها العام 4.9 نجوم.",
  "Jumeirah, Dubai": "جميرا، دبي",

  // ─── Stats / Insights stripe ─────────────────────────────────────────────
  "INSIGHTS - AI IS REDEFINING SEARCH": "أبحاث — الذكاء الاصطناعي يُعيد تعريف البحث",
  "INSIGHTS - AUTOMOTIVE INDUSTRY": "أبحاث — قطاع السيارات",
  "INSIGHTS - CONSUMER STUDY": "أبحاث — دراسة المستهلك",
  "INSIGHTS - HEALTHCARE INDUSTRY": "أبحاث — قطاع الرعاية الصحية",
  "Studies": "دراسات",
  "82% Of Consumers Read Online Reviews Before Booking A Restaurant Or Hotel":
    "82% من المستهلكين يطّلعون على التقييمات قبل حجز مطعم أو فندق",
  "92–93% Of Consumers Read Online Reviews Before Making Initial Enquiry WHI":
    "92–93% من المستهلكين يطّلعون على التقييمات قبل أوّل استفسار",
  "About 94% Of Patients Today Use Online Reviews To Evaluate A Provider (Healthcare, Clinic, Dental)":
    "نحو 94% من المرضى اليوم يعتمدون على التقييمات لتقييم مزوّد الخدمة (في الرعاية الصحية والعيادات وعيادات الأسنان)",
  "University Of Virginia - \"Nearly 60% Of Consumers Say They've Used AI To Help Them Shop.\"":
    "جامعة فرجينيا — \"نحو 60% من المستهلكين أفادوا بأنهم استخدموا الذكاء الاصطناعي في قرارات الشراء.\"",
  "DIGITAL": "رقمي",
  "INSIDER": "INSIDER",
  "JOURNAL": "JOURNAL",
  "NEWS": "أخبار",
  "BUSINESS": "أعمال",

  // ─── FAQ — homepage 5 Q&A blocks ─────────────────────────────────────────
  "How does Reputation Experts help businesses boost their bookings and increase sales?":
    "كيف يساعد خبراء السمعة الأنشطة التجارية على زيادة الحجوزات والمبيعات؟",
  "How does Google's AI Overview affect my business?":
    "كيف تؤثّر إجابات Google AI Overview على نشاطي؟",
  "How does Reputation Experts build a strong online reputation for my business?":
    "كيف يبني لك خبراء السمعة حضورًا رقميًا قويًا؟",
  "How can Reputation Experts protect your business from harmful new reviews?":
    "كيف يحمي خبراء السمعة نشاطك من التقييمات السلبية الجديدة؟",
  "How long does it take to see results for my business?":
    "كم من الوقت أحتاج حتى أرى نتائج ملموسة على نشاطي؟",
  "We start with a comprehensive reputation audit of your business, reviewing your Google rating, Trustpilot score, Instagram and Facebook sentiment, competitor positioning, how Google AI Overviews and ChatGPT present your business, how you rank against competitors across both traditional and AI-driven search, and any reviews that violate platform guidelines. This gives us a clear action plan to improve your online presence within 60–90 days.":
    "نبدأ بتدقيق شامل لسمعة نشاطك: تقييمك على Google، ودرجتك على Trustpilot، واتجاه المشاعر تجاهك على Instagram و Facebook، وموقعك مقارنةً بمنافسيك، والصورة التي تُقدّمها عنك إجابات Google AI Overview و ChatGPT، وترتيبك مقابل المنافسين في البحث التقليدي والبحث المدفوع بالذكاء الاصطناعي، إضافةً إلى أي تقييمات تخالف سياسات المنصات. يمنحنا هذا خطّة عمل واضحة لتحسين حضورك الرقمي خلال 60 إلى 90 يومًا.",
  "We monitor your Google Business Profile and other platforms around the clock. The moment a new harmful review appears, our team is alerted and processes the removal, if the review can not be taken down, we craft professional responses on your behalf that show prospective customers your business takes feedback seriously. You're never caught off guard by a review again.":
    "نراقب ملفك على Google والمنصات الأخرى على مدار الساعة. لحظة ظهور تقييم سلبي جديد، يصل التنبيه إلى فريقنا فورًا، فنباشر بإجراءات الإزالة. وفي حال تعذّر إزالة التقييم، نصوغ نيابةً عنك ردودًا احترافية تُظهر للعملاء المحتملين أن نشاطك يأخذ ملاحظات عملائه بجدّية. لن تُفاجأ بأي تقييم بعد اليوم.",
  "Most businesses see measurable improvement within 30 to 60 days. Review removal cases typically resolve in 1–3 weeks, depending on the platform, and our review generation system starts delivering new 5-star reviews within the first fortnight. By month three, you'll typically see a noticeable rating increase and a stronger first page on Google. Full reputation transformation - including AI Overview positioning and authority building - is a 4–6 month process.":
    "تشهد معظم الأنشطة تحسّنًا قابلًا للقياس خلال 30 إلى 60 يومًا. تُغلق قضايا إزالة التقييمات عادةً خلال 1 إلى 3 أسابيع، حسب المنصة، فيما يبدأ نظامنا لتوليد التقييمات بإحضار تقييمات جديدة بخمس نجوم خلال أول أسبوعين. وبحلول الشهر الثالث، تلاحظ ارتفاعًا واضحًا في تقييمك وصفحة أولى أقوى على Google. أمّا التحوّل الكامل في السمعة — بما يشمل الظهور في AI Overview وبناء المرجعية — فيمتدّ من 4 إلى 6 أشهر.",

  // ─── Misc small ──────────────────────────────────────────────────────────
  "channel": "قناة",
  "Brief message on what you need assistance with - skip if not relevant":
    "رسالة موجزة عمّا تحتاج المساعدة فيه — تجاوزها إن لم تكن ذات صلة",

  // ─── Brand image alts kept minimal (we let brand names stay untranslated)
  "Google 'AI Overview'": "Google 'AI Overview'",
  "Google AI Overview": "Google AI Overview",
  "ChatGPT, Claude, Grok, Meta AI Assistant,": "ChatGPT و Claude و Grok و Meta AI",
  "Apple Siri, Amazon Alexa": "Apple Siri و Amazon Alexa",

  // Connector words to fix where they appear as standalone fragments
  "and": "و",
};
