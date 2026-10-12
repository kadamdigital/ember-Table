// Featured Collections Data: Special Menu, Weekend Vibes, and GOAT Menu
// Fictional concept dishes for The Ember Table

export const SPECIAL_MENU = {
  title: "Something Special",
  subtitle: "Signature creations for moments worth celebrating.",
  badge: "CHEF'S SIGNATURES",
  dishes: [
    {
      id: "spec-1",
      name: "Ember Truffle Mushroom Burger",
      price: 399,
      dietary: "veg",
      description: "Toasted brioche, mushroom patty, truffle-style sauce, caramelised onions, and cheese.",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
      tag: "Signature Creation",
      spiceLevel: 1
    },
    {
      id: "spec-2",
      name: "Smoky BBQ Chicken Wings",
      price: 329,
      dietary: "non-veg",
      description: "Chicken wings coated in smoky barbecue glaze with toasted sesame and scallions.",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80",
      tag: "Charcoal Glazed",
      spiceLevel: 2
    },
    {
      id: "spec-3",
      name: "Creamy Tuscan Pasta",
      price: 349,
      dietary: "veg",
      description: "Creamy sauce, sun-dried tomatoes, herbs, vegetables, and parmesan-style garnish.",
      image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?auto=format&fit=crop&w=800&q=80",
      tag: "Handcrafted Sauce",
      spiceLevel: 0
    },
    {
      id: "spec-4",
      name: "Fire-Roasted Paneer Tikka",
      price: 299,
      dietary: "veg",
      description: "Marinated cottage cheese with bell peppers, charred onions, and a smoky tandoor finish.",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
      tag: "Clay-Oven Char",
      spiceLevel: 2
    },
    {
      id: "spec-5",
      name: "Signature Loaded Fries",
      price: 249,
      dietary: "veg",
      description: "Crispy skin-on fries with three-cheese sauce, fresh herbs, jalapeños, and signature seasoning.",
      image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
      tag: "Crowd Favourite",
      spiceLevel: 1
    },
    {
      id: "spec-6",
      name: "Molten Chocolate Brownie",
      price: 199,
      dietary: "veg",
      description: "Rich dark chocolate brownie with a molten centre, served warm with Madagascar vanilla ice cream.",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
      tag: "Decadent Finish",
      spiceLevel: 0
    }
  ]
};

export const WEEKEND_VIBES_MENU = {
  title: "Weekend Vibes",
  subtitle: "Your weekend plans just found their favourite place.",
  badge: "SHARING & GATHERINGS",
  dishes: [
    {
      id: "wknd-1",
      name: "Weekend Loaded Nachos",
      price: 299,
      dietary: "veg",
      description: "Corn tortilla chips smothered in melted queso, pico de gallo, guacamole, and pickled jalapeños.",
      image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80",
      tag: "Perfect For 2-3",
      category: "Sharers"
    },
    {
      id: "wknd-2",
      name: "Double Smash Burger",
      price: 449,
      dietary: "non-veg",
      description: "Twin seared beef-style patties, double American cheese, caramelized onions, and house ember sauce.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      tag: "Weekend Craving",
      category: "Burgers"
    },
    {
      id: "wknd-3",
      name: "Peri-Peri Chicken Bucket",
      price: 499,
      dietary: "non-veg",
      description: "Crispy marinated bone-in chicken bites dusted with fiery African peri-peri seasoning and garlic dip.",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
      tag: "Group Bucket",
      category: "Sharers"
    },
    {
      id: "wknd-4",
      name: "Paneer Tikka Wrap",
      price: 279,
      dietary: "veg",
      description: "Flaky parotta roll stuffed with smoky tandoori paneer, crunchy red onions, and mint chutney drizzle.",
      image: "https://images.unsplash.com/photo-1648495568108-72643a6d71c8?auto=format&fit=crop&w=800&q=80",
      tag: "Quick Grab",
      category: "Wraps"
    },
    {
      id: "wknd-5",
      name: "Cheesy Garlic Bread",
      price: 229,
      dietary: "veg",
      description: "Artisan sourdough baguette infused with roasted garlic butter, parsley, and bubbling mozzarella.",
      image: "https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=800&q=80",
      tag: "Warm Starter",
      category: "Starters"
    },
    {
      id: "wknd-6",
      name: "Chocolate Shake",
      price: 199,
      dietary: "veg",
      description: "Thick hand-spun shake made with Belgian cocoa, whole milk, and chocolate fudge swirl.",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
      tag: "Thick & Rich",
      category: "Drinks"
    },
    {
      id: "wknd-7",
      name: "Classic Virgin Mojito",
      price: 179,
      dietary: "veg",
      description: "Fresh garden mint muddled with Persian limes, cane syrup, and effervescent sparkling soda.",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
      tag: "Refreshing Sip",
      category: "Mocktails"
    },
    {
      id: "wknd-8",
      name: "Sharing Dessert Platter",
      price: 399,
      dietary: "veg",
      description: "Tasting board with warm churros, mini brownies, chocolate fondue dip, and fresh seasonal berries.",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
      tag: "Feast For Table",
      category: "Desserts"
    }
  ]
};

