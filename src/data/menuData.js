// Master Menu Data for The Ember Table
// Centralized for easy modification by restaurant owners

export const MENU_CATEGORIES = [
  { id: "all", label: "All Items" },
  { id: "starters", label: "Starters" },
  { id: "burgers", label: "Burgers & Sandwiches" },
  { id: "indian", label: "Indian-Inspired Favourites" },
  { id: "mains", label: "Main Courses" },
  { id: "pasta", label: "Pasta" },
  { id: "pizza", label: "Pizza & Flatbreads" },
  { id: "sides", label: "Sides" },
  { id: "desserts", label: "Desserts" },
  { id: "beverages", label: "Beverages" }
];

export const MASTER_MENU = [
  // --- STARTERS ---
  {
    id: "str-1",
    name: "Fire-Roasted Paneer Tikka",
    category: "starters",
    price: 299,
    dietary: "veg",
    description: "Marinated cottage cheese with bell peppers, charred onions, and a smoky tandoor finish.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tag: "Tandoor Special"
  },
  {
    id: "str-2",
    name: "Smoky BBQ Chicken Wings",
    category: "starters",
    price: 329,
    dietary: "non-veg",
    description: "Chicken wings coated in smoky barbecue glaze with toasted sesame and scallions.",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80",
    isVegetarian: false,
    tag: "Wood-Smoked"
  },
  {
    id: "str-3",
    name: "Cheesy Garlic Bread",
    category: "starters",
    price: 229,
    dietary: "veg",
    description: "Artisan sourdough baguette infused with roasted garlic butter, parsley, and bubbling mozzarella.",
    image: "https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tag: "Sourdough Crust"
  },
  {
    id: "str-4",
    name: "Crispy Calamari Rings",
    category: "starters",
    price: 369,
    dietary: "non-veg",
    description: "Lightly spiced panko-crusted squid rings served with lemon garlic aioli and fresh dill.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    isVegetarian: false,
    tag: "Coastal Crunch"
  },
  {
    id: "str-5",
    name: "Crispy Chicken Tenders",
    category: "starters",
    price: 329,
    dietary: "non-veg",
    description: "Tender whole-muscle chicken strips crumbed in panko, served with smoky BBQ and ranch dips.",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
    isVegetarian: false,
    tag: "Golden Crisp"
  },

  // --- BURGERS & SANDWICHES ---
  {
    id: "brg-1",
    name: "Ember Truffle Mushroom Burger",
    category: "burgers",
    price: 399,
    dietary: "veg",
    description: "Toasted brioche, mushroom patty, truffle-style sauce, caramelised onions, and cheese.",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tag: "Signature Burger"
  },
  {
    id: "brg-2",
    name: "The GOAT Double Cheeseburger",
    category: "burgers",
    price: 449,
    dietary: "non-veg",
    description: "Double seasoned smash patties, vintage yellow cheddar, secret relish, and dill pickle on potato bun.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    isVegetarian: false,
    tag: "All-Time Best"
  },
  {
    id: "brg-3",
    name: "Classic Crispy Chicken Burger",
    category: "burgers",
    price: 379,
    dietary: "non-veg",
    description: "Buttermilk-brined chicken breast fried golden crisp, house spicy slaw, and honey mustard sauce.",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80",
    isVegetarian: false,
    tag: "Southern Style"
  },
  {
    id: "brg-4",
    name: "Ultimate Veggie Burger",
    category: "burgers",
    price: 329,
    dietary: "veg",
    description: "Slow-roasted sweet potato, black bean and quinoa patty, smashed avocado, and herb mayo.",
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tag: "Wholesome"
  },
  {
    id: "brg-5",
    name: "Double Smash Burger",
    category: "burgers",
    price: 449,
    dietary: "non-veg",
    description: "Twin seared patties, double American cheese, caramelized onions, and house ember sauce.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    isVegetarian: false,
    tag: "Juicy Sizzle"
  },

  // --- INDIAN-INSPIRED FAVOURITES ---
  {
    id: "ind-1",
    name: "Butter Chicken Naan Sliders",
    category: "indian",
    price: 349,
    dietary: "non-veg",
    description: "Pulled tandoori chicken simmered in rich makhani gravy, tucked into mini fluffy garlic naan pillows.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    isVegetarian: false,
    tag: "Modern Fusion"
  },
  {
    id: "ind-2",
    name: "Paneer Tikka Wrap",
    category: "indian",
    price: 279,
    dietary: "veg",
    description: "Flaky parotta roll stuffed with smoky tandoori paneer, crunchy red onions, and mint chutney drizzle.",
    image: "https://images.unsplash.com/photo-1648495568108-72643a6d71c8?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tag: "Street Style"
  },
  {
    id: "ind-3",
    name: "Dal Makhani Fondue with Chur-Chur Naan",
    category: "indian",
    price: 329,
    dietary: "veg",
    description: "24-hour slow-simmered black lentils whipped with churned white butter, served with crushed crisp naan.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tag: "Slow-Cooked"
  },
  {
    id: "ind-4",
    name: "Old Delhi Keema Pav",
    category: "indian",
    price: 369,
    dietary: "non-veg",
    description: "Slow-cooked spiced minced lamb, roasted spices, and cilantro butter served with hot butter-toasted ladi pav.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    isVegetarian: false,
    tag: "Spiced Comfort"
  },

  // --- MAIN COURSES ---
  {
    id: "main-1",
    name: "Charcoal Grilled Herb Chicken",
    category: "mains",
    price: 459,
    dietary: "non-veg",
    description: "Half spring chicken marinated with rosemary, thyme, and garlic, grilled over charcoal with butter mash.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    isVegetarian: false,
    tag: "Plated Entrée"
  },
  {
    id: "main-2",
    name: "Wild Mushroom & Truffle Risotto",
    category: "mains",
    price: 419,
    dietary: "veg",
    description: "Arborio rice slowly simmered with porcini stock, sautéed wild mushrooms, white truffle oil, and parmesan.",
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tag: "Arborio Rice"
  },
  {
    id: "main-3",
    name: "Pan-Seared Herb Salmon",
    category: "mains",
    price: 649,
    dietary: "non-veg",
    description: "Atlantic salmon steak with crispy skin, lemon caper reduction, buttered asparagus, and dill potato purée.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    isVegetarian: false,
    tag: "Catch of the Day"
  },
  {
    id: "main-4",
    name: "Smoked Cottage Cheese Steak",
    category: "mains",
    price: 389,
    dietary: "veg",
    description: "Thick paneer slab marinated in smoked paprika glaze, grilled zucchini ribbons, and charred pepper coulis.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tag: "Vegetarian Grill"
  },

  // --- PASTA ---
  {
    id: "pst-1",
    name: "Creamy Tuscan Pasta",
    category: "pasta",
    price: 349,
    dietary: "veg",
    description: "Creamy sauce, sun-dried tomatoes, garden herbs, fresh vegetables, and parmesan-style garnish.",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tag: "Signature Sauce"
  },
  {
    id: "pst-2",
    name: "Creamy Alfredo Pasta",
    category: "pasta",
    price: 349,
    dietary: "veg",
    description: "Silky fettuccine rolled in garlic butter, aged Parmesan reggiano sauce, and cracked black pepper.",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tag: "House Classic"
  },
  {
    id: "pst-3",
    name: "Fiery Penne Arrabbiata",
    category: "pasta",
    price: 319,
    dietary: "veg",
    description: "Penne tossed with San Marzano crushed tomato sauce, spicy bird's eye chilies, fresh basil, and virgin olive oil.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tag: "Spicy Italian"
  },
  {
    id: "pst-4",
    name: "Smoked Chicken Rigatoni",
    category: "pasta",
    price: 399,
    dietary: "non-veg",
    description: "Bronze-cut rigatoni, pulled barbecue chicken, roasted cherry tomatoes, and a light pink vodka reduction.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    isVegetarian: false,
    tag: "Rich & Savoury"
  },

  // --- PIZZA & FLATBREADS ---
  {
    id: "pza-1",
    name: "Wood-Fired Margherita",
    category: "pizza",
    price: 349,
    dietary: "veg",
    description: "Crushed San Marzano tomatoes, fresh buffalo mozzarella, aromatic basil leaves, and extra virgin olive oil.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tag: "Wood-Fired"
  },
  {
    id: "pza-2",
    name: "Smoky BBQ Chicken Flatbread",
    category: "pizza",
    price: 429,
    dietary: "non-veg",
    description: "Thin sourdough crust topped with smoked shredded chicken, charred onions, jalapeños, and barbecue swirl.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    isVegetarian: false,
    tag: "Crispy Crust"
  },
  {
    id: "pza-3",
    name: "Truffle Burrata & Wild Mushroom",
    category: "pizza",
    price: 469,
    dietary: "veg",
    description: "Creamy centre burrata cheese, sautéed portobello, roasted garlic oil, and micro rocket greens.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tag: "Artisan Gourmet"
  },

  // --- SIDES ---
  {
    id: "sde-1",
    name: "Signature Loaded Fries",
    category: "sides",
    price: 249,
    dietary: "veg",
    description: "Crispy fries with cheese sauce, fresh herbs, jalapeños, and signature seasoning.",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tag: "Top Rated"
  },
  {
    id: "sde-2",
    name: "Masala Fries",
    category: "sides",
    price: 179,
    dietary: "veg",
    description: "Golden shoestring fries tossed in street-style chaat spices, fresh coriander, and lemon zest.",
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tag: "Chaat Spiced"
  },
  {
    id: "sde-3",
    name: "Crispy Onion Rings with Smoked Dip",
    category: "sides",
    price: 199,
    dietary: "veg",
    description: "Beer-battered jumbo white onion rings fried crunchy golden, paired with ember chipotle dip.",
    image: "https://images.unsplash.com/photo-1639024471287-035186f555e3?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tag: "Crunchy Dip"
  },
  {
    id: "sde-4",
    name: "Weekend Loaded Nachos",
    category: "sides",
    price: 299,
    dietary: "veg",
    description: "Corn tortilla chips smothered in melted queso, pico de gallo, guacamole, and pickled jalapeños.",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tag: "Sharer"
  },

  // --- DESSERTS ---
  {
    id: "dst-1",
    name: "Molten Chocolate Brownie",
    category: "desserts",
    price: 199,
    dietary: "veg",
    description: "Rich dark chocolate brownie with a molten centre, served warm with Madagascar vanilla ice cream.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tag: "Warm Molten"
  },
  {
    id: "dst-2",
    name: "New York-Style Cheesecake",
    category: "desserts",
    price: 249,
    dietary: "veg",
    description: "Dense and velvety cream cheese on a buttery graham cracker crust, topped with berry compote.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tag: "Classic Slice"
  },
  {
    id: "dst-3",
    name: "Sharing Dessert Platter",
    category: "desserts",
    price: 399,
    dietary: "veg",
    description: "Tasting board with warm cinnamon churros, brownie bites, chocolate fondue dip, and berries.",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tag: "Table Board"
  },
  {
    id: "dst-4",
    name: "Smoked Ember Tiramisu",
    category: "desserts",
    price: 269,
    dietary: "veg",
    description: "Espresso-soaked savoiardi biscuits layered with light mascarpone cream and roasted cocoa nibs.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tag: "Espresso Infused"
  },

  // --- BEVERAGES ---
  {
    id: "bev-1",
    name: "Classic Chocolate Shake",
    category: "beverages",
    price: 199,
    dietary: "veg",
    description: "Thick hand-spun shake made with Belgian cocoa, whole milk, and chocolate fudge swirl.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tag: "Thick Shake"
  },
  {
    id: "bev-2",
    name: "Classic Virgin Mojito",
    category: "beverages",
    price: 179,
    dietary: "veg",
    description: "Fresh garden mint muddled with Persian limes, cane syrup, and effervescent sparkling soda.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tag: "Chilled Mint"
  },
  {
    id: "bev-3",
    name: "Smoked Ember Peach Iced Tea",
    category: "beverages",
    price: 189,
    dietary: "veg",
    description: "Cold-brewed Ceylon black tea infused with scorched peach purée, fresh thyme, and lemon slice.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tag: "Cold Brewed"
  },
  {
    id: "bev-4",
    name: "Artisan Cold Coffee with Vanilla Ice Cream",
    category: "beverages",
    price: 219,
    dietary: "veg",
    description: "Single-origin Arabica espresso shaken with chilled milk and topped with a scoop of vanilla gelato.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tag: "Café Blend"
  }
];
