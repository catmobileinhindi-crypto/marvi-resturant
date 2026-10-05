# Nagori Marvi Fast Foods - Client Demo & WordPress Integration Guide

This package contains the complete standalone code for the **Nagori Marvi Fast Foods** demo website. It is designed to work both as a modern React web app and directly inside WordPress without requiring Node.js or any build tools.

---

## 1. Folder Structure

```
/wordpress-export/
├── page-nagori-marvi.php     <- WordPress Custom Page Template
├── index.html                 <- Standalone pure HTML5 version
├── style.css                  <- Complete self-contained dark restaurant CSS
├── script.js                  <- Vanilla JavaScript (cart, tabs, WhatsApp order)
├── README.md                  <- This guide
└── images/                    <- Food & Logo image assets
    ├── logo.jpg               <- Official Nagori Marvi circular logo
    ├── hero-spread.jpg        <- Hero food feast visual
    ├── burgers.jpg            <- Crispy zinger & cheese burger photo
    ├── bbq.jpg                <- Sizzling chicken malai boti & BBQ photo
    ├── pizza.jpg              <- Stone-baked special pizza photo
    ├── rolls.jpg              <- Crispy paratha roll photo
    └── karahi-fries.jpg       <- Chicken karahi & pizza fries photo
```

---

## 2. Instructions for Putting It Into WordPress

You have two simple options to deploy this demo on your WordPress site:

### Option A: WordPress Custom Page Template (Recommended)

1. Connect to your WordPress hosting via cPanel File Manager or FTP/SFTP.
2. Navigate to your active theme folder:
   ```
   wp-content/themes/[your-active-theme-or-child-theme]/
   ```
3. Copy `page-nagori-marvi.php` directly into the root of your theme folder:
   ```
   wp-content/themes/[your-active-theme]/page-nagori-marvi.php
   ```
4. Create a folder named `nagori-marvi` inside your theme folder:
   ```
   wp-content/themes/[your-active-theme]/nagori-marvi/
   ```
5. Upload `style.css`, `script.js`, and the `images/` folder into `nagori-marvi/`.
6. Log into **WordPress Admin Panel** > **Pages** > **Add New**.
7. Name the page **"Nagori Marvi Fast Foods"**.
8. In the right-hand sidebar under **Page Attributes / Template**, choose **"Nagori Marvi Fast Foods"**.
9. Click **Publish**.

---

### Option B: Elementor / Divi / Gutenberg Custom HTML Block

1. Create a new WordPress Page and set the template to **Elementor Canvas** or **Blank / Full Width**.
2. Add a **Custom HTML block** (or Elementor **HTML Widget**).
3. Paste the contents of `index.html`.
4. Upload the images from `/images/` to your **WordPress Media Library**.
5. Update image `src` URLs in the HTML to point to your uploaded WordPress media URLs (e.g., `https://yoursite.com/wp-content/uploads/2026/10/logo.jpg`).
6. Click **Publish**.

---

## 3. Which Images You Need to Replace

All demo images are placed inside `/images/`. You can replace them with your own high-resolution photography:

| File Name | Purpose | Recommended Resolution |
| :--- | :--- | :--- |
| `logo.jpg` | Official Nagori Marvi circular emblem | 600 x 600 px (Square or Circle PNG/JPG) |
| `hero-spread.jpg` | Hero banner feast visual (Pizza, Burgers, BBQ) | 1200 x 800 px (16:9 or 4:3) |
| `burgers.jpg` | Zinger Burger & Chicken Cheese Burger | 800 x 600 px (4:3) |
| `bbq.jpg` | Chicken Malai Boti & Leg Tikka | 800 x 600 px (4:3) |
| `pizza.jpg` | Stone-baked Special Pizza | 800 x 600 px (4:3) |
| `rolls.jpg` | Marvi Special Paratha Roll | 800 x 600 px (4:3) |
| `karahi-fries.jpg`| Pizza Fries & Chicken Karahi Half | 800 x 600 px (4:3) |

---

## 4. How to Change Menu Items Later

Open `script.js` in any text editor. Near the top you will find the `MENU_ITEMS` array:

```javascript
const MENU_ITEMS = [
  {
    id: "zinger-burger",
    name: "Zinger Burger",
    category: "burgers",
    price: 380,
    priceDisplay: "Rs. 380",
    desc: "Crispy fried golden chicken fillet topped with spicy mayo...",
    image: "images/burgers.jpg",
    badge: "Bestseller"
  },
  // Add new items or edit prices here!
];
```

To edit an item:
- Change `name` to rename the dish.
- Change `price` (number) and `priceDisplay` (text).
- Change `category` to filter it under `burgers`, `bbq`, `pizza`, `rolls`, `sandwiches`, or `fastfood`.

---

## 5. How to Connect the WhatsApp Order Button

1. Open `script.js` (or `page-nagori-marvi.php` / `index.html`).
2. Search for the restaurant's phone number configuration:
   ```javascript
   const RESTAURANT_CONFIG = {
     name: "Nagori Marvi Fast Foods",
     whatsappNumber: "923112551108", // Format: Country code (92) without '+' or leading '0'
     phones: ["0311-2551108", "0330-1351108"],
     address: "Plot No. N-164, Shah Latif Town, Sector 17-A, Near Mangal Bazar, Karachi, Pakistan"
   };
   ```
3. Replace `"923112551108"` with your actual business WhatsApp number.
4. When a user clicks **"Send Order to WhatsApp"**, it automatically formats the cart with item names, quantities, individual prices, total amount, and delivery address.

---

## 6. Delivery Contact Details (Karachi)

- **Official Name**: Nagori Marvi Fast Foods
- **Address**: Plot No. N-164, Shah Latif Town, Sector 17-A, Near Mangal Bazar, Karachi, Pakistan
- **Home Delivery Hotlines**: 0311-2551108 / 0330-1351108
