/* ============================================================
   Ketchup كاتشب — Restaurant Configuration & Product Catalog
   ============================================================ */

const CONFIG = {
  restaurantName: 'كاتشب',
  restaurantNameEn: 'Ketchup',
  whatsappNumber: '201090204281',
  phone: '01090204281',
  branches: [
    { name: 'الفرع الرئيسي', address: 'متاح التوصيل لجميع المناطق' }
  ],
  workingHours: 'يومياً من ١٢ ظهراً حتى ١٢ صباحاً',
  social: {
    facebook: '#',
    instagram: '#',
    tiktok: '#'
  },
  announcement: 'أهلاً بيك في كاتشب! اطلب أكلك المفضل دلوقتي والتوصيل سريع لحد باب بيتك | خدمة العملاء والطلبات المباشرة',
  currency: 'ج.م'
};

/* ---- Category definitions ---- */
const CATEGORIES = [
  { id: 'pizza',       name: 'بيتزا',             icon: '🍕', img: 'assets/images/pizza_product.jpg' },
  { id: 'burger-meat', name: 'برجر لحم',           icon: '🍔', img: 'assets/images/hero_burger.jpg' },
  { id: 'burger-chicken', name: 'برجر فراخ',       icon: '🍗', img: 'assets/images/chicken_crispy.jpg' },
  { id: 'broasted',    name: 'البروستد',           icon: '🍗', img: 'assets/images/chicken_crispy.jpg' },
  { id: 'sandwiches-chicken', name: 'سندوتشات الفراخ', icon: '🥙', img: 'assets/images/shawarma_product.jpg' },
  { id: 'sandwiches-meat', name: 'سندوتشات اللحوم', icon: '🥩', img: 'assets/images/shawarma_product.jpg' },
  { id: 'sandwiches-syrian', name: 'سندوتشات السوري', icon: '🌯', img: 'assets/images/shawarma_product.jpg' },
  { id: 'sandwiches-seafood', name: 'سندوتشات سي فود', icon: '🦐', img: 'assets/images/shawarma_product.jpg' },
  { id: 'crepe-chicken', name: 'كريبات الفراخ',    icon: '🫓', img: 'assets/images/crepe_product.jpg' },
  { id: 'crepe-meat',  name: 'كريبات اللحوم',      icon: '🫓', img: 'assets/images/crepe_product.jpg' },
  { id: 'crepe-cheese', name: 'كريبات الجبن',      icon: '🧀', img: 'assets/images/crepe_product.jpg' },
  { id: 'crepe-seafood', name: 'كريبات سي فود',    icon: '🦐', img: 'assets/images/crepe_product.jpg' },
  { id: 'crepe-nutella', name: 'كريبات نوتيلا',    icon: '🍫', img: 'assets/images/waffle_product.jpg' },
  { id: 'pasta',       name: 'مكرونات',            icon: '🍝', img: 'assets/images/pasta_product.jpg' },
  { id: 'stromboli',   name: 'سترومبولي كالزوني',  icon: '🫓', img: 'assets/images/stromboli_product.jpg' },
  { id: 'rizo',        name: 'ريزو',               icon: '🍚', img: 'assets/images/rizo_product.jpg' },
  { id: 'meals',       name: 'الوجبات',            icon: '🍱', img: 'assets/images/rizo_product.jpg' },
  { id: 'fateer-salty', name: 'فطير حادق',         icon: '🥧', img: 'assets/images/fateer_product.jpg' },
  { id: 'fateer-rocket', name: 'فطير صاروخ',       icon: '🚀', img: 'assets/images/fateer_product.jpg' },
  { id: 'fateer-sweet', name: 'فطير حلو',          icon: '🍯', img: 'assets/images/waffle_product.jpg' },
  { id: 'sides',       name: 'أصناف جانبية',       icon: '🍟', img: 'assets/images/fries_product.jpg' },
  { id: 'waffle',      name: 'الوافل',             icon: '🧇', img: 'assets/images/waffle_product.jpg' },
  { id: 'drinks',      name: 'المشروبات',          icon: '☕', img: 'assets/images/coffee_product.jpg' },
];

/* ---- Full product catalog ---- */
let _pid = 0;
const pid = () => ++_pid;

