// Native-quality Arabic — fourth-pass expansion focused on the Pricing page.
// Covers everything still rendering in English on
// https://www.reputationexperts.ae/pricing after the first three passes:
// the hero stripe, the pricing-table feature rows, review-removal section,
// no-win-no-fee guarantee block, included-features list, Pricing FAQ.
//
// AED amounts, brand names (Gemini, Grok, Perplexity, Microsoft Copilot,
// Meta AI, Falcon, Jais, etc.) and email addresses stay in their original
// Latin form — they keep their visual identity inside Arabic copy.

export const AR_DICT_PRICING: Record<string, string> = {

  // ─── Page-level / SEO ────────────────────────────────────────────────────
  "Pricing — Reputation Experts | Daily reputation work, 90-day score guarantee | Reputation Experts":
    "الأسعار — خبراء السمعة | عمل يومي على سمعتك مع ضمان 90 يومًا | خبراء السمعة",
  "Pricing hero": "القسم الرئيسي للأسعار",
  "Pricing FAQ": "أسئلة شائعة عن الأسعار",
  "Pricing in AED, billed monthly. No setup fees. 90-day written score guarantee included on every tier. Enterprise tier is by application.":
    "الأسعار بالدرهم الإماراتي، تُحتسب شهريًا. بلا رسوم تأسيس. كل باقة تشمل ضمانًا كتابيًا لتحسّن التقييم خلال 90 يومًا. باقة الشركات الكبرى متاحة بناءً على الطلب.",
  "Five tiers, written 90-day score guarantee on every one. We pick up the phone, write every reply by hand, file the disputes, run the press cycle, and report back weekly. You stay focused on the business. Looking for the full feature breakdown for a procurement team? See the":
    "خمس باقات، مع ضمان كتابي لتحسّن التقييم خلال 90 يومًا في كل باقة. نحن نتولّى الاتصالات، ونكتب الردود يدويًا، ونرفع الاعتراضات على التقييمات، وندير دورات التغطية الصحفية، ونرفع لك تقريرًا أسبوعيًا. أنت تركّز على إدارة عملك. هل تبحث عن تفاصيل البنود لفريق المشتريات؟ اطّلع على",

  // ─── Pricing table column headers / rows ─────────────────────────────────
  "Outcomes": "النتائج",
  "Plan": "الخطة",
  "Monthly price": "السعر الشهري",
  "Setup fee": "رسوم التأسيس",
  "None": "لا توجد",
  "Listed": "حسب القائمة",
  "What's included": "ما الذي تشمله الباقة",
  "What’s included": "ما الذي تشمله الباقة",
  "Start with Growth": "ابدأ بباقة النمو",
  "Start with Core": "ابدأ بالباقة الأساسية",
  "Start with Pro": "ابدأ بالباقة المتقدمة",
  "Request proposal": "اطلب عرضًا خاصًا",
  "Apply to Enterprise": "تقدّم لباقة الشركات الكبرى",

  // ─── Pricing table feature labels ────────────────────────────────────────
  "Reviews & responses": "التقييمات والردود",
  "Negative-review intercept funnel": "فلتر اعتراض التقييمات السلبية",
  "Review widget for your website": "ودجت التقييمات لموقعك",
  "Team & reporting": "الفريق وآلية التقارير",
  "Weekly + monthly executive review": "تقرير أسبوعي + مراجعة تنفيذية شهرية",
  "Response SLA": "اتفاقية مدة الاستجابة",
  "Response languages": "لغات الردود",
  "Request channels": "قنوات استقبال الطلبات",
  "Free review removals / month": "عدد الإزالات المجانية شهريًا",
  "Protection & defence": "الحماية والدفاع",
  "Negative content takedowns (FB, IG, fake pages, copyright)":
    "إزالة المحتوى السلبي (Facebook و Instagram والصفحات المزيّفة وانتهاكات حقوق النشر)",
  "UAE defamation legal escalation": "تصعيد قانوني للتشهير في الإمارات",
  "Reputation insurance": "تأمين السمعة",
  "Up to AED 250k / incident": "حتى 250,000 درهم لكل حادثة",
  "Media coverage": "التغطية الإعلامية",
  "Press releases distributed": "بيانات صحفية موزَّعة",
  "Trade & Regional Press": "الصحافة المتخصصة والإقليمية",
  "Featured editorial (long-form, branded)": "تقارير تحريرية موسّعة بعلامتك التجارية",
  "Full + premium editorial": "تغطية كاملة وتحريريّات مميّزة",
  "Outlet lists": "قوائم المنابر الإعلامية",
  "See the actual outlets": "اطّلع على المنابر الفعلية",
  "Full access": "وصول كامل",
  "Partner on retainer": "شراكة دائمة ضمن العقد",
  "“As Seen On” trust badge": "شارة ثقة \"كما ظهرنا في\"",

  // ─── Review Removal pricing section ──────────────────────────────────────
  "Review Removal Pricing": "أسعار إزالة التقييمات",
  "Review removal pricing": "أسعار إزالة التقييمات",
  "Review type": "نوع التقييم",
  "Image review (any age)": "تقييم يحتوي صورة (مهما كان عمره)",
  "Recent text (under 4 weeks)": "تقييم نصّي حديث (أقل من 4 أسابيع)",
  "Older text (over 4 weeks)": "تقييم نصّي قديم (أكثر من 4 أسابيع)",
  "Included in subscription": "مشمول ضمن الاشتراك",
  "How do review removals work?": "كيف تتمّ عملية إزالة التقييمات؟",
  "No-win, no-fee": "لا نجاح، لا رسوم",
  "No-win, no-fee. Pay only when a review is removed.":
    "لا نجاح، لا رسوم. لا تدفع إلا عند إزالة التقييم فعليًا.",
  "Pay-as-you-go removals are billed only on confirmed removal. If the review does not come down, you owe nothing for the attempt.":
    "إزالات \"ادفع حسب الاستخدام\" تُحتسب فقط عند تأكيد الإزالة. إن لم يُزَل التقييم، فلا شيء عليك مقابل المحاولة.",
  "We aim to remove every confirmed-eligible review within 14 calendar days. If we miss the window, the attempt fee is waived.":
    "نسعى لإزالة كل تقييم مستوفٍ لشروط الإزالة خلال 14 يومًا تقويميًا. وإن تجاوزنا هذه المدة، تُلغى رسوم المحاولة.",
  "Every removal attempt runs against a 14-day service-level agreement. If we cannot remove the review within that window, you owe nothing. Each subscription tier comes with free removals included every month and a stacked discount on Pay-as-you-go removals beyond the included quota.":
    "تجري كل محاولة إزالة وفق اتفاقية مستوى خدمة مدّتها 14 يومًا. إن لم نستطع إزالة التقييم خلال هذه المدة، فلا شيء عليك. كل باقة اشتراك تتضمّن إزالات مجانية شهريًا، إضافةً إلى خصم تراكمي على الإزالات الإضافية وفق نظام \"ادفع حسب الاستخدام\".",
  "We dispute reviews that violate platform policy under UAE law and Google’s own guidelines. We do not buy reviews, fake reviews, or coerce reviewers.":
    "نعترض على التقييمات التي تخالف سياسات المنصات وفق القانون الإماراتي وإرشادات Google. لا نشتري التقييمات، ولا نزيّفها، ولا نُكرِه أحدًا على كتابتها.",

  // ─── FAQ block ───────────────────────────────────────────────────────────
  "Questions": "أسئلة",
  "The honest answers, before you ask.": "إجابات صريحة، قبل أن تسأل.",
  "What is included on the 90-day guarantee?": "ما الذي يغطّيه ضمان الـ 90 يومًا؟",
  "Why are AI search and media coverage combined into one program?":
    "لماذا تمّ دمج البحث بالذكاء الاصطناعي والتغطية الإعلامية في برنامج واحد؟",
  "Is this white-labelled?": "هل الخدمة تحت علامتي التجارية (وايت-ليبل)؟",
  "Every other reputation agency sells effort. We sell outcomes. The score we agree on day one is the score we have to deliver by day 90, or the work continues at no extra cost until we do. This applies on every tier, from Growth to Enterprise.":
    "تبيع كل وكالات إدارة السمعة الأخرى الجهد، أما نحن فنبيع النتائج. التقييم الذي نتفق عليه في اليوم الأول هو ما نلتزم بتحقيقه خلال 90 يومًا، وإلا واصلنا العمل دون أي تكلفة إضافية حتى نصل إليه. وينطبق ذلك على كل الباقات، من النمو وحتى الشركات الكبرى.",

  // ─── Brand-name like rows that ARE worth Arabizing context ───────────────
  "Falcon (UAE) & Jais (Arabic)": "Falcon (الإمارات) و Jais (نموذج عربي)",
};
