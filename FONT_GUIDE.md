# Font Style Implementation Guide

This guide explains how to change the font style on your website after reviewing the samples.

## Quick Reference

**Current Font:** Garamond  
**Location:** `style.css` line 70

## Viewing the Samples

1. **Complete Gallery (16 fonts):** Open `font-samples.html` in your browser
2. **Top Picks (6 fonts):** Open `individual-font-showcase.html` in your browser

## How to Change the Font

### Step 1: Choose Your Font
Review the sample pages and decide which font you prefer.

### Step 2: Update style.css

Open `style.css` and find line 70 (in the `body` selector):

```css
body {
    font-family: Garamond, Baskerville, 'Baskerville Old Face', 'Hoefler Text', 'Times New Roman', serif;
    ...
}
```

### Step 3: Replace with Your Choice

#### For Serif Fonts (Traditional/Elegant):

**Georgia:**
```css
font-family: Georgia, 'Times New Roman', serif;
```

**Palatino:**
```css
font-family: Palatino, 'Palatino Linotype', 'Book Antiqua', serif;
```

**Times New Roman:**
```css
font-family: 'Times New Roman', Times, serif;
```

**Playfair Display** (requires Google Fonts):
```css
/* Add this in the <head> section of index.html */
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">

/* Then use in style.css */
font-family: 'Playfair Display', Georgia, serif;
```

**Merriweather** (requires Google Fonts):
```css
/* Add this in the <head> section of index.html */
<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap" rel="stylesheet">

/* Then use in style.css */
font-family: 'Merriweather', Georgia, serif;
```

**Cormorant Garamond** (requires Google Fonts):
```css
/* Add this in the <head> section of index.html */
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap" rel="stylesheet">

/* Then use in style.css */
font-family: 'Cormorant Garamond', Garamond, serif;
```

#### For Sans-Serif Fonts (Modern/Clean):

**Helvetica:**
```css
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

**Arial:**
```css
font-family: Arial, Helvetica, sans-serif;
```

**Verdana:**
```css
font-family: Verdana, Geneva, sans-serif;
```

**Trebuchet MS:**
```css
font-family: 'Trebuchet MS', Helvetica, sans-serif;
```

**Roboto** (requires Google Fonts):
```css
/* Add this in the <head> section of index.html */
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

/* Then use in style.css */
font-family: 'Roboto', 'Segoe UI', Arial, sans-serif;
```

**Open Sans** (requires Google Fonts):
```css
/* Add this in the <head> section of index.html */
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">

/* Then use in style.css */
font-family: 'Open Sans', Arial, sans-serif;
```

**Lato** (requires Google Fonts):
```css
/* Add this in the <head> section of index.html */
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">

/* Then use in style.css */
font-family: 'Lato', Arial, sans-serif;
```

**Montserrat** (requires Google Fonts):
```css
/* Add this in the <head> section of index.html */
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">

/* Then use in style.css */
font-family: 'Montserrat', Arial, sans-serif;
```

**Raleway** (requires Google Fonts):
```css
/* Add this in the <head> section of index.html */
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet">

/* Then use in style.css */
font-family: 'Raleway', Arial, sans-serif;
```

## System Fonts vs Google Fonts

**System Fonts** (no extra setup needed):
- Garamond, Georgia, Palatino, Times New Roman
- Helvetica, Arial, Verdana, Trebuchet MS

**Google Fonts** (requires adding link in HTML):
- Playfair Display, Merriweather, Cormorant Garamond
- Roboto, Open Sans, Lato, Montserrat, Raleway

### Adding Google Fonts

If you choose a Google Font, add the link in `index.html` (and other HTML files) in the `<head>` section, before the `style.css` link:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jisnoo</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Add Google Font here -->
    <link href="https://fonts.googleapis.com/css2?family=YOUR-FONT-HERE&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="style.css">
    ...
</head>
```

## Font Selection Tips

### Choose Serif If:
- You want a traditional, academic look
- Emphasizing professionalism and credibility
- Your content is formal or educational

### Choose Sans-Serif If:
- You prefer a modern, clean aesthetic
- Prioritizing readability on digital screens
- Your design is contemporary or minimalist

### Consider:
- **Readability** - How easy is it to read on different screen sizes?
- **Personality** - What impression does it give visitors?
- **Consistency** - Does it match your overall design?
- **Performance** - System fonts load faster than Google Fonts

## Recommended Combinations

If you want to keep the elegant feel of Garamond:
1. **Georgia** - Similar elegance, better web readability
2. **Merriweather** - Modern take on classic serif
3. **Cormorant Garamond** - Updated Garamond for screens

If you want to try something more modern:
1. **Roboto** - Professional and clean
2. **Montserrat** - Bold and contemporary
3. **Open Sans** - Friendly and approachable

## Applying to All Pages

The font change in `style.css` will automatically apply to all pages on your website:
- `index.html` (main page)
- `blogs.html`
- `gallery.html`
- `teaching.html`

Since all pages use the same `style.css` file, you only need to make the change once!

If you chose a Google Font, remember to add the font link to the `<head>` section of each HTML file:
- index.html
- blogs.html
- gallery.html
- teaching.html

## Need Help?

The sample pages (`font-samples.html` and `individual-font-showcase.html`) show exactly how "Jisnoo Dev Pal" will look in each font, helping you make an informed decision.

Once deployed, you can view the samples at:
- `https://jisnoo123.github.io/font-samples.html`
- `https://jisnoo123.github.io/individual-font-showcase.html`
