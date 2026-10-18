/* Samui Concierge — i18n : Français · ภาษาไทย · English */
(function () {
  const LANGS = ['fr', 'th', 'en'];
  const D = { en: {}, fr: {}, th: {} };

  /* ---------------------------------------------------------------- EN */
  Object.assign(D.en, {
    'meta.title': 'Samui Concierge | Private Concierge, Villas, Boats & Dining in Koh Samui',
    'meta.desc': 'Samui Concierge coordinates private villas, boat charters, restaurants, airport transfers, transport, wellness, experiences and local services across Koh Samui, Thailand.',
    'nav.services': 'Services', 'nav.experience': 'Experience', 'nav.island': 'Koh Samui', 'nav.request': 'Request',
    'nav.partner': 'BECOME A PARTNER', 'nav.start': 'START A REQUEST',
    'load': 'LOADING EXPERIENCE',
    'hero.top1': 'KOH SAMUI · THAILAND', 'hero.top2': 'PRIVATE ISLAND CONCIERGE',
    'hero.eyebrow': 'YOUR ISLAND, WITHOUT THE WORK',
    'hero.h1': "Stay curious.<br><i>We'll handle the rest.</i>",
    'hero.p': 'From the moment you land to your last sunset — one discreet local concierge for the details that make Samui exceptional.',
    'hero.cta1': 'Tell us what you need ↗', 'hero.cta2': 'Explore Samui ↓',
    'hero.meta2': 'BEACH · JUNGLE · SEA · VILLAS', 'hero.scroll': 'SCROLL',
    'mq1': 'PRIVATE VILLAS', 'mq2': 'BOAT CHARTERS', 'mq3': 'PRIVATE CHEFS', 'mq4': 'AIRPORT TRANSFERS', 'mq5': 'WELLNESS & SPA', 'mq6': 'ISLAND TOURS', 'mq7': 'ROMANTIC EXPERIENCES',
    'intro.eyebrow': 'NOT A DIRECTORY',
    'intro.h2': "You don't need<br>another list of<br><i>phone numbers.</i>",
    'intro.p': 'Tell us where you are and what you want. We match the request to the right local option and coordinate it for you. The client never needs to browse our partner network.',
    'intro.f1': 'LOCAL MATCHING', 'intro.f2': 'ONE CONVERSATION', 'intro.f3': 'DISCREET COORDINATION',
    'how.eyebrow': 'HOW IT WORKS', 'how.h2': 'Three steps.<br><i>Zero stress.</i>',
    'how.s1t': 'Tell us', 'how.s1p': 'Share what you want, your dates and where you are staying.',
    'how.s2t': 'We match', 'how.s2p': 'We pick the right local partner and coordinate every detail.',
    'how.s3t': 'You enjoy', 'how.s3p': 'We confirm with you directly. You just show up and enjoy the island.',
    'svc.eyebrow': '32 SERVICES TO ENJOY SAMUI', 'svc.h2': "Choose a service.<br><i>We'll arrange the details.</i>",
    'svc.open': 'Discover',
    'isl.eyebrow': 'ACTIVITIES · KOH SAMUI', 'isl.h2': 'One island.<br>Thousands of<br><i>ways to experience it.</i>',
    'isl.p': 'Boat trips. Island tours. Jungle adventures. Private dinners. Proposal setups. Wellness and unforgettable experiences. Your concierge sits between all of it.',
    'z1': 'ISLAND TOURS', 'z2': 'BOAT TRIPS', 'z3': 'ADVENTURES', 'z4': 'SNORKELING', 'z5': 'PROPOSALS', 'z6': 'ROMANTIC EXPERIENCES', 'z7': 'WELLNESS', 'z8': 'PRIVATE TOURS',
    'req.eyebrow': 'ONE SIMPLE REQUEST', 'req.h2': 'What can we<br>take off your <i>plate?</i>',
    'req.lead': "Choose a service. Where a partner is involved, we'll show you the available options and collect the details we need to coordinate it.",
    'req.s1': '01 CHOOSE', 'req.s2': '02 DETAILS', 'req.s3': '03 WE CONFIRM',
    'req.what': 'WHAT DO YOU NEED', 'req.choose': 'CHOOSE YOUR PARTNER', 'req.coord': 'We coordinate the request with them for you.',
    'req.where': 'WHERE ARE YOU?', 'req.zone_ph': 'Bophut', 'req.name': 'YOUR NAME', 'req.name_ph': 'Your name',
    'req.wa': 'WHATSAPP', 'req.else': 'ANYTHING ELSE?', 'req.else_ph': 'Villa name, preferences, special requests...',
    'req.submit': 'SEND REQUEST', 'req.sending': 'Sending…', 'req.failed': 'Could not send. Please try again.',
    'req.nopartner': 'No partner is listed for this service yet. Your concierge can still coordinate it as a custom request.',
    'req.hint': 'We only need the essentials for this request. Add any preferences below.',
    'req.select': 'Select…', 'req.from': 'From', 'req.partnerdefault': 'Reservation request handled by Samui Concierge.', 'req.partner': 'PARTNER',
    'toast.sent': 'REQUEST #{id} SENT', 'toast.received': 'We received your request.',
    'foot.tag': 'Private island coordination in Koh Samui.', 'foot.explore': 'EXPLORE', 'foot.popular': 'POPULAR', 'foot.loc': 'LOCATION',
    'foot.loc1': 'Surat Thani · Thailand', 'foot.loc2': 'Local coordination',
    'foot.new': 'New request', 'foot.rest': 'Restaurants', 'foot.boat': 'Boat charters', 'foot.villas': 'Villas', 'foot.airport': 'Airport transfers',
    'back': '← BACK TO CONCIERGE', 'backhome': '← BACK TO HOME',
    'pp.title': 'Choose {s} — Samui Concierge',
    'pp.eyebrow': 'PRIVATE PARTNER COLLECTION', 'pp.h1': 'Choose your<br><i>place.</i>',
    'pp.lead': 'Browse our selected local partners. Choose the one you prefer and send us your request. We will handle the confirmation directly with the partner.',
    'pp.empty': 'No partner is currently listed for this service. Please use the general concierge request instead.',
    'pp.empty_cta': 'Make a general request →',
    'pp.your': 'YOUR REQUEST', 'pp.modaldesc': 'Reservation request coordinated by Samui Concierge.', 'pp.default': 'Selected by Samui Concierge.',
    'pp.zone_ph': 'Bophut / Villa name', 'pp.notes_ph': 'Special requests...', 'pp.send': 'SEND REQUEST TO SAMUI CONCIERGE →', 'pp.from': 'FROM',
    'pp.sent': '✓ Request #{id} sent. We will confirm with {name}.', 'pp.close': 'Close',
    'ap.title': 'Become a Partner — Samui Concierge',
    'ap.eyebrow': 'SAMUI CONCIERGE · PARTNER NETWORK', 'ap.h1': 'Put your <i>service</i><br>in front of our clients.',
    'ap.p': 'Apply to join our curated partner network. Your business stays private until Samui Concierge reviews and approves it.',
    'ap.biz': 'BUSINESS / BRAND NAME *', 'ap.tg': 'TELEGRAM *', 'ap.loc': 'LOCATION', 'ap.contact': 'CONTACT / NOTES', 'ap.optional': 'Optional',
    'ap.svcs': 'SERVICES — SELECT ALL THAT APPLY *', 'ap.svcnote': 'Select one or more of the 32 services shown on the Samui Concierge website.',
    'ap.photos': 'PHOTOS — UP TO 2, ONE URL PER LINE', 'ap.about': 'ABOUT YOUR BUSINESS / SERVICES',
    'ap.about_ph': 'Tell us what you offer, where you operate and what makes you special.', 'ap.know': 'ANYTHING WE SHOULD KNOW?',
    'ap.submit': 'SUBMIT PARTNER APPLICATION →', 'ap.note': 'Your application is private. It will not appear publicly until Samui Concierge approves it.',
    'ap.pick': 'Please select at least one service.', 'ap.ok': '✓ Application received. Your business is now pending Samui Concierge approval.',
    'ap.err': 'Could not submit application.', 'ap.loading': 'Loading services…', 'ap.loadfail': 'Could not load services. Please refresh.',
    'nf.title': "That page doesn't exist.", 'nf.p': 'Let us help you find what you need in Koh Samui.', 'nf.back': 'Return home →'
  });

  /* ---------------------------------------------------------------- FR */
  Object.assign(D.fr, {
    'meta.title': 'Samui Concierge | Conciergerie privée, villas, bateaux et restaurants à Koh Samui',
    'meta.desc': "Samui Concierge organise villas privées, locations de bateaux, restaurants, transferts aéroport, transports, bien-être, expériences et services locaux à Koh Samui, Thaïlande.",
    'nav.services': 'Services', 'nav.experience': 'Expérience', 'nav.island': 'Koh Samui', 'nav.request': 'Demande',
    'nav.partner': 'DEVENIR PARTENAIRE', 'nav.start': 'FAIRE UNE DEMANDE',
    'load': "CHARGEMENT DE L'EXPÉRIENCE",
    'hero.top1': 'KOH SAMUI · THAÏLANDE', 'hero.top2': "CONCIERGERIE PRIVÉE DE L'ÎLE",
    'hero.eyebrow': "VOTRE ÎLE, SANS LES SOUCIS",
    'hero.h1': 'Restez curieux.<br><i>Nous gérons le reste.</i>',
    'hero.p': "Du moment où vous atterrissez jusqu'à votre dernier coucher de soleil — un concierge local discret pour tous les détails qui rendent Samui exceptionnelle.",
    'hero.cta1': 'Dites-nous ce qu’il vous faut ↗', 'hero.cta2': 'Explorer Samui ↓',
    'hero.meta2': 'PLAGE · JUNGLE · MER · VILLAS', 'hero.scroll': 'DÉFILER',
    'mq1': 'VILLAS PRIVÉES', 'mq2': 'LOCATION DE BATEAUX', 'mq3': 'CHEFS PRIVÉS', 'mq4': 'TRANSFERTS AÉROPORT', 'mq5': 'BIEN-ÊTRE & SPA', 'mq6': "TOURS DE L'ÎLE", 'mq7': 'EXPÉRIENCES ROMANTIQUES',
    'intro.eyebrow': "CE N'EST PAS UN ANNUAIRE",
    'intro.h2': "Vous n'avez pas besoin<br>d'une énième liste de<br><i>numéros de téléphone.</i>",
    'intro.p': "Dites-nous où vous êtes et ce que vous voulez. Nous associons votre demande à la bonne option locale et nous nous occupons de tout. Vous n'avez jamais à parcourir notre réseau de partenaires.",
    'intro.f1': 'SÉLECTION LOCALE', 'intro.f2': 'UN SEUL INTERLOCUTEUR', 'intro.f3': 'COORDINATION DISCRÈTE',
    'how.eyebrow': 'COMMENT ÇA MARCHE', 'how.h2': 'Trois étapes.<br><i>Zéro stress.</i>',
    'how.s1t': 'Vous nous dites', 'how.s1p': 'Indiquez ce que vous souhaitez, vos dates et où vous séjournez.',
    'how.s2t': 'Nous trouvons', 'how.s2p': 'Nous choisissons le bon partenaire local et coordonnons chaque détail.',
    'how.s3t': 'Vous profitez', 'how.s3p': "Nous vous confirmons tout directement. Il ne vous reste qu'à profiter de l'île.",
    'svc.eyebrow': '32 SERVICES POUR PROFITER DE SAMUI', 'svc.h2': 'Choisissez un service.<br><i>Nous réglons les détails.</i>',
    'svc.open': 'Découvrir',
    'isl.eyebrow': 'ACTIVITÉS · KOH SAMUI', 'isl.h2': 'Une île.<br>Des milliers de<br><i>façons de la vivre.</i>',
    'isl.p': "Balades en bateau. Tours de l'île. Aventures en jungle. Dîners privés. Demandes en mariage. Bien-être et expériences inoubliables. Votre concierge est au centre de tout.",
    'z1': "TOURS DE L'ÎLE", 'z2': 'SORTIES EN BATEAU', 'z3': 'AVENTURES', 'z4': 'SNORKELING', 'z5': 'DEMANDES EN MARIAGE', 'z6': 'EXPÉRIENCES ROMANTIQUES', 'z7': 'BIEN-ÊTRE', 'z8': 'TOURS PRIVÉS',
    'req.eyebrow': 'UNE DEMANDE SIMPLE', 'req.h2': 'De quoi pouvons-nous<br>vous <i>décharger ?</i>',
    'req.lead': "Choisissez un service. Si un partenaire est concerné, nous vous montrons les options disponibles et recueillons les détails nécessaires pour tout organiser.",
    'req.s1': '01 CHOISIR', 'req.s2': '02 DÉTAILS', 'req.s3': '03 NOUS CONFIRMONS',
    'req.what': 'DE QUOI AVEZ-VOUS BESOIN', 'req.choose': 'CHOISISSEZ VOTRE PARTENAIRE', 'req.coord': 'Nous coordonnons la demande avec lui pour vous.',
    'req.where': 'OÙ ÊTES-VOUS ?', 'req.zone_ph': 'Bophut', 'req.name': 'VOTRE NOM', 'req.name_ph': 'Votre nom',
    'req.wa': 'WHATSAPP', 'req.else': 'AUTRE CHOSE ?', 'req.else_ph': 'Nom de la villa, préférences, demandes spéciales...',
    'req.submit': 'ENVOYER LA DEMANDE', 'req.sending': 'Envoi en cours…', 'req.failed': "Envoi impossible. Veuillez réessayer.",
    'req.nopartner': "Aucun partenaire n'est encore répertorié pour ce service. Votre concierge peut tout de même l'organiser sur mesure.",
    'req.hint': "Nous n'avons besoin que de l'essentiel pour cette demande. Ajoutez vos préférences ci-dessous.",
    'req.select': 'Choisir…', 'req.from': 'À partir de', 'req.partnerdefault': 'Demande de réservation gérée par Samui Concierge.', 'req.partner': 'PARTENAIRE',
    'toast.sent': 'DEMANDE #{id} ENVOYÉE', 'toast.received': 'Nous avons bien reçu votre demande.',
    'foot.tag': "Coordination privée sur l'île de Koh Samui.", 'foot.explore': 'EXPLORER', 'foot.popular': 'POPULAIRE', 'foot.loc': 'LOCALISATION',
    'foot.loc1': 'Surat Thani · Thaïlande', 'foot.loc2': 'Coordination locale',
    'foot.new': 'Nouvelle demande', 'foot.rest': 'Restaurants', 'foot.boat': 'Location de bateaux', 'foot.villas': 'Villas', 'foot.airport': 'Transferts aéroport',
    'back': '← RETOUR À LA CONCIERGERIE', 'backhome': "← RETOUR À L'ACCUEIL",
    'pp.title': 'Choisir : {s} — Samui Concierge',
    'pp.eyebrow': 'COLLECTION PRIVÉE DE PARTENAIRES', 'pp.h1': 'Choisissez<br><i>votre adresse.</i>',
    'pp.lead': "Parcourez nos partenaires locaux sélectionnés. Choisissez celui qui vous plaît et envoyez-nous votre demande. Nous gérons la confirmation directement avec le partenaire.",
    'pp.empty': "Aucun partenaire n'est actuellement répertorié pour ce service. Merci d'utiliser la demande générale à la conciergerie.",
    'pp.empty_cta': 'Faire une demande générale →',
    'pp.your': 'VOTRE DEMANDE', 'pp.modaldesc': 'Demande de réservation coordonnée par Samui Concierge.', 'pp.default': 'Sélectionné par Samui Concierge.',
    'pp.zone_ph': 'Bophut / Nom de la villa', 'pp.notes_ph': 'Demandes spéciales...', 'pp.send': 'ENVOYER LA DEMANDE À SAMUI CONCIERGE →', 'pp.from': 'À PARTIR DE',
    'pp.sent': '✓ Demande #{id} envoyée. Nous confirmons avec {name}.', 'pp.close': 'Fermer',
    'ap.title': 'Devenir partenaire — Samui Concierge',
    'ap.eyebrow': 'SAMUI CONCIERGE · RÉSEAU DE PARTENAIRES', 'ap.h1': 'Mettez votre <i>service</i><br>devant nos clients.',
    'ap.p': "Candidatez pour rejoindre notre réseau de partenaires sélectionnés. Votre activité reste privée tant que Samui Concierge ne l'a pas examinée et approuvée.",
    'ap.biz': "NOM DE L'ENTREPRISE / MARQUE *", 'ap.tg': 'TELEGRAM *', 'ap.loc': 'LIEU', 'ap.contact': 'CONTACT / NOTES', 'ap.optional': 'Facultatif',
    'ap.svcs': 'SERVICES — SÉLECTIONNEZ TOUS CEUX QUI S’APPLIQUENT *', 'ap.svcnote': 'Sélectionnez un ou plusieurs des 32 services affichés sur le site Samui Concierge.',
    'ap.photos': 'PHOTOS — 2 MAXIMUM, UNE URL PAR LIGNE', 'ap.about': 'À PROPOS DE VOTRE ACTIVITÉ / SERVICES',
    'ap.about_ph': "Dites-nous ce que vous proposez, où vous intervenez et ce qui vous rend unique.", 'ap.know': 'QUELQUE CHOSE À SAVOIR ?',
    'ap.submit': 'ENVOYER MA CANDIDATURE →', 'ap.note': "Votre candidature est privée. Elle n'apparaîtra publiquement qu'après l'approbation de Samui Concierge.",
    'ap.pick': 'Veuillez sélectionner au moins un service.', 'ap.ok': '✓ Candidature reçue. Votre activité est en attente d’approbation par Samui Concierge.',
    'ap.err': "Impossible d'envoyer la candidature.", 'ap.loading': 'Chargement des services…', 'ap.loadfail': 'Impossible de charger les services. Veuillez actualiser.',
    'nf.title': "Cette page n'existe pas.", 'nf.p': 'Laissez-nous vous aider à trouver ce dont vous avez besoin à Koh Samui.', 'nf.back': "Retour à l'accueil →"
  });

  /* ---------------------------------------------------------------- TH */
  Object.assign(D.th, {
    'meta.title': 'Samui Concierge | คอนเซียร์จส่วนตัว วิลล่า เรือ และร้านอาหารในเกาะสมุย',
    'meta.desc': 'Samui Concierge ดูแลวิลล่าส่วนตัว เรือเช่า ร้านอาหาร รถรับส่งสนามบิน การเดินทาง สปา กิจกรรม และบริการท้องถิ่นทั่วเกาะสมุย ประเทศไทย',
    'nav.services': 'บริการ', 'nav.experience': 'ประสบการณ์', 'nav.island': 'เกาะสมุย', 'nav.request': 'ส่งคำขอ',
    'nav.partner': 'ร่วมเป็นพาร์ทเนอร์', 'nav.start': 'ส่งคำขอ',
    'load': 'กำลังโหลด',
    'hero.top1': 'เกาะสมุย · ประเทศไทย', 'hero.top2': 'คอนเซียร์จส่วนตัวบนเกาะ',
    'hero.eyebrow': 'เกาะของคุณ โดยไม่ต้องเหนื่อย',
    'hero.h1': 'ใช้ชีวิตให้เต็มที่<br><i>เรื่องที่เหลือ เราจัดการให้</i>',
    'hero.p': 'ตั้งแต่ก้าวแรกที่ถึงเกาะจนถึงพระอาทิตย์ตกครั้งสุดท้าย — คอนเซียร์จท้องถิ่นที่ใส่ใจทุกรายละเอียด ให้สมุยของคุณพิเศษกว่าที่เคย',
    'hero.cta1': 'บอกเราว่าคุณต้องการอะไร ↗', 'hero.cta2': 'สำรวจสมุย ↓',
    'hero.meta2': 'ชายหาด · ป่า · ทะเล · วิลล่า', 'hero.scroll': 'เลื่อนลง',
    'mq1': 'วิลล่าส่วนตัว', 'mq2': 'เรือเช่าเหมาลำ', 'mq3': 'เชฟส่วนตัว', 'mq4': 'รถรับส่งสนามบิน', 'mq5': 'เวลเนสและสปา', 'mq6': 'ทัวร์รอบเกาะ', 'mq7': 'ประสบการณ์โรแมนติก',
    'intro.eyebrow': 'ไม่ใช่แค่ไดเรกทอรี',
    'intro.h2': 'คุณไม่จำเป็นต้องมี<br>รายชื่อเบอร์โทรศัพท์<br><i>เพิ่มอีกชุด</i>',
    'intro.p': 'บอกเราว่าคุณอยู่ที่ไหนและต้องการอะไร เราจะจับคู่คำขอกับตัวเลือกในท้องถิ่นที่เหมาะสมและประสานงานให้ทั้งหมด คุณไม่ต้องเสียเวลาค้นหาเครือข่ายพาร์ทเนอร์ด้วยตัวเอง',
    'intro.f1': 'คัดสรรโดยคนท้องถิ่น', 'intro.f2': 'คุยกับเราที่เดียวจบ', 'intro.f3': 'ประสานงานอย่างเป็นส่วนตัว',
    'how.eyebrow': 'ขั้นตอนการใช้งาน', 'how.h2': 'เพียงสามขั้นตอน<br><i>ไร้กังวล</i>',
    'how.s1t': 'บอกเรา', 'how.s1p': 'แจ้งสิ่งที่คุณต้องการ วันที่ และที่พักของคุณ',
    'how.s2t': 'เราจัดการ', 'how.s2p': 'เราเลือกพาร์ทเนอร์ท้องถิ่นที่ใช่และประสานงานทุกรายละเอียด',
    'how.s3t': 'คุณเพลิดเพลิน', 'how.s3p': 'เรายืนยันกับคุณโดยตรง คุณเพียงแค่มาสนุกกับเกาะ',
    'svc.eyebrow': '32 บริการเพื่อการพักผ่อนในสมุย', 'svc.h2': 'เลือกบริการที่ต้องการ<br><i>รายละเอียดเราจัดให้</i>',
    'svc.open': 'ดูรายละเอียด',
    'isl.eyebrow': 'กิจกรรม · เกาะสมุย', 'isl.h2': 'หนึ่งเกาะ<br>นับพันวิธี<br><i>ที่จะสัมผัสมัน</i>',
    'isl.p': 'ทริปเรือ ทัวร์รอบเกาะ ผจญภัยในป่า ดินเนอร์ส่วนตัว การขอแต่งงาน เวลเนส และประสบการณ์ที่ไม่มีวันลืม คอนเซียร์จของคุณอยู่ตรงกลางของทุกอย่าง',
    'z1': 'ทัวร์รอบเกาะ', 'z2': 'ทริปเรือ', 'z3': 'ผจญภัย', 'z4': 'ดำน้ำตื้น', 'z5': 'ขอแต่งงาน', 'z6': 'ประสบการณ์โรแมนติก', 'z7': 'เวลเนส', 'z8': 'ทัวร์ส่วนตัว',
    'req.eyebrow': 'ส่งคำขอเพียงครั้งเดียว', 'req.h2': 'มีอะไรให้เรา<br><i>ช่วยดูแลบ้าง?</i>',
    'req.lead': 'เลือกบริการที่ต้องการ หากมีพาร์ทเนอร์ เราจะแสดงตัวเลือกที่มีและขอรายละเอียดที่จำเป็นเพื่อประสานงานให้',
    'req.s1': '01 เลือก', 'req.s2': '02 รายละเอียด', 'req.s3': '03 เรายืนยัน',
    'req.what': 'คุณต้องการอะไร', 'req.choose': 'เลือกพาร์ทเนอร์ของคุณ', 'req.coord': 'เราจะประสานงานกับพาร์ทเนอร์ให้คุณ',
    'req.where': 'คุณอยู่ที่ไหน?', 'req.zone_ph': 'โบผุด', 'req.name': 'ชื่อของคุณ', 'req.name_ph': 'ชื่อของคุณ',
    'req.wa': 'WHATSAPP', 'req.else': 'มีอะไรเพิ่มเติมไหม?', 'req.else_ph': 'ชื่อวิลล่า ความชอบ คำขอพิเศษ...',
    'req.submit': 'ส่งคำขอ', 'req.sending': 'กำลังส่ง…', 'req.failed': 'ส่งไม่สำเร็จ กรุณาลองอีกครั้ง',
    'req.nopartner': 'ยังไม่มีพาร์ทเนอร์สำหรับบริการนี้ แต่คอนเซียร์จของเรายังจัดการให้ตามคำขอของคุณได้',
    'req.hint': 'เราต้องการเพียงข้อมูลสำคัญสำหรับคำขอนี้ เพิ่มความต้องการของคุณได้ด้านล่าง',
    'req.select': 'เลือก…', 'req.from': 'เริ่มต้น', 'req.partnerdefault': 'คำขอจองที่ดูแลโดย Samui Concierge', 'req.partner': 'พาร์ทเนอร์',
    'toast.sent': 'ส่งคำขอ #{id} แล้ว', 'toast.received': 'เราได้รับคำขอของคุณแล้ว',
    'foot.tag': 'คอนเซียร์จส่วนตัวบนเกาะสมุย', 'foot.explore': 'สำรวจ', 'foot.popular': 'ยอดนิยม', 'foot.loc': 'ที่ตั้ง',
    'foot.loc1': 'สุราษฎร์ธานี · ประเทศไทย', 'foot.loc2': 'ประสานงานในพื้นที่',
    'foot.new': 'ส่งคำขอใหม่', 'foot.rest': 'ร้านอาหาร', 'foot.boat': 'เรือเช่าเหมาลำ', 'foot.villas': 'วิลล่า', 'foot.airport': 'รถรับส่งสนามบิน',
    'back': '← กลับสู่คอนเซียร์จ', 'backhome': '← กลับหน้าแรก',
    'pp.title': 'เลือก {s} — Samui Concierge',
    'pp.eyebrow': 'คอลเลกชันพาร์ทเนอร์คัดสรร', 'pp.h1': 'เลือกสถานที่<br><i>ที่ใช่สำหรับคุณ</i>',
    'pp.lead': 'เลือกชมพาร์ทเนอร์ท้องถิ่นที่เราคัดสรร เลือกร้านที่คุณชอบแล้วส่งคำขอมาให้เรา เราจะยืนยันกับพาร์ทเนอร์โดยตรง',
    'pp.empty': 'ขณะนี้ยังไม่มีพาร์ทเนอร์สำหรับบริการนี้ กรุณาส่งคำขอทั่วไปถึงคอนเซียร์จแทน',
    'pp.empty_cta': 'ส่งคำขอทั่วไป →',
    'pp.your': 'คำขอของคุณ', 'pp.modaldesc': 'คำขอจองที่ประสานงานโดย Samui Concierge', 'pp.default': 'คัดสรรโดย Samui Concierge',
    'pp.zone_ph': 'โบผุด / ชื่อวิลล่า', 'pp.notes_ph': 'คำขอพิเศษ...', 'pp.send': 'ส่งคำขอถึง SAMUI CONCIERGE →', 'pp.from': 'เริ่มต้น',
    'pp.sent': '✓ ส่งคำขอ #{id} แล้ว เราจะยืนยันกับ {name}', 'pp.close': 'ปิด',
    'ap.title': 'ร่วมเป็นพาร์ทเนอร์ — Samui Concierge',
    'ap.eyebrow': 'SAMUI CONCIERGE · เครือข่ายพาร์ทเนอร์', 'ap.h1': 'นำ<i>บริการ</i>ของคุณ<br>ไปสู่ลูกค้าของเรา',
    'ap.p': 'สมัครเข้าร่วมเครือข่ายพาร์ทเนอร์คัดสรรของเรา ธุรกิจของคุณจะยังไม่แสดงต่อสาธารณะจนกว่า Samui Concierge จะตรวจสอบและอนุมัติ',
    'ap.biz': 'ชื่อธุรกิจ / แบรนด์ *', 'ap.tg': 'TELEGRAM *', 'ap.loc': 'สถานที่', 'ap.contact': 'ผู้ติดต่อ / หมายเหตุ', 'ap.optional': 'ไม่บังคับ',
    'ap.svcs': 'บริการ — เลือกได้ทุกข้อที่เกี่ยวข้อง *', 'ap.svcnote': 'เลือกหนึ่งบริการขึ้นไปจาก 32 บริการที่แสดงบนเว็บไซต์ Samui Concierge',
    'ap.photos': 'รูปภาพ — สูงสุด 2 รูป หนึ่งลิงก์ต่อบรรทัด', 'ap.about': 'เกี่ยวกับธุรกิจ / บริการของคุณ',
    'ap.about_ph': 'บอกเราว่าคุณให้บริการอะไร ให้บริการที่ไหน และอะไรที่ทำให้คุณพิเศษ', 'ap.know': 'มีอะไรที่เราควรทราบอีกไหม?',
    'ap.submit': 'ส่งใบสมัครพาร์ทเนอร์ →', 'ap.note': 'ใบสมัครของคุณเป็นความลับ จะไม่แสดงต่อสาธารณะจนกว่า Samui Concierge จะอนุมัติ',
    'ap.pick': 'กรุณาเลือกอย่างน้อยหนึ่งบริการ', 'ap.ok': '✓ ได้รับใบสมัครแล้ว ธุรกิจของคุณอยู่ระหว่างรอการอนุมัติจาก Samui Concierge',
    'ap.err': 'ไม่สามารถส่งใบสมัครได้', 'ap.loading': 'กำลังโหลดบริการ…', 'ap.loadfail': 'โหลดบริการไม่สำเร็จ กรุณารีเฟรช',
    'nf.title': 'ไม่พบหน้านี้', 'nf.p': 'ให้เราช่วยคุณค้นหาสิ่งที่ต้องการในเกาะสมุย', 'nf.back': 'กลับหน้าแรก →'
  });

  /* ------------------------------------------- Services (nom + description) */
  const SV = {
    'Tours & Excursions': [['Tours & Excursions', 'Circuits à la journée, tours privés et excursions autour de Samui et au-delà.'], ['ทัวร์และการท่องเที่ยว', 'ทัวร์รายวัน ทัวร์ส่วนตัว และทริปท่องเที่ยวรอบเกาะสมุยและไกลออกไป']],
    'Boat Trips & Charters': [['Balades en bateau & Locations', 'Bateaux privés, locations et croisières dans le golfe de Thaïlande.'], ['ทริปเรือและเรือเช่าเหมาลำ', 'เรือส่วนตัว เรือเช่า และล่องเรือในอ่าวไทย']],
    'Diving & Snorkeling': [['Plongée & Snorkeling', 'Expériences de plongée et de snorkeling avec des opérateurs locaux.'], ['ดำน้ำลึกและดำน้ำตื้น', 'ประสบการณ์ดำน้ำลึกและดำน้ำตื้นกับผู้ให้บริการในท้องถิ่น']],
    'Water Sports': [['Sports nautiques', 'Jet ski, sports nautiques et loisirs en mer autour de Koh Samui.'], ['กีฬาทางน้ำ', 'เจ็ตสกี กีฬาทางน้ำ และความสนุกกลางทะเลรอบเกาะสมุย']],
    'Motorbike Rental': [['Location de scooters & motos', 'Location de scooters et de motos autour de Koh Samui.'], ['เช่ามอเตอร์ไซค์', 'บริการเช่ามอเตอร์ไซค์และสกูตเตอร์รอบเกาะสมุย']],
    'Car Rental': [['Location de voitures', "Des voitures pour circuler librement sur l'île."], ['เช่ารถยนต์', 'รถยนต์สำหรับเดินทางรอบเกาะได้อย่างอิสระ']],
    'Taxi & Private Transfers': [['Taxi & Transferts privés', 'Transferts de point à point et transport privé.'], ['แท็กซี่และรถรับส่งส่วนตัว', 'รถรับส่งแบบจุดต่อจุดและบริการรถส่วนตัว']],
    'Airport & Ferry Transfers': [['Transferts aéroport & ferry', 'Transferts fiables depuis et vers les aéroports et les embarcadères.'], ['รับส่งสนามบินและท่าเรือเฟอร์รี่', 'บริการรับส่งที่เชื่อถือได้ไปกลับสนามบินและท่าเรือเฟอร์รี่']],
    'Villas & Private Stays': [['Villas & Séjours privés', 'Villas privées et séjours de vacances à Koh Samui.'], ['วิลล่าและที่พักส่วนตัว', 'วิลล่าส่วนตัวและที่พักตากอากาศบนเกาะสมุย']],
    'Hotels & Resorts': [['Hôtels & Resorts', "Hôtels et resorts pour votre séjour sur l'île."], ['โรงแรมและรีสอร์ต', 'โรงแรมและรีสอร์ตสำหรับการพักผ่อนบนเกาะ']],
    'Restaurants': [['Restaurants', 'Recommandations et réservations de restaurants.'], ['ร้านอาหาร', 'แนะนำและจองร้านอาหาร']],
    'Bars & Beach Clubs': [['Bars & Beach clubs', 'Beach clubs, bars et lieux pour sortir le soir.'], ['บาร์และบีชคลับ', 'บีชคลับ บาร์ และสถานที่สำหรับค่ำคืนสุดพิเศษ']],
    'Cafés & Bakeries': [['Cafés & Boulangeries', 'Café, petit-déjeuner, boulangeries et adresses décontractées.'], ['คาเฟ่และเบเกอรี่', 'กาแฟ อาหารเช้า เบเกอรี่ และร้านบรรยากาศสบาย ๆ']],
    'Massage & Spa': [['Massage & Spa', 'Massages, spa et services de détente.'], ['นวดและสปา', 'บริการนวด สปา และผ่อนคลาย']],
    'Beauty & Nail Salons': [['Beauté & Onglerie', 'Soins de beauté, coiffure et manucure.'], ['ความงามและทำเล็บ', 'บริการความงาม ทำผม และทำเล็บ']],
    'Yoga & Wellness': [['Yoga & Bien-être', 'Yoga, bien-être et séances privées.'], ['โยคะและสุขภาพ', 'โยคะ เวลเนส และคลาสส่วนตัว']],
    'Muay Thai & Fitness': [['Muay Thaï & Fitness', 'Muay Thaï, salles de sport et coaching sportif privé.'], ['มวยไทยและฟิตเนส', 'มวยไทย ยิม และเทรนเนอร์ส่วนตัว']],
    'Adventure & Off-Road': [['Aventure & Tout-terrain', "Quad, ATV, jungle, off-road et expériences d'aventure."], ['ผจญภัยและออฟโรด', 'ATV ควอด ทัวร์ป่า ออฟโรด และกิจกรรมผจญภัย']],
    'Fishing Trips': [['Sorties de pêche', 'Sorties de pêche et locations de bateaux de pêche privés.'], ['ทริปตกปลา', 'ทริปตกปลาและเรือตกปลาส่วนตัว']],
    'Cooking Classes': [['Cours de cuisine', 'Cours de cuisine thaïe et expériences culinaires.'], ['คลาสทำอาหาร', 'คลาสทำอาหารไทยและประสบการณ์ด้านอาหาร']],
    'Animal & Nature Experiences': [['Nature & Animaux', 'Expériences nature, faune et animaux.'], ['ธรรมชาติและสัตว์', 'ประสบการณ์ธรรมชาติ สัตว์ป่า และสัตว์']],
    'Jungle & Hiking': [['Jungle & Randonnée', 'Aventures en jungle, points de vue et randonnées.'], ['ป่าและเดินป่า', 'การผจญภัยในป่า จุดชมวิว และเดินป่า']],
    'Weddings & Proposals': [['Mariages & Demandes en mariage', 'Organisation et coordination de mariages et de demandes en mariage.'], ['งานแต่งงานและขอแต่งงาน', 'วางแผนและประสานงานงานแต่งงานและการขอแต่งงาน']],
    'Romantic Experiences': [['Expériences romantiques', 'Dîners romantiques, moments à deux et instants spéciaux.'], ['ประสบการณ์โรแมนติก', 'ดินเนอร์โรแมนติก กิจกรรมสำหรับคู่รัก และช่วงเวลาพิเศษ']],
    'Photography & Videography': [['Photo & Vidéo', 'Photographe et vidéaste professionnels pour votre séjour.'], ['ถ่ายภาพและวิดีโอ', 'ช่างภาพและวิดีโอมืออาชีพสำหรับทริปของคุณ']],
    'Events & Nightlife': [['Événements & Vie nocturne', 'Événements privés, soirées et occasions spéciales.'], ['อีเวนต์และไนต์ไลฟ์', 'งานส่วนตัว ชีวิตกลางคืน และโอกาสพิเศษ']],
    'Shopping & Local Products': [['Shopping & Produits locaux', 'Aide pour le shopping et produits locaux.'], ['ช้อปปิ้งและสินค้าท้องถิ่น', 'ผู้ช่วยช้อปปิ้งและสินค้าท้องถิ่น']],
    'Family & Kids Activities': [['Famille & Enfants', 'Activités et services adaptés aux familles et aux enfants.'], ['กิจกรรมครอบครัวและเด็ก', 'กิจกรรมและบริการที่เหมาะสำหรับครอบครัวและเด็ก']],
    'Health & Medical': [['Santé & Médical', "Services locaux de santé, médicaux et d'assistance."], ['สุขภาพและการแพทย์', 'บริการด้านสุขภาพ การแพทย์ และความช่วยเหลือในท้องถิ่น']],
    'Business & Professional Services': [['Services professionnels', 'Services locaux aux professionnels et aux entreprises.'], ['ธุรกิจและบริการมืออาชีพ', 'บริการด้านธุรกิจและวิชาชีพในท้องถิ่น']],
    'Home, Villa & Concierge Services': [['Maison, Villa & Conciergerie', 'Entretien de villa, ménage, maintenance et assistance conciergerie.'], ['บ้าน วิลล่า และคอนเซียร์จ', 'ดูแลวิลล่า แม่บ้าน ซ่อมบำรุง และบริการคอนเซียร์จ']],
    'Private Chef & Dining Experiences': [['Chef privé & Expériences culinaires', 'Chefs privés, dîners et expériences culinaires à domicile ou en villa.'], ['เชฟส่วนตัวและประสบการณ์ดินเนอร์', 'เชฟส่วนตัว ดินเนอร์ และประสบการณ์ด้านอาหารที่บ้านหรือวิลล่า']]
  };

  /* ---------------- Libellés / options de formulaire (EN -> [FR, TH]) */
  const L = {
    'Date': ['Date', 'วันที่'], 'Preferred time': ['Heure souhaitée', 'เวลาที่ต้องการ'], 'Guests': ['Personnes', 'จำนวนผู้เข้าพัก/ผู้ร่วม'],
    'Seating preference': ['Préférence de place', 'ที่นั่งที่ต้องการ'], 'Occasion': ['Occasion', 'โอกาส'], 'Dietary requirements': ['Régime alimentaire', 'ข้อจำกัดด้านอาหาร'],
    'Check-in': ['Arrivée', 'เช็คอิน'], 'Check-out': ['Départ', 'เช็คเอาท์'], 'Bedrooms': ['Chambres', 'ห้องนอน'], 'Budget / night (THB)': ['Budget / nuit (THB)', 'งบประมาณ / คืน (บาท)'],
    'Villa type': ['Type de villa', 'ประเภทวิลล่า'], 'Departure time': ['Heure de départ', 'เวลาออกเดินทาง'], 'Duration': ['Durée', 'ระยะเวลา'],
    'Boat / group size': ['Bateau / taille du groupe', 'เรือ / ขนาดกลุ่ม'], 'Boat size': ['Taille du bateau', 'ขนาดเรือ'], 'Pickup location': ['Lieu de prise en charge', 'จุดรับ'],
    'Trip style': ['Style de sortie', 'สไตล์ทริป'], 'Start date': ['Date de début', 'วันที่เริ่ม'], 'Rental duration': ['Durée de location', 'ระยะเวลาเช่า'],
    'Bike / class': ['Moto / catégorie', 'รถ / ประเภท'], 'Quantity': ['Quantité', 'จำนวน'], 'Delivery / pickup area': ['Zone de livraison / retrait', 'พื้นที่ส่ง / รับรถ'],
    'Helmets': ['Casques', 'หมวกกันน็อก'], 'Rider notes': ['Notes sur le conducteur', 'หมายเหตุผู้ขับขี่'], 'Vehicle preference': ['Véhicule souhaité', 'รถที่ต้องการ'],
    'Pickup time': ['Heure de prise en charge', 'เวลารับ'], 'Passengers': ['Passagers', 'ผู้โดยสาร'], 'Drop-off location': ['Lieu de dépose', 'จุดส่ง'],
    'Luggage': ['Bagages', 'สัมภาระ'], 'Arrival date': ["Date d'arrivée", 'วันที่มาถึง'], 'Arrival time': ["Heure d'arrivée", 'เวลามาถึง'], 'Flight number': ['Numéro de vol', 'เที่ยวบิน'],
    'Destination / villa': ['Destination / villa', 'จุดหมาย / วิลล่า'], 'Start time': ['Heure de début', 'เวลาเริ่ม'], 'Stops / itinerary': ['Arrêts / itinéraire', 'จุดแวะ / เส้นทาง'],
    'Appointment date': ['Date du rendez-vous', 'วันที่นัด'], 'Salon service': ['Prestation', 'บริการ'], 'People': ['Personnes', 'จำนวนคน'],
    'Indoor': ['Intérieur', 'ในร่ม'], 'Terrace': ['Terrasse', 'เทอร์เรซ'], 'Beachfront': ['Face à la plage', 'ริมหาด'], 'No preference': ['Pas de préférence', 'ไม่ระบุ'],
    'Private pool': ['Piscine privée', 'สระว่ายน้ำส่วนตัว'], 'Family': ['Famille', 'ครอบครัว'], 'Luxury': ['Luxe', 'หรูหรา'],
    'Half day': ['Demi-journée', 'ครึ่งวัน'], 'Full day': ['Journée complète', 'เต็มวัน'], 'Sunset': ['Coucher de soleil', 'ชมพระอาทิตย์ตก'], 'Custom': ['Sur mesure', 'กำหนดเอง'],
    'Speedboat': ['Hors-bord', 'สปีดโบ๊ท'], 'Private yacht': ['Yacht privé', 'ยอร์ชส่วนตัว'], 'Longtail boat': ['Bateau longtail', 'เรือหางยาว'], 'Catamaran': ['Catamaran', 'เรือคาตามารัน'],
    '1 day': ['1 jour', '1 วัน'], '2–3 days': ['2–3 jours', '2–3 วัน'], '4–7 days': ['4–7 jours', '4–7 วัน'], '1–2 weeks': ['1–2 semaines', '1–2 สัปดาห์'], '1 month': ['1 mois', '1 เดือน'],
    'Scooter 110–125cc': ['Scooter 110–125cc', 'สกูตเตอร์ 110–125cc'], 'Scooter 150–160cc': ['Scooter 150–160cc', 'สกูตเตอร์ 150–160cc'], 'Premium scooter': ['Scooter premium', 'สกูตเตอร์พรีเมียม'], 'Motorbike': ['Moto', 'มอเตอร์ไซค์'],
    'Cut': ['Coupe', 'ตัดผม'], 'Color': ['Couleur', 'ทำสี'], 'Styling': ['Coiffage', 'จัดแต่งทรงผม'], 'Manicure / Pedicure': ['Manucure / Pédicure', 'ทำเล็บมือ / เล็บเท้า'], 'Other': ['Autre', 'อื่น ๆ'],
    'Services': ['Services', 'บริการ'], 'Wellness': ['Bien-être', 'เวลเนส'], 'Dining': ['Restauration', 'อาหาร'], 'Sea': ['Mer', 'ทะเล'], 'Transport': ['Transport', 'การเดินทาง'],
    'Villas': ['Villas', 'วิลล่า'], 'Events': ['Événements', 'อีเวนต์'], 'Experiences': ['Expériences', 'ประสบการณ์'], 'Family & Kids': ['Famille & Enfants', 'ครอบครัวและเด็ก']
  };

  /* --------------------------------------------------------------- core */
  function detect() {
    try {
      const q = new URLSearchParams(location.search).get('lang');
      if (q && LANGS.includes(q)) return q;
      const s = localStorage.getItem('sc_lang');
      if (s && LANGS.includes(s)) return s;
    } catch (e) {}
    const nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    const c = String(nav).slice(0, 2).toLowerCase();
    return LANGS.includes(c) ? c : 'en';
  }
  let lang = detect();
  const idx = () => (lang === 'fr' ? 0 : 1);

  function t(key, vars) {
    let s = (D[lang] && D[lang][key]);
    if (s == null) s = D.en[key];
    if (s == null) s = key;
    if (vars) for (const k in vars) s = s.split('{' + k + '}').join(vars[k]);
    return s;
  }
  function tr(text) {
    if (lang === 'en' || text == null) return text;
    const e = L[text];
    return e ? e[idx()] : text;
  }
  function svc(s) {
    if (lang === 'en' || !s) return { name: s && s.name, desc: s && s.description };
    const e = SV[s.name];
    return e ? { name: e[idx()][0], desc: e[idx()][1] } : { name: s.name, desc: s.description };
  }
  function svcName(englishName) {
    if (lang === 'en') return englishName;
    const e = SV[englishName];
    return e ? e[idx()][0] : englishName;
  }

  function apply() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph'))); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'))); });
    const tk = document.body.getAttribute('data-title'); if (tk) document.title = t(tk);
    const dk = document.body.getAttribute('data-desc'); if (dk) { const m = document.querySelector('meta[name="description"]'); if (m) m.setAttribute('content', t(dk)); }
    document.querySelectorAll('.langSwitch button').forEach(b => { const on = b.dataset.lang === lang; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); });
    document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
  }
  function setLang(l) {
    if (!LANGS.includes(l)) return;
    lang = l;
    try { localStorage.setItem('sc_lang', l); } catch (e) {}
    apply();
  }
  function buildSwitch() {
    document.querySelectorAll('.langSwitch').forEach(box => {
      box.setAttribute('role', 'group'); box.setAttribute('aria-label', 'Language');
      box.innerHTML = LANGS.map(l => `<button type="button" data-lang="${l}" lang="${l}">${l.toUpperCase()}</button>`).join('');
      box.querySelectorAll('button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
    });
  }

  window.I18N = { t, tr, svc, svcName, setLang, get lang() { return lang; }, LANGS };
  window.t = t;
  buildSwitch();
  apply();
})();
