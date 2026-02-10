# Navbar Color Documentation

## Brand Text Color ("Jisnoo")

The "Jisnoo" brand text beside the home icon in the navbar uses the color:

**#FBF437**

This is a bright yellow color that remains consistent across:
- Default state (`.nav-brand`)
- Hover state (`.nav-brand:hover`)
- Active/current page state (`.nav-brand[aria-current="page"]`)

## Navigation Links

Navigation links (Teaching & Resources, Blogs, Gallery) use:
- Default: `#FFFFFF` (white)
- Hover: `#FFC904` (golden yellow)
- Active/current page: Uses `var(--secondary-color)`

## Location in Code

Brand color is defined in `style.css`:
- Line 157: `.nav-brand { color: #FBF437; }`
- Line 173: `.nav-brand:hover { color: #FBF437; }`
- Line 153: `.nav-brand[aria-current="page"] { color: #FBF437; }`
