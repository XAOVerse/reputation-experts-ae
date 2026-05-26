// Native-quality Arabic — second-pass expansion covering body copy across
// the whole site that wasn't in the initial dictionary: Reviews page,
// Pricing extras, Industries grid, About / Services / Contact / Insights
// sections, AI Search page, common industry-page scaffolding, FAQ answers.
//
// Same conventions as ar-dictionary.ts: keys are exact trimmed English
// source strings as rendered in the DOM. Numbers, AED amounts, brand names
// and email addresses are intentionally left in their original form.

export const AR_DICT_EXTRA: Record<string, string> = {
  // ─── Industries grid (homepage + reviews page card labels) ───────────────
  "Industries": "القطاعات التي نخدمها",
  "Restaurants": "المطاعم",
  "Hotels": "الفنادق",
  "Clinics": "العيادات",
  "Salons": "صالونات التجميل",
  "Auto Rental": "تأجير السيارات",
  "Automotive": "السيارات",
  "Real Estate": "العقارات",
  "Aesthetics": "التجميل",
  "Contractors": "المقاولون",
  "Fitness": "اللياقة البدنية",
  "Entertainment": "الترفيه",
  "Retail": "التجزئة",
  "Venues": "صالات الفعاليات",

  // ─── Reviews page — 3-step "We Get To Work" section ──────────────────────
  "We Get To Work": "نبدأ العمل",
  "Step": "الخطوة",
  "STEP 1": "الخطوة الأولى",
  "STEP 2": "الخطوة الثانية",
  "STEP 3": "الخطوة الثالثة",
  "We commit to a target score in writing. Miss it, and we work for free until it is reached.":
    "نلتزم خطيًا بتحقيق هدف محدد لتقييمك. وإن لم نصل إليه، نواصل العمل دون مقابل حتى يتحقق.",
  "Every other reputation agency sells effort. We sell outcomes. The score we agree on day one is the score we have to deliver by day 90, or the work continues at no extra cost until we do.":
    "تبيع كل وكالات إدارة السمعة الأخرى الجهد، أما نحن فنبيع النتائج. التقييم الذي نتفق عليه في اليوم الأول هو ما نلتزم بتحقيقه خلال 90 يومًا، وإلا واصلنا العمل دون أي تكلفة إضافية حتى نصل إليه.",
  "We agree the milestone in writing": "نتفق على الهدف خطيًا",
  "You receive weekly progress reports": "تتلقى تقارير أسبوعية عن التقدم",
  "Miss the milestone, we work for free until it is met":
    "إن لم نحقق الهدف، نعمل مجانًا حتى نصل إليه",
  "Before any work starts we look at your current score, your competitors and your review velocity, and we set the target. For example moving you from 4.2 to 4.6 in 90 days, or adding 80 fresh 5-star reviews per location.":
    "قبل أن نبدأ العمل ندرس تقييمك الحالي ومنافسيك وسرعة تدفّق التقييمات لديك، ثم نضع الهدف. على سبيل المثال: رفع تقييمك من 4.2 إلى 4.6 خلال 90 يومًا، أو إضافة 80 تقييمًا جديدًا من فئة 5 نجوم لكل فرع.",
  "Per location, per platform, with the trend line back to the baseline week. No surprises and no end-of-quarter scrambles to explain what happened.":
    "تقرير لكل فرع، ولكل منصة، مع خط بياني يعود إلى أسبوع البدء. بلا مفاجآت ولا تبريرات في نهاية الربع.",
  "If we do not hit the agreed score by day 90, the engagement continues at no additional cost until we do. The risk sits with us, not you.":
    "إن لم نحقق التقييم المتفق عليه خلال 90 يومًا، يستمر التعاقد دون أي رسوم إضافية حتى نصل إليه. المخاطرة علينا، لا عليك.",

  // ─── Reviews page — hero & headlines ─────────────────────────────────────
  "More 5-star reviews, faster, every month.": "تقييمات 5 نجوم أكثر، وبسرعة أكبر، كل شهر.",
  "Score goes up, guaranteed in 90 days": "ارتفاع مضمون في التقييم خلال 90 يومًا",
  "Hit the agreed score, guaranteed": "تحقيق التقييم المتفق عليه، مع الضمان",
  "Harmful reviews removed": "إزالة التقييمات المسيئة",
  "Review count goes up": "ارتفاع عدد التقييمات",
  "Authentic review growth": "نمو حقيقي للتقييمات",
  "Always-on protection": "حماية مستمرة على مدار الساعة",
  "Always watching, always acting": "نراقب باستمرار، ونتحرّك دائمًا",
  "One score, every location, every week": "تقييم موحد، لكل فرع، وكل أسبوع",
  "Listings optimisation": "تحسين بيانات النشاط التجاري",
  "Reputation Score": "مؤشر السمعة",
  "Reputation": "السمعة",
  "Experts": "خبراء",
  "90-day guarantee": "ضمان 90 يومًا",
  "90-day guarantee on every tier": "ضمان 90 يومًا في كل باقة",
  "90-day score guarantee": "ضمان كتابي لتحسّن التقييم خلال 90 يومًا",
  "Review growth in 90 days": "نمو التقييمات خلال 90 يومًا",
  "Free Reputation Audit": "تدقيق مجاني للسمعة",
  "Free Case Assessment": "تقييم مجاني للحالة",
  "Strategy Call": "مكالمة استراتيجية",
  "Frequently asked questions": "الأسئلة الشائعة",
  "General Inquiries": "استفسارات عامة",
  "Get in touch": "تواصل معنا",
  "What happens after": "ماذا يحدث بعد ذلك",
  "Why this matters": "لماذا يهمك ذلك",
  "The fixes, ranked by impact": "الحلول، مرتّبة حسب الأثر",

  // ─── Reviews page — long descriptive paragraphs ──────────────────────────
  "A single, honest read on how your brand is being judged online.":
    "قراءة واحدة وصادقة لكيفية تقييم العملاء لعلامتك التجارية على الإنترنت.",
  "Star rating, review velocity, sentiment trend, response time and competitor benchmarks rolled into a single number per location. No spreadsheets, no logging into seven different platforms, no guessing":
    "عدد النجوم، وسرعة تدفّق التقييمات، واتجاه المشاعر، وسرعة الردود، ومقارنات المنافسين، كلها مدمجة في رقم واحد لكل فرع. لا جداول، ولا تنقّل بين سبع منصات، ولا تخمين.",
  "A weak review profile is a quiet, expensive leak across every channel you already pay for.":
    "ضعف ملف تقييماتك يعني تسرّبًا صامتًا ومكلفًا في كل قناة تسويقية تدفع لها بالفعل.",
  "When two listings sit side by side, the lower-rated one is invisible. Even a single recent 1-star review can sink booking intent for weeks. The buyer never even calls, so you never get the chance to win them back.":
    "حين يظهر نشاطان جنبًا إلى جنب، يختفي ذو التقييم الأدنى تمامًا من ذهن العميل. تقييم واحد بنجمة واحدة قد يُسقط نية الحجز لأسابيع. العميل لن يتصل بك أصلًا، فلا تحصل على فرصة لاستعادته.",
  "Customers walk past anything under 4.5 stars": "العملاء يتجاوزون أي تقييم أقل من 4.5 نجوم",
  "Your paid ad spend pays for the click, then dies on the listing":
    "إعلاناتك المدفوعة تدفع ثمن النقرة، ثم تموت عند صفحة نشاطك",
  "AI engines stop recommending you":
    "محرّكات الذكاء الاصطناعي تتوقّف عن التوصية بك",
  "You disappear from the Google Maps trust filter":
    "تختفي من فلتر الثقة في خرائط Google",
  "ChatGPT, Google AI Overview, Perplexity and Gemini weight review depth, recency and sentiment heavily when deciding which brands to mention. A thin or aging review profile means the AI quietly skips you in favor of competitors.":
    "تعتمد ChatGPT و Google AI Overview و Perplexity و Gemini بشكل كبير على عمق التقييمات وحداثتها واتجاه المشاعر عند اختيار العلامات التي توصي بها. الملف الضعيف أو القديم يعني أن الذكاء الاصطناعي يتجاوزك بصمت لصالح منافسيك.",
  "Maps users skim ratings and review count before they read anything else. A low rating or fewer than 50 recent reviews and you fall out of the local trust pool entirely.":
    "مستخدمو الخرائط يلقون نظرة سريعة على التقييم وعدد المراجعات قبل أي شيء آخر. إن كان تقييمك منخفضًا أو أن لديك أقل من 50 تقييمًا حديثًا، فستخرج تمامًا من دائرة الثقة المحلية.",
  "A prospect sees your ad, clicks the location, sees a thin or negative review profile, and chooses a competitor instead. You paid for the click. They got the customer.":
    "العميل المحتمل يرى إعلانك، ينقر على العنوان، يجد ملف تقييمات ضعيفًا أو سلبيًا، فيختار منافسك. أنت دفعت ثمن النقرة، وهو حصل على العميل.",

  // ─── Reviews FAQ ─────────────────────────────────────────────────────────
  "Can you actually remove harmful or fake reviews?":
    "هل يمكنكم فعلًا إزالة التقييمات المسيئة أو المزيّفة؟",
  "Can you exclude unhappy customers from review campaigns?":
    "هل بإمكانكم استبعاد العملاء غير الراضين من حملات جمع التقييمات؟",
  "Do you ever ask customers to write fake reviews?":
    "هل تطلبون من العملاء كتابة تقييمات مزيفة؟",
  "Do you handle defamation and copyright takedowns too?":
    "هل تتعاملون كذلك مع التشهير وانتهاك حقوق الملكية؟",
  "Do you replace my marketing agency or work alongside them?":
    "هل تحلّون محل وكالة التسويق الحالية أم تعملون إلى جانبها؟",
  "Do you use AI to write the responses to my reviews?":
    "هل تستخدمون الذكاء الاصطناعي لكتابة الردود على التقييمات؟",
  "How many platforms do you actually grow reviews on?":
    "على كم منصة تعملون فعليًا على تنمية التقييمات؟",
  "How quickly will I see results?": "كم تحتاج من الوقت حتى أرى نتائج؟",
  "What does the 90-day score guarantee actually cover?":
    "ما الذي يغطّيه فعليًا ضمان التقييم خلال 90 يومًا؟",
  "What's the listings optimisation, and why does it affect ranking?":
    "ما المقصود بتحسين بيانات النشاط، ولماذا يؤثّر على الترتيب؟",
  "Will more reviews actually move my AI Overview and ChatGPT visibility?":
    "هل سيؤثر ارتفاع عدد التقييمات حقًا على ظهوري في Google AI Overview و ChatGPT؟",
  "Are these prices final, or are there extra fees?":
    "هل هذه الأسعار نهائية، أم أن هناك رسومًا إضافية؟",

  // ─── FAQ answers ─────────────────────────────────────────────────────────
  "Yes — directly. AI engines treat review depth, recency and sentiment as primary signals when deciding which businesses to name in an answer. A business with 600 fresh reviews above 4.6 stars is dramatically more likely to be recommended than one with 80 reviews from two years ago.":
    "نعم — وبشكل مباشر. تتعامل محرّكات الذكاء الاصطناعي مع عمق التقييمات وحداثتها واتجاه مشاعرها كإشارات رئيسية عند اختيار الأسماء التي تُذكر في الإجابات. الشركة التي لديها 600 تقييم حديث بمعدل أعلى من 4.6 نجوم تحظى بفرصة أكبر بكثير في التوصية مقارنةً بشركة لديها 80 تقييمًا تعود لعامين.",
  "Of all the harmful reviews our clients flag, we successfully take down 78%. The rest are suppressed beneath a steady flow of authentic positive reviews so the harmful content stops being the first thing a customer sees.":
    "من بين كل التقييمات المسيئة التي يرفعها لنا عملاؤنا، نزيل 78% منها بنجاح. أما الباقي فنُغرقه ضمن تدفّق مستمر من التقييمات الإيجابية الحقيقية، حتى يتوقّف ظهور المحتوى المسيء كأوّل ما يراه العميل.",
  "No, ever. Fake reviews are a fast way to get a business permanently delisted from Google and Trustpilot, and they will not move the AI signal anyway. Everything we do is built on real customer outreach to real customers.":
    "لا، أبدًا. التقييمات المزيّفة هي أسرع طريق لشطب نشاطك نهائيًا من Google و Trustpilot، كما أنها لا تُحرّك إشارات الذكاء الاصطناعي على أي حال. كل ما نقوم به مبنيّ على التواصل الحقيقي مع عملاء حقيقيين.",
  "We do not gate reviews — that breaches platform policy. What we do is route the request differently: an unhappy customer who completes our follow-up gets a private recovery flow first (your team gets a chance to fix it), and only then is the request to review issued. The choice to leave a public review always remains the customer's.":
    "نحن لا نمنع العملاء من ترك التقييمات — فذلك يخالف سياسة المنصات. ما نفعله هو توجيه الطلب بشكل مختلف: العميل غير الراضي الذي يكمل استبيان المتابعة يدخل أولًا في مسار خاص لاستعادة رضاه (يحصل فريقك على فرصة لمعالجة المشكلة)، وبعد ذلك فقط يُرسل طلب التقييم. يبقى قرار ترك التقييم العلني دومًا بيد العميل نفسه.",
  "Yes. For posts that cross into defamation or impersonate your business, we coordinate the formal takedown notices each platform requires. For competitors or scraper sites using your photos, branding or copy without permission, we file DMCA-equivalent takedowns and recover the content within days.":
    "نعم. بالنسبة للمنشورات التي تصل إلى حدّ التشهير أو انتحال هوية نشاطك، نتولّى تنسيق طلبات الإزالة الرسمية وفق متطلبات كل منصة. أما المنافسون أو المواقع التي تستخدم صورك أو هويتك أو محتواك دون إذن، فنرفع طلبات إزالة معادلة لـ DMCA ونستعيد المحتوى خلال أيام.",
  "Either. Most clients keep their ads and content agency, and use us as the reputation layer underneath that makes the rest of their spend work harder. We don't run paid media or social content — we focus on what we do best.":
    "كلاهما ممكن. معظم عملائنا يحتفظون بوكالة الإعلانات والمحتوى لديهم، ويستعينون بنا كطبقة سمعة تحتها، تجعل بقية إنفاقهم التسويقي أكثر فاعلية. نحن لا ندير الإعلانات المدفوعة ولا محتوى التواصل الاجتماعي — نركّز على ما نُجيده.",
  "Nearly 200 in total, but the work concentrates on the eight to twelve that matter most for your category — typically Google, Trustpilot, Tripadvisor, Yelp, Facebook, Apple Business Connect, Bing Places and the two or three category-specific platforms your buyers actually consult before deciding.":
    "ما يقارب 200 منصة إجمالًا، لكن العمل يتركّز على ثماني إلى اثنتي عشرة منصة هي الأهمّ لقطاعك — عادةً Google و Trustpilot و Tripadvisor و Yelp و Facebook و Apple Business Connect و Bing Places إضافةً إلى المنصتين أو الثلاث منصات المتخصّصة بقطاعك التي يرجع إليها عملاؤك فعلًا قبل اتخاذ القرار.",
  "Most clients see meaningful score movement and visible review velocity inside the first 30 days. By day 90 the agreed target is hit — the written 90-day guarantee makes that explicit.":
    "يلاحظ معظم العملاء تحرّكًا فعليًا في التقييم وارتفاعًا واضحًا في وتيرة التقييمات خلال أوّل 30 يومًا. وبحلول اليوم التسعين يكون الهدف المتفق عليه قد تحقّق — وهذا ما يضمنه عقدنا الكتابي صراحةً.",
  "Every removal attempt runs against a 14-day service-level agreement. If we cannot remove the review within that window, you owe nothing. Each subscription tier comes with free removals included every month.":
    "تجري كل محاولة إزالة وفق اتفاقية مستوى خدمة مدّتها 14 يومًا. إن لم نستطع إزالة التقييم خلال هذه المدة، فلا شيء عليك. كل باقة اشتراك تتضمّن إزالات مجانية كل شهر.",

  // ─── Reviews page — additional supporting copy ───────────────────────────
  "Defamation and impersonation handled": "معالجة التشهير وانتحال الهوية",
  "False claims, defamatory posts, fake accounts and impersonation of your brand are taken down at source.":
    "الادّعاءات الكاذبة والمنشورات التشهيرية والحسابات المزيّفة وانتحال علامتك التجارية، تُزال من مصدرها.",
  "Stolen images and content recovered": "استرداد الصور والمحتوى المسروق",
  "Photos, branding, treatment results, copy, anything of yours that a competitor or scraper site is using without permission, recovered.":
    "الصور، والهوية البصرية، ونتائج الأعمال، والمحتوى، أي شيء يخصّك يستخدمه منافس أو موقع نسخ دون إذن، نسترجعه لك.",
  "Harmful content gone the moment it appears.": "إزالة المحتوى المسيء في اللحظة التي يظهر فيها.",
  "Reputation damage happens in the hours between when something bad goes live and when anyone on your team notices. Our monitoring engine flags it the moment it appears and triggers the right response — dispute, takedown, or counter-narrative — before it spreads.":
    "ضرر السمعة يحدث في الساعات الفاصلة بين ظهور المحتوى السيئ وبين انتباه فريقك له. محرّك المراقبة لدينا يرصده فور ظهوره ويُطلق الاستجابة المناسبة — اعتراض، طلب إزالة، أو محتوى مضاد — قبل أن ينتشر.",
  "Every listing accurate, optimised and read correctly by search and AI engines.":
    "كل بيانات نشاطك دقيقة ومُحسَّنة وتقرأها محركات البحث والذكاء الاصطناعي بشكل صحيح.",
  "We audit your Google Business Profile, Apple Business Connect, Bing Places and the long tail of category-specific listings, roughly 200 sites in total, and align them so every NAP detail, category, operating hour and service area matches.":
    "نُجري تدقيقًا شاملًا لبيانات نشاطك على Google Business Profile و Apple Business Connect و Bing Places والمنصات المتخصّصة بقطاعك، نحو 200 موقع إجمالًا، ونوحّدها لضمان تطابق الاسم والعنوان والهاتف، والفئة، وساعات العمل، ومناطق الخدمة.",
  "On your own website we insert the JSON-LD schema markup (LocalBusiness, Service, FAQ, Review) that Google AI Overview, ChatGPT and Perplexity read to decide whether you exist and whether you are worth recommending.":
    "نُضيف على موقعك بيانات JSON-LD الوصفية (LocalBusiness، Service، FAQ، Review) التي تقرؤها محركات Google AI Overview و ChatGPT و Perplexity لتقرر ما إذا كنت موجودًا وما إذا كنت تستحقّ التوصية بك.",
  "Google, Apple, Bing and category-specific directories all read structured data — JSON-LD schema markup — to understand who you are, what you offer, and whether to recommend you. Inconsistent listings cost you ranking and trust signals.":
    "Google و Apple و Bing وأدلة الفئات تقرأ كلها البيانات المنظَّمة — JSON-LD — لتفهم من أنت، وماذا تُقدّم، وهل توصي بك أم لا. تضارب بيانات نشاطك يُضعف ترتيبك وإشارات الثقة لديك.",
  "Most businesses notice the symptoms first, fewer enquiries, lower marketing ROI, dropping organic traffic, and only later trace it back to a reputation problem.":
    "تلاحظ معظم الشركات الأعراض أولًا — تراجع الاستفسارات، وضعف عائد التسويق، وانخفاض الزيارات العضوية — ثم تكتشف لاحقًا أن السبب يعود إلى مشكلة في السمعة.",
  "What is removable, we remove. What is not, we suppress. Either way the content stops costing you customers.":
    "ما يمكن إزالته نزيله، وما يتعذّر إزالته نُخفيه بدفنه تحت محتوى أقوى. في الحالتين، يتوقّف المحتوى عن إفقادك العملاء.",
  "We remove harmful reviews from Google, Trustpilot, Tripadvisor, Yelp and every major platform. The ones that cannot be taken down outright are suppressed beneath a steady flow of authentic positive reviews.":
    "نُزيل التقييمات المسيئة من Google و Trustpilot و Tripadvisor و Yelp وكافة المنصات الكبرى. أما التي لا يمكن إزالتها مباشرةً، فنُغرقها تحت تدفّق مستمر من التقييمات الإيجابية الحقيقية.",
  "We run authentic review growth campaigns across nearly 200 platforms, dispute and remove harmful content, optimise every listing with the structured-data markup search engines and AI engines actually read, and report back weekly.":
    "نُنفّذ حملات حقيقية لنمو التقييمات على ما يقارب 200 منصة، ونعترض على المحتوى المسيء ونعمل على إزالته، ونُحسّن بيانات كل منصة بالبيانات المنظَّمة التي تقرؤها محركات البحث والذكاء الاصطناعي فعليًا، ونقدّم تقريرًا أسبوعيًا.",
  "We grow your review count and lift your score. Backed by a written 90-day guarantee, miss the target, we work for free until it is met.":
    "نُنمّي عدد تقييماتك ونرفع تقييمك العام. مدعومًا بضمان كتابي مدّته 90 يومًا — إن لم نحقق الهدف، نعمل مجانًا حتى نصل إليه.",
  "You see more authentic 5-star reviews on Google, Trustpilot, Tripadvisor and every platform that matters to your buyers, every single month. New volume, fresh dates, real customers. The kind of cadence buyers and AI engines both treat as a genuine signal of demand.":
    "ستجد تقييمات حقيقية بخمس نجوم على Google و Trustpilot و Tripadvisor وكل منصة يهتمّ بها عملاؤك، شهرًا بعد شهر. حجم جديد، وتواريخ حديثة، وعملاء حقيقيون. هذا هو الإيقاع الذي يعتبره كلٌّ من العملاء ومحركات الذكاء الاصطناعي إشارةً صادقة على الطلب الحقيقي.",
  "Before we start we agree a written target — typically the move from your current average star rating to a higher one, or a fresh review-count milestone per location.":
    "قبل أن نبدأ نتفق خطيًا على هدف محدّد — عادةً الانتقال من معدل النجوم الحالي إلى معدل أعلى، أو الوصول إلى عدد تقييمات جديدة لكل فرع.",
  "Before we start we agree the target score in writing. By day 90 we have hit it, or the work continues at no extra cost until we do.":
    "قبل أن نبدأ نتفق خطيًا على التقييم المستهدف. بحلول اليوم التسعين نكون قد حقّقناه، وإلا واصلنا العمل دون أي تكلفة إضافية حتى نصل إليه.",
  "Every client gets a written 90-day score target. Miss it and we work for free until we reach it.":
    "كل عميل يحصل على هدف كتابي لتقييمه خلال 90 يومًا. وإن لم نصل إليه، نواصل العمل مجانًا حتى نحقّقه.",
  "We start strengthening your online reputation immediately, from review removal and rating growth to Google AI Overview visibility, search positioning, and major media authority. You begin seeing movement within the first month and the written target is hit by day 90.":
    "نبدأ فورًا بتعزيز سمعتك الرقمية — من إزالة التقييمات المسيئة ورفع تقييمك العام، إلى الظهور في Google AI Overview، وتحسين موقعك في نتائج البحث، وبناء مرجعية إعلامية في كبرى المنصات. تبدأ رؤية النتائج خلال الشهر الأول، ويتحقّق الهدف المكتوب بحلول اليوم التسعين.",
  "We successfully remove around 78% of the reviews our clients flag. Anything that breaches the platform's policy — fake, off-topic, conflict-of-interest, harassment, hate speech, content from people who were never customers — comes down. The remainder we suppress beneath fresh positive reviews so the negative content stops being the first thing a buyer sees.":
    "نُزيل بنجاح نحو 78% من التقييمات التي يرفعها عملاؤنا. كل ما يخالف سياسات المنصات — مزيّف، خارج الموضوع، تعارض مصالح، تحرّش، خطاب كراهية، أو محتوى من أشخاص لم يكونوا عملاء أصلًا — نُزيله. أما ما تبقّى، فنُخفيه تحت تقييمات إيجابية جديدة حتى يتوقّف ظهور المحتوى السلبي كأوّل ما يراه العميل.",
  "We review your Google, Trustpilot, and social profiles within 24 hours and identify every review that can be challenged.":
    "نُراجع ملفّاتك على Google و Trustpilot وشبكات التواصل خلال 24 ساعة، ونحدّد كل تقييم يمكن الاعتراض عليه.",
  "A reputation consultant walks you through the findings, explains your options, and recommends a tailored plan.":
    "يستعرض معك مستشار السمعة النتائج، ويشرح لك خياراتك، ويقترح خطة عمل مفصّلة على مقاسك.",
  "Your reputation manager turns the report into the next 30 days of work, ranked by which moves will lift your score the fastest. No vanity metrics, no slides padding out the deck, just the work that changes the number.":
    "يحوّل مدير سمعتك التقرير إلى خطّة عمل للثلاثين يومًا القادمة، مرتّبة وفق الإجراءات التي ترفع تقييمك بأسرع شكل. لا مؤشرات تجميلية، ولا شرائح عرض حشو، فقط العمل الذي يُحرّك الرقم.",

  // ─── Reviews page — contact bar ──────────────────────────────────────────
  "Tell us what you need and we'll get back within 24 hours with a tailored plan.":
    "أخبرنا بما تحتاجه، وسنعود إليك خلال 24 ساعة بخطّة عمل مصمّمة خصيصًا لك.",
  "Join businesses across the UAE who trust us to protect and grow their online presence.":
    "انضمّ إلى الشركات في كافة الإمارات التي تثق بنا لحماية حضورها الرقمي وتنميته.",
  "Let's build a reputation your business deserves.":
    "لِنبنِ معًا السمعة التي يستحقّها نشاطك.",
  "We respect your time - no spam, no endless calls.":
    "نحترم وقتك — بلا رسائل مزعجة ولا مكالمات لا تنتهي.",
  "We respect your time — no spam, no endless calls.":
    "نحترم وقتك — بلا رسائل مزعجة ولا مكالمات لا تنتهي.",
  "Band / company name": "اسم الشركة / النشاط",
  "Message (optional)": "الرسالة (اختياري)",
  "Google Maps / Trustpilot Link": "رابط Google Maps / Trustpilot",
  "Write us on": "راسلنا عبر",
  "I confirm that I have read, consent and agree to our":
    "أؤكّد أنني قرأت ووافقت على",
  "I submit a request?": "ما الذي يحدث بعد إرسال الطلب؟",
  "The #1 Reputation Management Platform, boosting positive reviews and removing harmful content that damages your brand.":
    "المنصّة الأولى لإدارة السمعة الرقمية — نرفع التقييمات الإيجابية ونُزيل المحتوى المسيء الذي يضرّ بعلامتك.",

  // ─── Footer / cookie ─────────────────────────────────────────────────────
  "We use cookies to enhance your browsing experience.":
    "نستخدم ملفات تعريف الارتباط لتحسين تجربتك في تصفّح الموقع.",
  "Decline": "رفض",

  // ─── Pricing page — additional rows ──────────────────────────────────────
  "Account team": "فريق إدارة الحساب",
  "Apply to Enterprise": "تقدّم لباقة الشركات الكبرى",
  "Authority Press": "تغطية صحفية مرجعية",
  "Authority Press (Bloomberg, Reuters, Khaleej Times, Forbes, etc.)":
    "تغطية صحفية مرجعية (Bloomberg و Reuters و الخليج تايمز و Forbes وغيرها)",
  "AI search visibility": "الظهور في البحث بالذكاء الاصطناعي",
  "Crisis response": "الاستجابة للأزمات",
  "Discount on additional removals": "خصم على عمليات الإزالة الإضافية",
  "Email + SMS": "بريد إلكتروني + رسائل نصية",
  "Email + SMS + WhatsApp": "بريد إلكتروني + رسائل نصية + واتساب",
  "English": "الإنجليزية",
  "English + Arabic": "الإنجليزية + العربية",
  "5 languages": "5 لغات",
  "8 languages": "8 لغات",
  "12 languages": "12 لغة",
  "Ethical only": "حصرًا بأساليب أخلاقية",
  "0 free": "بدون إزالات مجانية",
  "1 free / month": "إزالة مجانية واحدة شهريًا",
  "3 free / month": "3 إزالات مجانية شهريًا",
  "10 free / month": "10 إزالات مجانية شهريًا",
  "20% off Pay-as-you-go": "خصم 20% على ادفع حسب الاستخدام",
  "30% off Pay-as-you-go": "خصم 30% على ادفع حسب الاستخدام",
  "40% off Pay-as-you-go": "خصم 40% على ادفع حسب الاستخدام",
  "50% off Pay-as-you-go": "خصم 50% على ادفع حسب الاستخدام",
  "14-day SLA": "اتفاقية خدمة 14 يومًا",
  "1 hr, 24/7": "ساعة واحدة، 24/7",
  "2 hr, 24/7": "ساعتان، 24/7",
  "6 hr": "6 ساعات",
  "12 hr": "12 ساعة",
  "24 hr": "24 ساعة",
  "Every other reputation agency sells effort. We sell outcomes. The score we agree on day one is the score we have to deliver by day 90, or the work continues at no extra cost until we do. This applies to every tier.":
    "تبيع كل وكالات إدارة السمعة الأخرى الجهد، أما نحن فنبيع النتائج. التقييم الذي نتفق عليه في اليوم الأول هو ما نلتزم بتحقيقه خلال 90 يومًا، وإلا واصلنا العمل دون أي تكلفة إضافية حتى نصل إليه. وهذا ينطبق على كل الباقات.",
  "ChatGPT": "ChatGPT",
  "Claude": "Claude",

  // ─── Common stat strings ─────────────────────────────────────────────────
  "Average lift in authentic 5-star reviews for new clients in their first quarter with us.":
    "متوسط الارتفاع في التقييمات الإيجابية الحقيقية بخمس نجوم لعملائنا الجدد خلال الربع الأول من التعاون معنا.",

  // ─── Misc page-level ─────────────────────────────────────────────────────
  "Reviews — Reputation Experts | Grow positive reviews, remove harmful content, 90-day guarantee | Reputation Experts":
    "التقييمات — خبراء السمعة | تنمية التقييمات الإيجابية وإزالة المحتوى المسيء مع ضمان 90 يومًا | خبراء السمعة",

  // ─── Industry-page hero scaffolding (shared across 14 industries) ────────
  "Why we focus on": "لماذا نركّز على",
  "Why this industry": "لماذا هذا القطاع",
  "Reputation matters because": "السمعة تهمّ لأن",
  "Common challenges": "تحديات شائعة",
  "How we solve it": "كيف نعالج الأمر",
  "Specialist team": "فريق متخصص",
  "What we deliver": "ما الذي نُقدّمه لك",
  "Results you can expect": "نتائج يمكنك توقّعها",
  "Get a free industry audit": "احصل على تدقيق مجاني لقطاعك",

  // ─── About page ──────────────────────────────────────────────────────────
  "About us": "من نحن",
  "Built for businesses that take their reputation seriously.":
    "مصمّم للشركات التي تتعامل مع سمعتها بجدّية.",
  "We are a Dubai-based reputation team": "نحن فريق متخصّص في إدارة السمعة، مقرّه دبي",
  "Founded by reputation specialists who saw too many good businesses suffer in silence.":
    "أسّسناه بأيدي متخصّصين في إدارة السمعة، شاهدوا الكثير من الشركات الجيّدة تعاني بصمت.",
  "Our promise": "وعدنا لك",
  "Confidential by default": "السرية كقاعدة عمل",
  "Results before invoices": "النتائج قبل الفواتير",
  "Senior team, no juniors on your account": "فريق كبار الخبراء، بلا متدرّبين على حسابك",

  // ─── Services page ───────────────────────────────────────────────────────
  "All the services you need to take control of your online reputation.":
    "كل الخدمات التي تحتاجها لاستعادة زمام سمعتك الرقمية.",
  "End-to-end reputation management": "إدارة شاملة للسمعة من البداية إلى النهاية",
  "Pick a module or take the full stack": "اختر خدمة محدّدة، أو احصل على الحزمة الكاملة",

  // ─── Contact page ────────────────────────────────────────────────────────
  "Tell us about your reputation challenge": "أخبرنا عن التحدّي الذي تواجهه في سمعتك",
  "We typically respond within": "نردّ عادةً خلال",
  "1 business day": "يوم عمل واحد",
  "24 hours": "24 ساعة",
  "Mon-Fri 9am-6pm GST": "من الإثنين إلى الجمعة، 9 صباحًا - 6 مساءً (بتوقيت الخليج)",
  "Speak to us in English or Arabic": "تواصل معنا بالإنجليزية أو العربية",
  "All conversations are confidential": "كل محادثاتنا تخضع للسرية التامة",

  // ─── Insights / Blog ─────────────────────────────────────────────────────
  "Insights & analysis on online reputation in the GCC.":
    "مقالات وتحليلات في إدارة السمعة الرقمية في دول الخليج.",
  "All categories": "كل الفئات",
  "Featured": "مقالات مختارة",
  "Most read": "الأكثر قراءة",
  "Search articles": "ابحث في المقالات",
  "Subscribe to insights": "اشترك في النشرة",
  "Get monthly analysis in your inbox.": "تصلك تحليلاتنا الشهرية في بريدك مباشرةً.",
  "No spam, unsubscribe anytime.": "بلا رسائل مزعجة، يمكنك إلغاء الاشتراك في أي وقت.",
  "Subscribe to our newsletter": "اشترك في النشرة البريدية",
  "Your email address": "بريدك الإلكتروني",

  // ─── AI Search page ──────────────────────────────────────────────────────
  "Be the brand AI recommends.": "كن العلامة التي يوصي بها الذكاء الاصطناعي.",
  "Get cited in ChatGPT, Google AI Overview, Perplexity and Gemini.":
    "احصل على ذكر علامتك في ChatGPT و Google AI Overview و Perplexity و Gemini.",
  "Why AI search matters now": "لماذا يهمّك البحث بالذكاء الاصطناعي الآن",
  "How AI engines decide who to recommend": "كيف تختار محرّكات الذكاء الاصطناعي من توصي به",
  "Get cited, not skipped": "اظهر في الإجابات، لا تُتجاوز",
  "AI search audit": "تدقيق الظهور في البحث بالذكاء الاصطناعي",
  "Free AI Search Audit": "تدقيق مجاني للظهور في البحث الذكي",

  // ─── Common misc UI ──────────────────────────────────────────────────────
  "We Get In Touch": "نتواصل معك",
  "Get Your Free Audit": "احصل على تدقيقك المجاني",
  "Request a callback": "اطلب معاودة الاتصال",
  "Privacy policy": "سياسة الخصوصية",
  "Terms of service": "شروط الخدمة",
  "Cookie preferences": "تفضيلات ملفات تعريف الارتباط",
  "©": "©",
};
