# CoreUI Free Vue Admin Template - Development Guide

A comprehensive guide for developers working with the CoreUI Free Vue Admin Template built with Vue 3, Composition API, and CoreUI Vue components.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Creating Components](#creating-components)
- [Adding New Pages](#adding-new-pages)
- [Working with Routes](#working-with-routes)
- [State Management with Pinia](#state-management-with-pinia)
- [Styling Components](#styling-components)
- [Code Quality](#code-quality)
- [Build and Deployment](#build-and-deployment)
- [Troubleshooting](#troubleshooting)
- [Best Practices](#best-practices)

## Prerequisites

### Required Software

- **Node.js**: Version 16 or higher (18+ recommended)
- **npm**: Version 7+ or **yarn**: Version 1.22+
- **Git**: For version control

### Recommended Tools

- **Visual Studio Code** with extensions:
  - Volar (Vue Language Features)
  - ESLint
  - Prettier
  - Auto Import
- **Vue DevTools** browser extension

### Knowledge Requirements

- JavaScript ES6+ features
- Vue 3 fundamentals (Composition API, `<script setup>`)
- HTML5 and CSS3
- Sass/SCSS basics

## Getting Started

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/coreui/coreui-free-vue-admin-template.git
cd coreui-free-vue-admin-template
```

2. **Install dependencies**:
```bash
npm install
# or
yarn install
```

3. **Start the development server**:
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser** to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## Project Structure

### Source Code Organization

**IMPORTANT**: Always edit source files in `src/`, never modify compiled files in `dist/`.

```
src/
├── assets/          # Static assets (images, logos, icons)
├── components/      # Reusable Vue components
├── layouts/         # Layout wrapper components
├── router/          # Vue Router configuration
├── stores/          # Pinia store modules
├── views/           # Page/route components
├── styles/          # Global styles and themes
├── App.vue          # Root component
├── main.js          # Application entry point
└── _nav.js          # Navigation menu configuration
```

## Development Workflow

### Daily Development Process

1. **Start development server**: `npm run dev`
2. **Make changes** to source files in `src/`
3. **View changes** instantly in browser (HMR)
4. **Check console** for errors or warnings
5. **Run linter** before committing: `npm run lint`
6. **Test in both themes** (light and dark)
7. **Commit changes** with conventional commit messages

### Hot Module Replacement (HMR)

Vite provides instant feedback:
- **Vue component changes**: Component updates without page reload
- **CSS/SCSS changes**: Style updates without reload
- **Configuration changes**: Require server restart

## Creating Components

### Component with `<script setup>` (Recommended)

```vue
<script setup>
import { ref, computed, onMounted } from 'vue'
import { CCard, CCardBody, CCardHeader } from '@coreui/vue'

/**
 * UserCard component displays user information in a card format
 * @component
 */

// Props
const props = defineProps({
  /** User's full name */
  name: {
    type: String,
    required: true,
  },
  /** User's email address */
  email: {
    type: String,
    required: true,
  },
  /** Optional avatar URL */
  avatar: {
    type: String,
    default: null,
  },
})

// Emits
const emit = defineEmits(['update', 'delete'])

// State
const isLoading = ref(false)
const userDetails = ref(null)

// Computed
const displayName = computed(() => props.name.toUpperCase())

// Lifecycle
onMounted(() => {
  console.log('UserCard mounted')
})

// Methods
const handleUpdate = () => {
  emit('update', { name: props.name, email: props.email })
}
</script>

<template>
  <CCard>
    <CCardHeader>{{ displayName }}</CCardHeader>
    <CCardBody>
      <img v-if="avatar" :src="avatar" :alt="name" />
      <p>{{ email }}</p>
      <button @click="handleUpdate">Update</button>
    </CCardBody>
  </CCard>
</template>

<style scoped lang="scss">
.card {
  margin-bottom: 1rem;
}
</style>
```

### Composables

Extract reusable logic into composables:

```javascript
// composables/useFetch.js
import { ref } from 'vue'

/**
 * Composable for fetching data from an API
 * @param {string} url - API endpoint URL
 * @returns {Object} { data, loading, error, fetchData }
 */
export function useFetch(url) {
  const data = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const fetchData = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await fetch(url)
      data.value = await response.json()
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { data, loading, error, fetchData }
}
```

**Usage**:
```vue
<script setup>
import { onMounted } from 'vue'
import { useFetch } from '@/composables/useFetch'

const { data, loading, error, fetchData } = useFetch('/api/users')

onMounted(() => {
  fetchData()
})
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <div v-else>{{ data }}</div>
</template>
```

## Adding New Pages

### Step-by-Step Process

**1. Create the page component** in `src/views/[feature]/`:

```vue
<!-- src/views/products/Products.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import { CCard, CCardBody, CCardHeader } from '@coreui/vue'

const products = ref([])

onMounted(() => {
  // Fetch products
})
</script>

<template>
  <CCard>
    <CCardHeader>
      <strong>Products</strong>
    </CCardHeader>
    <CCardBody>
      <!-- Your content here -->
    </CCardBody>
  </CCard>
</template>
```

**2. Add route to `src/router/index.js`**:

```javascript
{
  path: '/products',
  name: 'Products',
  component: () => import('@/views/products/Products.vue'),
}
```

**3. Add navigation item to `src/_nav.js`** (optional):

```javascript
{
  component: 'CNavItem',
  name: 'Products',
  to: '/products',
  icon: 'cil-basket',
}
```

**4. Test the page**:
- Navigate to `http://localhost:3000/#/products`
- Check that navigation highlights correctly
- Verify breadcrumb displays properly

## Working with Routes

### Route Configuration

Routes are defined hierarchically in `src/router/index.js`:

```javascript
const routes = [
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
      {
        path: '/products/:id',
        name: 'ProductDetail',
        component: () => import('@/views/products/ProductDetail.vue'),
      },
    ],
  },
]
```

### Programmatic Navigation

```vue
<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// Navigate to a route
const goToProducts = () => {
  router.push('/products')
}

// Navigate with params
const goToProduct = (id) => {
  router.push({ name: 'ProductDetail', params: { id } })
}

// Go back
const goBack = () => {
  router.go(-1)
}

// Access route params
console.log(route.params.id)
</script>
```

## State Management with Pinia

### Creating a Store

```javascript
// stores/products.js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
  // State
  const products = ref([])
  const loading = ref(false)

  // Getters (computed)
  const productCount = computed(() => products.value.length)
  const activeProducts = computed(() =>
    products.value.filter((p) => p.active),
  )

  // Actions
  const fetchProducts = async () => {
    loading.value = true
    try {
      const response = await fetch('/api/products')
      products.value = await response.json()
    } finally {
      loading.value = false
    }
  }

  const addProduct = (product) => {
    products.value.push(product)
  }

  return {
    products,
    loading,
    productCount,
    activeProducts,
    fetchProducts,
    addProduct,
  }
})
```

### Using a Store

```vue
<script setup>
import { onMounted } from 'vue'
import { useProductsStore } from '@/stores/products'

const productsStore = useProductsStore()

onMounted(() => {
  productsStore.fetchProducts()
})

const handleAddProduct = (product) => {
  productsStore.addProduct(product)
}
</script>

<template>
  <div>
    <p>Total: {{ productsStore.productCount }}</p>
    <div v-if="productsStore.loading">Loading...</div>
    <div v-for="product in productsStore.products" :key="product.id">
      {{ product.name }}
    </div>
  </div>
</template>
```

## Styling Components

### Using CoreUI Components

**ALWAYS use CoreUI Vue components** from `@coreui/vue`:

```vue
<script setup>
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/vue'
</script>

<template>
  <CRow>
    <CCol :md="6">
      <CCard>
        <CCardHeader>Card Title</CCardHeader>
        <CCardBody>
          <CButton color="primary">Click Me</CButton>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>
```

### Bootstrap Utilities

Use Bootstrap utility classes:

```vue
<template>
  <CCard class="mb-4 shadow-sm">
    <CCardBody class="p-4 d-flex justify-content-between">
      <span class="text-muted">Left</span>
      <span class="fw-bold">Right</span>
    </CCardBody>
  </CCard>
</template>
```

### Scoped Styles

```vue
<style scoped lang="scss">
.my-component {
  padding: 1rem;
  background-color: var(--cui-light);

  &__title {
    color: var(--cui-primary);
    font-size: 1.5rem;
  }
}
</style>
```

### CSS Custom Properties

```vue
<template>
  <div :style="{
    backgroundColor: 'var(--cui-primary)',
    color: 'var(--cui-white)',
    padding: 'var(--cui-spacer-3)',
  }">
    Styled with CSS variables
  </div>
</template>
```

## Code Quality

### ESLint Configuration

Run linting:

```bash
npm run lint
```

### Code Style Guidelines

**Vue**:
- Use `<script setup>` syntax
- Composition API patterns
- Destructure composables and stores
- Use TypeScript JSDoc comments

**JavaScript**:
- No semicolons (Prettier enforced)
- Single quotes for strings
- 2-space indentation
- Arrow functions preferred

**File naming**:
- PascalCase for components: `UserCard.vue`
- camelCase for composables: `useFetch.js`
- camelCase for stores: `products.js`

## Build and Deployment

### Production Build

```bash
npm run build
```

Output in `dist/` directory:
- Minified JavaScript bundles
- Extracted and minified CSS
- Optimized assets

### Preview Production Build

```bash
npm run preview
```

### Deployment Platforms

**Static hosting**:

1. **Netlify**:
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Vercel**:
   - Framework preset: Vite
   - Build command: `npm run build`

3. **GitHub Pages**:
   - Build locally: `npm run build`
   - Push `dist/` folder to `gh-pages` branch

## Troubleshooting

### Common Issues

**Problem**: Port 3000 already in use

**Solution**:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill

# Or change port in vite.config.mjs
```

---

**Problem**: Module not found errors

**Solution**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

**Problem**: Styles not updating

**Solution**:
- Clear browser cache
- Hard refresh (Cmd/Ctrl + Shift + R)
- Restart dev server

## Best Practices

### Performance

1. Use lazy loading for routes
2. Use `computed()` for derived state
3. Avoid unnecessary watchers
4. Use `v-show` vs `v-if` appropriately
5. Optimize images (WebP format)

### Accessibility

1. Use semantic HTML
2. Add ARIA labels for icon buttons
3. Ensure keyboard navigation
4. Meet color contrast standards
5. Associate form inputs with labels

### Security

1. Validate user input
2. Use HTTPS in production
3. Configure CSP headers
4. Run `npm audit` regularly
5. Never commit secrets to Git

### Code Organization

1. Single Responsibility principle
2. DRY (Don't Repeat Yourself)
3. Consistent naming conventions
4. Group related files together
5. Document complex logic

### Git Workflow

**Commit messages** (Conventional Commits):
```
feat: add user profile page
fix: resolve navigation bug on mobile
docs: update README with deployment instructions
style: format code with Prettier
refactor: extract form validation logic
chore: update dependencies
```

---

This guide covers essential workflows and patterns for developing with the CoreUI Free Vue Admin Template. For additional questions, consult the [CoreUI Vue Documentation](https://coreui.io/vue/docs/) or the [Vue 3 Documentation](https://vuejs.org/).

Happy coding! 🚀
