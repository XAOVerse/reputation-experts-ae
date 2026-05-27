// /insights hub + 12 long-form articles. Native Arabic.
// Brand names (Google, ChatGPT, Perplexity, Talabat, Deliveroo, Just Eat,
// Glassdoor, LinkedIn, Hotelier Middle East, Condé Nast Traveller, etc.),
// percentages, AED/$ amounts and dates stay in their original form.
// Built in batches.

export const AR_DICT_INSIGHTS: Record<string, string> = {
  // ── Statistical lede cards / pull-quotes ──────────────────────────────────
  "31% will pay more at a business with excellent reviews. Products with a 4.5+ rating sell roughly four times more than those below.":
    "31% مستعدّون لدفع المزيد لدى نشاط يتمتّع بتقييمات ممتازة. والمنتجات بتقييم 4.5 فأعلى تُباع بنحو أربعة أضعاف نظيراتها الأدنى تقييمًا.",
  "46% say they trust an AI recommendation more than a friend's for purchases in its area of expertise.":
    "46% يقولون إنهم يثقون بتوصية الذكاء الاصطناعي أكثر من توصية صديق في مجال تخصّصه عند الشراء.",
  "57% will only use a business with a four-star rating or higher. Only 9% would engage with a business at one or two stars.":
    "57% لا يتعاملون إلا مع نشاط تقييمه أربع نجوم فأعلى. و9% فقط مستعدّون للتعامل مع نشاط تقييمه نجمة أو نجمتان.",
  "65% of physicians have zero reviews. Silence reads as risk and quietly hands enquiries to competitors with stronger profiles.":
    "65% من الأطبّاء لا تقييمات لهم إطلاقًا. والصمت يُقرأ كمخاطرة، ويُسلّم الاستفسارات بصمت إلى منافسين بملفّات أقوى.",
  "77% say AI helps them make faster decisions. Influence has to happen earlier in the journey than ever before.":
    "77% يقولون إن الذكاء الاصطناعي يساعدهم على اتخاذ قرارات أسرع. والتأثير لا بدّ أن يحدث في مرحلة أبكر من رحلة العميل من أي وقت مضى.",
  "81% of travellers usually or always read reviews before booking a hotel; 52% will not book a property with no reviews at all.":
    "81% من المسافرين يطّلعون عادةً أو دائمًا على التقييمات قبل حجز فندق؛ و52% لن يحجزوا في عقار بلا تقييمات إطلاقًا.",
  "82% of customers read reviews before booking. Your review profile is the front door to your business.":
    "82% من العملاء يطّلعون على التقييمات قبل الحجز. ملف تقييماتك هو الباب الأمامي لنشاطك.",
  "82% of customers read your reviews before booking. What they see decides whether they call.":
    "82% من العملاء يطّلعون على تقييماتك قبل الحجز. وما يرونه هو ما يقرّر إن كانوا سيتّصلون بك.",
  "82% of customers read your reviews before booking. What they see decides whether they call. | Reputation Experts":
    "82% من العملاء يطّلعون على تقييماتك قبل الحجز. وما يرونه هو ما يقرّر إن كانوا سيتّصلون بك. | خبراء السمعة",
  "84% of patients will not consider a healthcare provider rated below four stars. The threshold is a hard filter.":
    "84% من المرضى لا يأخذون في الاعتبار مزوّد رعاية صحية تقييمه أقل من أربع نجوم. هذا الحدّ فلتر صارم.",
  "84% will not even consider a provider rated four stars or lower — even a referred one.":
    "84% لن يأخذوا في الاعتبار مزوّدًا تقييمه أربع نجوم أو أقل — حتى لو جاء بترشيح.",
  "85% of consumers consider a review older than three months irrelevant. 40% don't trust reviews older than two weeks.":
    "85% من المستهلكين يعدّون أي تقييم أقدم من ثلاثة أشهر غير ذي صلة. و40% لا يثقون بتقييمات أقدم من أسبوعين.",
  "86% of buyers will not consider a dealership rated below four stars. A 3.8 is not a low score — it is a screening filter that removes you.":
    "86% من المشترين لا يأخذون في الاعتبار وكالة تقييمها أقل من أربع نجوم. التقييم 3.8 ليس درجة منخفضة فحسب — إنه فلتر فرز يُقصيك.",
  "86% of job seekers read a business's reviews before applying. Reviews now affect talent acquisition, not just sales.":
    "86% من الباحثين عن عمل يطّلعون على تقييمات النشاط قبل التقديم. التقييمات باتت تؤثّر على استقطاب المواهب، لا على المبيعات وحدها.",
  "88% trust online reviews as much as a personal recommendation. Among 18–34 year-olds, the figure rises to 91%.":
    "88% يثقون بالتقييمات على الإنترنت بقدر ثقتهم بتوصية شخصية. وترتفع النسبة إلى 91% بين الفئة العمرية 18–34 عامًا.",
  "92% of car buyers research online before stepping into a dealership. Your Google profile, not your showroom, is your first impression.":
    "92% من مشتري السيارات يبحثون على الإنترنت قبل دخول الوكالة. ملفك على Google، لا معرضك، هو انطباعك الأول.",
  "92% of car buyers research online before they ever visit a showroom. Your reviews decide which showroom they walk into.":
    "92% من مشتري السيارات يبحثون على الإنترنت قبل زيارة أي معرض. وتقييماتك هي ما يقرّر أي معرض سيدخلون.",
  "92% of car buyers research online before they ever visit a showroom. Your reviews decide which showroom they walk into. | Reputation Experts":
    "92% من مشتري السيارات يبحثون على الإنترنت قبل زيارة أي معرض. وتقييماتك هي ما يقرّر أي معرض سيدخلون. | خبراء السمعة",
  "93% of consumers say online reviews influence their purchase decisions. 94% have avoided a business because of negative reviews.":
    "93% من المستهلكين يقولون إن التقييمات تؤثّر على قرارات شرائهم. و94% تجنّبوا نشاطًا بسبب تقييمات سلبية.",
  "93% of customers say reviews decide what they buy. Here is what the rest of the data shows about how reviews now run your business.":
    "93% من العملاء يقولون إن التقييمات تقرّر ما يشترونه. وإليك ما تكشفه بقية البيانات عن كيف باتت التقييمات تُدير نشاطك.",
  "93% of customers say reviews decide what they buy. Here is what the rest of the data shows about how reviews now run your business. | Reputation Experts":
    "93% من العملاء يقولون إن التقييمات تقرّر ما يشترونه. وإليك ما تكشفه بقية البيانات عن كيف باتت التقييمات تُدير نشاطك. | خبراء السمعة",
  "94% of patients use online reviews to choose their doctor. What yours say decides whether they book.":
    "94% من المرضى يعتمدون على التقييمات لاختيار طبيبهم. وما تقوله تقييماتك هو ما يقرّر إن كانوا سيحجزون.",
  "94% of patients use online reviews to choose their doctor. What yours say decides whether they book. | Reputation Experts":
    "94% من المرضى يعتمدون على التقييمات لاختيار طبيبهم. وما تقوله تقييماتك هو ما يقرّر إن كانوا سيحجزون. | خبراء السمعة",
  "94% of patients use online reviews to evaluate a provider. Your review profile is the trust verdict.":
    "94% من المرضى يعتمدون على التقييمات لتقييم مزوّد الخدمة. ملف تقييماتك هو حكم الثقة.",
  "A 1% lift in a competitor's sentiment score removes about 0.25% of your bookings at average price, and 0.34% at premium prices.":
    "ارتفاع مؤشر مشاعر منافسك بنسبة 1% يُزيل نحو 0.25% من حجوزاتك بالسعر المتوسط، و0.34% بالأسعار المميّزة.",
  "A 1% lift in your own sentiment score is worth about a 0.38% increase in bookings at average price — and 0.54% at premium price points.":
    "ارتفاع مؤشر مشاعرك أنت بنسبة 1% يُساوي زيادة نحو 0.38% في الحجوزات بالسعر المتوسط — و0.54% عند الأسعار المميّزة.",
  "A Dubai destination management consultant building a bespoke itinerary on a laptop":
    "مستشار إدارة وجهات سياحية في دبي يُعدّ برنامج رحلة مخصّصًا على حاسوبه المحمول",
  "A clean review profile compounds: 86% of satisfied buyers come back and refer others. The reputation does not just win the next sale, it wins the next ten.":
    "ملف التقييمات النظيف يتراكم أثره: 86% من المشترين الراضين يعودون ويُحيلون آخرين. السمعة لا تكسب البيع التالي فحسب، بل تكسب العشرة التالية.",
  "A dental patient is worth more than any local-business customer. Reviews decide whether you ever meet them.":
    "مريض الأسنان يساوي أكثر من أي عميل لنشاط محلي آخر. والتقييمات هي ما يقرّر إن كنت ستلتقي به أصلًا.",
  "A digital privacy specialist auditing an employee's public online footprint":
    "أخصائي خصوصية رقمية يُدقّق البصمة الرقمية العامة لأحد الموظّفين",
  "A doctor's reputation is on Google long before the patient is in the consultation room. We remove the bad reviews, suppress the rest and rebuild the profile that brings patients back.":
    "سمعة الطبيب موجودة على Google قبل وقت طويل من دخول المريض غرفة الاستشارة. نُزيل التقييمات السيئة، ونُخفي ما تبقّى، ونُعيد بناء الملف الذي يُعيد المرضى إليك.",
  "A funeral director consulting compassionately with a bereaved family":
    "مدير دار جنازات يتشاور برفق مع عائلة فقدت أحد أفرادها",
  "A handful of disgruntled ex-employees on Glassdoor and LinkedIn can sink a year of recruiting and a year of customer trust. We remove what we can, suppress what we cannot, and rebuild the talent brand.":
    "حفنة من الموظّفين السابقين الساخطين على Glassdoor و LinkedIn قادرة على نسف عام كامل من التوظيف وعام من ثقة العملاء. نُزيل ما نستطيع، ونُخفي ما لا نستطيع، ونُعيد بناء علامة جذب المواهب.",
  "A handful of visible negative reviews can collapse new-patient acquisition for a clinic, regardless of clinical excellence.":
    "حفنة من التقييمات السلبية الظاهرة قادرة على انهيار استقطاب المرضى الجدد لعيادة ما، مهما بلغ تميّزها الطبي.",
  "A law-firm partner reviewing client feedback in a modern office":
    "شريك في مكتب محاماة يُراجع ملاحظات العملاء في مكتب عصري",
  "A premium chauffeur waiting at a Dubai hotel kerb with an executive sedan":
    "سائق خاص متميّز ينتظر عند مدخل فندق في دبي بسيّارة سيدان فاخرة",
  "A private clinic consultant reviewing patient feedback on a desktop dashboard":
    "مستشار عيادة خاصة يُراجع ملاحظات المرضى على لوحة تحكّم مكتبية",
  "A reputation manager reviewing customer feedback dashboards":
    "مدير سمعة يُراجع لوحات ملاحظات العملاء",
  "A reputation monitoring dashboard showing alerts the company is unable to act on":
    "لوحة مراقبة سمعة تعرض تنبيهات لا تستطيع الشركة التحرّك بشأنها",
  "A reputation strategist briefing a SMB executive on a defensive content playbook":
    "خبير استراتيجية سمعة يُطلع مديرًا في شركة صغيرة أو متوسطة على خطة محتوى دفاعية",
  "A senior executive consulting with a personal reputation specialist in a discreet office":
    "مدير تنفيذي رفيع يتشاور مع أخصائي سمعة شخصية في مكتب يحفظ الخصوصية",
  "A single negative review is rarely a single problem. It is a permanent piece of marketing collateral that sits at the top of your Google profile, gets read by every prospect who looks you up, and quietly removes them from your funnel one by one. For a clinic, a salon, a restaurant, a hotel or any service business, a single visible one-star review in a competitive category can cost the business hundreds of thousands of dirhams in lost annual revenue.":
    "نادرًا ما يكون التقييم السلبي الواحد مشكلة واحدة. إنه مادة تسويقية دائمة تتصدّر ملفك على Google، يقرؤها كل عميل محتمل يبحث عنك، ويُخرجها من قمع مبيعاتك واحدًا تلو الآخر بصمت. وبالنسبة لعيادة أو صالون أو مطعم أو فندق أو أي نشاط خدمي، فإن تقييمًا واحدًا ظاهرًا بنجمة واحدة في قطاع تنافسي قد يُكلّف النشاط مئات آلاف الدراهم من الإيرادات السنوية المفقودة.",
  "A single visible negative review, in a competitive category, can cost a service business hundreds of thousands of dirhams in lost annual revenue.":
    "تقييم سلبي واحد ظاهر، في قطاع تنافسي، قد يُكلّف نشاطًا خدميًا مئات آلاف الدراهم من الإيرادات السنوية المفقودة.",
  "A two-million-dirham fit-out shortlist is now built on Google, before the tender is ever written.":
    "قائمة مختصرة لمشروع تشطيب بمليوني درهم تُبنى اليوم على Google، قبل أن تُكتب المناقصة أصلًا.",
  "A veterinarian examining a small dog at a modern Dubai clinic":
    "طبيب بيطري يفحص كلبًا صغيرًا في عيادة عصرية بدبي",
  "A wedding venue set up for an evening reception in Dubai":
    "قاعة أفراح مجهّزة لحفل استقبال مسائي في دبي",
  "AI engines name two or three businesses in their answer. If your brand is not one of them, you are functionally invisible — regardless of how well-ranked your website is.":
    "محرّكات الذكاء الاصطناعي تُسمّي نشاطين أو ثلاثة في إجابتها. وإن لم تكن علامتك أحدها، فأنت غير مرئي عمليًا — مهما كان ترتيب موقعك في البحث.",
  "AI engines weight relevance, recency and ranking. A dormant profile fails all three.":
    "محرّكات الذكاء الاصطناعي تُقيّم الصلة والحداثة والترتيب. والملف الخامل يفشل في الثلاثة جميعًا.",
  "AI search visibility is our expertise":
    "الظهور في البحث بالذكاء الاصطناعي هو تخصّصنا",
  "AI search visibility is something you can engineer — and the brands that engineer it first will lock in category position before their competitors realise the rules changed.":
    "الظهور في البحث بالذكاء الاصطناعي أمر يمكن هندسته — والعلامات التي تهندسه أولًا ستحجز موقعها في القطاع قبل أن يدرك منافسوها أن القواعد قد تغيّرت.",
  "Ad spend, inventory depth and aggressive finance packages do not compensate for what your buyers read about you on Google.":
    "الإنفاق الإعلاني وعمق المخزون وباقات التمويل المغرية لا تُعوّض ما يقرؤه مشتروك عنك على Google.",
  "Ad spend, renovations, equipment upgrades, website redesigns and discounts cannot compensate for a damaged review profile.":
    "الإنفاق الإعلاني والتجديدات وتحديث المعدّات وإعادة تصميم الموقع والخصومات لا تُعوّض ملف تقييمات متضرّرًا.",
  "An HR director reviewing the company's employer-brand profile with a reputation specialist":
    "مدير موارد بشرية يُراجع ملف العلامة التوظيفية للشركة مع أخصائي سمعة",
  "And buyers reading your profile are unusually sensitive in this category. They are about to spend more on a single purchase than they will on almost anything else this year. They are not weighing fifty positive reviews against four bad ones. They are zooming in on the four bad ones — the one about the hidden cost at handover, the one about the bait-and-switch on the trim, the one about the service department that never returns a call — and quietly removing your showroom from the route.":
    "والمشترون الذين يقرؤون ملفك حسّاسون على نحو غير معتاد في هذا القطاع. فهم على وشك إنفاق مبلغ على عملية شراء واحدة يفوق ما سيُنفقونه على أي شيء آخر هذا العام تقريبًا. وهم لا يوازنون خمسين تقييمًا إيجابيًا مقابل أربعة سيئة، بل يُركّزون على الأربعة السيئة — ذاك المتعلّق بالتكلفة الخفية عند التسليم، وذاك عن استبدال الفئة بأخرى، وذاك عن قسم الخدمة الذي لا يردّ على اتصال — ويُخرجون معرضك من قائمتهم بصمت.",
  "And here is the cruel part of the math: good reviews do not undo bad ones. A prospect reading your profile does not weigh fifty positive reviews against five negative ones. They zoom in on the five, draw their conclusion, and book the competitor. Those few reviews define the business in the customer's mind, and that definition is the verdict.":
    "وإليك الجزء القاسي في المعادلة: التقييمات الجيّدة لا تُلغي السيئة. فالعميل المحتمل الذي يقرأ ملفك لا يوازن خمسين تقييمًا إيجابيًا مقابل خمسة سلبية، بل يُركّز على الخمسة، ويستخلص حكمه، ويحجز لدى المنافس. تلك التقييمات القليلة تُعرّف النشاط في ذهن العميل، وذلك التعريف هو الحكم النهائي.",
  "And here is what makes healthcare different from every other category: the patient is not choosing between two restaurants. They are choosing whether to trust you with their body, with their child's health, with their face, with their teeth. The threshold of confidence required is much higher — and the cost of falling under it is total.":
    "وهذا ما يجعل الرعاية الصحية مختلفة عن أي قطاع آخر: المريض لا يختار بين مطعمين، بل يختار إن كان سيأتمنك على جسده، وعلى صحة طفله، وعلى وجهه، وعلى أسنانه. سقف الثقة المطلوب أعلى بكثير — وتكلفة الهبوط تحته كاملة.",
  "And that sentence is increasingly being built out of one specific source type. Of every citation an AI engine pulls into a typical answer, one in seven now points to a third-party review or trust platform. Reviews are not just a marketing signal any more. They are one of the raw materials the model uses to write the answer your customer reads.":
    "وهذه الجملة تُبنى بشكل متزايد من نوع مصدر واحد بعينه. فمن بين كل استشهاد يسحبه محرّك ذكاء اصطناعي إلى إجابة نموذجية، صار واحد من كل سبعة يشير إلى منصّة تقييمات أو ثقة خارجية. التقييمات لم تعد مجرّد إشارة تسويقية، بل صارت إحدى المواد الخام التي يستخدمها النموذج لكتابة الإجابة التي يقرؤها عميلك.",
  "And the math compounds in the wrong direction. 86% of satisfied buyers come back and refer others. The dealership with the strong profile is not just winning the current sale — it is winning the next service contract, the next trade-up, the next family member who pulls into the same showroom three years later because they remember the first experience. The dealership with the weak profile loses all of it, silently.":
    "والمعادلة تتراكم في الاتجاه الخاطئ. 86% من المشترين الراضين يعودون ويُحيلون آخرين. الوكالة ذات الملف القوي لا تكسب البيع الحالي فحسب — بل تكسب عقد الخدمة التالي، وصفقة الترقية التالية، وفرد العائلة التالي الذي يدخل المعرض نفسه بعد ثلاث سنوات لأنه يتذكّر تجربته الأولى. أما الوكالة ذات الملف الضعيف فتخسر كل ذلك بصمت.",
  "And those review platforms are no longer a niche signal inside the model. They are the second-most cited source type across the whole of AI search. Whatever else you spend on visibility — content, ads, PR — none of it compensates for missing the place the AI is most likely to look when it writes the answer about you.":
    "ومنصّات التقييم تلك لم تعد إشارة هامشية داخل النموذج، بل هي ثاني أكثر أنواع المصادر استشهادًا في البحث بالذكاء الاصطناعي بأكمله. ومهما أنفقت على الظهور — محتوى، إعلانات، علاقات عامة — فلن يُعوّض أيٌّ منها غيابك عن المكان الذي يرجّح أن ينظر إليه الذكاء الاصطناعي حين يكتب الإجابة عنك.",
  "Automotive reputation is our expertise":
    "سمعة قطاع السيارات هي تخصّصنا",
  "Bad Google reviews of a law firm rarely come from clients. We remove them — quietly, professionally and on the grounds that actually work.":
    "نادرًا ما تأتي تقييمات Google السيئة لمكتب محاماة من العملاء. نُزيلها — بهدوء واحترافية، وعلى الأسس التي تنجح فعلًا.",
  "Before a single customer ever calls your business, walks through your door, or fills out an enquiry form, they have already made up their mind about you — by reading what other customers have written about you online. The latest research is unambiguous: 82% of buyers read reviews before booking. What they see in those reviews is the single biggest factor between a booking for you and a booking for your competitor.":
    "قبل أن يتّصل بك عميل واحد، أو يدخل من بابك، أو يملأ نموذج استفسار، يكون قد حسم رأيه فيك — بقراءة ما كتبه عملاء آخرون عنك على الإنترنت. وأحدث الأبحاث لا لبس فيها: 82% من المشترين يطّلعون على التقييمات قبل الحجز. وما يرونه في تلك التقييمات هو العامل الأكبر المنفرد بين حجز لك وحجز لمنافسك.",
  "Brands with no presence on third-party review platforms appear in just 1% of AI-generated answers.":
    "العلامات التي لا حضور لها على منصّات التقييم الخارجية تظهر في 1% فقط من الإجابات المُولَّدة بالذكاء الاصطناعي.",
  "Brands with no review presence appear in just 1% of AI Overviews. Engagement decides the rest.":
    "العلامات التي لا حضور لها في التقييمات تظهر في 1% فقط من إجابات AI Overview. والتفاعل يقرّر الباقي.",
  "Brands with no review presence appear in just 1% of AI Overviews. Engagement decides the rest. | Reputation Experts":
    "العلامات التي لا حضور لها في التقييمات تظهر في 1% فقط من إجابات AI Overview. والتفاعل يقرّر الباقي. | خبراء السمعة",
  "Business travellers respond more strongly to reviews than to price. Leisure travellers are the opposite. Both segments must be planned for separately.":
    "مسافرو الأعمال يتأثّرون بالتقييمات أكثر من تأثّرهم بالسعر. ومسافرو الترفيه عكس ذلك. ويجب التخطيط لكل شريحة على حدة.",
  "Buyers and sellers are vetting your real-estate agency the same way they vet a restaurant. The Google profile decides the listing.":
    "المشترون والبائعون يفحصون مكتبك العقاري بالطريقة نفسها التي يفحصون بها مطعمًا. وملف Google هو ما يقرّر من يحصل على العقار.",
  "Buyers narrow their shortlist to one or two dealerships before they make contact. A weak profile is not a slow start — it is a complete absence from the shortlist.":
    "المشترون يُضيّقون قائمتهم المختصرة إلى وكالة أو اثنتين قبل التواصل. والملف الضعيف ليس بداية بطيئة — بل غياب كامل عن القائمة.",
  "By the time a car buyer pulls into your showroom, the choice has already been made. 92% of buyers research online before they ever set foot in a dealership. They spend more than 14 hours building a shortlist on Google, comparing star ratings, reading recent reviews, scrolling forum threads and watching walkaround videos — and by the time they call you, they are either confirming a decision or eliminating you from one.":
    "بحلول الوقت الذي يدخل فيه مشتري السيارة معرضك، يكون الاختيار قد حُسم. 92% من المشترين يبحثون على الإنترنت قبل أن تطأ أقدامهم أي وكالة. يقضون أكثر من 14 ساعة في بناء قائمة مختصرة على Google، يقارنون التقييمات، ويقرؤون أحدث المراجعات، ويتصفّحون مواضيع المنتديات، ويشاهدون فيديوهات استعراض السيارات — وبحلول لحظة اتصالهم بك، يكونون إما يؤكّدون قرارًا أو يُقصونك منه.",
  "By the time a prospective patient picks up the phone or fills out your enquiry form, the decision has already been made elsewhere — on a Google search results page, inside a TripAdvisor or Doctify profile, on an Instagram tagged-photo feed. They have read what other patients said about your bedside manner, your wait times, your billing, the cleanliness of the clinic, the result of the procedure. They have done all of this before they have ever met you.":
    "بحلول الوقت الذي يرفع فيه المريض المحتمل السمّاعة أو يملأ نموذج استفسارك، يكون القرار قد اتُّخذ في مكان آخر — على صفحة نتائج Google، أو داخل ملف على TripAdvisor أو Doctify، أو في موجز صور موسومة على Instagram. لقد قرأ ما قاله مرضى آخرون عن أسلوبك في التعامل، وأوقات الانتظار لديك، وفواتيرك، ونظافة العيادة، ونتيجة الإجراء. فعل كل ذلك قبل أن يلتقي بك أصلًا.",
  "Classic SEO ranks pages. AI ranks businesses. Citation authority, multilingual reviews and structured data are now the signals that decide who gets named.":
    "تحسين محركات البحث التقليدي يُرتّب الصفحات. أما الذكاء الاصطناعي فيُرتّب الأنشطة التجارية. ومرجعية الاستشهادات والتقييمات متعدّدة اللغات والبيانات المنظَّمة هي الآن الإشارات التي تقرّر من يُذكَر.",
  "Cleaning is a recurring-revenue business sold one-off on Google. Reviews decide both the first booking and the contract renewal.":
    "التنظيف نشاط بإيرادات متكرّرة لكنه يُباع كطلب فردي على Google. والتقييمات تقرّر الحجز الأول وتجديد العقد معًا.",
  "Closing the gap delivers a step change. Simply creating a profile on the right platforms — Google, Trustpilot, the category-specific directories the AI engines weight in your sector — lifts your citation share in AI answers from 1% to roughly 53.5%. Adding genuine, recent reviews from your real customers and crossing the eighty-review threshold pushes citation share above 75%. The curve is not gradual. It is a step function with two cliffs, and most brands are sitting on the wrong side of both.":
    "سدّ الفجوة يُحدث نقلة نوعية. فمجرّد إنشاء ملف على المنصّات المناسبة — Google و Trustpilot والأدلة المتخصّصة بقطاعك التي تُعطيها محرّكات الذكاء الاصطناعي وزنًا — يرفع حصّتك من الاستشهادات في إجابات الذكاء الاصطناعي من 1% إلى نحو 53.5%. وإضافة تقييمات حقيقية وحديثة من عملائك الفعليين وتجاوز عتبة الثمانين تقييمًا يدفع حصّة الاستشهاد إلى ما فوق 75%. المنحنى ليس تدريجيًا، بل دالة درجية بحافّتين، ومعظم العلامات تقف على الجانب الخاطئ من كلتيهما.",
  "Closing the gap is operational work — done across your property and against the comp set — not a marketing campaign.":
    "سدّ الفجوة عمل تشغيلي — يجري عبر منشأتك ومقابل مجموعة المنافسين — لا حملة تسويقية.",
  "Closing the gap is our expertise":
    "سدّ الفجوة هو تخصّصنا",
  "Competitive hospitality reputation is our expertise":
    "سمعة الضيافة التنافسية هي تخصّصنا",
  "Couples spend a year reading reviews before they book your wedding venue. One bad review can cost you the entire wedding season.":
    "تقضي الأزواج عامًا في قراءة التقييمات قبل حجز قاعة أفراحك. وتقييم سيّئ واحد قد يُكلّفك موسم الأعراس بأكمله.",
  "Customer using a laptop to ask an AI assistant for a shopping recommendation":
    "عميل يستخدم حاسوبًا محمولًا ليسأل مساعد ذكاء اصطناعي عن توصية شرائية",
  "Customers do not weigh 50 positive reviews against 5 negative ones. They focus on the negatives, draw their conclusion, and book the competitor.":
    "العملاء لا يوازنون 50 تقييمًا إيجابيًا مقابل 5 سلبية. بل يُركّزون على السلبية، ويستخلصون حكمهم، ويحجزون لدى المنافس.",
  "Customers stopped scrolling through ten blue links. They are reading the AI's answer at the top of the page, and acting on it. Roughly 58% of consumers now use AI to find a product or service. New research analysing 800,000 AI-generated answers across ChatGPT, Gemini, Perplexity and Google's AI Mode shows that one specific signal — your presence and activity on third-party review platforms — has become one of the single biggest factors in whether your brand is ever named in that answer.":
    "توقّف العملاء عن تصفّح الروابط الزرقاء العشرة. صاروا يقرؤون إجابة الذكاء الاصطناعي في صدر الصفحة، ويتصرّفون بناءً عليها. ونحو 58% من المستهلكين باتوا يستخدمون الذكاء الاصطناعي للعثور على منتج أو خدمة. وبحث جديد حلّل 800,000 إجابة مُولَّدة بالذكاء الاصطناعي عبر ChatGPT و Gemini و Perplexity ووضع AI Mode من Google يُظهر أن إشارة واحدة بعينها — حضورك ونشاطك على منصّات التقييم الخارجية — صارت أحد أكبر العوامل المنفردة في ما إذا كانت علامتك ستُذكَر في تلك الإجابة أصلًا.",
  "Customers used to browse, compare, and decide. That sequence is now compressed into a single sentence generated by an AI. Nearly 60% of consumers now use AI tools to help them shop, and 77% say AI makes them decide faster. Almost half say they trust an AI recommendation more than a friend's. The familiar marketing funnel — awareness, consideration, decision — has collapsed into one answer at the top of the page.":
    "كان العملاء يتصفّحون، ويقارنون، ثم يقرّرون. الآن انضغط هذا التسلسل في جملة واحدة يُولّدها الذكاء الاصطناعي. ونحو 60% من المستهلكين باتوا يستخدمون أدوات الذكاء الاصطناعي في التسوّق، و77% يقولون إنه يجعلهم يقرّرون أسرع. وقرابة النصف يقولون إنهم يثقون بتوصية الذكاء الاصطناعي أكثر من توصية صديق. لقد انهار قمع التسويق المألوف — الوعي، والتفكير، والقرار — إلى إجابة واحدة في صدر الصفحة.",
  "Dubai families hand a stranger every belonging they own on moving day. Your reviews decide whether that stranger is your team or the competitor's.":
    "عائلات دبي تُسلّم غريبًا كل ما تملكه يوم الانتقال. وتقييماتك هي ما يقرّر إن كان ذلك الغريب فريقك أم فريق المنافس.",
  "Dubai pet owners pick a vet on Google before they ever ring. Your reviews decide whether the new puppy becomes your patient for the next twelve years.":
    "أصحاب الحيوانات الأليفة في دبي يختارون الطبيب البيطري على Google قبل أن يتّصلوا. وتقييماتك هي ما يقرّر إن كان الجرو الجديد سيصبح مريضك للسنوات الاثنتي عشرة القادمة.",
  "Dubai removals crew loading a customer's belongings into a branded moving truck":
    "فريق نقل أثاث في دبي يُحمّل أغراض عميل في شاحنة نقل تحمل علامته التجارية",
  "Each of these is a discipline. Doing one of them well does not compensate for ignoring the others. A Dubai hotel with 800 five-star reviews but zero coverage in Hotelier Middle East or Condé Nast Traveller Middle East will lose to a competitor with 400 reviews and three citations in those publications, because the AI weights citation authority more heavily than raw review count. The rules of the game changed quietly. Most businesses are still playing the old one.":
    "كل واحد من هذه مجال تخصّص قائم بذاته. وإتقان واحد منها لا يُعوّض إهمال البقية. فندق في دبي بـ 800 تقييم من فئة الخمس نجوم لكن بلا أي تغطية في Hotelier Middle East أو Condé Nast Traveller Middle East سيخسر أمام منافس له 400 تقييم وثلاثة استشهادات في تلك المنشورات، لأن الذكاء الاصطناعي يُعطي مرجعية الاستشهادات وزنًا أكبر من العدد الخام للتقييمات. لقد تغيّرت قواعد اللعبة بصمت، ومعظم الأنشطة ما زالت تلعب باللعبة القديمة.",
  "Editorial team":
    "فريق التحرير",
  "Equally damaging is silence. Roughly 65% of physicians have zero online reviews at all. To a prospective patient, a profile with no reviews is not neutral — it is risk. They cannot tell whether the practice is new, sleepy, untested, or simply ignored by its own patients. They book the practice with twelve hundred reviews and a 4.8 instead.":
    "وبنفس القدر من الضرر يأتي الصمت. فنحو 65% من الأطبّاء لا تقييمات لهم على الإنترنت إطلاقًا. وبالنسبة للمريض المحتمل، الملف الخالي من التقييمات ليس محايدًا — بل مخاطرة. لا يستطيع أن يميّز إن كانت العيادة جديدة، أم خاملة، أم غير مجرّبة، أم ببساطة يتجاهلها مرضاها أنفسهم. فيحجز بدلًا منها لدى العيادة التي لها ألف ومئتا تقييم بمعدّل 4.8.",
  "Every category in the country now has more capable competitors than there are customers willing to spend. Your review profile is the single tie-breaker. The 82% number is not abstract. It is the difference between a fully booked diary and an empty one.":
    "كل قطاع في البلاد بات فيه من المنافسين الأكفّاء أكثر ممّا فيه من عملاء مستعدّين للإنفاق. وملف تقييماتك هو الفيصل الوحيد. ورقم الـ 82% ليس مجرّدًا، بل هو الفارق بين جدول مواعيد ممتلئ وآخر فارغ.",
  "Every dirham of your ad spend is now paying to send qualified prospects straight to your Google profile, where your review profile then decides whether the booking lands with you or with the competitor. If the profile is weak, you are paying — at premium rates — to feed customers to your competitors. The campaign metric looks like cost-per-click. The business reality is cost-per-customer-handed-to-someone-else.":
    "كل درهم من إنفاقك الإعلاني بات يدفع لإرسال عملاء محتملين مؤهّلين مباشرةً إلى ملفك على Google، حيث يقرّر ملف تقييماتك بعدها إن كان الحجز سيستقرّ لديك أم لدى المنافس. وإن كان الملف ضعيفًا، فأنت تدفع — وبأسعار مرتفعة — لتغذية منافسيك بالعملاء. مؤشر الحملة يبدو وكأنه تكلفة لكل نقرة، أما واقع العمل فهو تكلفة كل عميل تُسلّمه لسواك.",
  "Every engagement starts with a free 7-page audit comparing your property to its three closest competitors across the metrics that move demand. Every engagement is backed by a 90-day money-back guarantee tied to the metrics we agree at the start. The gap your competitor's review profile is opening up against you is not a soft brand issue. It is room nights. We close it.":
    "يبدأ كل تعاقد بتدقيق مجاني من 7 صفحات يقارن منشأتك بأقرب ثلاثة منافسين عبر المؤشرات التي تُحرّك الطلب. وكل تعاقد مدعوم بضمان استرداد الأموال خلال 90 يومًا مرتبط بالمؤشّرات التي نتفق عليها في البداية. الفجوة التي يفتحها ملف تقييمات منافسك في وجهك ليست مسألة علامة تجارية هيّنة، بل هي ليالٍ فندقية. ونحن نسدّها.",
  "Families pick a funeral director in their worst hour. Your Google reviews decide whether they pick yours.":
    "تختار العائلات دار الجنازات في أحلك ساعاتها. وتقييماتك على Google هي ما يقرّر إن كانوا سيختارون دارك.",
  "For a Dubai service business, the financial picture compounds quickly and silently. The clicks are not measurably down on the campaign report. The customer never made it into the campaign. They got their answer from Perplexity at breakfast, picked one of the three businesses the model named, and the conversation with your category was over before you ever knew it had started.":
    "بالنسبة لنشاط خدمي في دبي، تتراكم الصورة المالية بسرعة وبصمت. النقرات ليست منخفضة بشكل ملحوظ في تقرير الحملة، لأن العميل لم يصل إلى الحملة أصلًا. لقد حصل على إجابته من Perplexity على الإفطار، واختار أحد الأنشطة الثلاثة التي سمّاها النموذج، وانتهى الحوار مع قطاعك قبل أن تعلم أنه بدأ.",
  "For a modern service business in Dubai or anywhere else in the UAE, the review profile is the front door. Customers do not arrive on your website cold. They arrive having already seen your Google star rating, scrolled the most recent comments, and compared you against the two or three competitors directly next to you on the map.":
    "بالنسبة لنشاط خدمي عصري في دبي أو أي مكان آخر في الإمارات، ملف التقييمات هو الباب الأمامي. العملاء لا يصلون إلى موقعك من فراغ، بل يصلون وقد رأوا تقييمك بالنجوم على Google، وتصفّحوا أحدث التعليقات، وقارنوك بالمنافسَين أو الثلاثة الملاصقين لك على الخريطة.",
  "For a premium UAE property charging above category average, the operational reality is uncomfortable. The market is forgiving of price as long as the review profile justifies it. The moment the reviews soften — three credible-looking complaints about cleanliness, two about slow check-in, one about a billing surprise — the premium becomes indefensible to the customer reading the profile. They book the competitor at a similar rate with the stronger profile, and the operator is left with two equally bad options: drop the rate to recover the booking, or hold the rate and watch occupancy fall.":
    "بالنسبة لعقار فاخر في الإمارات يتقاضى أعلى من متوسط فئته، الواقع التشغيلي غير مريح. السوق متسامح مع السعر ما دام ملف التقييمات يُبرّره. وفي اللحظة التي تَلين فيها التقييمات — ثلاث شكاوى تبدو ذات مصداقية عن النظافة، واثنتان عن بطء تسجيل الوصول، وواحدة عن مفاجأة في الفاتورة — يصبح السعر المميّز غير قابل للدفاع أمام العميل الذي يقرأ الملف. فيحجز لدى المنافس بسعر مماثل وملف أقوى، ويبقى المشغّل أمام خيارين سيّئين بالقدر نفسه: خفض السعر لاستعادة الحجز، أو التمسّك به ومشاهدة نسبة الإشغال تتراجع.",
  "For a private clinic or dental practice in the UAE, the financial picture compounds quickly. A single visible negative review can divert hundreds of thousands of dirhams of new-patient revenue per year to a competitor. Several such reviews can collapse new-patient acquisition entirely. We have seen well-equipped, clinically excellent practices spend twelve months pouring money into marketing without understanding why bookings keep falling — and the answer was sitting in plain sight on their Google profile the entire time.":
    "بالنسبة لعيادة خاصة أو عيادة أسنان في الإمارات، تتراكم الصورة المالية بسرعة. فتقييم سلبي واحد ظاهر قد يُحوّل مئات آلاف الدراهم من إيرادات المرضى الجدد سنويًا إلى منافس. وعدّة تقييمات كهذه قد تُنهي استقطاب المرضى الجدد تمامًا. وقد رأينا عيادات مجهّزة جيّدًا ومتميّزة طبيًا تُنفق اثني عشر شهرًا تضخّ المال في التسويق دون أن تفهم لماذا تستمرّ الحجوزات في التراجع — والجواب كان ماثلًا للعيان على ملفها في Google طوال الوقت.",
  "For an operator, that has direct implications. Responding well to a comment about service quality moves more demand than responding to a comment about distance to the airport. Investing in cleanliness or check-in speed and making sure those operational gains land in the next month's reviews moves more demand than a refurb of an already-photogenic lobby.":
    "بالنسبة للمشغّل، لذلك تبعات مباشرة. فالردّ الجيّد على تعليق يخصّ جودة الخدمة يُحرّك طلبًا أكبر من الردّ على تعليق يخصّ بُعد المطار. والاستثمار في النظافة أو سرعة تسجيل الوصول، والحرص على أن تنعكس هذه المكاسب التشغيلية في تقييمات الشهر التالي، يُحرّك طلبًا أكبر من تجديد ردهة فاتنة المظهر أصلًا.",
  "For most of the history of the car business, the showroom was where the sale began. A polished forecourt, the right car on the floor, a confident salesperson — and the relationship started. That sequence has now inverted. The relationship begins on Google, on TripAdvisor for car rental, on Property Finder-style listings for used cars, on YouTube walkarounds and on Instagram reels. The showroom is where the buyer comes to confirm a decision they already made online.":
    "طوال معظم تاريخ تجارة السيارات، كان المعرض هو حيث يبدأ البيع. ساحة عرض أنيقة، والسيارة المناسبة في الصالة، وبائع واثق — وتبدأ العلاقة. الآن انعكس هذا التسلسل. العلاقة تبدأ على Google، وعلى TripAdvisor لتأجير السيارات، وعلى قوائم بأسلوب Property Finder للسيارات المستعملة، وعلى فيديوهات الاستعراض في YouTube ومقاطع Instagram. أما المعرض فهو حيث يأتي المشتري ليؤكّد قرارًا اتّخذه على الإنترنت بالفعل.",
  "For two decades the customer's first impression of a business happened in a search results page: ten links, a few star ratings, a handful of paid ads. Today it happens inside a single paragraph generated by an AI. The AI has already read the reviews, compared the businesses, weighted the citations, and condensed all of it into one confident answer at the top of the screen.":
    "طوال عقدين، كان الانطباع الأول للعميل عن نشاط ما يحدث في صفحة نتائج بحث: عشرة روابط، وبضعة تقييمات بالنجوم، وحفنة إعلانات مدفوعة. أما اليوم فيحدث داخل فقرة واحدة يُولّدها الذكاء الاصطناعي. فقد قرأ التقييمات، وقارن الأنشطة، وأعطى الاستشهادات أوزانها، وكثّف كل ذلك في إجابة واحدة واثقة في أعلى الشاشة.",
  "For two decades, the digital purchase journey was a funnel: a Google search at the top, ten blue links to compare, a few tabs left open, a decision somewhere at the bottom. The customer did the work of comparing. The brand's job was to be on page one and convert when they arrived.":
    "طوال عقدين، كانت رحلة الشراء الرقمية قمعًا: بحث على Google في الأعلى، وعشرة روابط زرقاء للمقارنة، وبضع علامات تبويب مفتوحة، وقرار في مكان ما في الأسفل. العميل هو من كان يقوم بعمل المقارنة، ومهمّة العلامة أن تكون في الصفحة الأولى وأن تُحوّل العميل حين يصل.",
  "Get a free, confidential audit of how your business appears to customers across Google, review platforms, and AI assistants — and a plain-language plan for what we will fix first.":
    "احصل على تدقيق مجاني وسرّي لكيفية ظهور نشاطك أمام العملاء عبر Google ومنصّات التقييم ومساعدي الذكاء الاصطناعي — وخطّة بلغة واضحة لما سنُصلحه أولًا.",
  "Healthcare reputation is our expertise":
    "سمعة قطاع الرعاية الصحية هي تخصّصنا",
  "Home services is the trust-the-stranger economy. The review profile decides whether the customer ever lets the technician in.":
    "الخدمات المنزلية هي اقتصاد ائتمان الغريب. وملف التقييمات هو ما يقرّر إن كان العميل سيسمح للفنّي بالدخول أصلًا.",
  "Hoteliers have spent two decades treating online reviews as their own problem. Peer-reviewed research published in the Journal of Marketing now says it is just as much a competitor problem. Analysing three years of booking data from six US upscale hotels alongside TripAdvisor sentiment scores, the authors find that a 1% lift in a competitor's sentiment score quietly removes roughly 0.25% of your bookings at the average price point — and 0.34% at premium price points.":
    "أمضى أصحاب الفنادق عقدين يتعاملون مع التقييمات على الإنترنت بوصفها مشكلتهم وحدهم. والآن يقول بحث محكَّم نُشر في Journal of Marketing إنها مشكلة المنافس بالقدر نفسه. فبتحليل ثلاث سنوات من بيانات الحجوزات لستة فنادق راقية في الولايات المتحدة إلى جانب درجات مشاعر TripAdvisor، يجد الباحثون أن ارتفاع مؤشر مشاعر منافسك بنسبة 1% يُزيل بصمت نحو 0.25% من حجوزاتك عند السعر المتوسط — و0.34% عند الأسعار المميّزة.",
  "How ChatGPT actually decides which businesses to name in its answer.":
    "كيف يُقرّر ChatGPT فعليًا أي الأنشطة يُسمّيها في إجابته.",
  "INSIGHTS — AESTHETIC CLINICS":
    "أبحاث — عيادات التجميل",
  "INSIGHTS — AI IS REDEFINING SEARCH":
    "أبحاث — الذكاء الاصطناعي يُعيد تعريف البحث",
  "INSIGHTS — AI SEARCH":
    "أبحاث — البحث بالذكاء الاصطناعي",
  "INSIGHTS — AUTOMOTIVE INDUSTRY":
    "أبحاث — قطاع السيارات",
  "INSIGHTS — BARS, LOUNGES & ENTERTAINMENT":
    "أبحاث — البارات والصالات والترفيه",
  "INSIGHTS — BUSINESS SERVICES":
    "أبحاث — خدمات الأعمال",
  "INSIGHTS — CAR RENTAL":
    "أبحاث — تأجير السيارات",
  "INSIGHTS — CHAUFFEUR & AIRPORT TRANSFERS":
    "أبحاث — السائقين الخاصين ونقل المطارات",
  "INSIGHTS — CLEANING SERVICES":
    "أبحاث — خدمات التنظيف",
  "INSIGHTS — CONSUMER STUDY":
    "أبحاث — دراسة المستهلك",
  "INSIGHTS — CYBERSECURITY & EMPLOYEE PRIVACY":
    "أبحاث — الأمن السيبراني وخصوصية الموظّفين",
  "INSIGHTS — DENTAL CLINICS":
    "أبحاث — عيادات الأسنان",
  "INSIGHTS — DOCTORS & PRIVATE CLINICS":
    "أبحاث — الأطبّاء والعيادات الخاصة",
  "INSIGHTS — EMPLOYER REPUTATION":
    "أبحاث — سمعة جهة العمل",
  "INSIGHTS — EXECUTIVE PRIVACY & PERSONAL REPUTATION":
    "أبحاث — خصوصية التنفيذيين والسمعة الشخصية",
  "INSIGHTS — FINANCIAL SERVICES":
    "أبحاث — الخدمات المالية",
  "INSIGHTS — FIT-OUT CONTRACTORS":
    "أبحاث — مقاولي التشطيبات",
  "INSIGHTS — FITNESS, SPA & WELLNESS":
    "أبحاث — اللياقة والسبا والعافية",
  "INSIGHTS — FUNERAL DIRECTORS":
    "أبحاث — دور الجنازات",
  "INSIGHTS — HEALTHCARE INDUSTRY":
    "أبحاث — قطاع الرعاية الصحية",
  "INSIGHTS — HOME SERVICES":
    "أبحاث — الخدمات المنزلية",
  "INSIGHTS — HOSPITALITY":
    "أبحاث — الضيافة",
  "INSIGHTS — LASER EYE SURGERY":
    "أبحاث — جراحة العيون بالليزر",
  "INSIGHTS — LAW FIRMS & SOLICITORS":
    "أبحاث — مكاتب المحاماة والمحامين",
  "INSIGHTS — PERSONAL CARE & BEAUTY SALONS":
    "أبحاث — العناية الشخصية وصالونات التجميل",
  "INSIGHTS — REAL ESTATE AGENCIES":
    "أبحاث — مكاتب العقارات",
  "INSIGHTS — REMOVALS & MOVERS":
    "أبحاث — نقل الأثاث وشركات النقل",
  "INSIGHTS — REPUTATION STRATEGY":
    "أبحاث — استراتيجية السمعة",
  "INSIGHTS — RESTAURANTS & CAFÉS":
    "أبحاث — المطاعم والمقاهي",
  "INSIGHTS — STRATEGY":
    "أبحاث — الاستراتيجية",
  "INSIGHTS — TAKEAWAYS & FOOD DELIVERY":
    "أبحاث — الوجبات الجاهزة وتوصيل الطعام",
  "INSIGHTS — TRAVEL AGENTS & DMCs":
    "أبحاث — وكلاء السفر ومنظّمي الوجهات",
  "INSIGHTS — VETERINARY & ANIMAL CARE":
    "أبحاث — الطب البيطري والعناية بالحيوان",
  "INSIGHTS — WEDDING & EVENT VENUES":
    "أبحاث — قاعات الأفراح والفعاليات",
  "Insights | Reputation Experts":
    "مقالات وأبحاث | خبراء السمعة",
  "Read more":
    "اقرأ المزيد",
  "April 2, 2026":
    "2 أبريل 2026",
  "April 12, 2026":
    "12 أبريل 2026",
  "April 22, 2026":
    "22 أبريل 2026",
  "Placeholder image — to be replaced":
    "صورة مؤقتة — ستُستبدل",
  "AR":
    "AR",
  "EN":
    "EN",
  "Facebook":
    "فيسبوك",
  "LinkedIn":
    "لينكدإن",
  "RE":
    "RE",
  "Key takeaways":
    "أبرز النقاط",
  "Last updated:":
    "آخر تحديث:",
  "More Insights":
    "مقالات أخرى",
  "May 2, 2026":
    "2 مايو 2026",
  "May 12, 2026":
    "12 مايو 2026",
  "May 22, 2026":
    "22 مايو 2026",
  "If what they see looks strong, they call. If what they see looks weak, they call the competitor instead. There is no third option. The hesitation that costs you the booking is invisible — the customer never tells you why they didn't pick up the phone.":
    "إن بدا ما يرونه قويًا، اتّصلوا بك. وإن بدا ضعيفًا، اتّصلوا بالمنافس بدلًا منك. لا خيار ثالث. والتردّد الذي يُكلّفك الحجز غير مرئي — فالعميل لا يُخبرك أبدًا لماذا لم يرفع السمّاعة.",
  "If your brand is in that paragraph, you are in the customer's consideration set. If your brand is not in it, your category just had a conversation about who to choose, and you were not in the room. There is no second page, no second chance. The funnel collapsed into a single sentence.":
    "إن كانت علامتك في تلك الفقرة، فأنت ضمن خيارات العميل. وإن لم تكن فيها، فإن قطاعك للتوّ أجرى محادثة حول من يُختار، وأنت لم تكن في الغرفة. لا صفحة ثانية، ولا فرصة ثانية. لقد انهار القمع إلى جملة واحدة.",
  "In B2B, the buying committee Googles you before the first call. Any one of them can quietly veto the deal.":
    "في قطاع الأعمال بين الشركات، تبحث عنك لجنة الشراء على Google قبل أول مكالمة. وأيّ فرد منها قادر على نقض الصفقة بصمت.",
  "In a Dubai market where any leisure traveller comparing two beach resorts in JBR, or any business traveller comparing two Downtown five-stars, is reading both review profiles in the same five minutes, the relative gap is the lever. The property with the better recent sentiment wins the booking. The property with the equivalent average rating but stale, unanswered reviews loses it — and the operator never sees the booking in their own report at all.":
    "في سوق دبي، حيث أي مسافر ترفيه يقارن منتجعين على شاطئ JBR، أو أي مسافر أعمال يقارن فندقين من فئة الخمس نجوم في وسط المدينة، يقرأ ملفّي التقييمات كليهما في الدقائق الخمس نفسها، تكون الفجوة النسبية هي الرافعة. المنشأة ذات المشاعر الحديثة الأفضل تكسب الحجز. والمنشأة ذات المعدّل المماثل لكن بتقييمات قديمة لم يُرَدّ عليها تخسره — والمشغّل لا يرى الحجز في تقريره أصلًا.",
  "In aesthetics, your reputation is the first consultation. Your reviews decide whether the second one ever happens.":
    "في قطاع التجميل، سمعتك هي الاستشارة الأولى. وتقييماتك هي ما يقرّر إن كانت الثانية ستحدث أصلًا.",
  "In financial services, the customer is hiring trust. The reviews decide whether the first meeting ever happens.":
    "في الخدمات المالية، العميل يستأجر الثقة. والتقييمات هي ما يقرّر إن كان اللقاء الأول سيحدث أصلًا.",
  "In healthcare more than any other category, this is the verdict, and it is unforgiving. Reviews are the difference between a booking and no booking, a consultation and a missed consultation, a referral that converts and a referral that quietly goes elsewhere. Nothing else in the operation makes up for it.":
    "في الرعاية الصحية أكثر من أي قطاع آخر، هذا هو الحكم، وهو لا يرحم. التقييمات هي الفارق بين حجز وعدمه، واستشارة واستشارة فائتة، وإحالة تتحوّل إلى مريض وإحالة تذهب بصمت إلى مكان آخر. ولا شيء آخر في العمل يُعوّض ذلك.",
  "International travellers book Dubai trips on the reviews of one DMC. Your profile decides whether the AED 80,000 itinerary is yours.":
    "المسافرون الدوليون يحجزون رحلات دبي بناءً على تقييمات منظّم وجهات واحد. وملفك هو ما يقرّر إن كان برنامج الرحلة بقيمة 80,000 درهم من نصيبك.",
  "It is 7pm on Friday in Dubai. Three couples are choosing where to eat in the next 90 seconds. Your Google profile is the menu they read first.":
    "إنها السابعة مساءً يوم الجمعة في دبي. ثلاثة أزواج يختارون أين يتناولون العشاء خلال الـ 90 ثانية القادمة. وملفك على Google هو القائمة التي يقرؤونها أولًا.",
  "Knowing you have fourteen new negative reviews this month is not protection. Removing them is. The dashboard is not the work.":
    "معرفتك بأن لديك أربعة عشر تقييمًا سلبيًا جديدًا هذا الشهر ليست حماية. إزالتها هي الحماية. اللوحة ليست هي العمل.",
  "Laser eye patients are doing the most cautious online research of any consumer in the healthcare economy. Your reviews are the verdict.":
    "مرضى تصحيح النظر بالليزر يُجرون أكثر بحث على الإنترنت حذرًا بين كل مستهلكي اقتصاد الرعاية الصحية. وتقييماتك هي الحكم.",
  "Marketing spend, premium equipment and a beautiful clinic cannot compensate for what patients read about you online.":
    "الإنفاق التسويقي والمعدّات المتميّزة والعيادة الجميلة لا تُعوّض ما يقرؤه المرضى عنك على الإنترنت.",
  "Membership businesses are reputation businesses. A weak Google profile costs you the renewal, not just the next sign-up.":
    "أنشطة العضويات هي أنشطة سمعة. والملف الضعيف على Google يُكلّفك التجديد، لا الاشتراك التالي وحده.",
  "Modern Dubai automotive showroom floor with premium vehicles on display":
    "صالة عرض سيارات عصرية في دبي تُعرض فيها مركبات فاخرة",
  "Multi-location brands we work with see AI search visibility lift by 61% within the first 60 days. Every engagement starts with a free 7-page audit of how each AI engine currently sees your business, and every engagement is backed by a 90-day money-back guarantee tied to the metrics we agree at the start. The outcome is not better content. The outcome is the AI naming your brand when your customer asks the question that matters.":
    "العلامات متعدّدة الفروع التي نعمل معها تشهد ارتفاعًا في الظهور بالبحث الذكي بنسبة 61% خلال أوّل 60 يومًا. يبدأ كل تعاقد بتدقيق مجاني من 7 صفحات لكيفية رؤية كل محرّك ذكاء اصطناعي لنشاطك حاليًا، وكل تعاقد مدعوم بضمان استرداد الأموال خلال 90 يومًا مرتبط بالمؤشّرات التي نتفق عليها في البداية. النتيجة ليست محتوى أفضل، بل أن يُسمّي الذكاء الاصطناعي علامتك حين يطرح عميلك السؤال المهمّ.",
  "Nearly 60% of consumers now use AI tools to help them shop. The decision is made before they ever click through to a website.":
    "نحو 60% من المستهلكين باتوا يستخدمون أدوات الذكاء الاصطناعي في التسوّق. والقرار يُتّخذ قبل أن ينقروا للوصول إلى أي موقع.",
  "Nearly 60% of customers now use AI to shop. They are not seeing your website — they are seeing the AI's answer.":
    "نحو 60% من العملاء باتوا يستخدمون الذكاء الاصطناعي في التسوّق. هم لا يرون موقعك — بل يرون إجابة الذكاء الاصطناعي.",
  "Nearly 60% of customers now use AI to shop. They are not seeing your website — they are seeing the AI's answer. | Reputation Experts":
    "نحو 60% من العملاء باتوا يستخدمون الذكاء الاصطناعي في التسوّق. هم لا يرون موقعك — بل يرون إجابة الذكاء الاصطناعي. | خبراء السمعة",
  "Neither is sustainable. Reputation is doing the pricing work the revenue team thinks the revenue team is doing.":
    "وكلا الخيارين غير مستدام. السمعة تقوم بعمل التسعير الذي يظنّ فريق الإيرادات أنه هو من يقوم به.",
  "No review presence means functionally invisible":
    "غياب الحضور في التقييمات يعني انعدام الظهور عمليًا",
  "On Talabat, Deliveroo and Just Eat, the star rating is the menu. Everything else is the small print.":
    "على Talabat و Deliveroo و Just Eat، التقييم بالنجوم هو القائمة. وكل ما عداه تفاصيل هامشية.",
  "One bad review can cost hundreds of thousands of dirhams. Several can close the business.":
    "تقييم سيّئ واحد قد يُكلّف مئات آلاف الدراهم. وعدّة تقييمات قد تُغلق النشاط.",
  "Our team responds to every review on your behalf, in the languages your customers use, with on-brand voice and within the SLA the engines reward. And our editorial team secures placements in the wider third-party publications the AI models trust as citation sources — so the answer the model writes about you is built out of high-quality material the engine already has reason to believe.":
    "يردّ فريقنا على كل تقييم نيابةً عنك، باللغات التي يستخدمها عملاؤك، بصوت متّسق مع علامتك وضمن مدة الاستجابة التي تُكافئها المحرّكات. ويؤمّن فريقنا التحريري ظهورًا في المنشورات الخارجية الأوسع التي تثق بها نماذج الذكاء الاصطناعي كمصادر استشهاد — حتى تكون الإجابة التي يكتبها النموذج عنك مبنيّة من مادة عالية الجودة لدى المحرّك سبب يدعوه لتصديقها.",
  "Patients decide before they ever call":
    "المرضى يقرّرون قبل أن يتّصلوا أصلًا",
  "Patients do not weigh 50 positive reviews against 5 negative ones. They focus on the negatives and call the competitor.":
    "المرضى لا يوازنون 50 تقييمًا إيجابيًا مقابل 5 سلبية. بل يُركّزون على السلبية ويتّصلون بالمنافس.",
  "Perplexity shows its work. That makes the citation game more transparent — and more competitive — than any other AI engine.":
    "Perplexity يُظهر مصادره. وهذا يجعل لعبة الاستشهادات أكثر شفافية — وأكثر تنافسية — من أي محرّك ذكاء اصطناعي آخر.",
  "Pricing decisions made without watching competitor review movement are systematically wrong. The reviews are doing half of the pricing work.":
    "قرارات التسعير المتّخذة دون مراقبة حركة تقييمات المنافسين خاطئة بشكل منهجي. فالتقييمات تقوم بنصف عمل التسعير.",
  "Ransomware does not start in the firewall. It starts in your employees' LinkedIn profiles, data-broker listings and leaked passwords. We remove the data the attacker needs.":
    "برمجيات الفدية لا تبدأ من الجدار الناري، بل تبدأ من ملفات موظّفيك على LinkedIn، وقوائم وسطاء البيانات، وكلمات المرور المسرّبة. نُزيل البيانات التي يحتاجها المهاجم.",
  "Ready to turn your reputation — and your business — around?":
    "هل أنت مستعدّ لقلب موازين سمعتك — ونشاطك — نحو الأفضل؟",
  "Reception of a modern medical centre — the first thing patients see online before they ever visit in person":
    "استقبال مركز طبي عصري — أوّل ما يراه المرضى على الإنترنت قبل أن يزوروه شخصيًا",
  "Researchers describe this as 'augmented decision-making': the customer keeps the final say, but the AI does the filtering. 77% of consumers say it makes them decide faster. Almost half trust the AI's answer more than a friend's for purchases in the AI's area of expertise. The job of the brand has fundamentally inverted. It is not enough to be findable. You now have to be nameable by the model.":
    "يصف الباحثون ذلك بـ \"اتخاذ القرار المعزَّز\": يحتفظ العميل بالكلمة الأخيرة، لكن الذكاء الاصطناعي يقوم بالفرز. 77% من المستهلكين يقولون إنه يجعلهم يقرّرون أسرع، وقرابة النصف يثقون بإجابته أكثر من توصية صديق في مجال خبرته. لقد انقلبت مهمّة العلامة جذريًا. لم يعد كافيًا أن تكون قابلًا للعثور عليك، بل عليك الآن أن تكون قابلًا لأن يُسمّيك النموذج.",
  "Responding matters as much as collecting":
    "الردّ لا يقلّ أهمية عن الجمع",
  "Responding to reviews matters as much as collecting them. Live two-way engagement signals an operational, accountable business.":
    "الردّ على التقييمات لا يقلّ أهمية عن جمعها. فالتفاعل الحيّ ثنائي الاتجاه يدلّ على نشاط فاعل ومسؤول.",
  "Review and trust platforms are now the second-most cited source type in AI-generated answers — 14% of all citations point to them.":
    "منصّات التقييم والثقة باتت ثاني أكثر أنواع المصادر استشهادًا في الإجابات المُولَّدة بالذكاء الاصطناعي — إذ يشير إليها 14% من كل الاستشهادات.",
  "Reviews are your front door — and the competition is vicious":
    "التقييمات هي بابك الأمامي — والمنافسة شرسة",
  "Same forecourt, same inventory, same team, same finance partners. The reputation is different — and the test-drive calendar, the trade-in funnel and the monthly gross margin are different with it. That is what automotive reputation, done as a specialty, actually changes.":
    "الساحة نفسها، والمخزون نفسه، والفريق نفسه، وشركاء التمويل أنفسهم. لكن السمعة مختلفة — ومعها يختلف جدول تجارب القيادة، وقمع استبدال السيارات، وهامش الربح الشهري. هذا ما تُغيّره فعلًا سمعة قطاع السيارات حين تُدار كتخصّص.",
  "Same surgeons, same equipment, same team, same location. The reputation is different — and the booking calendar is different with it. That is what healthcare reputation, done as a specialty, actually changes.":
    "الجرّاحون أنفسهم، والمعدّات نفسها، والفريق نفسه، والموقع نفسه. لكن السمعة مختلفة — ومعها يختلف جدول الحجوزات. هذا ما تُغيّره فعلًا سمعة الرعاية الصحية حين تُدار كتخصّص.",
  "Second, the type of review content matters. Reviews about attributes the traveller cannot independently verify before arriving — service, cleanliness, comfort, the feel of the property — move bookings significantly more than reviews about attributes that are visible from the hotel's own website, like location or the photos of the suite. Reviews carry exactly the weight that the customer cannot verify any other way.":
    "ثانيًا، نوع محتوى التقييم مهمّ. فالتقييمات المتعلّقة بسمات لا يستطيع المسافر التحقّق منها بنفسه قبل وصوله — الخدمة، والنظافة، والراحة، وإحساس المكان — تُحرّك الحجوزات أكثر بكثير من التقييمات المتعلّقة بسمات ظاهرة على موقع الفندق نفسه، كالموقع أو صور الجناح. التقييمات تحمل بالضبط الوزن الذي لا يستطيع العميل التحقّق منه بأي طريقة أخرى.",
  "Several visible negative reviews are not a marketing inconvenience. They are a business-ending event. We have seen otherwise viable businesses — strong service, good team, good location — close within twelve months because the review profile turned against them and they did not know how to recover.":
    "عدّة تقييمات سلبية ظاهرة ليست إزعاجًا تسويقيًا، بل حدثًا يُنهي النشاط. وقد رأينا أنشطة قابلة للاستمرار لولا ذلك — خدمة قوية، وفريق جيّد، وموقع جيّد — تُغلق خلال اثني عشر شهرًا لأن ملف التقييمات انقلب ضدّها ولم تعرف كيف تتعافى.",
  "Several visible negative reviews can end an otherwise healthy business inside twelve months.":
    "عدّة تقييمات سلبية ظاهرة قادرة على إنهاء نشاط سليم لولاها خلال اثني عشر شهرًا.",
  "Share:":
    "شارك:",
  "View all":
    "عرض الكل",
  "What's inside":
    "ما يتضمّنه المقال",
  "Simply creating a profile lifts citation share to 53.5%. Brands with 80+ reviews are cited in over three-quarters of AI answers.":
    "مجرّد إنشاء ملف يرفع حصّة الاستشهاد إلى 53.5%. والعلامات التي تتجاوز 80 تقييمًا يُستشهد بها في أكثر من ثلاثة أرباع إجابات الذكاء الاصطناعي.",
  "That funnel is gone. A customer in Dubai today opens ChatGPT, or scrolls to the Google AI Overview that now sits above the blue links, or asks Perplexity, and gets a single confident sentence: 'The best aesthetic clinic in Marina with Arabic-speaking consultants is X. Two others to consider are Y and Z.' The comparison has already been done — by the model, in silence, on the customer's behalf — before any website is ever opened.":
    "اختفى ذلك القمع. فالعميل في دبي اليوم يفتح ChatGPT، أو يتصفّح إجابة Google AI Overview التي صارت تتصدّر الروابط الزرقاء، أو يسأل Perplexity، فيحصل على جملة واحدة واثقة: \"أفضل عيادة تجميل في المارينا بمستشارين يتحدّثون العربية هي X. وثمّة خياران آخران للنظر فيهما هما Y و Z.\" لقد أُجريت المقارنة بالفعل — بواسطة النموذج، بصمت، نيابةً عن العميل — قبل أن يُفتح أي موقع.",
  "The AI answer is the new front page of the internet":
    "إجابة الذكاء الاصطناعي هي الصفحة الأمامية الجديدة للإنترنت",
  "The bar and lounge customer makes the fastest commercial decision in the consumer economy. Your reviews are the entire pitch.":
    "عميل البار والصالة يتّخذ أسرع قرار تجاري في اقتصاد المستهلك. وتقييماتك هي العرض بأكمله.",
  "The competitive math is unforgiving in a different way to traditional search. On a Google results page, even position six gets a few clicks. In an AI answer, there is no position six. There is the brand the model names, and there is everyone else. The difference between being named and not being named is the difference between being in the customer's consideration set and being completely absent from it.":
    "المعادلة التنافسية لا ترحم بطريقة تختلف عن البحث التقليدي. ففي صفحة نتائج Google، حتى المركز السادس يحصل على بعض النقرات. أما في إجابة الذكاء الاصطناعي فلا يوجد مركز سادس. هناك العلامة التي يُسمّيها النموذج، وهناك كل من سواها. والفرق بين أن تُذكَر وألّا تُذكَر هو الفرق بين أن تكون ضمن خيارات العميل وأن تكون غائبًا عنها تمامًا.",
  "The damage is not abstract. A clinic with a few visible one-star reviews does not lose a few percentage points of new-patient acquisition — it can lose the majority of it. Healthcare buyers are uniquely cautious. They will see one credible-looking complaint about a botched outcome, a rude reception, a misdiagnosis, or a billing surprise, and they will quietly close the tab. They will not call. They will not tell you why.":
    "الضرر ليس مجرّدًا. فعيادة بها بضعة تقييمات ظاهرة بنجمة واحدة لا تخسر بضع نقاط مئوية من استقطاب المرضى الجدد — بل قد تخسر معظمه. مشترو الرعاية الصحية حذرون على نحو فريد. سيرون شكوى واحدة تبدو ذات مصداقية عن نتيجة فاشلة، أو استقبال فظّ، أو تشخيص خاطئ، أو مفاجأة في الفاتورة، فيُغلقون النافذة بصمت. لن يتّصلوا، ولن يُخبروك بالسبب.",
  "The data is uncomfortable, and it is consistent across the major engines. Brands with no presence on the dominant third-party review platforms appear in just 1% of AI-generated answers in their category. Not a low number — a vanishingly small number. To an AI engine, the absence of an active review footprint reads as the absence of a legitimate operating business. The model fills the gap with the competitor who does have one.":
    "البيانات غير مريحة، وهي متّسقة عبر المحرّكات الكبرى. فالعلامات التي لا حضور لها على منصّات التقييم الخارجية المهيمنة تظهر في 1% فقط من الإجابات المُولَّدة بالذكاء الاصطناعي في قطاعها. ليس رقمًا منخفضًا فحسب — بل رقمًا يكاد يتلاشى. فبالنسبة لمحرّك الذكاء الاصطناعي، غياب بصمة تقييمات نشطة يُقرأ كغياب نشاط تجاري شرعي قائم. ويملأ النموذج الفراغ بالمنافس الذي يملك تلك البصمة.",
  "The effect is bigger than most pricing teams realise. A 1% improvement in your own sentiment score is worth roughly a 0.38% lift in bookings at the average price point. But a 1% improvement in the sentiment score of the property next door costs you about 0.25% of those same bookings. The two effects compound. A competitor that quietly pulls ahead by ten or twenty basis points of sentiment is not just winning their own room nights — they are taking yours.":
    "الأثر أكبر ممّا تُدركه معظم فرق التسعير. فتحسّن مؤشر مشاعرك أنت بنسبة 1% يُساوي ارتفاعًا نحو 0.38% في الحجوزات عند السعر المتوسط. لكن تحسّن مؤشر مشاعر المنشأة المجاورة بنسبة 1% يُكلّفك نحو 0.25% من تلك الحجوزات نفسها. والأثران يتراكمان. فالمنافس الذي يتقدّم بصمت بعشر أو عشرين نقطة أساس من المشاعر لا يكسب لياليه الفندقية فحسب — بل يأخذ ليالِيك أنت.",
  "The financial damage from a damaged review profile is rarely visible on a single P&L line. It surfaces as quietly missing footfall: test drives that never get booked, finance enquiries that never come in, trade-in valuations that get done by the competitor instead. For a UAE dealership selling new vehicles at a typical margin structure, a steady leak of even ten qualified buyers a month — each carrying a vehicle, a finance package and a service-plan attachment — runs into hundreds of thousands of dirhams of monthly gross.":
    "الضرر المالي من ملف تقييمات متضرّر نادرًا ما يظهر في سطر واحد من قائمة الأرباح والخسائر. بل يطفو كزيارات غائبة بصمت: تجارب قيادة لا تُحجَز، واستفسارات تمويل لا تَرِد، وتقييمات استبدال تُنجَز لدى المنافس بدلًا منك. وبالنسبة لوكالة في الإمارات تبيع مركبات جديدة بهيكل هامش نموذجي، فإن تسرّبًا منتظمًا لعشرة مشترين مؤهّلين فقط شهريًا — كلٌّ منهم يحمل مركبة، وباقة تمويل، وعقد خدمة ملحقًا — يصل إلى مئات آلاف الدراهم من إجمالي الربح الشهري.",
  "The mechanism is intuitive once you think about it. A live, two-way conversation tells the AI engine that the business is operationally real, that customer service exists, that complaints get addressed, that the profile is not a long-abandoned page. The model is, in effect, scoring your accountability. The brands that look accountable get named in the answer. The brands that look dormant do not.":
    "الآلية بديهية متى فكّرت فيها. فالمحادثة الحيّة ثنائية الاتجاه تُخبر محرّك الذكاء الاصطناعي بأن النشاط قائم فعلًا، وأن خدمة العملاء موجودة، وأن الشكاوى تُعالَج، وأن الملف ليس صفحة مهجورة منذ زمن. النموذج، في الواقع، يُقيّم مدى مسؤوليّتك. والعلامات التي تبدو مسؤولة تُذكَر في الإجابة، والعلامات التي تبدو خاملة لا تُذكَر.",
  "The most expensive mistake we see businesses make is to treat AI search as an SEO problem to be solved with more content and more backlinks. Classic SEO ranks pages. AI ranks businesses. The signals are different, the weighting is different, and the levers that move them are different.":
    "أغلى خطأ نراه الأنشطة ترتكبه هو التعامل مع البحث بالذكاء الاصطناعي كمشكلة تحسين محركات بحث تُحلّ بمزيد من المحتوى ومزيد من الروابط الخلفية. تحسين البحث التقليدي يُرتّب الصفحات، والذكاء الاصطناعي يُرتّب الأنشطة. الإشارات مختلفة، والأوزان مختلفة، والروافع التي تُحرّكها مختلفة.",
  "The next finding from the research is even more counterintuitive. Collecting reviews lifts AI citation share substantially. Replying to those reviews lifts it further. Engaged profiles — ones with consistent, professional responses to both positive and negative reviews — appear in AI answers materially more often than otherwise identical profiles that simply collect feedback in silence.":
    "النتيجة التالية من البحث أكثر مخالفةً للحدس. جمع التقييمات يرفع حصّة الاستشهاد في الذكاء الاصطناعي رفعًا كبيرًا. والردّ على تلك التقييمات يرفعها أكثر. فالملفات المتفاعلة — التي تردّ باستمرار واحتراف على التقييمات الإيجابية والسلبية معًا — تظهر في إجابات الذكاء الاصطناعي بمعدّل أعلى ملموسًا من ملفات مطابقة لها تكتفي بجمع الملاحظات في صمت.",
  "The numbers behind that shift are unambiguous. A typical car buyer now spends more than fourteen hours researching online during their purchase journey, and arrives at the dealership with a shortlist of one or perhaps two showrooms. They have already read your reviews. They have already compared you against the dealership down the road. They are not arriving to be sold to — they are arriving to be served.":
    "الأرقام وراء هذا التحوّل لا لبس فيها. فمشتري السيارة النموذجي يقضي الآن أكثر من أربع عشرة ساعة في البحث على الإنترنت خلال رحلة شرائه، ويصل إلى الوكالة بقائمة مختصرة من معرض واحد أو ربما اثنين. لقد قرأ تقييماتك بالفعل، وقارنك بالوكالة المجاورة بالفعل. هو لا يصل ليُباع له — بل يصل ليُخدَم.",
  "The outcome is a business that finally converts the customers it was already paying to attract — and a category position that compounds month after month instead of decaying under negative content. Same operation, same team, same location. Different reputation. Different business.":
    "النتيجة نشاط يُحوّل أخيرًا العملاء الذين كان يدفع لاستقطابهم أصلًا — وموقع في القطاع يتراكم شهرًا بعد شهر بدلًا من أن يتآكل تحت المحتوى السلبي. العمل نفسه، والفريق نفسه، والموقع نفسه. سمعة مختلفة. نشاط مختلف.",
  "The outcome is straightforward to describe. Harmful reviews come down. A professional pipeline of positive feedback comes online from your real, recent customers. The dealership moves into the top 3% of its category on Google Maps. The answer buyers get from Google's AI Overview and ChatGPT — when they ask, 'best Audi dealer in Dubai', 'best used car showroom Sharjah', 'most reliable luxury car rental Marina' — starts naming you instead of the competitor down the road.":
    "النتيجة سهلة الوصف. التقييمات المسيئة تُزال. وخطّ منتظم من الملاحظات الإيجابية يبدأ بالظهور من عملائك الحقيقيين الحديثين. وتنتقل الوكالة إلى أعلى 3% من فئتها على Google Maps. والإجابة التي يحصل عليها المشترون من Google AI Overview و ChatGPT — حين يسألون \"أفضل وكيل Audi في دبي\"، أو \"أفضل معرض سيارات مستعملة في الشارقة\"، أو \"أكثر تأجير سيارات فاخرة موثوقية في المارينا\" — تبدأ بذكرك بدلًا من المنافس المجاور.",
  "The outcome is the AI naming your brand when your customer asks the question that matters. Every engagement starts with a free 7-page audit of how each AI engine currently sees your business, and every engagement is backed by a 90-day money-back guarantee tied to the metrics we agree at the start. The gap between 1% and 75%+ AI citation share is not a moonshot. It is operational work, done in the right order, by a team that has done it before.":
    "النتيجة أن يُسمّي الذكاء الاصطناعي علامتك حين يطرح عميلك السؤال المهمّ. يبدأ كل تعاقد بتدقيق مجاني من 7 صفحات لكيفية رؤية كل محرّك ذكاء اصطناعي لنشاطك حاليًا، وكل تعاقد مدعوم بضمان استرداد الأموال خلال 90 يومًا مرتبط بالمؤشّرات التي نتفق عليها في البداية. الفجوة بين 1% وأكثر من 75% من حصّة الاستشهاد ليست حلمًا بعيد المنال، بل عمل تشغيلي يُنفَّذ بالترتيب الصحيح على يد فريق فعله من قبل.",
  "The outcome we deliver is straightforward to describe. Harmful reviews come down. A professional pipeline of positive patient feedback comes online. The practice moves into the top 3% of its category on Google Maps. The answer patients get from Google's AI Overview, ChatGPT and the major AI assistants — when they ask, 'best aesthetic clinic near me', 'best paediatric dentist in Dubai', 'best laser eye clinic Abu Dhabi' — starts naming you.":
    "النتيجة التي نحقّقها سهلة الوصف. التقييمات المسيئة تُزال. وخطّ منتظم من ملاحظات المرضى الإيجابية يبدأ بالظهور. وتنتقل العيادة إلى أعلى 3% من فئتها على Google Maps. والإجابة التي يحصل عليها المرضى من Google AI Overview و ChatGPT وكبرى مساعدي الذكاء الاصطناعي — حين يسألون \"أفضل عيادة تجميل قريبة\"، أو \"أفضل طبيب أسنان أطفال في دبي\"، أو \"أفضل عيادة تصحيح نظر بالليزر في أبوظبي\" — تبدأ بذكرك.",
  "The reputation playbook that has protected Fortune 500 companies for twenty years is now running for SMBs in the UK and the UAE. The capability is the same. The price is finally reachable.":
    "خطة السمعة التي حمت شركات Fortune 500 لعشرين عامًا تعمل الآن لصالح الشركات الصغيرة والمتوسطة في المملكة المتحدة والإمارات. القدرة نفسها. والسعر صار أخيرًا في المتناول.",
  "The research finds the effect amplifies at premium price points. A property positioned at the high end of its market sees a 0.54% lift in bookings from a 1% sentiment improvement of its own, and a 0.34% drop from a 1% sentiment improvement at a competitor. In simple language: the more you charge, the more aggressively reviews swing demand in both directions.":
    "يجد البحث أن الأثر يتضخّم عند الأسعار المميّزة. فالمنشأة الموضوعة في الطرف الأعلى من سوقها تشهد ارتفاعًا 0.54% في الحجوزات من تحسّن مشاعرها بنسبة 1%، وانخفاضًا 0.34% من تحسّن مشاعر منافس بنسبة 1%. وبلغة بسيطة: كلّما رفعت سعرك، تأرجح الطلب مع التقييمات بحدّة أكبر في الاتجاهين.",
  "The salon economy runs on walk-ins and rebooks. Both are decided on Google before the first appointment.":
    "اقتصاد الصالونات يقوم على الزيارات المباشرة وإعادة الحجز. وكلاهما يُحسَم على Google قبل الموعد الأول.",
  "The segment and content differences nobody talks about":
    "اختلافات الشرائح والمحتوى التي لا يتحدّث عنها أحد",
  "The shopping journey just collapsed into a single answer":
    "رحلة التسوّق انهارت للتوّ إلى إجابة واحدة",
  "The showroom is no longer your first impression":
    "المعرض لم يعد انطباعك الأول",
  "The three signals the engines weight, in plain language, are relevance, recency and ranking. A dormant profile fails all three. A profile with steady, recent, professional engagement passes all three — and the AI rewards it with citations your competitors do not get.":
    "الإشارات الثلاث التي تُقيّمها المحرّكات، بلغة واضحة، هي الصلة والحداثة والترتيب. والملف الخامل يفشل في الثلاث جميعًا. أما الملف ذو التفاعل المنتظم الحديث الاحترافي فينجح في الثلاث — ويُكافئه الذكاء الاصطناعي باستشهادات لا يحظى بها منافسوك.",
  "The threshold is unforgiving. 86% of buyers will not even consider a business rated below four stars. A 3.8 is not a low score — it is a screening filter that removes the dealership from the buyer's shortlist before any salesperson, any package, any test drive ever enters the conversation. A 4.7 with twelve hundred reviews, by contrast, becomes the default choice in its segment.":
    "الحدّ لا يرحم. 86% من المشترين لا يأخذون في الاعتبار أصلًا نشاطًا تقييمه أقل من أربع نجوم. والتقييم 3.8 ليس درجة منخفضة — بل فلتر فرز يُقصي الوكالة من قائمة المشتري المختصرة قبل أن يدخل المحادثة أي بائع، أو باقة، أو تجربة قيادة. أما التقييم 4.7 بألف ومئتي تقييم، فيصبح في المقابل الخيار الافتراضي في شريحته.",
  "The traditional model in hospitality has treated reviews as a self-contained scoreboard: every property worries about its own rating, its own response rate, its own monthly review volume. The Journal of Marketing study takes that view apart. Demand for a hotel does not just respond to its own sentiment. It responds to the relative position of its sentiment against the directly competing properties in the same market.":
    "النموذج التقليدي في الضيافة تعامل مع التقييمات كلوحة نتائج مستقلّة: كل منشأة تقلق بشأن تقييمها ونسبة ردّها وحجم تقييماتها الشهري. ودراسة Journal of Marketing تُفكّك هذه النظرة. فالطلب على فندق لا يستجيب لمشاعره وحده، بل يستجيب لموقع مشاعره النسبي مقابل المنشآت المنافسة المباشرة في السوق نفسها.",
  "The work is delivered by AI agents and a Dubai-based reputation team running in parallel. Agents push accurate, multilingual updates to your Google Business Profile, Apple Business Connect and Bing Places. Agents time review-request campaigns to your real operational rhythm — checkout, treatment completion, project handover. Our editorial and PR team secures placements in the Middle East and international publications the AI engines trust as citation sources in your category. The platform measures the lift, weekly, per location, per engine.":
    "يُنفَّذ العمل بواسطة وكلاء ذكاء اصطناعي وفريق سمعة مقرّه دبي يعملان بالتوازي. يدفع الوكلاء تحديثات دقيقة متعدّدة اللغات إلى ملفك على Google Business و Apple Business Connect و Bing Places. ويضبط الوكلاء توقيت حملات طلب التقييم وفق إيقاع عملك الفعلي — المغادرة، إنجاز العلاج، تسليم المشروع. ويؤمّن فريقنا التحريري والعلاقات العامة ظهورًا في المنشورات الشرق أوسطية والعالمية التي تثق بها محرّكات الذكاء الاصطناعي كمصادر استشهاد في قطاعك. وتقيس المنصّة الارتفاع أسبوعيًا، لكل فرع، ولكل محرّك.",
  "This is closeable. The gap between invisible and cited is a programme of reviews, responses and citation work — not a re-platforming.":
    "هذه الفجوة قابلة للسدّ. فالمسافة بين الغياب والاستشهاد هي برنامج من التقييمات والردود وأعمال الاستشهاد — لا إعادة بناء للمنصّة.",
  "This is not a marketing problem. It is a revenue problem, and in a competitive market like the UAE, it is rapidly becoming a survival problem.":
    "هذه ليست مشكلة تسويق، بل مشكلة إيرادات، وفي سوق تنافسي كالإمارات، تتحوّل بسرعة إلى مشكلة بقاء.",
  "This is not about ranking on Google any more":
    "لم يعد الأمر يتعلّق بالترتيب على Google",
  "This is the blind spot most dealer principals miss. You can have the cleanest used stock in the city. You can have the most aggressive finance package on the lot. You can run Google Vehicle Ads, Meta carousel ads, OEM-funded display, and a polished SEO content stack. None of it converts if the buyer, having clicked your ad, opens your Google Business Profile and reads three recent reviews mentioning hidden fees, slow service, or a misleading listing.":
    "هذه هي البقعة العمياء التي يُغفلها معظم أصحاب الوكالات. قد يكون لديك أنظف مخزون سيارات مستعملة في المدينة. وأقوى باقة تمويل في الساحة. وقد تُشغّل إعلانات Google Vehicle Ads، وإعلانات Meta الدوّارة، وإعلانات عرض مموّلة من الوكيل الأصلي، ومنظومة محتوى SEO مصقولة. ولن يُحوّل أيٌّ منها إن فتح المشتري — بعد نقره على إعلانك — ملفك على Google Business وقرأ ثلاثة تقييمات حديثة تذكر رسومًا خفية، أو خدمة بطيئة، أو إعلانًا مضلّلًا.",
  "This is the part most clinic owners and practice managers miss. You can have the best aesthetic surgeon in the city. You can have million-dirham equipment, a flagship clinic in Business Bay, a brand campaign on every channel, a generous package deal, a polished website. None of it converts if the prospective patient — having clicked your ad — opens your Google Business Profile and reads three reviews mentioning a bad result, rude staff, or surprise billing.":
    "هذا هو الجزء الذي يُغفله معظم أصحاب العيادات ومديريها. قد يكون لديك أفضل جرّاح تجميل في المدينة. ومعدّات بملايين الدراهم، وعيادة رئيسية في الخليج التجاري، وحملة علامة على كل قناة، وعرض باقة سخيّ، وموقع مصقول. ولن يُحوّل أيٌّ منها إن فتح المريض المحتمل — بعد نقره على إعلانك — ملفك على Google Business وقرأ ثلاثة تقييمات تذكر نتيجة سيّئة، أو طاقمًا فظًّا، أو فاتورة مفاجئة.",
  "This is the part most operators miss, and it is the most expensive blind spot in the business. You can spend tens of thousands of dirhams a month on Meta and Google ads. You can renovate the showroom. You can redesign the website. You can install million-dirham equipment. You can run a generous launch discount. None of it matters if the prospect, having clicked your ad, opens your Google Business Profile and sees four negative reviews.":
    "هذا هو الجزء الذي يُغفله معظم المشغّلين، وهو أغلى بقعة عمياء في النشاط. قد تُنفق عشرات آلاف الدراهم شهريًا على إعلانات Meta و Google. وقد تُجدّد المعرض، وتُعيد تصميم الموقع، وتُركّب معدّات بملايين الدراهم، وتُطلق خصم افتتاح سخيًّا. ولا يهمّ أيٌّ من ذلك إن فتح العميل المحتمل — بعد نقره على إعلانك — ملفك على Google Business ورأى أربعة تقييمات سلبية.",
  "This is the verdict, and it is the same verdict in every category: reviews decide. Reviews are the difference between a sale and no sale, a booking and no booking, a call picked up and a call ignored. Nothing else in your operation compensates for it.":
    "هذا هو الحكم، وهو الحكم نفسه في كل قطاع: التقييمات تقرّر. التقييمات هي الفارق بين بيع وعدمه، وحجز وعدمه، ومكالمة يُردّ عليها وأخرى تُتجاهل. ولا شيء آخر في عملك يُعوّض ذلك.",
  "Three in four patients begin their search for a new provider on these platforms. 84% will not even consider a provider rated four stars or below, even one that has been personally recommended to them by a friend or another doctor. A four-star average, in healthcare, is not a good rating. It is a stop sign.":
    "ثلاثة من كل أربعة مرضى يبدؤون بحثهم عن مزوّد جديد على هذه المنصّات. و84% لن يأخذوا في الاعتبار أصلًا مزوّدًا تقييمه أربع نجوم أو أقل، حتى لو أوصى به صديق أو طبيب آخر شخصيًا. ومعدّل أربع نجوم، في الرعاية الصحية، ليس تقييمًا جيّدًا، بل إشارة توقّف.",
  "Tourists choose their Dubai rental car on the flight, before the plane lands. Your reviews are the entire ad campaign.":
    "السيّاح يختارون سيّارتهم المؤجَّرة في دبي على متن الطائرة، قبل أن تهبط. وتقييماتك هي الحملة الإعلانية بأكملها.",
  "Travellers book Dubai chauffeur and airport transfers from the air. Your reviews decide whose driver is at the kerb.":
    "المسافرون يحجزون السائقين الخاصين ونقل المطارات في دبي من الجوّ. وتقييماتك هي ما يقرّر سائق من سيكون عند الرصيف.",
  "Turn the reputation around and the business turns around with it.":
    "اقلب موازين السمعة، ينقلب النشاط معها.",
  "Turn the reputation around. The business follows.":
    "اقلب موازين السمعة، ويتبعها النشاط.",
  "Two more findings from the study are particularly useful for any property running a mixed-segment business. First, the segments behave differently. Leisure travellers are more sensitive to price than to reviews. Business travellers are the opposite — they are far more sensitive to reviews than to price, because comfort, service quality and reliability are non-negotiable when the trip is on the company card.":
    "ثمّة نتيجتان أُخريان من الدراسة مفيدتان بشكل خاص لأي منشأة تخدم شرائح مختلطة. أولًا، الشرائح تتصرّف بشكل مختلف. مسافرو الترفيه أكثر حساسية للسعر من التقييمات. ومسافرو الأعمال عكس ذلك — فهم أكثر حساسية للتقييمات من السعر بكثير، لأن الراحة وجودة الخدمة والموثوقية غير قابلة للتفاوض حين تكون الرحلة على حساب الشركة.",
  "US businesses will spend over $140 billion on Google ads this year. Most of it is leaking to competitors with better review profiles.":
    "ستُنفق الأنشطة الأمريكية أكثر من 140 مليار دولار على إعلانات Google هذا العام. ومعظمه يتسرّب إلى منافسين بملفّات تقييم أفضل.",
  "We build and run the exact programme that closes this gap. We set up and maintain your presence on the review platforms AI engines actually weight for your category — Google Business Profile, Trustpilot, TripAdvisor, Booking.com and the industry-specific directories that matter in your vertical. We run multilingual review-request campaigns timed to your real operational rhythm so the profile fills with genuine, recent feedback from your real customers, not stale or solicited content.":
    "نبني ونُدير البرنامج الذي يسدّ هذه الفجوة بالضبط. نُنشئ ونصون حضورك على منصّات التقييم التي تُعطيها محرّكات الذكاء الاصطناعي وزنًا فعليًا في قطاعك — Google Business Profile و Trustpilot و TripAdvisor و Booking.com والأدلة المتخصّصة المهمّة في مجالك. ونُنفّذ حملات طلب تقييم متعدّدة اللغات بتوقيت إيقاع عملك الفعلي، حتى يمتلئ الملف بملاحظات حقيقية حديثة من عملائك الفعليين، لا بمحتوى قديم أو مستجدًى.",
  "We built a dedicated AI search practice for exactly this moment. Across Google AI Overview, ChatGPT, Perplexity and Gemini, in every language Dubai customers search in — English, Arabic, Russian, Mandarin — we measure who is being named in your category, who is being cited, and how the model is describing each location of your business. Then we close the gap.":
    "بنينا ممارسة متخصّصة للبحث بالذكاء الاصطناعي لهذه اللحظة بالذات. عبر Google AI Overview و ChatGPT و Perplexity و Gemini، وبكل لغة يبحث بها عملاء دبي — الإنجليزية والعربية والروسية والماندرين — نقيس من يُذكَر في قطاعك، ومن يُستشهد به، وكيف يصف النموذج كل فرع من فروع نشاطك. ثم نسدّ الفجوة.",
  "We remove the harmful reviews dragging the profile down. We build a steady, professional pipeline of positive feedback from your real customers. We move the business into the top 3% of its category on Google Maps. We change the answer prospects get when they look you up on Google, and we change the answer AI assistants like Google's AI Overview and ChatGPT give when buyers ask for recommendations in your category.":
    "نُزيل التقييمات المسيئة التي تسحب الملف إلى الأسفل. ونبني خطًّا منتظمًا احترافيًا من الملاحظات الإيجابية من عملائك الحقيقيين. وننقل النشاط إلى أعلى 3% من فئته على Google Maps. ونُغيّر الإجابة التي يحصل عليها العملاء المحتملون حين يبحثون عنك على Google، ونُغيّر الإجابة التي يُعطيها مساعدو الذكاء الاصطناعي مثل Google AI Overview و ChatGPT حين يسأل المشترون عن توصيات في قطاعك.",
  "We run reputation programmes for hotels, resorts, serviced apartments and hospitality groups in the UAE that explicitly include the comp set. We do not just track your property's reviews and sentiment across Google, TripAdvisor, Booking.com and the OTAs your buyers actually use. We track the same metrics for the three to five properties you genuinely compete with, weekly, in every language your guests are reviewing in, and we tell you exactly where the gap is widening or narrowing month over month.":
    "نُدير برامج سمعة لفنادق ومنتجعات وشقق فندقية ومجموعات ضيافة في الإمارات تشمل صراحةً مجموعة المنافسين. نحن لا نتتبّع تقييمات منشأتك ومشاعرها عبر Google و TripAdvisor و Booking.com ومنصّات الحجز التي يستخدمها مشتروك فحسب، بل نتتبّع المؤشّرات نفسها للمنشآت الثلاث إلى الخمس التي تُنافسها فعلًا، أسبوعيًا، بكل لغة يُقيّم بها ضيوفك، ونُخبرك بالضبط أين تتّسع الفجوة أو تضيق شهرًا بعد شهر.",
  "We run the multilingual review-request workflow that fills your profile with recent, authentic feedback at the moment guests are happiest — post-stay, post-dining, post-spa, post-event. Our team responds to every review on your behalf in the languages your guests use, within the SLA the platforms reward. And we work the citation and press placements that influence the AI engines now writing the recommendation answers travellers read before they ever open Booking.com.":
    "نُدير سير عمل طلب التقييم متعدّد اللغات الذي يملأ ملفك بملاحظات حديثة وحقيقية في اللحظة التي يكون فيها الضيوف أسعد — بعد الإقامة، وبعد تناول الطعام، وبعد السبا، وبعد الفعالية. ويردّ فريقنا على كل تقييم نيابةً عنك باللغات التي يستخدمها ضيوفك، ضمن مدة الاستجابة التي تُكافئها المنصّات. ونعمل على الاستشهادات والظهور الصحفي الذي يؤثّر على محرّكات الذكاء الاصطناعي التي تكتب الآن إجابات التوصية التي يقرؤها المسافرون قبل أن يفتحوا Booking.com أصلًا.",
  "We work specifically with clinics, dental practices, aesthetic centres and medical groups across the UAE — and we treat healthcare reputation as its own discipline, because it is. The stakes are higher, the language patients use is more clinical, the platforms are different, and the regulatory environment around what providers can say in public is tighter than in any other industry.":
    "نعمل تحديدًا مع العيادات وعيادات الأسنان ومراكز التجميل والمجموعات الطبية في الإمارات — ونتعامل مع سمعة الرعاية الصحية كتخصّص قائم بذاته، لأنها كذلك. فالمخاطر أعلى، واللغة التي يستخدمها المرضى أكثر طابعًا طبيًا، والمنصّات مختلفة، والبيئة التنظيمية حول ما يمكن لمزوّدي الخدمة قوله علنًا أكثر صرامة من أي قطاع آخر.",
  "We work with dealerships, showrooms, automotive groups and rental companies across the UAE — and we treat automotive reputation as its own discipline. The buyer journey is longer than other categories, the financial commitment is bigger, and the channels that matter (Google, Booking.com for rental, TripAdvisor, the OEM directories, the local agent profiles) are different. A general-purpose reputation playbook does not move the needle here. A specialist one does.":
    "نعمل مع الوكالات والمعارض ومجموعات السيارات وشركات التأجير في الإمارات — ونتعامل مع سمعة قطاع السيارات كتخصّص قائم بذاته. فرحلة المشتري أطول من القطاعات الأخرى، والالتزام المالي أكبر، والقنوات المهمّة (Google، و Booking.com للتأجير، و TripAdvisor، وأدلة الوكلاء الأصليين، وملفات الوكلاء المحلّيين) مختلفة. وخطة سمعة عامة لا تُحدث فرقًا هنا، بل الخطة المتخصّصة هي ما يفعل.",
  "Weak reviews quietly cost a dealership hundreds of thousands of dirhams a month in lost test drives, lost trade-ins and lost finance enquiries.":
    "التقييمات الضعيفة تُكلّف الوكالة بصمت مئات آلاف الدراهم شهريًا من تجارب قيادة مفقودة، وصفقات استبدال ضائعة، واستفسارات تمويل لم تَرِد.",
  "What AI engines actually weight when they decide who to name in an answer is four things: how recently and how authentically you are reviewed (and in which languages the customer is searching in), how often you are cited by the third-party sources the model trusts in your category, how consistent and complete your business profile is across Google, Apple and Bing, and how cleanly your own website tells the model what you do.":
    "ما تُقيّمه محرّكات الذكاء الاصطناعي فعليًا حين تقرّر من تُسمّيه في الإجابة أربعة أمور: مدى حداثة تقييماتك ومدى أصالتها (وبأي لغات يبحث العميل)، وكم مرّة تستشهد بك المصادر الخارجية التي يثق بها النموذج في قطاعك، ومدى اتّساق واكتمال ملف نشاطك عبر Google و Apple و Bing، ومدى وضوح ما يُخبر به موقعك النموذج عمّا تفعله.",
  "What a damaged review profile actually costs a clinic":
    "ما الذي يُكلّفه فعلًا ملف تقييمات متضرّر لعيادة ما",
  "What being absent from the AI answer actually costs":
    "ما الذي يُكلّفه فعلًا الغياب عن إجابة الذكاء الاصطناعي",
  "What makes Google's AI Overview different from every other AI search engine — and why your Google Business Profile is the leverage point.":
    "ما الذي يجعل Google AI Overview مختلفًا عن أي محرّك بحث ذكاء اصطناعي آخر — ولماذا ملفك على Google Business هو نقطة الارتكاز.",
  "What sits on your Google profile, your TripAdvisor, your Doctify or your Trustpilot is therefore not a marketing artefact. It is the verdict patients use to decide whether their family ends up in your chair or in the chair of the practice down the road.":
    "ما يقبع على ملفك في Google، و TripAdvisor، و Doctify، أو Trustpilot ليس إذن أثرًا تسويقيًا، بل الحكم الذي يستخدمه المرضى ليقرّروا إن كانت عائلتهم ستنتهي على كرسيّك أم على كرسيّ العيادة المجاورة.",
  "What that means for an operator is simple, even if it is uncomfortable. A dealership with a weak online reputation does not get a chance to lose the sale on the showroom floor. It loses the sale before the buyer ever walks in.":
    "ما يعنيه ذلك للمشغّل بسيط، وإن كان غير مريح. الوكالة ذات السمعة الرقمية الضعيفة لا تحصل على فرصة لخسارة البيع في صالة العرض، بل تخسره قبل أن يدخل المشتري أصلًا.",
  "What we do is not a tactical clean-up. It is a complete turnaround of how the business appears to every prospective customer, and by turning the reputation around, we turn the business around.":
    "ما نفعله ليس تنظيفًا تكتيكيًا، بل قلبًا كاملًا لكيفية ظهور النشاط أمام كل عميل محتمل، وبقلب موازين السمعة، نقلب موازين النشاط.",
  "What weak reviews actually cost a dealership":
    "ما الذي تُكلّفه فعلًا التقييمات الضعيفة لوكالة سيارات",
  "When a patient is choosing a clinic, a dentist, an aesthetic provider or a hospital, they are not comparing brochures. They are comparing reviews. Roughly 94% of patients now use online reviews to evaluate a provider before they book — and the bar in healthcare is the highest of any industry. People are trusting their bodies, their faces, the health of their children. The margin for hesitation is zero.":
    "حين يختار المريض عيادة، أو طبيب أسنان، أو مزوّد تجميل، أو مستشفى، فهو لا يقارن كتيّبات، بل يقارن تقييمات. ونحو 94% من المرضى باتوا يعتمدون على التقييمات لتقييم مزوّد الخدمة قبل الحجز — والسقف في الرعاية الصحية أعلى من أي قطاع. الناس يأتمنون على أجسادهم، ووجوههم، وصحة أطفالهم. وهامش التردّد صفر.",
  "When an AI engine names three businesses in its answer for your category, the rest of the market — however well-positioned on traditional Google, however clever the website, however active on social — simply does not exist for that customer. The funnel has collapsed and the AI's answer is now the only top of the page that matters.":
    "حين يُسمّي محرّك ذكاء اصطناعي ثلاثة أنشطة في إجابته عن قطاعك، فإن بقية السوق — مهما حسُن موقعها على Google التقليدي، ومهما كان موقعها ذكيًا، ومهما كانت نشطة على التواصل الاجتماعي — ببساطة غير موجودة بالنسبة لذلك العميل. لقد انهار القمع، وصارت إجابة الذكاء الاصطناعي هي صدر الصفحة الوحيد المهمّ.",
  "When you charge premium, the gap hits harder":
    "حين تتقاضى أسعارًا مميّزة، تضرب الفجوة أشدّ",
  "Which makes for a simple but uncomfortable question: when an AI engine writes the one paragraph that decides whether a customer picks up the phone, are you in that paragraph, or are you invisible?":
    "وهذا يطرح سؤالًا بسيطًا لكنه غير مريح: حين يكتب محرّك ذكاء اصطناعي الفقرة الوحيدة التي تقرّر إن كان العميل سيرفع السمّاعة، هل أنت في تلك الفقرة، أم أنت غير مرئي؟",
  "Which means a new and uncomfortable question for every UAE business owner: when an AI engine writes that one answer for your category, are you in it, or are you missing entirely?":
    "وهذا يعني سؤالًا جديدًا وغير مريح لكل صاحب نشاط في الإمارات: حين يكتب محرّك ذكاء اصطناعي تلك الإجابة الواحدة عن قطاعك، هل أنت فيها، أم أنت غائب تمامًا؟",
  "Which means the question is no longer 'how strong is our review profile?' The question is 'how strong is our review profile compared to the property across the road, the one that pulled an extra ten basis points of sentiment last quarter and is now siphoning room nights from us every weekend?'":
    "وهذا يعني أن السؤال لم يعد \"ما مدى قوّة ملف تقييماتنا؟\"، بل \"ما مدى قوّة ملف تقييماتنا مقارنةً بالمنشأة المقابلة، تلك التي حقّقت عشر نقاط أساس إضافية من المشاعر الربع الماضي وتسحب منّا الآن ليالي فندقية كل عطلة نهاية أسبوع؟\"",
  "Your ad spend at that point is doing the opposite of what it was meant to do. It is paying — at premium healthcare CPCs — to send carefully qualified patients straight into your Google profile, where the review profile decides whether the enquiry lands with you or with the competitor down the corniche. The campaign report still shows clicks. The clinic sees fewer bookings every month.":
    "إنفاقك الإعلاني عند تلك النقطة يفعل عكس ما قُصد منه. فهو يدفع — بتكاليف نقرة مرتفعة خاصة بالرعاية الصحية — لإرسال مرضى مؤهّلين بعناية مباشرةً إلى ملفك على Google، حيث يقرّر ملف التقييمات إن كان الاستفسار سيستقرّ لديك أم لدى المنافس على الكورنيش. تقرير الحملة ما زال يُظهر نقرات، والعيادة ترى حجوزات أقل كل شهر.",
  "Your ad spend at that point is performing the most expensive trick in the business: feeding qualified, ready-to-buy customers straight into your competitor's funnel. The campaign report still shows clicks. The buyer still requests a brochure — from the dealership across town. The cost-per-click looks fine on the dashboard. The cost-per-customer-handed-to-someone-else is what is actually being paid.":
    "إنفاقك الإعلاني عند تلك النقطة يؤدّي أغلى حيلة في النشاط: تغذية عملاء مؤهّلين جاهزين للشراء مباشرةً في قمع منافسك. تقرير الحملة ما زال يُظهر نقرات، والمشتري ما زال يطلب كتيّبًا — من الوكالة في الجهة الأخرى من المدينة. تكلفة النقرة تبدو جيّدة على اللوحة، أما ما يُدفع فعلًا فهو تكلفة كل عميل تُسلّمه لسواك.",
  "Your ad spend is not protecting you":
    "إنفاقك الإعلاني لا يحميك",
  "Your bookings are decided by reviews you do not own":
    "حجوزاتك تقرّرها تقييمات لا تملكها",
  "Your competitors' reviews are quietly costing you bookings. New research shows by exactly how much.":
    "تقييمات منافسيك تُكلّفك حجوزات بصمت. وبحث جديد يُظهر بالضبط كم.",
  "Your competitors' reviews are quietly costing you bookings. New research shows by exactly how much. | Reputation Experts":
    "تقييمات منافسيك تُكلّفك حجوزات بصمت. وبحث جديد يُظهر بالضبط كم. | خبراء السمعة",
  "Your home address, your spouse's name and your children's schools are on Google. We remove all of it inside thirty days.":
    "عنوان منزلك، واسم زوجك، ومدارس أطفالك على Google. نُزيل كل ذلك خلال ثلاثين يومًا.",
  "Your inventory, financing and ad spend cannot fix it":
    "مخزونك وتمويلك وإنفاقك الإعلاني لا تُصلح ذلك",
  "Your marketing budget cannot make up for what patients read about you":
    "ميزانيتك التسويقية لا تُعوّض ما يقرؤه المرضى عنك",
  "Your showroom, your sales team and your inventory are no longer your first impression. Your Google profile is. What sits on it decides whether the test drive happens in your showroom or in a competitor's.":
    "معرضك وفريق مبيعاتك ومخزونك لم يعودوا انطباعك الأول. ملفك على Google هو الانطباع الأول. وما يقبع عليه يقرّر إن كانت تجربة القيادة ستحدث في معرضك أم في معرض منافس.",
  "html":
    "html",
  "© 2026 Reputation Experts. All rights reserved.":
    "© 2026 خبراء السمعة. جميع الحقوق محفوظة.",
};