const PRODUCTS = [

  /* ===================== بيتزا PIZZA ===================== */
  // Right page (first section)
  { id: pid(), cat: 'pizza', name: 'بيتزا مارجريتا', desc: 'صوص طماطم — جبنة موزاريلا فقط', sizes: [{label:'M', price:95},{label:'L', price:125}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا خضراوات', sizes: [{label:'M', price:100},{label:'L', price:135}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا مشروم', sizes: [{label:'M', price:120},{label:'L', price:145}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا ميكس جبن', desc: 'جبنة — موزاريلا — رومي — شيدر', sizes: [{label:'M', price:110},{label:'L', price:140}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا لحم مفروم', sizes: [{label:'M', price:130},{label:'L', price:155}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا هوت دوج', sizes: [{label:'M', price:125},{label:'L', price:145}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا سجق', sizes: [{label:'M', price:130},{label:'L', price:150}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا بسطرمة', sizes: [{label:'M', price:130},{label:'L', price:150}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا بيبروني', sizes: [{label:'M', price:130},{label:'L', price:150}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا دونر كباب', desc: 'شرائح شاورما لحم على الطريقة التركية', sizes: [{label:'M', price:135},{label:'L', price:165}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا سوبر سوبريم', desc: 'لحم مشروم — هوت دوج — بيبروني — مشروم', sizes: [{label:'M', price:135},{label:'L', price:160}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا مشكل لحوم', desc: 'هوت دوج — بيبروني — سجق — بسطرمة', sizes: [{label:'M', price:135},{label:'L', price:160}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا فراخ', sizes: [{label:'M', price:135},{label:'L', price:160}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا شيش طاووق', sizes: [{label:'M', price:135},{label:'L', price:160}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا شاورما فراخ', sizes: [{label:'M', price:135},{label:'L', price:160}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا فاهيتا', sizes: [{label:'M', price:125},{label:'L', price:160}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا كرانشي', sizes: [{label:'M', price:135},{label:'L', price:160}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا تشكن باربيكيو', sizes: [{label:'M', price:140},{label:'L', price:170}], img: 'assets/images/pizza_product.jpg' },
  // Left page (second section)
  { id: pid(), cat: 'pizza', name: 'بيتزا تشكن سوبريم', desc: 'فراخ — مشروم — خضراوات', sizes: [{label:'M', price:140},{label:'L', price:170}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا ميكس تشكن', desc: 'قطع فراخ مشوية — كرانشي', sizes: [{label:'M', price:140},{label:'L', price:170}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا تشكن رانش', desc: 'صدور فراخ مشوية — صوص رانش اللذيذ', sizes: [{label:'M', price:140},{label:'L', price:170}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا كرانشي باربيكيو', desc: 'مشروم فراخ حارة مقرمشة — صوص باربيكيو', sizes: [{label:'M', price:145},{label:'L', price:165}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا إيطاليانو', desc: 'فراخ مشوية — كرانشي — رومي', sizes: [{label:'M', price:145},{label:'L', price:175}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا كاتشب', desc: 'رومي — شيدر — فراخ — خضراوات', sizes: [{label:'M', price:140},{label:'L', price:170}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا تو مكس', desc: 'أي صنفين من اختيارك', sizes: [{label:'M', price:120},{label:'L', price:140}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا تونة', sizes: [{label:'M', price:125},{label:'L', price:150}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا جمبري', sizes: [{label:'M', price:155},{label:'L', price:200}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا سي فود', sizes: [{label:'M', price:155},{label:'L', price:205}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا رومي مدخن', sizes: [{label:'M', price:125},{label:'L', price:150}], img: 'assets/images/pizza_product.jpg' },
  { id: pid(), cat: 'pizza', name: 'بيتزا تشكن تندوري', sizes: [{label:'M', price:135},{label:'L', price:165}], img: 'assets/images/pizza_product.jpg' },

  // Pizza add-ons (crust stuffing)
  // These are shown as add-ons in product modal

  /* ===================== برجر لحم BEEF BURGERS ===================== */
  { id: pid(), cat: 'burger-meat', name: 'برجر كلاسيك', sizes: [{label:'100جم', price:65},{label:'250جم نووي', price:95}], img: 'assets/images/hero_burger.jpg' },
  { id: pid(), cat: 'burger-meat', name: 'برجر جبنة', sizes: [{label:'100جم', price:75},{label:'250جم نووي', price:105}], img: 'assets/images/hero_burger.jpg' },
  { id: pid(), cat: 'burger-meat', name: 'برجر بيج تيستي', sizes: [{label:'100جم', price:75},{label:'250جم نووي', price:105}], img: 'assets/images/hero_burger.jpg' },
  { id: pid(), cat: 'burger-meat', name: 'برجر مشروم', desc: 'مشروم — جبنة شيدر أمريكان', sizes: [{label:'100جم', price:75},{label:'250جم نووي', price:110}], img: 'assets/images/hero_burger.jpg' },
  { id: pid(), cat: 'burger-meat', name: 'برجر كاتشب', desc: 'لحم مدخن — شيدر صوص — شرائح هالبينو', sizes: [{label:'100جم', price:95},{label:'250جم نووي', price:115}], img: 'assets/images/hero_burger.jpg', featured: true },
  { id: pid(), cat: 'burger-meat', name: 'باربيكيو برجر', desc: 'شريحة لحم مدخن — باربيكيو صوص — شرائح بصل — جبنة شيدر أمريكان', sizes: [{label:'100جم', price:85},{label:'250جم نووي', price:110}], img: 'assets/images/hero_burger.jpg' },
  { id: pid(), cat: 'burger-meat', name: 'برجر دبل', price: 120, img: 'assets/images/hero_burger.jpg' },
  { id: pid(), cat: 'burger-meat', name: 'قنبلة برجر', price: 130, img: 'assets/images/hero_burger.jpg', featured: true },

  /* ===================== برجر فراخ CHICKEN BURGERS ===================== */
  { id: pid(), cat: 'burger-chicken', name: 'برجر فراخ مشوي', desc: 'شرائح برجر فراخ مشوية — خس كابوتشا — مايونيز', sizes: [{label:'سنجل', price:75},{label:'دبل', price:140}], img: 'assets/images/chicken_crispy.jpg' },
  { id: pid(), cat: 'burger-chicken', name: 'جراند تشكن', desc: 'صوابع صدور الدجاج الحارة المقرمشة — صوص شيدر — شرائح رومي مدخن — خس كابوتشا', sizes: [{label:'سنجل', price:100},{label:'دبل', price:195}], img: 'assets/images/chicken_crispy.jpg', featured: true },
  { id: pid(), cat: 'burger-chicken', name: 'ماك تشكن', desc: 'شريحة برجر فراخ مقلية مقرمشة — شريحة شيدر أمريكن — مايونيز — خس كابوتشا', sizes: [{label:'سنجل', price:80},{label:'دبل', price:150}], img: 'assets/images/chicken_crispy.jpg' },
  { id: pid(), cat: 'burger-chicken', name: 'جريل تشيز تشكن', desc: 'شرائح صدور الدجاج المشوية — شرائح رومي مدخن — شرائح طماطم — عيش كيزر أو فرنساوي', sizes: [{label:'سنجل', price:105}], img: 'assets/images/chicken_crispy.jpg' },
  { id: pid(), cat: 'burger-chicken', name: 'تشكن ميجا', desc: 'صدور دجاجة كامل مقلي بخلطة كرانشي كاتشب المميزة مع المايونيز وخس الكابوتشا وصوص الشيدر', sizes: [{label:'سنجل', price:120},{label:'دبل', price:220}], img: 'assets/images/chicken_crispy.jpg', featured: true },

  /* ===================== البروستد BROASTED ===================== */
  { id: pid(), cat: 'broasted', name: 'قطعة بروست', price: 40, img: 'assets/images/chicken_crispy.jpg' },
  { id: pid(), cat: 'broasted', name: 'سناك بوكس', desc: '٢ قطعة دجاج + بطاطس + خبز + صوص', price: 105, img: 'assets/images/chicken_crispy.jpg', featured: true },
  { id: pid(), cat: 'broasted', name: 'دينر بوكس', desc: '٣ قطعة دجاج + بطاطس + خبز + كول سلو', price: 150, img: 'assets/images/chicken_crispy.jpg' },
  { id: pid(), cat: 'broasted', name: 'سوبر دينر بوكس', desc: '٣ قطعة دجاج + بطاطس + خبز + كول سلو + أرز + كانز بيبسي', price: 180, img: 'assets/images/chicken_crispy.jpg', featured: true },
  { id: pid(), cat: 'broasted', name: 'سمارت بوكس', desc: '٢ قطعة دجاج + ٢ قطعة استربس + أرز + بطاطس + خبز + كول سلو + كانز بيبسي', price: 190, img: 'assets/images/chicken_crispy.jpg' },
  { id: pid(), cat: 'broasted', name: 'ميكس بوكس', desc: '٣ قطعة دجاج + ٤ قطع استربس + أرز كبير + بطاطس كبير + ٢ خبز + كول سلو + كانز بيبسي', price: 275, img: 'assets/images/chicken_crispy.jpg' },
  { id: pid(), cat: 'broasted', name: 'الوجبة الإقتصادية', desc: '٩ قطع بروست — ١ كول سلو — ١ باكيت بطاطس لارج — ٤ قطع خبز', price: 450, img: 'assets/images/chicken_crispy.jpg' },
  { id: pid(), cat: 'broasted', name: 'وجبة التوفير', desc: '١٢ قطعة دجاج + أرز كبير + بطاطس كبير + كول سلو + ٤ خبز', price: 550, img: 'assets/images/chicken_crispy.jpg' },
  { id: pid(), cat: 'broasted', name: 'الوجبة العائلية', desc: '١٥ قطعة دجاج + أرز كبير + بطاطس كبير + كول سلو + ٥ خبز', price: 585, img: 'assets/images/chicken_crispy.jpg' },

  /* ===================== سندوتشات الفراخ ===================== */
  { id: pid(), cat: 'sandwiches-chicken', name: 'سندوتش بانيه', price: 90, img: 'assets/images/chicken_crispy.jpg' },
  { id: pid(), cat: 'sandwiches-chicken', name: 'سندوتش كرسبي', price: 90, img: 'assets/images/chicken_crispy.jpg' },
  { id: pid(), cat: 'sandwiches-chicken', name: 'سندوتش شيش طاووق', price: 90, img: 'assets/images/shawarma_product.jpg' },
  { id: pid(), cat: 'sandwiches-chicken', name: 'سندوتش مشوي صدور', price: 95, img: 'assets/images/chicken_crispy.jpg' },
  { id: pid(), cat: 'sandwiches-chicken', name: 'سندوتش فاهيتا فراخ', desc: 'قطع فراخ مشوية — خضراوات — زيتون', price: 95, img: 'assets/images/shawarma_product.jpg' },
  { id: pid(), cat: 'sandwiches-chicken', name: 'سندوتش سوبر كرانشي', desc: 'قطع فراخ مقرمشة — روس مدخن — موزاريلا', price: 105, img: 'assets/images/chicken_crispy.jpg' },
  { id: pid(), cat: 'sandwiches-chicken', name: 'سندوتش كوردن بلو', desc: 'فراخ مقرمشة — لحم مدخن — موزاريلا', price: 105, img: 'assets/images/chicken_crispy.jpg' },
  { id: pid(), cat: 'sandwiches-chicken', name: 'سندوتش زنجر', desc: 'فراخ حارة مقرمشة — شيدر صوص — موزاريلا', price: 100, img: 'assets/images/chicken_crispy.jpg' },
  { id: pid(), cat: 'sandwiches-chicken', name: 'سندوتش جراند رولز', desc: 'فراخ مقرمشة محشية فلامنك', price: 95, img: 'assets/images/chicken_crispy.jpg' },
  { id: pid(), cat: 'sandwiches-chicken', name: 'سندوتش شاورما فراخ', desc: 'قطع صدور شاورما — توميه', price: 90, img: 'assets/images/shawarma_product.jpg' },
  { id: pid(), cat: 'sandwiches-chicken', name: 'سندوتش إيطاليانو', desc: 'قطع دجاج حارة مقرمشة — رومي مدخن — شيدر', price: 105, img: 'assets/images/chicken_crispy.jpg' },
  { id: pid(), cat: 'sandwiches-chicken', name: 'سندوتش تشكن هالبينو', desc: 'قطع دجاج حارة مقرمشة — شيدر صوص — مايونيز هالبينو', price: 105, img: 'assets/images/chicken_crispy.jpg' },
  { id: pid(), cat: 'sandwiches-chicken', name: 'سندوتش تندوري', price: 100, img: 'assets/images/shawarma_product.jpg' },
  { id: pid(), cat: 'sandwiches-chicken', name: 'سندوتش شاورما تندوري', price: 95, img: 'assets/images/shawarma_product.jpg' },

  /* ===================== سندوتشات اللحوم ===================== */
  { id: pid(), cat: 'sandwiches-meat', name: 'سندوتش كفتة', price: 75, img: 'assets/images/hero_burger.jpg' },
  { id: pid(), cat: 'sandwiches-meat', name: 'سندوتش هوت دوج', desc: 'شرائح هوت دوج رومي مدخن وموزاريلا', price: 65, img: 'assets/images/hero_burger.jpg' },
  { id: pid(), cat: 'sandwiches-meat', name: 'سندوتش كبدة إسكندراني', price: 60, img: 'assets/images/hero_burger.jpg' },
  { id: pid(), cat: 'sandwiches-meat', name: 'سندوتش سجق إسكندراني', desc: 'صابع كامل أو مقطع', price: 75, img: 'assets/images/hero_burger.jpg' },
  { id: pid(), cat: 'sandwiches-meat', name: 'سندوتش دونر كباب', desc: 'شرائح شاورما لحمة شبيه على الطريقة التركية', price: 85, img: 'assets/images/shawarma_product.jpg' },
  { id: pid(), cat: 'sandwiches-meat', name: 'سندوتش شاورما لحم كيزر', price: 45, img: 'assets/images/shawarma_product.jpg' },
  { id: pid(), cat: 'sandwiches-meat', name: 'سندوتش شاورما لحم فرنساوي', price: 90, img: 'assets/images/shawarma_product.jpg' },
  { id: pid(), cat: 'sandwiches-meat', name: 'سندوتش برجر مشروم', price: 85, img: 'assets/images/hero_burger.jpg' },

  /* ===================== سندوتشات السوري ===================== */
  { id: pid(), cat: 'sandwiches-syrian', name: 'سندوتش بطاطس سوري', desc: 'بطاطس قارم فريش وتوميه وكاتشب وخيار مخلل', price: 30, img: 'assets/images/fries_product.jpg' },
  { id: pid(), cat: 'sandwiches-syrian', name: 'سندوتش شاورما فراخ سوري', desc: 'شرائح شاورما دجاج وتومية وخيار مخلل', price: 90, img: 'assets/images/shawarma_product.jpg' },
  { id: pid(), cat: 'sandwiches-syrian', name: 'سندوتش استربس سوري', desc: 'قطع استربس حارة مقرمشة في كيزر بلاس ودبابيس وكاتشب وخيار مخلل', price: 90, img: 'assets/images/chicken_crispy.jpg' },
  { id: pid(), cat: 'sandwiches-syrian', name: 'سندوتش شيش طاووق سوري', desc: 'قطع شيش طاووق مشوي وفلفل ألوان وبطاطس مع مخللات ومايونيز وطحينه وخيار مخلل', price: 90, img: 'assets/images/shawarma_product.jpg' },
  { id: pid(), cat: 'sandwiches-syrian', name: 'سندوتش شاورما لحمة سوري', desc: 'شرائح شاورما لحم — بقدونس — بصل — طماطم — خيار مخلل جزر', price: 100, img: 'assets/images/shawarma_product.jpg' },
  { id: pid(), cat: 'sandwiches-syrian', name: 'سندوتش كفتة سوري', desc: 'سوري كفتة — بقدونس — بصل — طماطم — طحينه — خيار مخلل', price: 80, img: 'assets/images/hero_burger.jpg' },
  { id: pid(), cat: 'sandwiches-syrian', name: 'سندوتش شيش تندوري', price: 95, img: 'assets/images/shawarma_product.jpg' },
  { id: pid(), cat: 'sandwiches-syrian', name: 'سندوتش شاورما تندوري', price: 95, img: 'assets/images/shawarma_product.jpg' },

  /* ===================== سندوتشات سي فود ===================== */
  { id: pid(), cat: 'sandwiches-seafood', name: 'سندوتش جمبري (مشوي أو مقلي)', price: 120, img: 'assets/images/shawarma_product.jpg' },
  { id: pid(), cat: 'sandwiches-seafood', name: 'سندوتش سي فود (مشوي أو مقلي)', price: 125, img: 'assets/images/shawarma_product.jpg' },

  /* ===================== كريبات الفراخ ===================== */
  { id: pid(), cat: 'crepe-chicken', name: 'كريب برجر فراخ', sizes: [{label:'عادي', price:95},{label:'خضروات', price:85}], img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-chicken', name: 'كريب بانيه', sizes: [{label:'عادي', price:95},{label:'خضروات', price:85}], img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-chicken', name: 'كريب كرسبي', sizes: [{label:'عادي', price:95},{label:'خضروات', price:85}], img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-chicken', name: 'كريب شيش طاووق', sizes: [{label:'عادي', price:95},{label:'خضروات', price:85}], img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-chicken', name: 'كريب مشوي صدور', sizes: [{label:'عادي', price:90},{label:'خضروات', price:85}], img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-chicken', name: 'كريب فاهيتا فراخ', sizes: [{label:'عادي', price:100},{label:'خضروات', price:75}], img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-chicken', name: 'كريب شاورما فراخ', sizes: [{label:'عادي', price:95},{label:'خضروات', price:85}], img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-chicken', name: 'كريب زنجر', desc: 'فراخ حارة مقرمشة — شيدر صوص — موزاريلا', sizes: [{label:'عادي', price:100}], img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-chicken', name: 'كريب سوبر كرانشي', sizes: [{label:'عادي', price:105}], img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-chicken', name: 'كريب كوردن بلو', sizes: [{label:'عادي', price:100}], img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-chicken', name: 'كريب إيطاليانو', sizes: [{label:'عادي', price:105}], img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-chicken', name: 'كريب كاتشب', sizes: [{label:'عادي', price:110}], img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-chicken', name: 'كريب ميكس تشكن', sizes: [{label:'عادي', price:110}], img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-chicken', name: 'كريب تشكن هالبينو', sizes: [{label:'عادي', price:100}], img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-chicken', name: 'كريب جراند رولز', desc: 'محشية جبنة فلامنك', sizes: [{label:'عادي', price:95}], img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-chicken', name: 'كريب تشكن تكساس', sizes: [{label:'عادي', price:100}], img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-chicken', name: 'كريب تشكن تندوري', sizes: [{label:'عادي', price:100}], img: 'assets/images/crepe_product.jpg' },

  /* ===================== كريبات اللحوم ===================== */
  { id: pid(), cat: 'crepe-meat', name: 'كريب سجق', price: 90, img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-meat', name: 'كريب هوت دوج', price: 80, img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-meat', name: 'كريب شاورما لحم', price: 100, img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-meat', name: 'كريب فاهيتا لحم', price: 110, img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-meat', name: 'كريب مشكل لحوم', price: 100, img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-meat', name: 'كريب كفتة', price: 90, img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-meat', name: 'كريب دونر كباب', price: 100, img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-meat', name: 'كريب كفتة بالخضروات', price: 85, img: 'assets/images/crepe_product.jpg' },

  /* ===================== كريبات الجبن ===================== */
  { id: pid(), cat: 'crepe-cheese', name: 'كريب مشكل جبن', price: 50, img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-cheese', name: 'كريب بطاطس', price: 50, img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-cheese', name: 'كريب مشكل جبن بالبطاطس', price: 70, img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-cheese', name: 'كريب مشروم', price: 70, img: 'assets/images/crepe_product.jpg' },

  /* ===================== كريبات سي فود ===================== */
  { id: pid(), cat: 'crepe-seafood', name: 'كريب جمبري (مشوي أو مقلي)', price: 120, img: 'assets/images/crepe_product.jpg' },
  { id: pid(), cat: 'crepe-seafood', name: 'كريب سي فود (مشوي أو مقلي)', price: 125, img: 'assets/images/crepe_product.jpg' },

  /* ===================== كريبات نوتيلا ===================== */
  { id: pid(), cat: 'crepe-nutella', name: 'كريب نوتيلا', price: 55, img: 'assets/images/waffle_product.jpg' },
  { id: pid(), cat: 'crepe-nutella', name: 'نوتيلا بالموز', price: 65, img: 'assets/images/waffle_product.jpg' },
  { id: pid(), cat: 'crepe-nutella', name: 'نوتيلا كاتشب', price: 65, img: 'assets/images/waffle_product.jpg' },

  /* ===================== مكرونات PASTA ===================== */
  { id: pid(), cat: 'pasta', name: 'بولونيز', desc: 'مكرونة قلم — صوص أحمر — لحم مفروم', price: 95, img: 'assets/images/pasta_product.jpg' },
  { id: pid(), cat: 'pasta', name: 'نجرسكو', desc: 'مكرونة قلم — صوص أبيض — فراخ — موزاريلا', price: 115, img: 'assets/images/pasta_product.jpg' },
  { id: pid(), cat: 'pasta', name: 'تشكن الفريدو', desc: 'مكرونة قلم — صوص أبيض — فراخ — مشروم — موزاريلا — رومي', price: 115, img: 'assets/images/pasta_product.jpg', featured: true },
  { id: pid(), cat: 'pasta', name: 'باستا كرانشي', desc: 'مكرونة قلم — صوص أبيض — فراخ كرانشي حارة — موزاريلا — رومي', price: 115, img: 'assets/images/pasta_product.jpg' },
  { id: pid(), cat: 'pasta', name: 'باستا مكس تشكن', desc: 'مكرونة قلم — صوص أبيض — فراخ كرانشي حارة — قطع فراخ مشوية — موزاريلا', price: 115, img: 'assets/images/pasta_product.jpg' },
  { id: pid(), cat: 'pasta', name: 'باستا أرابيتا', desc: 'مكرونة قلم — صوص أبيض — لحم مفروم — موزاريلا', price: 110, img: 'assets/images/pasta_product.jpg' },
  { id: pid(), cat: 'pasta', name: 'باستا جمبري', desc: 'مكرونة قلم — صوص أبيض أو أحمر — جمبري — موزاريلا', price: 125, img: 'assets/images/pasta_product.jpg' },
  { id: pid(), cat: 'pasta', name: 'باستا سي فود', desc: 'مكرونة قلم — صوص أبيض أو أحمر جمبري — كابوريا — موزاريلا', price: 135, img: 'assets/images/pasta_product.jpg' },
  { id: pid(), cat: 'pasta', name: 'مكرونة صوص أحمر عادي', price: 40, img: 'assets/images/pasta_product.jpg' },
  { id: pid(), cat: 'pasta', name: 'مكرونة صوص أبيض عادي', price: 50, img: 'assets/images/pasta_product.jpg' },

  /* ===================== سترومبولي كالزوني ===================== */
  { id: pid(), cat: 'stromboli', name: 'سترومبولي مشكل جبن بالخضراوات', sizes: [{label:'عادي', price:60},{label:'وش بيتزا', price:70}], img: 'assets/images/stromboli_product.jpg' },
  { id: pid(), cat: 'stromboli', name: 'سترومبولي سجق', sizes: [{label:'عادي', price:80},{label:'وش بيتزا', price:90}], img: 'assets/images/stromboli_product.jpg' },
  { id: pid(), cat: 'stromboli', name: 'سترومبولي لحم مفروم', sizes: [{label:'عادي', price:85},{label:'وش بيتزا', price:95}], img: 'assets/images/stromboli_product.jpg' },
  { id: pid(), cat: 'stromboli', name: 'سترومبولي مشكل لحوم', sizes: [{label:'عادي', price:90},{label:'وش بيتزا', price:100}], img: 'assets/images/stromboli_product.jpg' },
  { id: pid(), cat: 'stromboli', name: 'سترومبولي هوت دوج', sizes: [{label:'عادي', price:75},{label:'وش بيتزا', price:85}], img: 'assets/images/stromboli_product.jpg' },
  { id: pid(), cat: 'stromboli', name: 'سترومبولي مشكل فراخ', sizes: [{label:'عادي', price:110},{label:'وش بيتزا', price:120}], img: 'assets/images/stromboli_product.jpg' },
  { id: pid(), cat: 'stromboli', name: 'سترومبولي شيش طاووق', sizes: [{label:'عادي', price:100},{label:'وش بيتزا', price:110}], img: 'assets/images/stromboli_product.jpg' },
  { id: pid(), cat: 'stromboli', name: 'سترومبولي كرانشي', sizes: [{label:'عادي', price:100},{label:'وش بيتزا', price:110}], img: 'assets/images/stromboli_product.jpg' },
  { id: pid(), cat: 'stromboli', name: 'سترومبولي مشكل فراخ', sizes: [{label:'عادي', price:95},{label:'وش بيتزا', price:105}], img: 'assets/images/stromboli_product.jpg' },
  { id: pid(), cat: 'stromboli', name: 'سترومبولي فاهيتا فراخ', sizes: [{label:'عادي', price:110},{label:'وش بيتزا', price:120}], img: 'assets/images/stromboli_product.jpg' },
  { id: pid(), cat: 'stromboli', name: 'سترومبولي جمبري', sizes: [{label:'عادي', price:130},{label:'وش بيتزا', price:140}], img: 'assets/images/stromboli_product.jpg' },
  { id: pid(), cat: 'stromboli', name: 'سترومبولي دونر كباب', sizes: [{label:'عادي', price:100},{label:'وش بيتزا', price:110}], img: 'assets/images/stromboli_product.jpg' },
  { id: pid(), cat: 'stromboli', name: 'سترومبولي سي فود', sizes: [{label:'عادي', price:130},{label:'وش بيتزا', price:140}], img: 'assets/images/stromboli_product.jpg' },
  { id: pid(), cat: 'stromboli', name: 'سترومبولي شاورما فراخ', sizes: [{label:'عادي', price:95},{label:'وش بيتزا', price:105}], img: 'assets/images/stromboli_product.jpg' },

  /* ===================== ريزو ===================== */
  { id: pid(), cat: 'rizo', name: 'ريزو فاهيتا', sizes: [{label:'M', price:80},{label:'L', price:100}], img: 'assets/images/rizo_product.jpg', featured: true },
  { id: pid(), cat: 'rizo', name: 'ريزو كرانشي', sizes: [{label:'M', price:80},{label:'L', price:100}], img: 'assets/images/rizo_product.jpg' },
  { id: pid(), cat: 'rizo', name: 'ريزو كبدة', sizes: [{label:'M', price:70},{label:'L', price:85}], img: 'assets/images/rizo_product.jpg' },
  { id: pid(), cat: 'rizo', name: 'ريزو شاورما فراخ', sizes: [{label:'M', price:80},{label:'L', price:100}], img: 'assets/images/rizo_product.jpg' },
  { id: pid(), cat: 'rizo', name: 'ريزو بانيه', sizes: [{label:'M', price:80},{label:'L', price:100}], img: 'assets/images/rizo_product.jpg' },
  { id: pid(), cat: 'rizo', name: 'ريزو سادة', sizes: [{label:'M', price:25},{label:'L', price:35}], img: 'assets/images/rizo_product.jpg' },
  { id: pid(), cat: 'rizo', name: 'ريزو دونر كباب', sizes: [{label:'M', price:80},{label:'L', price:100}], img: 'assets/images/rizo_product.jpg' },
  { id: pid(), cat: 'rizo', name: 'ريزو جمبري مقلي', sizes: [{label:'M', price:95},{label:'L', price:120}], img: 'assets/images/rizo_product.jpg' },

  /* ===================== الوجبات ===================== */
  { id: pid(), cat: 'meals', name: 'وجبة شيش طاووق', desc: 'تقدم مع أرز — بطاطس — كول سلو — خبز', price: 140, img: 'assets/images/rizo_product.jpg' },
  { id: pid(), cat: 'meals', name: 'وجبة مشوي صدور', desc: 'تقدم مع أرز — بطاطس — كول سلو — خبز', price: 140, img: 'assets/images/rizo_product.jpg' },
  { id: pid(), cat: 'meals', name: 'وجبة استربس (حار أو بارد)', desc: 'تقدم مع أرز — بطاطس — كول سلو — خبز', price: 140, img: 'assets/images/chicken_crispy.jpg' },
  { id: pid(), cat: 'meals', name: 'وجبة كفتة', desc: 'تقدم مع أرز — بطاطس — كول سلو — خبز', price: 130, img: 'assets/images/rizo_product.jpg' },
  { id: pid(), cat: 'meals', name: 'وجبة كرانشي', desc: 'تقدم مع أرز — بطاطس — كول سلو — خبز', price: 150, img: 'assets/images/chicken_crispy.jpg' },
  { id: pid(), cat: 'meals', name: 'وجبة ميكس جريل', desc: 'تقدم مع أرز — بطاطس — كول سلو — خبز', price: 150, img: 'assets/images/rizo_product.jpg' },
  { id: pid(), cat: 'meals', name: 'وجبة ميكس تشكن', desc: 'تقدم مع أرز — بطاطس — كول سلو — خبز', price: 150, img: 'assets/images/chicken_crispy.jpg' },
  { id: pid(), cat: 'meals', name: 'وجبة شيش تندوري', desc: 'تقدم مع أرز — بطاطس — كول سلو — خبز', price: 110, img: 'assets/images/rizo_product.jpg' },

  /* ===================== فطير حادق ===================== */
  { id: pid(), cat: 'fateer-salty', name: 'فطير مشكل جبن', sizes: [{label:'M', price:110},{label:'L', price:150}], img: 'assets/images/fateer_product.jpg' },
  { id: pid(), cat: 'fateer-salty', name: 'فطير سجق شرقي', sizes: [{label:'M', price:120},{label:'L', price:165}], img: 'assets/images/fateer_product.jpg' },
  { id: pid(), cat: 'fateer-salty', name: 'فطير سجق بلدي', sizes: [{label:'M', price:135},{label:'L', price:190}], img: 'assets/images/fateer_product.jpg' },
  { id: pid(), cat: 'fateer-salty', name: 'فطير بسطرمة', sizes: [{label:'M', price:120},{label:'L', price:170}], img: 'assets/images/fateer_product.jpg' },
  { id: pid(), cat: 'fateer-salty', name: 'فطير مشكل لحوم', sizes: [{label:'M', price:130},{label:'L', price:180}], img: 'assets/images/fateer_product.jpg' },
  { id: pid(), cat: 'fateer-salty', name: 'فطير فراخ بسطرمة كيري', sizes: [{label:'M', price:140},{label:'L', price:200}], img: 'assets/images/fateer_product.jpg' },
  { id: pid(), cat: 'fateer-salty', name: 'فطير فراخ', sizes: [{label:'M', price:125},{label:'L', price:175}], img: 'assets/images/fateer_product.jpg' },
  { id: pid(), cat: 'fateer-salty', name: 'فطير تشكن رانش', sizes: [{label:'M', price:135},{label:'L', price:190}], img: 'assets/images/fateer_product.jpg' },
  { id: pid(), cat: 'fateer-salty', name: 'فطير فراخ كرانشي', sizes: [{label:'M', price:125},{label:'L', price:185}], img: 'assets/images/fateer_product.jpg' },
  { id: pid(), cat: 'fateer-salty', name: 'فطير مشكل فراخ', sizes: [{label:'M', price:135},{label:'L', price:190}], img: 'assets/images/fateer_product.jpg' },
  { id: pid(), cat: 'fateer-salty', name: 'فطير جمبري', sizes: [{label:'M', price:150},{label:'L', price:205}], img: 'assets/images/fateer_product.jpg' },
  { id: pid(), cat: 'fateer-salty', name: 'فطير سي فود', sizes: [{label:'M', price:140},{label:'L', price:200}], img: 'assets/images/fateer_product.jpg' },
  { id: pid(), cat: 'fateer-salty', name: 'فطير شيش', sizes: [{label:'M', price:125},{label:'L', price:175}], img: 'assets/images/fateer_product.jpg' },
  { id: pid(), cat: 'fateer-salty', name: 'فطير تو سيزون', sizes: [{label:'M', price:130},{label:'L', price:170}], img: 'assets/images/fateer_product.jpg' },

  /* ===================== فطير صاروخ ===================== */
  { id: pid(), cat: 'fateer-rocket', name: 'صاروخ مشكل جبن بالخضروات', price: 75, img: 'assets/images/fateer_product.jpg' },
  { id: pid(), cat: 'fateer-rocket', name: 'صاروخ سجق شرقي', price: 90, img: 'assets/images/fateer_product.jpg' },
  { id: pid(), cat: 'fateer-rocket', name: 'صاروخ سجق بلدي', price: 115, img: 'assets/images/fateer_product.jpg' },
  { id: pid(), cat: 'fateer-rocket', name: 'صاروخ بسطرمة', price: 90, img: 'assets/images/fateer_product.jpg' },
  { id: pid(), cat: 'fateer-rocket', name: 'صاروخ مشكل لحوم', price: 105, img: 'assets/images/fateer_product.jpg' },
  { id: pid(), cat: 'fateer-rocket', name: 'صاروخ فراخ', price: 120, img: 'assets/images/fateer_product.jpg' },
  { id: pid(), cat: 'fateer-rocket', name: 'صاروخ تشكن رانش', price: 130, img: 'assets/images/fateer_product.jpg' },
  { id: pid(), cat: 'fateer-rocket', name: 'صاروخ فراخ كرانشي', price: 120, img: 'assets/images/fateer_product.jpg' },
  { id: pid(), cat: 'fateer-rocket', name: 'صاروخ مشكل فراخ', price: 130, img: 'assets/images/fateer_product.jpg' },
  { id: pid(), cat: 'fateer-rocket', name: 'صاروخ جمبري', price: 135, img: 'assets/images/fateer_product.jpg' },

  /* ===================== فطير حلو ===================== */
  { id: pid(), cat: 'fateer-sweet', name: 'فطير بغاشة', sizes: [{label:'M', price:40},{label:'L', price:70}], img: 'assets/images/waffle_product.jpg' },
  { id: pid(), cat: 'fateer-sweet', name: 'فطير كاستر', sizes: [{label:'M', price:50},{label:'L', price:75}], img: 'assets/images/waffle_product.jpg' },
  { id: pid(), cat: 'fateer-sweet', name: 'فطير نوتيلا', sizes: [{label:'M', price:85},{label:'L', price:125}], img: 'assets/images/waffle_product.jpg' },
  { id: pid(), cat: 'fateer-sweet', name: 'فطير شوكولاتة بيضاء', sizes: [{label:'M', price:90},{label:'L', price:125}], img: 'assets/images/waffle_product.jpg' },
  { id: pid(), cat: 'fateer-sweet', name: 'فطير مكس شوكولاتة', sizes: [{label:'M', price:90},{label:'L', price:130}], img: 'assets/images/waffle_product.jpg' },
  { id: pid(), cat: 'fateer-sweet', name: 'فطير لوتس أو بيستاشيو', sizes: [{label:'M', price:100},{label:'L', price:160}], img: 'assets/images/waffle_product.jpg' },
  { id: pid(), cat: 'fateer-sweet', name: 'فطير بلح', sizes: [{label:'M', price:60},{label:'L', price:90}], img: 'assets/images/waffle_product.jpg' },
  { id: pid(), cat: 'fateer-sweet', name: 'فطير فور سيزون', sizes: [{label:'M', price:100},{label:'L', price:165}], img: 'assets/images/waffle_product.jpg' },

  /* ===================== أصناف جانبية SIDES ===================== */
  { id: pid(), cat: 'sides', name: 'كول سلو', price: 35, img: 'assets/images/fries_product.jpg' },
  { id: pid(), cat: 'sides', name: 'بطاطس فارم', sizes: [{label:'M', price:20},{label:'L', price:30}], img: 'assets/images/fries_product.jpg' },
  { id: pid(), cat: 'sides', name: 'بطاطس بالشيدر', sizes: [{label:'M', price:25},{label:'L', price:40}], img: 'assets/images/fries_product.jpg' },
  { id: pid(), cat: 'sides', name: 'بطاطس بالموزاريلا', sizes: [{label:'M', price:25},{label:'L', price:40}], img: 'assets/images/fries_product.jpg' },
  { id: pid(), cat: 'sides', name: 'بطاطس فرسكس', sizes: [{label:'M', price:25},{label:'L', price:40}], img: 'assets/images/fries_product.jpg' },
  { id: pid(), cat: 'sides', name: 'صوصات', desc: 'ثومية — تكساس — شيدر — رانش — ألف جزيرة — باربيكيو', price: 5, img: 'assets/images/fries_product.jpg' },
  { id: pid(), cat: 'sides', name: 'مخلل', sizes: [{label:'M', price:7},{label:'L', price:15}], img: 'assets/images/fries_product.jpg' },
  { id: pid(), cat: 'sides', name: 'ساندوتش بطاطس', price: 25, img: 'assets/images/fries_product.jpg' },
  { id: pid(), cat: 'sides', name: 'ساندوتش رومي نار', price: 30, img: 'assets/images/fries_product.jpg' },
  { id: pid(), cat: 'sides', name: 'مياه', price: 7, img: 'assets/images/coffee_product.jpg' },
  { id: pid(), cat: 'sides', name: 'كانز', price: 20, img: 'assets/images/coffee_product.jpg' },
  { id: pid(), cat: 'sides', name: 'لتر بيبسي', price: 30, img: 'assets/images/coffee_product.jpg' },
  { id: pid(), cat: 'sides', name: 'مشروب V', price: 30, img: 'assets/images/coffee_product.jpg' },
  { id: pid(), cat: 'sides', name: 'مكسي كولا', price: 20, img: 'assets/images/coffee_product.jpg' },

  /* ===================== الوافل ===================== */
  { id: pid(), cat: 'waffle', name: 'وافل نوتيلا بالفواكه', price: 65, img: 'assets/images/waffle_product.jpg' },
  { id: pid(), cat: 'waffle', name: 'وافل لوتس', price: 80, img: 'assets/images/waffle_product.jpg' },
  { id: pid(), cat: 'waffle', name: 'وافل بيستاشيو', price: 75, img: 'assets/images/waffle_product.jpg' },
  { id: pid(), cat: 'waffle', name: 'وافل فور سيزون', price: 75, img: 'assets/images/waffle_product.jpg' },
  { id: pid(), cat: 'waffle', name: 'وافل أربعة صوصات من اختيارك', price: 80, img: 'assets/images/waffle_product.jpg' },

  /* ===================== المشروبات DRINKS ===================== */
  { id: pid(), cat: 'drinks', name: 'اسبريسو', price: 15, img: 'assets/images/coffee_product.jpg' },
  { id: pid(), cat: 'drinks', name: 'دبل اسبريسو', price: 20, img: 'assets/images/coffee_product.jpg' },
  { id: pid(), cat: 'drinks', name: 'اسبريسو مكاتو', price: 25, img: 'assets/images/coffee_product.jpg' },
  { id: pid(), cat: 'drinks', name: 'لونجو', price: 15, img: 'assets/images/coffee_product.jpg' },
  { id: pid(), cat: 'drinks', name: 'فلات وايت', price: 30, img: 'assets/images/coffee_product.jpg' },
  { id: pid(), cat: 'drinks', name: 'لاتيه ميكاتو', price: 30, img: 'assets/images/coffee_product.jpg' },
  { id: pid(), cat: 'drinks', name: 'كابتشينو', price: 30, img: 'assets/images/coffee_product.jpg' },
  { id: pid(), cat: 'drinks', name: 'نسكافيه كراميل', price: 25, img: 'assets/images/coffee_product.jpg' },
  { id: pid(), cat: 'drinks', name: 'موكا', price: 30, img: 'assets/images/coffee_product.jpg' },
  { id: pid(), cat: 'drinks', name: 'هوت شوكليت', price: 30, img: 'assets/images/coffee_product.jpg' },
];

/* ---- Pizza crust add-ons ---- */
const PIZZA_ADDONS = [
  { name: 'حشو أطراف موزاريلا', sizes: [{label:'M', price:20},{label:'L', price:30}] },
  { name: 'الأطراف هوت دوج', sizes: [{label:'M', price:35},{label:'L', price:50}] },
  { name: 'الأطراف كيري', sizes: [{label:'M', price:25},{label:'L', price:40}] },
  { name: 'الأطراف مشروم', sizes: [{label:'M', price:30},{label:'L', price:45}] },
  { name: 'حشو بسطرمة', sizes: [{label:'M', price:30},{label:'L', price:45}] },
  { name: 'حشو رومي مدخن', sizes: [{label:'M', price:35},{label:'L', price:50}] },
];

const FATEER_ADDONS = [
  { name: 'إضافة كيري', price: 15 },
];

const FATEER_SWEET_ADDONS = [
  { name: 'إضافة موز', price: 10 },
  { name: 'صوص كراميل', price: 10 },
];

const CREPE_ADDONS = [
  { name: 'إضافة كونو', price: 15 },
];

const WAFFLE_ADDONS = [
  { name: 'إضافة صوص', price: 5 },
];

/* ---- Upselling / Meal Suggestions ---- */
const UPSELL_SUGGESTIONS = [
  { id: 'sug-1', name: 'كانز بيبسي مثلج', price: 20, icon: '🥤' },
  { id: 'sug-2', name: 'باكيت بطاطس مقرمشة', price: 25, icon: '🍟' },
  { id: 'sug-3', name: 'صوص رانش كاتشب الخاص', price: 15, icon: '🥫' },
  { id: 'sug-4', name: 'صوص جبنة شيدر سايحة', price: 20, icon: '🧀' },
  { id: 'sug-5', name: 'لتر بيبسي عائلي', price: 30, icon: '🍾' },
  { id: 'sug-6', name: 'مخلل مشكل مقرمش', price: 7, icon: '🥒' },
];

