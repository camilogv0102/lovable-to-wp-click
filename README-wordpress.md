# Lovable to WordPress - Ready Build

This project is configured for seamless integration with WordPress via the "Lovable to WordPress" plugin.

## Routes Included

- `/` - Home/Landing page (Index)
- `/about` - About page
- `/services` - Services page
- `*` - Dynamic catch-all route (handled by WordPress)

## WordPress Integration

### Global Variables

The build reads the following WordPress global variables:

- `window.__FUSION_BASE_PATH__` - Base path for routing (e.g., "/my-app")
- `window.__FUSION_COMPONENT__` - Component name to render dynamically
- `window.__FUSION_ROUTE_PATH__` - Route path for resolution
- `window.__LTW_PAGE_DATA__` - Page data from WordPress (ACF fields, etc.)

### How It Works

1. WordPress sets the global variables before the React app initializes
2. The React app reads these variables in `main.tsx`
3. Routes are resolved either statically (explicit routes) or dynamically (via `ltw-wp-adapter.tsx`)
4. Page data is passed as props to components for dynamic content

## Building for WordPress

### Local Build

```bash
npm install
npm run build
```

This generates:
- `dist/index.html` - Main HTML file
- `dist/assets/` - JavaScript and CSS bundles
- `dist/manifest.json` - Build manifest

### Important Notes

- **Do NOT include `node_modules/`** in your ZIP upload
- All asset paths are relative (configured with `base: "./"` in Vite)
- The build is ready to deploy without modifications
- If you modify the source code, re-run `npm run build`

## Uploading to WordPress

1. Go to **WordPress Admin → Lovable To WP**
2. Click **"Import Lovable Project"**
3. Upload the ZIP file containing:
   - `/src` folder (source code)
   - `/dist` folder (built assets)
   - `/public` folder (static assets)
   - Configuration files (`vite.config.ts`, `package.json`, etc.)
4. The plugin will automatically integrate the build

## Dynamic Routing

The `ltw-wp-adapter.tsx` file handles dynamic component resolution:

- Resolves components by name (e.g., "About" → `About.tsx`)
- Resolves components by route path (e.g., "/about" → `About.tsx`)
- Passes `pageData` prop to all dynamically loaded components
- Falls back to 404 page if no match is found

## Route Map Reference

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Index | Landing page with hero, features, pricing |
| `/about` | About | About page with dynamic content |
| `/services` | Services | Services page with dynamic content |
| `*` | Dynamic | Resolved by WordPress via adapter |

## Build Configuration

Key Vite configuration for WordPress compatibility:

```typescript
{
  base: "./",              // Relative paths for assets
  build: {
    manifest: true,        // Generate manifest.json
    rollupOptions: {
      output: {
        manualChunks: undefined  // Single bundle for simplicity
      }
    }
  }
}
```

## Troubleshooting

- **Assets not loading**: Verify `base: "./"` in `vite.config.ts`
- **Routes not working**: Check that WordPress is setting `__FUSION_BASE_PATH__`
- **404 errors**: Ensure catch-all route is configured correctly
- **Data not appearing**: Verify `__LTW_PAGE_DATA__` is populated by WordPress

## Support

For issues or questions:
- Plugin documentation: [Lovable to WordPress Docs]
- Lovable support: https://lovable.dev
- WordPress forums: [WordPress Support]
