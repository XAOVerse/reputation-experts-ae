// Native-quality Arabic — eighth pass: homepage Services accordion body
// paragraphs and case-study testimonials that are rendered client-side
// (from JS bundle, not SSR HTML), so they were missed by the page scrape.
// Confirmed against screenshots and the chunk at
// /_next/static/chunks/155-*.js.

export const AR_DICT_SVC_BODIES: Record<string, string> = {

  // ─── Services accordion — 8 body paragraphs ──────────────────────────────
  // PR & Media → Digital PR & Authority Building
  "Authority matters. We help businesses strengthen their brand through digital PR and strategic media exposure across major international publications, local news outlets, and industry-specific media. This broader media footprint helps reinforce trust, elevate perceived credibility, and build the kind of authority signals that increasingly influence Google search, Google AI Overviews, and AI platforms such as ChatGPT when presenting businesses to potential customers. Whether through globally recognised names such as BBC, Business Insider, NBC, FOX, CBS, Yahoo Finance, and Digital Journal, Evening Standard, The Sun, Telegraph, or through more targeted local and industry-led coverage, the objective is the same: build a stronger, more trusted, more visible brand.":
    "المرجعية تصنع الفارق. نُساعد الشركات على تعزيز علامتها التجارية من خلال العلاقات العامة الرقمية وحضور إعلامي استراتيجي في كبرى المنشورات العالمية، والمنابر الإخبارية المحلية، ووسائل الإعلام المتخصّصة بالقطاع. هذا الحضور الإعلامي الأوسع يُرسّخ الثقة، ويرفع المصداقية المُدركة، ويبني إشارات المرجعية التي باتت تؤثّر بشكل متزايد على Google Search و Google AI Overview ومنصّات الذكاء الاصطناعي مثل ChatGPT عند تقديمها للأنشطة التجارية أمام عملائها المحتملين. سواء عبر أسماء عالمية معروفة مثل BBC و Business Insider و NBC و FOX و CBS و Yahoo Finance و Digital Journal و Evening Standard و The Sun و Telegraph، أو من خلال تغطية محلية وقطاعية أكثر استهدافًا، فالهدف واحد: علامة أقوى، وأكثر موثوقية، وأوسع حضورًا.",

  // Google Business Optimisation
  "A weak Google Business Profile can cost you visibility, trust, and enquiries. We help businesses improve the quality, credibility, and commercial performance of their Google presence so they stand out more effectively in local search, rank more strongly in Google Maps results and recommendations, and convert more potential customers into leads.":
    "ضعف ملف Google Business يكلّفك الظهور والثقة والاستفسارات. نُساعد الشركات على تحسين جودة حضورها على Google وموثوقيّته وأدائه التجاري، لتتميّز بفاعلية أكبر في البحث المحلي، وترتفع في نتائج Google Maps وتوصياتها، وتُحوّل عددًا أكبر من العملاء المحتملين إلى عملاء فعليين.",

  // Review Dispute & Removal
  "Damaging reviews can shape how customers see your business before they ever make contact. We help identify high-risk review issues, challenge harmful content where appropriate, and protect your reputation across Google and other key platforms to preserve trust, strengthen profile quality, and limit reputational damage. Our service also includes ongoing protection against harmful reviews as they appear. Unlike many online reputation management companies that treat review issues as a one-off task, we understand that reputation protection is an ongoing process and is included as part of our all-inclusive monthly packages.":
    "التقييمات المسيئة قادرة على تشكيل صورة نشاطك في ذهن العميل قبل أن يتواصل معك. نرصد التقييمات الأكثر خطورة، ونعترض على المحتوى المسيء حيثما أمكن، ونحمي سمعتك على Google وكافة المنصّات الرئيسية لصون الثقة، وتعزيز جودة ملفك، والحدّ من الضرر بالسمعة. كما تشمل خدمتنا حماية مستمرّة من التقييمات المسيئة فور ظهورها. خلافًا لكثير من شركات إدارة السمعة على الإنترنت التي تتعامل مع التقييمات بوصفها مهمّة لمرّة واحدة، ندرك أن حماية السمعة عمل مستمرّ، ولهذا تأتي ضمن باقاتنا الشهرية الشاملة دون أي رسوم إضافية.",

  // Crisis Management / Search Result Management
  "Damaging online content can harm trust long before a customer ever contacts your business. We take down harmful photos, videos, articles, and other negative content that affects how they are perceived online. Where removal is not possible, we focus on reducing its visibility and strengthening the presence of more credible, positive content so harmful results are buried behind positive content and appear at the last pages of the search results.":
    "المحتوى المسيء على الإنترنت يضرّ بالثقة قبل وقت طويل من تواصل أي عميل مع نشاطك. نُزيل الصور، والفيديوهات، والمقالات، وسائر المحتوى السلبي الذي يؤثّر على صورة نشاطك على الإنترنت. وحيث يتعذّر الإزالة، نُركّز على تقليص ظهوره وتعزيز حضور المحتوى الإيجابي الموثوق، حتى يُدفن المحتوى المسيء أسفل المحتوى الإيجابي ويظهر في الصفحات الأخيرة من نتائج البحث.",

  // Daily Monitoring and Protection
  "Negative content, harmful reviews, and new reputation threats can appear at any time. Our monthly service helps businesses challenge damaging content, address harmful reviews where appropriate, and protect how the brand is seen across the platforms that influence customer decisions most. This frequently includes fake competitor reviews, unreasonable customer complaints, and personal revenge-driven attacks from former employees - issues we deal with regularly and effectively take them down. The result is stronger trust, greater credibility, and better long-term reputation protection.":
    "المحتوى السلبي والتقييمات المسيئة والتهديدات الجديدة لسمعتك قد تظهر في أي لحظة. تُساعد خدمتنا الشهرية الشركات على الاعتراض على المحتوى المسيء، ومعالجة التقييمات الضارّة حيثما أمكن، وحماية صورة العلامة عبر المنصّات الأكثر تأثيرًا على قرارات العملاء. ويشمل ذلك في الغالب التقييمات المزيّفة من المنافسين، والشكاوى غير المنطقية من العملاء، والهجمات الشخصية الصادرة عن موظّفين سابقين بدافع الانتقام — وهي قضايا نتعامل معها بانتظام ونُزيلها بفاعلية. والنتيجة: ثقة أقوى، ومصداقية أعلى، وحماية أفضل للسمعة على المدى البعيد.",

  // Review Generation Strategy
  "Consistent positive reviews increase trust, strengthen your online reputation, and influence buying decisions before a customer ever contacts your business. We help brands build a healthier review profile across the platforms that matter most — increasing review quality, improving rating strength, and supporting stronger commercial performance over time.":
    "التقييمات الإيجابية المنتظمة ترفع الثقة، وتُعزّز سمعتك الرقمية، وتُؤثّر في قرارات الشراء قبل أن يتواصل العميل مع نشاطك. نُساعد العلامات على بناء ملف تقييمات أكثر صحّةً على المنصّات الأكثر أهمية — برفع جودة التقييمات، وتعزيز قوّة التقييم العام، ودعم أداء تجاري أقوى مع مرور الوقت.",

  // Ongoing Reputation Protection
  "Your reputation needs continuous care, not just a one-off fix. We provide ongoing monitoring and protection across all the platforms that matter — catching harmful content early, flagging new threats, and ensuring your business is always presented in the best possible light. This includes regular review monitoring, alert systems, and proactive management of emerging reputation risks.":
    "سمعتك تحتاج إلى رعاية مستمرّة، لا إلى إصلاح لمرّة واحدة. نُوفّر لك مراقبة وحماية دائمتين عبر كل المنصّات المهمّة — نرصد المحتوى المسيء مبكرًا، ونرفع التنبيه على التهديدات الجديدة، ونحرص على أن يُقدَّم نشاطك دائمًا في أفضل صورة ممكنة. تشمل الخدمة مراقبة منتظمة للتقييمات، وأنظمة تنبيه، وإدارة استباقية لمخاطر السمعة الناشئة.",

  // AI Overview Optimisation
  "Traditional SEO is no longer the full picture. Google AI Overviews are increasingly shaping which businesses get seen, trusted, and chosen first. We help brands strengthen the authority, relevance, and reputation signals that support better visibility within AI-generated search results, helping position the business more competitively in a rapidly changing search landscape.":
    "تحسين محرّكات البحث التقليدي لم يعد الصورة الكاملة. إجابات Google AI Overview باتت تُحدّد بشكل متزايد أيّ الأنشطة يُرى أولًا، ويُوثَق به، ويُختار قبل غيره. نُساعد العلامات على تعزيز إشارات المرجعية والصلة والسمعة التي تدعم ظهورًا أفضل ضمن نتائج البحث المُولَّدة بالذكاء الاصطناعي، وعلى تموضع تنافسي أقوى في مشهد بحث يتغيّر بسرعة.",

  // ─── Case-study testimonials ─────────────────────────────────────────────
  "Pool fit-out contractor tripled revenue after 5 months working with us, now recommended by Google AI Overview and ChatGPT for swimming pool contractor in Dubai.":
    "مقاول حمّامات سباحة ضاعف إيراداته ثلاث مرّات بعد 5 أشهر من التعاون معنا، وأصبح اليوم ضمن توصيات Google AI Overview و ChatGPT لمقاولي حمّامات السباحة في دبي.",
  "Car Rental Office in Business Bay struggled to get online booking with 3.4 score, increased the score to 4.7 in 4 months, online bookings doubled.":
    "مكتب تأجير سيارات في الخليج التجاري كان يُعاني من ضعف الحجوزات على الإنترنت بتقييم 3.4، فارتفع تقييمه إلى 4.7 خلال 4 أشهر، وتضاعفت حجوزاته الإلكترونية.",

  // ─── Case-study captions (location lines) ────────────────────────────────
  "Dubai Investment Park, Dubai": "مجمّع دبي للاستثمار، دبي",
  "Business Bay, Dubai": "الخليج التجاري، دبي",
  "Pool fit-out contractor": "مقاول حمّامات سباحة",
  "Car Rental Office": "مكتب تأجير سيارات",

  // ─── FAQ visible in screenshot ───────────────────────────────────────────
  "Google's AI Overviews now pull together information from reviews, your website, and third-party sources into a single AI-generated answer at the top of the search results. When someone searches for terms like \"best service near me\", Google no longer just shows a list of websites; it increasingly highlights and recommends specific businesses. Reputation Experts strengthens your entire digital presence so your business is in a far better position to be trusted and recommended by Google's AI. This includes improving your review profile, increasing rating strength and review volume, optimising trust signals across your web presence, and building authority through high-quality third-party coverage. When your business is featured in trusted media and reputable publications — something we specialise in — it creates the kind of authority signals that naturally improve how your business is understood and recommended by Google AI Overviews, ChatGPT, and other AI-driven discovery platforms.":
    "تجمع إجابات Google AI Overview اليوم المعلومات من التقييمات، ومن موقعك، ومن مصادر خارجية، في إجابة واحدة مُولَّدة بالذكاء الاصطناعي تتصدّر نتائج البحث. حين يبحث المستخدم عن عبارة مثل \"أفضل خدمة قريبة\"، لم يعد Google يكتفي بعرض قائمة من المواقع؛ بل يُبرز ويوصي بأنشطة بعينها بشكل متزايد. يُعزّز خبراء السمعة حضورك الرقمي بكامله، حتى يكون نشاطك في موقع أفضل بكثير ليثق به ذكاء Google ويوصي به. ويشمل ذلك تحسين ملف تقييماتك، ورفع قوّة التقييم وعدد التقييمات، وتحسين إشارات الثقة على كل حضورك الرقمي، وبناء المرجعية عبر تغطيات خارجية عالية الجودة. وحين يظهر نشاطك في وسائل إعلام موثوقة ومنشورات مرجعية — وهو ما نتخصّص فيه — تتكوّن إشارات المرجعية التي تُحسّن طبيعيًا كيف يُفهَم نشاطك ويُوصى به من قِبَل Google AI Overview و ChatGPT وسائر منصّات الاكتشاف المدفوعة بالذكاء الاصطناعي.",
};
