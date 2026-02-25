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

## Project Overview

The CoreUI Free Vue Admin Template is a professional admin dashboard built on Vue 3, CoreUI Vue components, and Bootstrap 5. It follows modern Vue patterns with Composition API, `<script setup>` syntax, and a component-based architecture.

**Key Features**:
- Single Page Application (SPA) with client-side routing
- Responsive design with Bootstrap 5 grid system
- Dark/Light theme support with automatic detection
- Lazy loading and code splitting for optimal performance
- Pinia-based state management
- Modular and extensible component architecture
- Composition API with `<script setup>` syntax

## Technology Stack

### Frontend Core

| Technology | Version | Purpose |
|------------|---------|---------|
| Vue | 3.5.26 | Progressive JavaScript framework for building UIs |
| Vue Router | 4.6.4 | Official router for Vue.js |
| Pinia | 3.0.4 | Intuitive state management for Vue |

### UI Framework

| Library | Version | Purpose |
|---------|---------|---------|
| @coreui/coreui | 5.5.0 | CoreUI CSS framework based on Bootstrap 5 |
| @coreui/vue | 5.7.0 | CoreUI Vue components |
| @coreui/icons | 3.0.1 | CoreUI icon set |
| @coreui/icons-vue | 2.2.0 | CoreUI icons as Vue components |
| @coreui/utils | 2.0.2 | Utility functions for CoreUI |
| simplebar-vue | 2.4.2 | Custom scrollbar component for Vue |

### Data Visualization

| Library | Version | Purpose |
|---------|---------|---------|
| Chart.js | 4.5.1 | HTML5 charting library |
| @coreui/chartjs | 4.1.0 | CoreUI Chart.js themes and defaults |
| @coreui/vue-chartjs | 3.0.0 | Vue wrapper for Chart.js with CoreUI styling |

### Build Tools & Development

| Tool | Version | Purpose |
|------|---------|---------|
| Vite | 7.3.0 | Fast build tool and dev server with HMR |
| @vitejs/plugin-vue | 6.0.3 | Official Vue plugin for Vite |
| Sass | 1.97.0 | CSS preprocessor for styling |
| PostCSS | 8.5.6 | CSS transformation with autoprefixer |
| Autoprefixer | 10.4.23 | Automatic vendor prefixing |
| ESLint | 9.39.2 | JavaScript linting and code quality |

## Architectural Pattern

### Component-Based Architecture

The application follows a **Composition API architecture** with `<script setup>`:

```
┌─────────────────────────────────────────┐
│        Application (App.vue)            │
│  - Router View                          │
│  - Theme Management                     │
└─────────────────────────────────────────┘
                    ↓
    ┌───────────────┴───────────────┐
    │                               │
┌───▼────┐                  ┌───────▼───────┐
│ Public │                  │   Protected   │
│ Routes │                  │    Routes     │
│        │                  │(DefaultLayout)│
│ Login  │                  └───────┬───────┘
│Register│                          │
│ 404    │              ┌───────────┼───────────┐
│ 500    │              │           │           │
└────────┘         ┌────▼────┐ ┌────▼─────┐ ┌───▼────┐
                   │AppHeader│ │AppSidebar│ │Content │
                   └─────────┘ └──────────┘ └───┬────┘
                                                 │
                                         ┌───────▼─────────┐
                                         │ View Components │
                                         │ (Dashboard,     │
                                         │  Forms, etc.)   │
                                         └─────────────────┘
```

### Single Page Application (SPA) Pattern

The template uses client-side routing with Vue Router:
1. **Initial Load**: HTML shell loads, Vue initializes
2. **Route Matching**: Vue Router matches URL to component
3. **Lazy Loading**: Component bundles load on-demand
4. **Rendering**: Component renders with layout wrapper
5. **Navigation**: Client-side transitions without page reload

### State Management Pattern

Pinia manages global application state with composition-style stores:

```javascript
Stores
  ├── sidebar (stores/sidebar.js)
  │   ├── visible (boolean)
  │   └── unfoldable (boolean)
  └── theme (stores/theme.js)
      └── theme (string: 'light'/'dark'/'auto')
```

