# Image Optimization Guide

This guide documents the image optimization changes made to improve website loading performance.

## Changes Made

### 1. Profile Photo Optimization
- **Original**: `jisnoo.png` (2.2 MB PNG)
- **Optimized**: `jisnoo.webp` (29 KB WebP)
- **Size Reduction**: 99% (from 2.2 MB to 29 KB)
- **Impact**: Significantly faster initial page load as this image is shown immediately

### 2. Project Image Optimization
- **Original**: `collage_teaser.png` (1.8 MB PNG)
- **Optimized**: `collage_teaser.webp` (210 KB WebP)
- **Size Reduction**: 88% (from 1.8 MB to 210 KB)
- **Impact**: Faster loading of Projects section

### 3. Gallery Thumbnails Optimization
Optimized the first 6 gallery thumbnails shown on initial page load:
- `jisnoo_rkmrc_logo_thumb`: 518 KB → 41 KB (92% reduction)
- `jisnoo_rkmrc_thumb`: 1.8 MB → 25 KB (99% reduction)
- `chrysanthemum_bee_pink_thumb`: 1.5 MB → 36 KB (98% reduction)
- `chrysanthemum_pink_thumb`: 836 KB → 38 KB (95% reduction)
- `chrysanthemum_red_thumb`: 3.8 MB → 30 KB (99% reduction)
- `chrysanthemum_white_thumb`: 1.8 MB → 21 KB (99% reduction)

**Total Savings for Trivia Section**: ~9.2 MB → 191 KB (98% reduction)

### 4. Code Optimizations
- Added preload hint for critical profile photo
- Implemented picture element with WebP fallback for browser compatibility
- Ensured lazy loading is properly configured for below-the-fold images

## Total Impact

**Initial Page Load Size Reduction**:
- Before: ~13.2 MB of images loaded on initial page view
- After: ~450 KB of images loaded on initial page view
- **Total Reduction**: ~96.6% (12.75 MB saved)

## Recommendations for Future Images

### 1. Always Use WebP Format
- Use `cwebp` command-line tool to convert images
- Command template: `cwebp -q 85 [input.png] -o [output.webp]`
- Quality 85 provides excellent visual quality with great compression

### 2. Optimize Image Dimensions
- Profile photos: 500x500 pixels maximum
- Thumbnails: 400x400 pixels maximum
- Project images: 1200x800 pixels maximum
- Gallery full images: 2000 pixels on longest edge maximum

### 3. Thumbnail Optimization
For thumbnails that appear on initial page load:
```bash
cwebp -q 80 -resize 400 400 [input] -o [output.webp]
```

For profile photos:
```bash
cwebp -q 90 -resize 500 500 [input] -o [output.webp]
```

### 4. Always Use Lazy Loading
Images below the fold should have `loading="lazy"` attribute:
```jsx
<img src={image} alt="description" loading="lazy" />
```

Images above the fold (like hero section) should use `loading="eager"`:
```jsx
<img src={image} alt="description" loading="eager" />
```

### 5. Provide Fallbacks
Use picture element for critical images to ensure browser compatibility:
```jsx
<picture>
  <source srcSet="/image.webp" type="image/webp" />
  <img src="/image.png" alt="description" />
</picture>
```

## Tools Used

- **cwebp**: WebP encoder (part of the `webp` package)
- **ImageMagick**: For image processing (optional)

## Browser Support

WebP is supported by all modern browsers:
- Chrome 23+
- Firefox 65+
- Safari 14+
- Edge 18+

The picture element provides automatic fallback for older browsers.
