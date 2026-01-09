# Digital Game Store (PS5 & Xbox)

## Project Overview
This is a modern e-commerce platform for selling digital game keys for PlayStation and Xbox. The project uses React, Tailwind CSS, and Lucide icons.

## Core Requirements for AI:
1. **Multi-language Support:** - Use the pre-built structure in components to implement a full translation system (GE, EN, RU).
   - Ensure the Language Switcher in the `Navbar` controls the global state of the application.
2. **Database & Backend:** - Connect to **Supabase** to store game products, prices, and digital keys.
3. **Admin Dashboard:** - Create a secure `/admin` route.
   - Functionality: Add/Edit/Delete games, manage key inventory, and view orders.
4. **User Flow:** - Implement a functional shopping cart.
   - Add a checkout simulation.
5. **Styling:** - Maintain the "Gaming Dark Mode" aesthetic (Electric Violet & Neon Green) as defined in the provided components.

## File Structure:
- `/components/Navbar.tsx` - Navigation and Language switcher.
- `/components/HeroSection.tsx` - Main banner with localized text.
- `/components/ProductGrid.tsx` - Game listings and filters.