// Native-quality Arabic — sixth pass: targeted fixes for /reviews after
// minor copy edits to the page broke earlier dictionary matches (the
// paragraphs were edited slightly so the trimmed text no longer matched
// our previous keys). Also covers new dashboard alt-text and aria-labels.

export const AR_DICT_REVIEWS_V2: Record<string, string> = {

  // ─── Section aria-labels ────────────────────────────────────────────────
  "Reviews hero": "القسم الرئيسي للتقييمات",
  "Reviews FAQ": "أسئلة شائعة عن التقييمات",
  "Reviews outcomes": "نتائج التقييمات",
  "Review growth": "نمو التقييمات",
  "Listing optimisation": "تحسين بيانات النشاط",
  "Ongoing protection": "حماية مستمرة",
  "The cost of weak reviews": "تكلفة ضعف ملف التقييمات",

  // ─── Dashboard / mock-screenshot alt-text ───────────────────────────────
  "Reputation Experts dashboard showing reviews growth and per-location score tracking across Dubai locations.":
    "لوحة خبراء السمعة تعرض نمو التقييمات وتتبّع تقييم كل فرع عبر فروع دبي.",
  "Reputation Experts dashboard showing review monitoring, location-level scores, and AI-powered review request campaigns across major platforms.":
    "لوحة خبراء السمعة تعرض مراقبة التقييمات، وتقييمات الفروع، وحملات طلب التقييم المدفوعة بالذكاء الاصطناعي عبر كبرى المنصات.",
  "Reputation Score tracking dashboard showing star rating, review count, response rate and score over time across Dubai locations.":
    "لوحة تتبّع مؤشر السمعة تعرض عدد النجوم، وعدد التقييمات، ونسبة الردود، وتطوّر المؤشر مع الوقت عبر فروع دبي.",
  "Always-on reputation monitoring dashboard tracking new mentions, flagged content and removal outcomes across locations.":
    "لوحة مراقبة دائمة للسمعة تتتبّع الإشارات الجديدة، والمحتوى الذي تمّ رفعه، ونتائج طلبات الإزالة عبر الفروع.",
  "Listing Score dashboard showing per-platform accuracy and discoverability across Google, Apple, Bing and category-specific directories.":
    "لوحة مؤشر بيانات النشاط تعرض دقّتها وقابليتها للاكتشاف لكل منصّة على Google و Apple و Bing والأدلة المتخصصة بالقطاع.",

  // ─── Updated paragraph variants (after copy edits on /reviews) ───────────
  "A prospect sees your ad, clicks the location, sees a thin or negative review profile, and chooses a competitor. You paid for the impression, the click and the bid premium, and the conversion went next door. Every marketing dirham you spend is mid-funnel; the reviews are the funnel's last gate.":
    "العميل المحتمل يرى إعلانك، ينقر على العنوان، يجد ملف تقييمات ضعيفًا أو سلبيًا، فيختار منافسك. أنت دفعت ثمن الظهور، والنقرة، وعلاوة المزايدة — وذهب التحويل إلى الجوار. كل درهم تُنفقه على التسويق يقع في منتصف القمع، والتقييمات هي البوّابة الأخيرة فيه.",
  "Before we start we agree a written target — typically the move from your current average star rating to a higher one (e.g. 4.2 to 4.6), plus a minimum number of fresh authentic reviews per location. If we don't hit those numbers by day 90, the work continues at no additional cost until we do.":
    "قبل أن نبدأ نتفق خطيًا على هدف محدّد — عادةً الانتقال من معدل النجوم الحالي إلى معدل أعلى (مثلًا من 4.2 إلى 4.6)، مع حدّ أدنى من التقييمات الحقيقية الجديدة لكل فرع. إن لم نصل إلى هذه الأرقام بحلول اليوم التسعين، يستمرّ العمل دون أي تكلفة إضافية حتى نصل إليها.",
  "Before we start we agree the target score in writing. By day 90 we have hit it, or the work continues at no extra cost until we do. The outcome sits with us, not you, which is how this work should be sold.":
    "قبل أن نبدأ نتفق خطيًا على التقييم المستهدف. بحلول اليوم التسعين نكون قد حقّقناه، وإلا واصلنا العمل دون أي تكلفة إضافية حتى نصل إليه. النتيجة تقع على عاتقنا، لا على عاتقك — وهذه هي الطريقة التي يجب أن تُباع بها هذه الخدمة.",
  "ChatGPT, Google AI Overview, Perplexity and Gemini weight review depth, recency and sentiment heavily. A weak profile means the AI suggests a competitor by name, and you never appear in the answer at all. AI traffic is the fastest-growing top-of-funnel source in Dubai right now.":
    "تعتمد ChatGPT و Google AI Overview و Perplexity و Gemini بشكل كبير على عمق التقييمات وحداثتها واتجاه المشاعر. الملف الضعيف يعني أن الذكاء الاصطناعي يُسمّي منافسك في الإجابة، وأنت لا تظهر فيها إطلاقًا. الزيارات القادمة من الذكاء الاصطناعي هي اليوم أسرع مصدر نموًا في أعلى قمع المبيعات بدبي.",
  "Either. Most clients keep their ads and content agency, and use us as the reputation layer underneath. Some hand us the full presence — listings, reviews, schema, AI search, PR — and we coordinate with their internal marketing team on the brand work.":
    "كلاهما ممكن. معظم العملاء يحتفظون بوكالة الإعلانات والمحتوى لديهم، ويستعينون بنا كطبقة سمعة تحتها. والبعض يُسلّمنا الحضور الرقمي كاملًا — بيانات النشاط، التقييمات، البيانات المنظَّمة، البحث الذكي، العلاقات العامة — ونتولّى التنسيق مع فريقه التسويقي الداخلي في ما يخصّ علامته التجارية.",
  "False claims, defamatory posts, fake accounts and impersonation of your brand are taken down at source. Your name is protected on every channel your customers and prospects look at.":
    "الادّعاءات الكاذبة والمنشورات التشهيرية والحسابات المزيّفة وانتحال علامتك التجارية، تُزال من مصدرها. اسمك محميّ على كل قناة يطّلع عليها عملاؤك ومحتملوك.",
  "Google, Apple, Bing and category-specific directories all read structured data — JSON-LD schema markup like LocalBusiness, Service, FAQ and Review — to understand and rank a business. Most competitor sites have none of it set up correctly. We do.":
    "Google و Apple و Bing وأدلة الفئات المتخصّصة، كلها تقرأ البيانات المنظَّمة — تعليمات JSON-LD مثل LocalBusiness و Service و FAQ و Review — لتفهم ترتيب الأنشطة. معظم مواقع المنافسين لا تطبّق أيًّا منها بشكل صحيح. نحن نطبّقها.",
  "Maps users skim ratings and review count before they read anything else. A low rating or fewer than 20 reviews drops your click-through rate to a fraction of what it should be, even when you outrank competitors on map position.":
    "مستخدمو الخرائط يُلقون نظرة سريعة على التقييم وعدد المراجعات قبل أي شيء آخر. التقييم المنخفض أو أقلّ من 20 تقييمًا يُسقط نسبة النقرات إلى جزء بسيط ممّا يجب أن تكون، حتى وإن كنت تتقدّم منافسيك في موقع الخريطة.",
  "Most businesses notice the symptoms first, fewer enquiries, lower marketing ROI, dropping organic traffic, long before they trace it back to reviews. By the time the pattern is obvious, six to twelve months of revenue have already gone.":
    "تلاحظ معظم الشركات الأعراض أوّلًا — تراجع الاستفسارات، وضعف عائد التسويق، وانخفاض الزيارات العضوية — قبل وقت طويل من ربط ذلك بضعف ملف التقييمات. وبحلول الوقت الذي يتّضح فيه النمط، تكون من ستة إلى اثني عشر شهرًا من الإيرادات قد ضاعت.",
  "Most clients see meaningful score movement and visible review velocity inside the first 30 days. By day 60, AI engines and Google Maps typically begin re-ranking the business upward. The full 90 days is needed for the harmful-content removals to complete and the written score target to be hit.":
    "يلاحظ معظم العملاء تحرّكًا فعليًا في التقييم وارتفاعًا واضحًا في وتيرة التقييمات خلال أوّل 30 يومًا. وبحلول اليوم الستين، تبدأ محرّكات الذكاء الاصطناعي وخرائط Google عادةً بإعادة ترتيب النشاط إلى الأعلى. أمّا الـ 90 يومًا كاملةً فنحتاجها لاستكمال إزالة المحتوى المسيء وتحقيق التقييم المستهدف المتّفق عليه خطيًا.",
  "Nearly 200 in total, but the work concentrates on the eight to twelve that matter most for your category. Every business gets Google, Trustpilot, Facebook and Apple as a baseline; from there we layer in the trade-specific platforms your buyers actually consult before choosing.":
    "ما يقارب 200 منصّة إجمالًا، لكن العمل يتركّز على ثماني إلى اثنتي عشرة منصّة هي الأهمّ لقطاعك. كل نشاط يحصل على Google و Trustpilot و Facebook و Apple كأساس، ثم نُضيف فوقها المنصّات المتخصّصة بقطاعك التي يرجع إليها عملاؤك فعلًا قبل اتّخاذ القرار.",
  "No, ever. Fake reviews are a fast way to get a business permanently delisted from Google and Trustpilot, and they show up in AI sentiment analysis as obviously inauthentic. Everything we do is built on real customers leaving real reviews.":
    "لا، أبدًا. التقييمات المزيّفة هي أسرع طريق لشطب نشاطك نهائيًا من Google و Trustpilot، كما أنها تظهر في تحليل المشاعر بالذكاء الاصطناعي كتقييمات غير حقيقية بشكل واضح. كل ما نقوم به مبنيّ على تقييمات حقيقية يكتبها عملاء حقيقيون.",
  "Of all the harmful reviews our clients flag, we successfully take down 78%. The rest are suppressed under fresh positive volume.":
    "من بين كل التقييمات المسيئة التي يرفعها لنا عملاؤنا، نزيل 78% منها بنجاح. أمّا الباقي فنُغرقه تحت تدفّق من التقييمات الإيجابية الجديدة.",
  "On your own website we insert the JSON-LD schema markup (LocalBusiness, Service, FAQ, Review) that Google's Local Pack and AI Overview parsers rely on to rank and cite a business. Most competitor sites have none of this.":
    "نُضيف على موقعك بيانات JSON-LD الوصفية (LocalBusiness و Service و FAQ و Review) التي تعتمد عليها محرّكات Local Pack في Google و AI Overview في ترتيب الأنشطة والاستشهاد بها. معظم مواقع المنافسين لا تتضمّن أيًّا من ذلك.",
  "Photos, branding, treatment results, copy, anything of yours that a competitor or scraper site is using without permission is removed. The asset goes away, and the site loses the credibility it borrowed from you.":
    "الصور، والهوية البصرية، ونتائج الأعمال، والمحتوى — أي شيء يخصّك يستخدمه منافس أو موقع نسخ دون إذن — نُزيله لك. ويختفي الأصل، ويفقد ذلك الموقع المصداقية التي استعارها من علامتك.",
  "Reputation damage happens in the hours between when something bad goes live and when anyone on your team notices. Our team is monitoring 24/7 so the work starts the moment the content appears, and continues every time it reappears.":
    "ضرر السمعة يحدث في الساعات الفاصلة بين ظهور المحتوى السيئ وبين انتباه فريقك له. فريقنا يراقب على مدار الساعة طوال أيام الأسبوع، فيبدأ العمل لحظة ظهور المحتوى، ويتواصل كلّما عاد إلى الظهور مرّة أخرى.",
  "Star rating, review velocity, sentiment trend, response time and competitor benchmarks rolled into a single number per location. No spreadsheets, no logging into seven different platforms, no guessing where the leak is.":
    "عدد النجوم، وسرعة تدفّق التقييمات، واتّجاه المشاعر، وزمن الردّ، ومقارنات المنافسين — كلّها مدمجة في رقم واحد لكل فرع. لا جداول، ولا تنقّل بين سبع منصّات، ولا تخمين أين يقع التسرّب.",
  "We audit your Google Business Profile, Apple Business Connect, Bing Places and the long tail of category-specific listings, roughly 200 sites in total, and align them so every NAP detail, category, opening hour, service area and price band matches.":
    "نُجري تدقيقًا شاملًا لبياناتك على Google Business Profile و Apple Business Connect و Bing Places والمنصّات المتخصّصة بقطاعك، نحو 200 موقع إجمالًا، ونوحّدها لضمان تطابق الاسم والعنوان والهاتف، والفئة، وساعات العمل، ومنطقة الخدمة، ومستوى الأسعار.",
  "We do not gate reviews — that breaches platform policy. What we do is route the request differently: an unhappy customer who completes our follow-up gets a private recovery flow first (your team gets a chance to fix the issue), and only then is the request to review issued. The choice to leave a public review always remains the customer's.":
    "نحن لا نمنع العملاء من ترك التقييمات — فذلك يخالف سياسة المنصّات. ما نفعله هو توجيه الطلب بشكل مختلف: العميل غير الراضي الذي يُكمل استبيان المتابعة يدخل أوّلًا في مسار خاص لاستعادة رضاه (يحصل فريقك على فرصة لمعالجة المشكلة)، وبعد ذلك فقط يُرسَل طلب التقييم. يبقى قرار ترك التقييم العلني دومًا بيد العميل نفسه.",
  "We remove harmful reviews from Google, Trustpilot, Tripadvisor, Yelp and every major platform. The ones that cannot be taken down outright are suppressed beneath a steady flow of authentic positive reviews so they stop influencing buyer decisions.":
    "نُزيل التقييمات المسيئة من Google و Trustpilot و Tripadvisor و Yelp وكافة المنصّات الكبرى. أمّا التي لا يمكن إزالتها مباشرةً، فنُغرقها تحت تدفّق منتظم من التقييمات الإيجابية الحقيقية، حتى تتوقّف عن التأثير في قرارات الشراء.",
  "We run authentic review growth campaigns across nearly 200 platforms, dispute and remove harmful content, optimise every listing with the structured-data markup search engines and AI engines actually read, and back the work with a written 90-day score guarantee.":
    "نُنفّذ حملات حقيقية لنمو التقييمات على ما يقارب 200 منصّة، ونعترض على المحتوى المسيء ونعمل على إزالته، ونُحسّن بيانات كل منصّة بالبيانات المنظَّمة التي تقرؤها محركات البحث والذكاء الاصطناعي فعليًا، وندعم العمل بضمان كتابي لتحسّن التقييم خلال 90 يومًا.",
  "We successfully remove around 78% of the reviews our clients flag. Anything that breaches the platform's policy — fake, off-topic, conflict-of-interest, harassment, hate speech, content from people who were never customers — comes down. The remainder we suppress beneath fresh positive volume so the negative content stops being the first thing a buyer sees.":
    "نُزيل بنجاح نحو 78% من التقييمات التي يرفعها عملاؤنا. كل ما يخالف سياسات المنصّات — مزيّف، خارج الموضوع، تعارض مصالح، تحرّش، خطاب كراهية، أو محتوى من أشخاص لم يكونوا عملاء أصلًا — نُزيله. أمّا ما تبقّى، فنُخفيه تحت تدفّق من التقييمات الإيجابية الحديثة حتى يتوقّف ظهور المحتوى السلبي كأوّل ما يراه العميل.",
  "When two listings sit side by side, the lower-rated one is invisible. Even a single recent 1-star review can sink booking intent for weeks. The buyer never even calls, so you never get the chance to win them back on the phone.":
    "حين يظهر نشاطان جنبًا إلى جنب، يختفي ذو التقييم الأدنى تمامًا. تقييم واحد بنجمة واحدة قد يُسقط نية الحجز لأسابيع. العميل لا يتّصل بك أصلًا، فلا تحصل على فرصة لاستعادته عبر الهاتف.",
  "Yes — directly. AI engines treat review depth, recency and sentiment as primary signals when deciding which businesses to name in an answer. A business with 600 fresh reviews above 4.6 stars is dramatically more likely to be recommended than one with 80 reviews from two years ago, even if the older business is technically better. The AI cannot tell.":
    "نعم — وبشكل مباشر. تتعامل محرّكات الذكاء الاصطناعي مع عمق التقييمات وحداثتها واتّجاه مشاعرها كإشارات رئيسية عند اختيار الأسماء التي تُذكر في الإجابات. الشركة التي لديها 600 تقييم حديث بمعدّل أعلى من 4.6 نجوم تحظى بفرصة أكبر بكثير في التوصية مقارنةً بشركة لديها 80 تقييمًا تعود لعامين، حتى وإن كانت الأخيرة أفضل فعليًا. الذكاء الاصطناعي لا يستطيع التمييز.",
  "Yes. For posts that cross into defamation or impersonate your business, we coordinate the formal takedown notices each platform requires. For competitors or scraper sites using your photos, branding or treatment results without permission, we file DMCA-equivalent takedowns and recover the content within days.":
    "نعم. بالنسبة للمنشورات التي تصل إلى حدّ التشهير أو انتحال هوية نشاطك، نتولّى تنسيق طلبات الإزالة الرسمية وفق متطلبات كل منصّة. أمّا المنافسون أو المواقع التي تستخدم صورك أو هويتك أو نتائج أعمالك دون إذن، فنرفع طلبات إزالة معادلة لـ DMCA ونستعيد المحتوى خلال أيام.",
  "You see more authentic 5-star reviews on Google, Trustpilot, Tripadvisor and every platform that matters to your buyers, every single month. New volume, fresh dates, real customers. The kind of cadence that builds trust with both buyers and AI engines.":
    "ستجد تقييمات حقيقية بخمس نجوم على Google و Trustpilot و Tripadvisor وكل منصّة يهتمّ بها عملاؤك، شهرًا بعد شهر. حجم جديد، وتواريخ حديثة، وعملاء حقيقيون. هذا هو الإيقاع الذي يبني الثقة لدى العملاء ومحرّكات الذكاء الاصطناعي على حدٍّ سواء.",
};