Component-level state uses Composition API (ref, reactive, computed).

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
│   │   ├── brand/              # Logo components (logo.js, sygnet.js)
│   │   ├── icons/              # Icon set exports
│   │   └── images/             # Image files (avatars, etc.)
│   │
│   ├── components/              # Reusable Vue components
│   │   ├── AppBreadcrumb.vue   # Breadcrumb navigation
│   │   ├── AppFooter.vue       # Footer component
│   │   ├── AppHeader.vue       # Header component
│   │   ├── AppHeaderDropdownAccnt.vue  # User dropdown menu
│   │   ├── AppSidebar.vue      # Sidebar navigation
│   │   ├── AppSidebarNav.js    # Sidebar navigation renderer
│   │   ├── DocsComponents.vue  # Documentation component showcase
│   │   ├── DocsExample.vue     # Code example wrapper
│   │   └── DocsIcons.vue       # Icon showcase
│   │
│   ├── layouts/                 # Layout wrapper components
│   │   └── DefaultLayout.vue   # Main application layout
│   │
│   ├── router/                  # Vue Router configuration
│   │   └── index.js            # Route definitions and router setup
│   │
│   ├── stores/                  # Pinia stores
│   │   ├── sidebar.js          # Sidebar state management
│   │   └── theme.js            # Theme state management
│   │
│   ├── views/                   # Page/view components
│   │   ├── dashboard/          # Dashboard page
│   │   │   └── Dashboard.vue
│   │   ├── base/               # Base UI component examples
│   │   │   ├── Accordion.vue
│   │   │   ├── Cards.vue
│   │   │   └── ...
│   │   ├── buttons/            # Button examples
│   │   ├── charts/             # Chart examples
│   │   ├── forms/              # Form examples
│   │   ├── icons/              # Icon examples
│   │   ├── notifications/      # Notification examples
│   │   ├── widgets/            # Widget examples
│   │   └── pages/              # Special pages
│   │       ├── Login.vue
│   │       ├── Register.vue
│   │       ├── Page404.vue
│   │       └── Page500.vue
│   │
│   ├── styles/                  # Global stylesheets
│   │   ├── style.scss          # Main stylesheet (imports CoreUI)
│   │   ├── _custom.scss        # Custom style overrides
│   │   ├── examples.scss       # Documentation example styles
│   │   └── vendors/            # Third-party style overrides
│   │
│   ├── App.vue                  # Root application component
│   ├── main.js                  # Application entry point
│   └── _nav.js                  # Sidebar navigation configuration
│
├── index.html                   # HTML entry point
├── vite.config.mjs              # Vite build configuration
├── eslint.config.mjs            # ESLint configuration
├── package.json                 # Project metadata and dependencies
├── .prettierrc.js               # Prettier configuration
├── .browserslistrc              # Browser compatibility targets
└── README.md                    # Project documentation
```

## Core Components

### Application Component (App.vue)

The root component that:
- Renders `<router-view>` for route-based rendering
- Manages theme initialization and persistence
- Uses `<script setup>` with Composition API
- Imports global styles

**Key Features**:
- Theme detection from URL parameters
- Pinia integration for theme state
- CoreUI useColorModes hook

### Layout System

#### DefaultLayout (layouts/DefaultLayout.vue)

The main application layout wrapper that composes:
- **AppSidebar**: Collapsible navigation sidebar
- **AppHeader**: Top navigation bar with breadcrumbs and user menu
- **router-view**: Main content area with routing
- **AppFooter**: Footer with version and links

**Responsibility**: Provides consistent layout structure for authenticated views.

#### Navigation Components

**AppSidebar** (`components/AppSidebar.vue`):
- Renders collapsible sidebar using CoreUI CSidebar
- Integrates with Pinia for show/hide state
- Uses AppSidebarNav for menu rendering
- Includes branding section with logo

**AppSidebarNav** (`components/AppSidebarNav.js`):
- Functional component rendering navigation from _nav.js
- Supports nested menu items recursively
- Renders CoreUI nav components dynamically
- Handles active state based on current route

**AppHeader** (`components/AppHeader.vue`):
- Fixed top navigation bar using CoreUI CHeader
- Sidebar toggle button
- Breadcrumb navigation (AppBreadcrumb)
- User dropdown menu (AppHeaderDropdownAccnt)
- Theme switcher dropdown

### View Components

View components are page-level Vue components that:
- Render specific application features (Dashboard, Forms, Charts)
- Use CoreUI Vue components for UI
- Connect to Pinia stores when needed for global state
- Implement business logic and data fetching
- Use `<script setup>` syntax

## Routing System

### Vue Router 4

The application uses Vue Router 4 with createWebHashHistory:

**Configuration** (`router/index.js`):
```javascript
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      redirect: '/dashboard',
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: () => import('@/views/dashboard/Dashboard.vue'),
        },
        // ... more routes
      ],
    },
  ],
})
```

### Nested Routes

Routes are organized hierarchically:
- Root route (`/`) uses DefaultLayout
- Child routes render in `<router-view>` within layout
- Nested groups (base, forms) use intermediate router-view

### Lazy Loading & Code Splitting

All routes use dynamic imports:

```javascript
component: () => import('@/views/dashboard/Dashboard.vue')
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
  },
  {
    component: 'CNavGroup',
    name: 'Base',
    to: '/base',
    icon: 'cil-puzzle',
    items: [
      {
        component: 'CNavItem',
        name: 'Cards',
        to: '/base/cards',
      },
    ],
  },
]
```

## State Management

### Pinia Store Architecture

**Sidebar Store** (`stores/sidebar.js`):

```javascript
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {
  const visible = ref(true)
  const unfoldable = ref(false)

  const toggleSidebar = () => {
    visible.value = !visible.value
  }

  const toggleUnfoldable = () => {
    unfoldable.value = !unfoldable.value
  }

  return { visible, unfoldable, toggleSidebar, toggleUnfoldable }
})
```

**Theme Store** (`stores/theme.js`):

```javascript
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref('light')

  const setTheme = (newTheme) => {
    theme.value = newTheme
  }

  return { theme, setTheme }
})
```

### Store Usage in Components

```vue
<script setup>
import { useSidebarStore } from '@/stores/sidebar'

