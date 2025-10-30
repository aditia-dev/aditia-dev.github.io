# Testing Guide

## Lighthouse Testing

To verify the portfolio meets performance standards, follow these steps:

### Local Testing

1. Build the project:
```bash
npm run build
```

2. Start the preview server:
```bash
npm run preview
```

3. Open Chrome/Chromium browser and navigate to `http://localhost:4173`

4. Open Chrome DevTools (F12 or right-click > Inspect)

5. Click on the "Lighthouse" tab

6. Configure the audit:
   - Mode: Navigation
   - Categories: Select all (Performance, Accessibility, Best Practices, SEO)
   - Device: Desktop or Mobile

7. Click "Analyze page load"

### Expected Scores

The portfolio is optimized to achieve:
- **Performance**: >90
- **Accessibility**: >90
- **Best Practices**: >90
- **SEO**: >90

### Common Issues and Fixes

#### Performance
- Ensure all images use lazy loading
- Check that CSS and JS are minified
- Verify no unused CSS/JS in the bundle

#### Accessibility
- All interactive elements should have focus states
- Images must have alt text
- Color contrast ratios should meet WCAG standards
- Proper heading hierarchy (h1 → h2 → h3)

#### Best Practices
- HTTPS should be used in production
- No console errors or warnings
- Images should have correct aspect ratios

#### SEO
- Meta description should be present and descriptive
- Title should be unique and descriptive
- Canonical URL should be set
- Structured data should be valid

## Responsive Testing

Test the portfolio on different screen sizes:

1. **Desktop**: 1920x1080, 1440x900
2. **Tablet**: 768x1024
3. **Mobile**: 375x667, 414x896

### Chrome DevTools Device Emulation

1. Open DevTools (F12)
2. Click the device toolbar icon (or Ctrl+Shift+M)
3. Select different devices from the dropdown
4. Test all interactive features

### What to Check

- Navigation menu is accessible and usable
- All sections stack properly on mobile
- Text remains readable at all sizes
- Buttons and links are easy to tap on mobile
- Images scale appropriately
- No horizontal scrolling

## Accessibility Testing

### Keyboard Navigation

1. Use Tab key to navigate through all interactive elements
2. Verify all elements show visible focus indicators
3. Check that Skip links work (if implemented)
4. Ensure Enter/Space activate buttons and links
5. Verify escape key closes any modals/menus

### Screen Reader Testing

Test with a screen reader (NVDA on Windows, VoiceOver on Mac):

1. Navigate through all sections
2. Verify all images have meaningful alt text
3. Check that ARIA labels are announced correctly
4. Ensure heading hierarchy makes sense
5. Verify form elements (if any) are properly labeled

### Color Contrast

Use the Chrome DevTools accessibility checker:

1. Open DevTools
2. Go to "Lighthouse" tab
3. Run accessibility audit
4. Check for any color contrast issues

Or use online tools:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Contrast Ratio](https://contrast-ratio.com/)

## Cross-Browser Testing

Test the portfolio in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### What to Check

- CSS Grid and Flexbox layouts work correctly
- Animations and transitions are smooth
- Fonts load and display properly
- SVG icons render correctly
- JavaScript functionality works as expected

## Performance Testing

### Network Throttling

1. Open DevTools > Network tab
2. Select "Fast 3G" or "Slow 3G" from the throttling dropdown
3. Reload the page
4. Verify acceptable load times and no blocking resources

### Bundle Size

Check the build output:
```bash
npm run build
```

Expected sizes:
- Total build: <100KB
- CSS: <15KB
- JS: <15KB
- HTML: <15KB

### Loading Performance

Verify:
- First Contentful Paint (FCP) < 1.8s
- Largest Contentful Paint (LCP) < 2.5s
- Time to Interactive (TTI) < 3.8s
- Total Blocking Time (TBT) < 200ms
- Cumulative Layout Shift (CLS) < 0.1

## SEO Validation

### Meta Tags

Verify these are present:
- Title tag (unique, descriptive, <60 characters)
- Meta description (<160 characters)
- Meta keywords
- Author
- Theme color
- Open Graph tags (for social media)
- Twitter Card tags
- Canonical URL

### Structured Data

Validate JSON-LD using:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

### Robots and Sitemap

For production:
- Add robots.txt
- Generate sitemap.xml
- Submit to Google Search Console

## Automated Testing

Consider adding these tools for continuous testing:

### Performance
```bash
npm install -g lighthouse
lighthouse http://localhost:4173 --view
```

### Accessibility
```bash
npm install -g pa11y
pa11y http://localhost:4173
```

### HTML Validation
- [W3C Markup Validation Service](https://validator.w3.org/)

### CSS Validation
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)

## Deployment Testing

After deploying to GitHub Pages or other hosting:

1. Test the live URL
2. Verify all assets load correctly (check browser console)
3. Test all links and navigation
4. Run Lighthouse audit on live site
5. Check mobile responsiveness on real devices
6. Verify social media previews (share on Twitter/Facebook)

## Monitoring

For production, consider:
- Google Analytics for traffic
- Google Search Console for SEO
- Sentry or LogRocket for error tracking
- Core Web Vitals monitoring
