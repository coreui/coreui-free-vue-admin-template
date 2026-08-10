# CoreUI Free Vue Admin Template - Architecture

This document provides a comprehensive overview of the CoreUI Free Vue Admin Template architecture, design patterns, and technical implementation details.

## Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Architectural Pattern](#architectural-pattern)
- [Directory Structure](#directory-structure)
- [Core Components](#core-components)
- [Routing System](#routing-system)
- [State Management](#state-management)
- [Styling Architecture](#styling-architecture)
- [Build System](#build-system)
- [Performance Optimizations](#performance-optimizations)
- [Browser Support](#browser-support)

## Project Overview

The CoreUI Free Vue Admin Template is a professional admin dashboard built on Vue 3, CoreUI Vue components, and Bootstrap 5. It follows modern Vue patterns with Composition API, script setup syntax, and a component-based architecture.

**Key Features**:
- Single Page Application (SPA) with client-side routing
- Responsive design with Bootstrap 5 grid system
- Dark/Light theme support with automatic detection
- Lazy loading and code splitting for optimal performance
- Pinia-based state management
- Modular and extensible component architecture

## Technology Stack

### Frontend Core

| Technology | Version | Purpose |
|------------|---------|---------|
| Vue | 3.5.31 | Progressive framework for building user interfaces |
| Vue Router | 5.0.4 | Official router for Vue.js |
| Pinia | 3.0.4 | Official state management library for Vue |

### UI Framework

| Library | Version | Purpose |
|---------|---------|---------|
| @coreui/coreui | 5.6.1 | CoreUI CSS framework based on Bootstrap 5 |
| @coreui/vue | 5.8.0 | CoreUI Vue components |
| @coreui/icons | 3.0.1 | CoreUI icon set |
| @coreui/icons-vue | 2.2.0 | CoreUI icons as Vue components |
| @coreui/utils | 2.0.2 | Utility functions for CoreUI |
| simplebar-vue | 2.4.2 | Custom scrollbar component |

### Data Visualization

| Library | Version | Purpose |
|---------|---------|---------|
| Chart.js | 4.5.1 | HTML5 charting library |
| @coreui/chartjs | 4.2.0 | CoreUI Chart.js themes and defaults |
| @coreui/vue-chartjs | 3.0.0 | Vue wrapper for Chart.js with CoreUI styling |

### Build Tools & Development

| Tool | Version | Purpose |
|------|---------|---------|
| Vite | 8.0.3 | Fast build tool and dev server with HMR |
| @vitejs/plugin-vue | 6.0.5 | Vite plugin for Vue 3 |
| Sass | 1.98.0 | CSS preprocessor for styling |
| PostCSS | 8.5.8 | CSS transformation with autoprefixer |
| Autoprefixer | 10.4.27 | Automatic vendor prefixing |
| ESLint | 9.39.4 | JavaScript linting and code quality |
| eslint-plugin-vue | 10.8.0 | Vue-specific ESLint rules |

### Utilities

| Library | Version | Purpose |
|---------|---------|---------|
| @popperjs/core | 2.11.8 | Tooltip and popover positioning |

## Architectural Pattern

### Component-Based Architecture

The application follows a **Composition API architecture** with script setup syntax:

```
┌──────────────────────────────────────────┐
│         Application (App.vue)            │
│  - Router View                           │
│  - Theme Management                      │
│  - Route Configuration                   │
└──────────────────────────────────────────┘
                    ↓
    ┌───────────────┴────────────────┐
    │                                │
┌───▼────┐                  ┌────────▼───────┐
│ Public │                  │   Protected    │
│ Routes │                  │     Routes     │
│        │                  │(DefaultLayout) │
│ Login  │                  └───────┬────────┘
│Register│                          │
│ 404    │              ┌───────────┼────────────┐
│ 500    │              │           │            │
└────────┘         ┌────▼────┐ ┌────▼─────┐ ┌────▼─────┐
                   │AppHeader│ │AppSidebar│ │AppContent│
                   └─────────┘ └──────────┘ └────┬─────┘
                                                 │
                                         ┌───────▼─────────┐
                                         │ View Components │
                                         │ (Dashboard,     │
                                         │  Forms, etc.)   │
                                         └─────────────────┘
```

### Single Page Application (SPA) Pattern

The template uses client-side routing with createWebHashHistory:
1. **Initial Load**: HTML shell loads, Vue initializes
2. **Route Matching**: Vue Router matches URL to component
3. **Lazy Loading**: Component bundles load on-demand
4. **Rendering**: Component renders with layout wrapper
5. **Navigation**: Client-side transitions without page reload

### State Management Pattern

Pinia manages global application state:

```javascript
Store (stores/)
  ├── sidebarVisible (boolean)
  ├── sidebarUnfoldable (boolean)
  └── theme (string: light/dark/auto)
```

Component-level state uses Vue's Composition API (ref, reactive).

## Directory Structure

```
coreui-free-vue-admin-template/
│
├── public/                      # Static assets (served as-is)
│   ├── favicon.ico
│   └── robots.txt
│
├── src/                         # Source code
│   │
│   ├── assets/                  # Application assets
│   │   ├── brand/               # Logo components (logo.js, sygnet.js, …)
│   │   ├── icons/                # Local icon set (eye.js, index.js)
│   │   └── images/               # Image files (avatars, screenshots, …)
│   │
│   ├── components/              # Reusable UI components
│   │   ├── AppBreadcrumb.vue      # Breadcrumb navigation
│   │   ├── AppFooter.vue          # Footer component
│   │   ├── AppHeader.vue          # Header component
│   │   ├── AppHeaderDropdownAccnt.vue # User dropdown menu
│   │   ├── AppSidebar.vue         # Sidebar navigation
│   │   ├── AppSidebarNav.js       # Sidebar nav renderer (reads _nav.js)
│   │   ├── DocsComponents.vue     # Documentation component showcase
│   │   ├── DocsExample.vue        # Code example wrapper
│   │   └── DocsIcons.vue          # Icon example wrapper
│   │
│   ├── layouts/                 # Layout wrapper components
│   │   └── DefaultLayout.vue      # Main application layout
│   │
│   ├── views/                   # Page/view components
│   │   ├── dashboard/            # Dashboard pages
│   │   │   ├── Dashboard.vue
│   │   │   ├── DashboardBrand.vue
│   │   │   └── MainChart.vue
│   │   ├── components/           # Component demo pages (flat, alphabetized)
│   │   │   ├── Accordion.vue
│   │   │   ├── Alerts.vue
│   │   │   ├── Badge.vue
│   │   │   ├── Breadcrumb.vue
│   │   │   ├── ButtonGroup.vue
│   │   │   ├── Buttons.vue
│   │   │   ├── Cards.vue
│   │   │   ├── Carousel.vue
│   │   │   ├── Chip.vue
│   │   │   ├── ChipSet.vue
│   │   │   ├── Collapse.vue
│   │   │   ├── Dropdowns.vue
│   │   │   ├── ListGroup.vue
│   │   │   ├── Modals.vue
│   │   │   ├── NavsTabs.vue
│   │   │   ├── Pagination.vue
│   │   │   ├── Placeholders.vue
│   │   │   ├── Popovers.vue
│   │   │   ├── Progress.vue
│   │   │   ├── SearchButton.vue
│   │   │   ├── Spinners.vue
│   │   │   ├── Tables.vue
│   │   │   ├── Tabs.vue
│   │   │   ├── Toasts.vue
│   │   │   └── Tooltips.vue
│   │   ├── forms/                # Form examples
│   │   │   ├── ChecksRadios.vue
│   │   │   ├── ChipInput.vue
│   │   │   ├── FloatingLabels.vue
│   │   │   ├── FormControl.vue
│   │   │   ├── InputGroup.vue
│   │   │   ├── Layout.vue
│   │   │   ├── Range.vue
│   │   │   ├── Select.vue
│   │   │   └── Validation.vue
│   │   ├── charts/               # Chart examples (Charts.vue + CChart*Example.vue)
│   │   ├── icons/                # Icon examples (CoreUIIcons, Brands, Flags)
│   │   ├── widgets/               # Widget examples
│   │   ├── authentication/       # Login, Register, password-reset flow
│   │   │   ├── Login.vue
│   │   │   ├── Register.vue
│   │   │   ├── CheckEmail.vue
│   │   │   ├── ResetPassword.vue
│   │   │   ├── ChangePassword.vue
│   │   │   └── PasswordChanged.vue
│   │   ├── error-pages/          # Error pages
│   │   │   ├── Page404.vue
│   │   │   └── Page500.vue
│   │   └── theme/                # ColorTheme.vue — orphaned: still on disk after the
│   │                             # nav/IA reorg, no route or nav entry links to it
│   │
│   ├── router/                   # Router configuration
│   │   └── index.js               # Route definitions
│   │
│   ├── stores/                   # Pinia stores
│   │   ├── sidebar.js             # Sidebar visible/unfoldable state
│   │   └── theme.js               # Color mode (light/dark/auto) state
│   │
│   ├── styles/                   # Global stylesheets
│   │   ├── style.scss             # Main stylesheet (imports CoreUI)
│   │   ├── examples.scss           # Docs example styling
│   │   └── vendors/
│   │       └── simplebar.scss     # Simplebar overrides
│   │
│   ├── App.vue                   # Root application component
│   ├── main.js                   # Application entry point
│   └── _nav.js                   # Sidebar navigation configuration
│
├── node_modules/                # Dependencies
├── index.html                   # HTML entry point
├── vite.config.mjs              # Vite build configuration
├── eslint.config.mjs            # ESLint configuration
├── package.json                 # Project metadata and dependencies
├── .browserslistrc              # Browser compatibility targets
├── .editorconfig                # Editor configuration
└── README.md                    # Project documentation
```

## Core Components

### Application Component (App.vue)

The root component that:
- Sets up router-view for component rendering
- Manages theme initialization
- Provides the application shell

**Key Features**:
- Theme detection and persistence
- Suspense boundaries for lazy-loaded routes
- Global error handling boundaries

### Layout System

#### DefaultLayout (layouts/DefaultLayout.vue)

The main application layout wrapper that composes:
- **AppSidebar**: Collapsible navigation sidebar
- **AppHeader**: Top navigation bar with breadcrumbs and user menu
- **AppContent**: Main content area with routing
- **AppFooter**: Footer with version and links

**Responsibility**: Provides consistent layout structure for authenticated views.

#### Navigation Components

**AppSidebar** (`components/AppSidebar.vue`):
- Renders collapsible sidebar
- Uses Pinia for show/hide state
- Integrates with _nav.js for menu structure
- Includes branding section

**AppHeader** (`components/AppHeader.vue`):
- Fixed top navigation bar
- Sidebar toggle button
- Breadcrumb navigation
- User dropdown menu
- Theme switcher

### View Components

View components are page-level components that:
- Render specific application features (Dashboard, Forms, Charts)
- Use CoreUI Vue components for UI
- Connect to Pinia when needed for global state
- Implement business logic and data fetching

**Example Structure**:
```vue
<template>
  <CCard>
    <CCardBody>
      {{ data }}
    </CCardBody>
  </CCard>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const data = ref([])

onMounted(() => {
  // Fetch dashboard data
})
</script>
```

## Routing System

### Vue Router v5

The application uses Vue Router for declarative routing:

**Configuration** (`router/index.js`):
```javascript
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/Dashboard.vue'),
      },
    ],
  },
  {
    path: '/error-pages',
    redirect: '/error-pages/404',
    name: 'Error pages',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    children: [
      {
        path: '404',
        name: 'Page404',
        component: () => import('@/views/error-pages/Page404.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
```

### Lazy Loading & Code Splitting

All routes use dynamic imports for lazy loading:

```javascript
component: () => import('./views/dashboard/Dashboard.vue')
```

**Benefits**:
- Smaller initial bundle size
- Faster first page load
- Components load only when navigated to
- Automatic code splitting by Vite

### Navigation Configuration

Navigation structure defined in `_nav.js`:

```javascript
export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: 'CNavGroup',
    name: 'Components',
    to: '/components',
    icon: 'cil-puzzle',
    items: [
      {
        component: 'CNavItem',
        name: 'Accordion',
        to: '/components/accordion',
      },
    ],
  },
]
```

## State Management

### Pinia Store Architecture

Pinia uses the Composition API pattern:

**Store Example** (`stores/main.js`):

```javascript
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('main', () => {
  const sidebarVisible = ref(true)
  const sidebarUnfoldable = ref(false)
  const theme = ref('light')

  function toggleSidebar() {
    sidebarVisible.value = !sidebarVisible.value
  }

  function setSidebarUnfoldable(value) {
    sidebarUnfoldable.value = value
  }

  function setTheme(value) {
    theme.value = value
  }

  return {
    sidebarVisible,
    sidebarUnfoldable,
    theme,
    toggleSidebar,
    setSidebarUnfoldable,
    setTheme,
  }
})
```

### State Usage in Components

**Reading State**:
```vue
<script setup>
import { useStore } from '@/stores/main'

const store = useStore()
// Access: store.sidebarVisible
</script>
```

**Updating State**:
```vue
<script setup>
import { useStore } from '@/stores/main'

const store = useStore()

const toggleSidebar = () => {
  store.toggleSidebar()
}
</script>
```

## Styling Architecture

### Sass/SCSS Structure

**Main Stylesheet** (`src/styles/style.scss`):
```scss
@use "@coreui/coreui/scss/coreui" as * with (
  $enable-deprecation-messages: false
);
@use "@coreui/chartjs/scss/coreui-chartjs";
@use "vendors/simplebar";

// Layout overrides (wrapper padding, sidebar header height, …)
body {
  background-color: var(--cui-tertiary-bg);
}
```

Bootstrap/CoreUI variable overrides go through the `@use … with (…)` config map above, not a separate `_custom.scss` partial — there isn't one in this template.

### CSS Custom Properties (CSS Variables)

CoreUI uses CSS custom properties for theming:

```css
:root {
  --cui-primary: #321fdb;
  --cui-secondary: #ced2d8;
  --cui-body-bg: #ebedef;
  --cui-body-color: #4f5d73;
}

[data-coreui-theme="dark"] {
  --cui-body-bg: #2b3035;
  --cui-body-color: #b4bac0;
}
```

**Usage in Components**:
```vue
<template>
  <div :style="{ backgroundColor: 'var(--cui-primary)' }">Content</div>
</template>
```

### Component Styling

**Scoped Styles**:
```vue
<style scoped>
.my-component {
  padding: 1rem;
  background-color: var(--cui-light);
}
</style>
```

**Class Bindings**:
```vue
<template>
  <button :class="['btn', { 'btn-primary': isPrimary, 'active': isActive }]">
    Click
  </button>
</template>
```

**Bootstrap Utilities**:
```vue
<template>
  <CCard class="mb-4 shadow-sm">
    <CCardBody class="p-4 d-flex justify-content-between">
    </CCardBody>
  </CCard>
</template>
```

## Build System

### Vite Configuration

**File**: `vite.config.mjs`

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import autoprefixer from 'autoprefixer'

export default defineConfig(() => {
  return {
    plugins: [vue()],
    base: './',
    css: {
      postcss: {
        plugins: [
          autoprefixer({}), // add options if needed
        ],
      },
    },
    resolve: {
      alias: [
        // webpack path resolve to vitejs
        {
          find: /^~(.*)$/,
          replacement: '$1',
        },
        {
          find: '@/',
          replacement: `${path.resolve(__dirname, 'src')}/`,
        },
        {
          find: '@',
          replacement: path.resolve(__dirname, '/src'),
        },
      ],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.scss'],
    },
    server: {
      port: 3000,
      proxy: {
        // https://vitejs.dev/config/server-options.html
      },
    },
  }
})
```

### Build Process

**Development Build**:
1. Vite starts dev server on port 3000
2. esbuild compiles Vue SFC components
3. PostCSS processes Sass/SCSS with autoprefixer
4. Hot Module Replacement (HMR) for instant updates

**Production Build**:
1. `vite build` command
2. Code minification and tree-shaking
3. Asset optimization (images, fonts)
4. CSS extraction and minification
5. Source maps generation
6. Output to `dist/` directory

**Build Output**:
```
dist/
├── assets/
│   ├── index-[hash].js      # Main bundle
│   ├── [component]-[hash].js # Lazy-loaded chunks
│   └── index-[hash].css     # Extracted CSS
├── index.html               # HTML entry
└── favicon.ico              # Static assets
```

### Code Splitting Strategy

**Automatic Splitting**:
- Each lazy-loaded route becomes a separate chunk
- Vendor libraries (Vue, CoreUI) in separate vendor chunk
- Dynamic imports create split points

**Manual Splitting** (if needed):
```javascript
const HeavyComponent = () => import(/* webpackChunkName: "heavy" */ './HeavyComponent.vue')
```

## Performance Optimizations

### Implemented Optimizations

1. **Lazy Loading**: All routes lazy-loaded with dynamic imports
2. **Code Splitting**: Separate bundles per route
3. **Tree Shaking**: Unused code eliminated by Vite
4. **Asset Optimization**: Images and fonts optimized
5. **CSS Extraction**: Separate CSS bundle for caching
6. **Hash-based Caching**: File names include content hash

### Component Optimization

**v-memo** for expensive renders:
```vue
<template>
  <div v-memo="[valueA, valueB]">
    <!-- Heavy rendering -->
  </div>
</template>
```

**computed** for derived values:
```vue
<script setup>
import { computed } from 'vue'

const sortedData = computed(() => {
  return data.value.sort((a, b) => a.value - b.value)
})
</script>
```

### Bundle Size Management

**Strategies**:
- Use named imports: `import { CButton } from '@coreui/vue'`
- Avoid importing entire libraries
- Check bundle size with `npm run build`
- Use Vite's rollup visualizer for analysis

## Browser Support

### Target Browsers

Defined in `.browserslistrc`:
```
> 0.5%
last 2 versions
Firefox ESR
not dead
not IE 11
```

### Polyfills

Modern browsers support Vue 3 natively. No additional polyfills needed for ES6+ features.

### Progressive Enhancement

- Modern features with fallbacks
- CSS Grid with flexbox fallback
- Modern color modes with theme classes

## Security Considerations

### Best Practices

1. **Content Security Policy**: Configure CSP headers
2. **XSS Prevention**: Vue escapes content by default
3. **Dependency Auditing**: Run `npm audit` regularly
4. **Environment Variables**: Use `.env` files (not committed)
5. **HTTPS**: Serve over HTTPS in production

### Vue Security

- Avoid `v-html` unless necessary and sanitize content
- Validate user input before rendering
- Use prop validation for type safety
- Keep dependencies updated

## Deployment

### Static Hosting

The application builds to static files suitable for:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any static file server

### Build for Production

```bash
npm run build
```

Output in `dist/` directory ready for deployment.

### HashRouter for Static Hosts

Uses createWebHashHistory for GitHub Pages compatibility:
- URLs: `https://example.com/#/dashboard`
- No server-side routing configuration needed
- Works with any static host

---

This architecture provides a solid foundation for building modern, performant admin dashboards with Vue 3 and CoreUI. The modular structure allows for easy extension and customization while maintaining code quality and best practices.