const sidebarStore = useSidebarStore()

// Read state
console.log(sidebarStore.visible)

// Update state
sidebarStore.toggleSidebar()
</script>
```

## Styling Architecture

### Sass/SCSS Structure

**Main Stylesheet** (`src/styles/style.scss`):
```scss
// Import CoreUI and Bootstrap
@import '@coreui/coreui/scss/coreui';

// Custom variables and overrides
@import 'custom';
```

**Custom Overrides** (`src/styles/_custom.scss`):
```scss
// Override CoreUI/Bootstrap variables
$primary: #321fdb;

// Custom styles
.my-custom-class {
  // styles
}
```

### Component Scoped Styles

```vue
<style scoped lang="scss">
.my-component {
  padding: 1rem;
  background-color: var(--cui-light);

  &__title {
    color: var(--cui-primary);
  }
}
</style>
```

### CSS Custom Properties

CoreUI uses CSS variables for theming:

```css
:root {
  --cui-primary: #321fdb;
  --cui-body-bg: #ebedef;
}

[data-coreui-theme="dark"] {
  --cui-body-bg: #2b3035;
}
```

## Build System

### Vite Configuration

**File**: `vite.config.mjs`

```javascript
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
      '@': path.resolve(__dirname, '/src'),
    },
  },
  server: {
    port: 3000,
  },
})
```

### Build Process

**Development**:
1. Vite starts dev server on port 3000
2. Vue components compile with SFC support
3. PostCSS processes Sass/SCSS with autoprefixer
4. Hot Module Replacement (HMR) for instant updates

**Production**:
1. `vite build` command
2. Code minification and tree-shaking
3. Asset optimization
4. CSS extraction and minification
5. Output to `dist/` directory

## Performance Optimizations

### Implemented Optimizations

1. **Lazy Loading**: All routes lazy-loaded with dynamic imports
2. **Code Splitting**: Separate bundles per route
3. **Tree Shaking**: Unused code eliminated by Vite
4. **Asset Optimization**: Images and fonts optimized
5. **CSS Extraction**: Separate CSS bundle for caching

### Vue 3 Performance

- Reactivity with Proxy (faster than Vue 2)
- Composition API reduces overhead
- Fragment support (no wrapper divs needed)
- Teleport for better DOM management

---

This architecture provides a solid foundation for building modern, performant admin dashboards with Vue 3 and CoreUI. The modular structure allows for easy extension and customization while maintaining code quality and best practices.