export const GOAT_MENU = {
  title: "The GOAT Menu",
  subtitle: "All-time favourites. No debate.",
  badge: "HALL OF FAME",
  dishes: [
    {
      id: "goat-1",
      name: "The GOAT Double Cheeseburger",
      price: 449,
      dietary: "non-veg",
      description: "Double seasoned smash patties, vintage yellow cheddar, secret relish, and dill pickle on potato bun.",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
      tag: "House Favourite",
      goatRank: "#1"
    },
    {
      id: "goat-2",
      name: "Classic Crispy Chicken Burger",
      price: 379,
      dietary: "non-veg",
      description: "Buttermilk-brined chicken breast fried golden crisp, house spicy slaw, and honey mustard sauce.",
      image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80",
      tag: "House Favourite",
      goatRank: "#2"
    },
    {
      id: "goat-3",
      name: "Ultimate Veggie Burger",
      price: 329,
      dietary: "veg",
      description: "Slow-roasted sweet potato, black bean and quinoa patty, smashed avocado, and herb mayo.",
      image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80",
      tag: "House Favourite",
      goatRank: "#3"
    },
    {
      id: "goat-4",
      name: "Creamy Alfredo Pasta",
      price: 349,
      dietary: "veg",
      description: "Silky fettuccine rolled in garlic butter, aged Parmesan reggiano sauce, and cracked black pepper.",
      image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80",
      tag: "House Favourite",
      goatRank: "#4"
    },
    {
      id: "goat-5",
      name: "Crispy Chicken Tenders",
      price: 329,
      dietary: "non-veg",
      description: "Tender whole-muscle chicken strips crumbed in panko, served with smoky BBQ and ranch dips.",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
      tag: "House Favourite",
      goatRank: "#5"
    },
    {
      id: "goat-6",
      name: "Masala Fries",
      price: 179,
      dietary: "veg",
      description: "Golden shoestring fries tossed in street-style chaat spices, fresh coriander, and lemon zest.",
      image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80",
      tag: "House Favourite",
      goatRank: "#6"
    },
    {
      id: "goat-7",
      name: "Classic Chocolate Shake",
      price: 199,
      dietary: "veg",
      description: "The timeless diner recipe: rich dark chocolate gelato blended with creamy whole dairy milk.",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
      tag: "House Favourite",
      goatRank: "#7"
    },
    {
      id: "goat-8",
      name: "New York-Style Cheesecake",
      price: 249,
      dietary: "veg",
      description: "Dense and velvety cream cheese on a buttery graham cracker crust, topped with berry compote.",
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
      tag: "House Favourite",
      goatRank: "#8"
    }
  ]
};
