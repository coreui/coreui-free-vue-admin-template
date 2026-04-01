# CoreUI Free Vue Admin Template - Development Guide

A comprehensive guide for developers working with the CoreUI Free Vue Admin Template. This guide covers setup, development workflows, common patterns, and best practices.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Creating Components](#creating-components)
- [Adding New Pages](#adding-new-pages)
- [Working with Routes](#working-with-routes)
- [State Management](#state-management)
- [Styling Components](#styling-components)
- [Working with Forms](#working-with-forms)
- [Data Visualization](#data-visualization)
- [Code Quality](#code-quality)
- [Testing](#testing)
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
  - GitLens
- **Vue DevTools** browser extension

### Knowledge Requirements

- JavaScript ES6+ features (arrow functions, destructuring, modules)
- Vue 3 fundamentals (Composition API, reactive, ref, computed)
- HTML5 and CSS3
- Sass/SCSS basics
- Git version control

## Getting Started

### Installation

1. **Clone the repository** (or download the source):
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

The development server includes:
- Hot Module Replacement (HMR) for instant updates
- Automatic browser refresh on file changes
- Error overlay for compile-time and runtime errors

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
├── assets/          # Static assets (images, logos)
├── components/      # Reusable UI components
├── layouts/         # Layout wrapper components
├── views/           # Page/route components
├── router/          # Router configuration
├── stores/          # Pinia stores (optional)
├── scss/            # Global styles and themes
├── App.vue          # Root component
├── main.js          # Application entry point
└── _nav.js          # Navigation menu configuration
```

### Key Files

- **`App.vue`**: Main application component with router-view
- **`main.js`**: Vue app creation, plugins, and mounting
- **`router/index.js`**: Route definitions and configuration
- **`_nav.js`**: Navigation menu structure for sidebar

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
- **Vue SFC changes**: Component updates without page reload
- **CSS/SCSS changes**: Style updates without reload
- **Configuration changes**: Require server restart

### Development Server Features

**Port**: 3000 (configurable in `vite.config.mjs`)

**Features**:
- Fast cold start (~500ms)
- Instant HMR (<50ms)
- Error overlay with stack traces
- Network access for mobile testing

**Access from mobile**:
```bash
# Find your local IP
# Windows: ipconfig
# Mac/Linux: ifconfig

# Access from mobile device:
http://192.168.1.X:3000
```

## Creating Components

### Component Structure

**Composition API with script setup**:

```vue
<template>
  <CCard>
    <CCardHeader>{{ name }}</CCardHeader>
    <CCardBody>
      <img v-if="avatar" :src="avatar" :alt="name" />
      <p>{{ email }}</p>
    </CCardBody>
  </CCard>
</template>

<script setup>
/**
 * UserCard component displays user information in a card format
 */
import { defineProps } from 'vue'

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
</script>

<style scoped>
/* Component-specific styles */
</style>
```

### Component Best Practices

1. **Keep components focused**: One responsibility per component
2. **Use prop validation**: Define types and required props
3. **Add JSDoc comments**: Document component purpose and props
4. **Extract logic**: Use composables for reusable logic
5. **Name meaningfully**: Clear, descriptive component names

### Composables (Custom Hooks)

Extract reusable logic into composables:

```javascript
// composables/useFetch.js
import { ref, watch } from 'vue'

/**
 * Custom composable for fetching data from an API
 * @param {String} url - API endpoint URL
 * @returns {Object} { data, loading, error, refetch }
 */
export function useFetch(url) {
  const data = ref(null)
  const loading = ref(true)
  const error = ref(null)

  const fetchData = async () => {
    try {
      loading.value = true
      const response = await fetch(url)
      data.value = await response.json()
      error.value = null
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  watch(() => url, fetchData, { immediate: true })

  return { data, loading, error, refetch: fetchData }
}
```

**Usage**:
```vue
<script setup>
import { useFetch } from '@/composables/useFetch'

const { data, loading, error } = useFetch('/api/users')
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
<template>
  <CRow>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Products</strong>
        </CCardHeader>
        <CCardBody>
          <!-- Your content here -->
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script setup>
// Component logic
</script>
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

### Page Templates

**List Page**:
```vue
<template>
  <CCard>
    <CCardHeader>Items</CCardHeader>
    <CCardBody>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>Name</CTableHeaderCell>
            <CTableHeaderCell>Status</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow v-for="item in items" :key="item.id">
            <CTableDataCell>{{ item.name }}</CTableDataCell>
            <CTableDataCell>{{ item.status }}</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </CCardBody>
  </CCard>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const items = ref([])

onMounted(async () => {
  // Fetch items
})
</script>
```

**Detail Page**:
```vue
<template>
  <CSpinner v-if="!item" />
  <CCard v-else>
    <CCardHeader>{{ item.name }}</CCardHeader>
    <CCardBody>
      <p>{{ item.description }}</p>
    </CCardBody>
  </CCard>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const item = ref(null)

onMounted(async () => {
  // Fetch item by route.params.id
})
</script>
```

## Working with Routes

### Route Configuration

Routes are defined in `src/router/index.js`:

```javascript
const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Home',
    component: DefaultLayout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/Dashboard.vue'),
      },
    ],
  },
]
```

### Dynamic Routes

**With URL parameters**:

```javascript
// Route definition
{
  path: '/products/:id',
  name: 'Product Detail',
  component: () => import('@/views/products/ProductDetail.vue'),
}

// Component usage
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const productId = route.params.id
</script>
```

### Programmatic Navigation

**Using useRouter hook**:

```vue
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToProducts = () => {
  router.push('/products')
}

const goBack = () => {
  router.back()
}
</script>

<template>
  <CButton @click="goToProducts">View Products</CButton>
  <CButton @click="goBack">Go Back</CButton>
</template>
```

### Protected Routes

Add authentication logic in `router/index.js`:

```javascript
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token')

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/pages/login')
  } else {
    next()
  }
})
```

## State Management

### Using Pinia

**Creating a store**:

```javascript
// stores/main.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useStore = defineStore('main', () => {
  // State
  const sidebarVisible = ref(true)
  const theme = ref('light')

  // Getters
  const isDark = computed(() => theme.value === 'dark')

  // Actions
  function toggleSidebar() {
    sidebarVisible.value = !sidebarVisible.value
  }

  function setTheme(newTheme) {
    theme.value = newTheme
  }

  return { sidebarVisible, theme, isDark, toggleSidebar, setTheme }
})
```

**Using the store**:

```vue
<script setup>
import { useStore } from '@/stores/main'

const store = useStore()

// Read state
console.log(store.sidebarVisible)
console.log(store.isDark)

// Call actions
store.toggleSidebar()
store.setTheme('dark')
</script>
```

### Local Component State

**ref for simple state**:

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
const isOpen = ref(false)
const formData = ref({ name: '', email: '' })
</script>
```

**reactive for complex state**:

```vue
<script setup>
import { reactive } from 'vue'

const state = reactive({
  count: 0,
  step: 1,
  history: [],
})
</script>
```

## Styling Components

### Using CoreUI Components

**ALWAYS use CoreUI Vue components** from `@coreui/vue`:

```vue
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

Use Bootstrap utility classes for quick styling:

```vue
<template>
  <CCard class="mb-4 shadow-sm">
    <CCardBody class="p-4 d-flex justify-content-between align-items-center">
      <span class="text-muted">Left</span>
      <span class="fw-bold">Right</span>
    </CCardBody>
  </CCard>
</template>
```

**Common utilities**:
- Spacing: `m-3`, `mt-2`, `mb-4`, `p-3`, `px-4`, `py-2`
- Display: `d-flex`, `d-none`, `d-block`, `d-inline`
- Flexbox: `justify-content-between`, `align-items-center`
- Text: `text-center`, `text-muted`, `fw-bold`, `fs-5`

### Custom Styles

**Component-level SCSS** (scoped):

```vue
<template>
  <div class="my-component">
    <h1 class="my-component__title">Title</h1>
  </div>
</template>

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

Use CoreUI CSS variables for theming:

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

**Common variables**:
- Colors: `--cui-primary`, `--cui-secondary`, `--cui-success`, `--cui-danger`
- Background: `--cui-body-bg`, `--cui-light`, `--cui-dark`
- Text: `--cui-body-color`, `--cui-text-muted`
- Spacing: `--cui-spacer-1` through `--cui-spacer-5`

### Conditional Styling

Use class or style bindings:

```vue
<template>
  <button
    :class="['btn', { 'btn-primary': isPrimary, 'btn-secondary': !isPrimary, 'active': isActive }]"
  >
    Button
  </button>
</template>

<script setup>
import { ref } from 'vue'

const isPrimary = ref(true)
const isActive = ref(false)
</script>
```

## Working with Forms

### Form Component Example

```vue
<template>
  <CCard>
    <CCardHeader>Contact Form</CCardHeader>
    <CCardBody>
      <CForm
        class="row g-3"
        :noValidate="true"
        :validated="validated"
        @submit.prevent="handleSubmit"
      >
        <CCol :md="6">
          <CFormLabel for="name">Name</CFormLabel>
          <CFormInput
            type="text"
            id="name"
            v-model="formData.name"
            required
          />
        </CCol>
        <CCol :md="6">
          <CFormLabel for="email">Email</CFormLabel>
          <CFormInput
            type="email"
            id="email"
            v-model="formData.email"
            required
          />
        </CCol>
        <CCol :xs="12">
          <CFormLabel for="message">Message</CFormLabel>
          <CFormTextarea
            id="message"
            :rows="3"
            v-model="formData.message"
            required
          />
        </CCol>
        <CCol :xs="12">
          <CButton color="primary" type="submit">
            Submit
          </CButton>
        </CCol>
      </CForm>
    </CCardBody>
  </CCard>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: '',
})
const validated = ref(false)

const handleSubmit = (event) => {
  const form = event.target

  if (!form.checkValidity()) {
    validated.value = true
    return
  }

  // Submit form data
  console.log('Form data:', formData.value)
}
</script>
```

### Form Validation

**HTML5 validation**:
```vue
<CFormInput
  type="email"
  required
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
/>
```

**Custom validation**:
```vue
<script setup>
import { ref } from 'vue'

const errors = ref({})

const validate = () => {
  const newErrors = {}

  if (!formData.value.name) {
    newErrors.name = 'Name is required'
  }

  if (!formData.value.email.includes('@')) {
    newErrors.email = 'Invalid email address'
  }

  errors.value = newErrors
  return Object.keys(newErrors).length === 0
}

const handleSubmit = () => {
  if (validate()) {
    // Submit form
  }
}
</script>
```

## Data Visualization

### Using Chart.js with CoreUI

```vue
<template>
  <CCard>
    <CCardHeader>Sales Overview</CCardHeader>
    <CCardBody>
      <CChartLine
        :data="chartData"
        :options="chartOptions"
        style="height: 300px"
      />
    </CCardBody>
  </CCard>
</template>

<script setup>
import { CChartLine } from '@coreui/vue-chartjs'

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Sales 2024',
      backgroundColor: 'rgba(220, 53, 69, 0.1)',
      borderColor: 'rgba(220, 53, 69, 1)',
      data: [40, 20, 12, 39, 10, 40, 39],
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
  },
}
</script>
```

### Chart Types

CoreUI provides Vue wrappers for Chart.js:

- `CChartLine` - Line charts
- `CChartBar` - Bar charts
- `CChartDoughnut` - Doughnut charts
- `CChartPie` - Pie charts
- `CChartPolarArea` - Polar area charts
- `CChartRadar` - Radar charts

## Code Quality

### ESLint Configuration

The project uses ESLint with Vue and Prettier plugins:

```bash
# Check for issues
npm run lint

# Auto-fix issues (when possible)
npm run lint -- --fix
```

### Code Style Guidelines

**JavaScript**:
- No semicolons (enforced by Prettier)
- Single quotes for strings
- 2-space indentation
- Arrow functions preferred
- Destructuring when possible

**Vue**:
- Composition API with script setup
- Props defined with defineProps()
- Meaningful component names
- Scoped styles

**File naming**:
- PascalCase for components: `UserCard.vue`
- camelCase for utilities: `dateHelper.js`
- kebab-case for styles: `user-card.scss`

### Pre-commit Checks

**Recommended**: Set up pre-commit hooks with Husky:

```bash
npm install --save-dev husky lint-staged

# Add to package.json
{
  "lint-staged": {
    "src/**/*.{js,vue}": ["eslint --fix", "prettier --write"]
  }
}
```

## Testing

### Manual Testing Checklist

Before committing changes:

- [ ] Test in both light and dark themes
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Check browser console for errors
- [ ] Verify all links and navigation work
- [ ] Test form validation and submission
- [ ] Check accessibility (keyboard navigation, screen readers)

### Browser Testing

Test in modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Responsive Testing

Test at common breakpoints:
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1366px, 1920px

**Tip**: Use Chrome DevTools device toolbar (Cmd/Ctrl + Shift + M)

## Build and Deployment

### Production Build

Create optimized production build:

```bash
npm run build
```

Output in `dist/` directory:
- Minified JavaScript bundles
- Extracted and minified CSS
- Optimized assets
- Source maps

### Build Analysis

Check bundle size:

```bash
npm run build

# Output shows:
# - Total bundle size
# - Individual chunk sizes
# - Asset sizes
```

### Preview Production Build

Test production build locally:

```bash
npm run preview
```

Opens preview server at `http://localhost:4173`

### Deployment Platforms

**Static hosting** (builds to static files):

1. **Netlify**:
   - Connect GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Vercel**:
   - Import Git repository
   - Framework preset: Vite
   - Build command: `npm run build`

3. **GitHub Pages**:
   - Build locally: `npm run build`
   - Push `dist/` folder to `gh-pages` branch

4. **AWS S3 + CloudFront**:
   - Upload `dist/` contents to S3 bucket
   - Configure CloudFront distribution

### Environment Variables

Create `.env` file (not committed to Git):

```bash
VITE_API_URL=https://api.example.com
VITE_APP_NAME=My App
```

**Usage in code**:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

**IMPORTANT**: Only variables prefixed with `VITE_` are exposed to the app.

## Troubleshooting

### Common Issues

**Problem**: Port 3000 already in use

**Solution**:
```bash
# Kill process on port 3000
# Mac/Linux:
lsof -ti:3000 | xargs kill

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

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

---

**Problem**: HMR not working

**Solution**:
- Check file is saved
- Restart dev server
- Check for syntax errors in console

---

**Problem**: Build fails with memory error

**Solution**:
```bash
# Increase Node memory limit
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### Debugging Tips

**Vue DevTools**:
- Inspect component hierarchy
- View props and state
- Profile component renders
- Inspect Pinia stores

**Console logging**:
```javascript
console.log('Variable:', variable)
console.table(arrayOfObjects)
console.error('Error:', error)
```

## Best Practices

### Performance

1. **Lazy load routes**: Use dynamic imports for code splitting
2. **Use computed**: For derived values instead of methods
3. **Optimize re-renders**: Use v-memo for expensive renders
4. **Virtualize long lists**: Use libraries like vue-virtual-scroller
5. **Optimize images**: Use WebP format, lazy loading

### Accessibility

1. **Semantic HTML**: Use proper heading hierarchy (h1-h6)
2. **ARIA labels**: Add aria-label for icon buttons
3. **Keyboard navigation**: Ensure all interactive elements are keyboard-accessible
4. **Color contrast**: Meet WCAG AA standards (4.5:1 for text)
5. **Form labels**: Associate all form inputs with labels

### Security

1. **Validate input**: Sanitize user input before rendering
2. **Use HTTPS**: Always serve over HTTPS in production
3. **Content Security Policy**: Configure CSP headers
4. **Dependency audits**: Run `npm audit` regularly
5. **Environment variables**: Never commit secrets to Git

### Code Organization

1. **Single Responsibility**: One component does one thing well
2. **DRY Principle**: Don't Repeat Yourself - extract reusable code
3. **Consistent naming**: Follow naming conventions throughout
4. **File organization**: Group related files together
5. **Documentation**: Comment complex logic and add JSDoc

### Git Workflow

**Commit messages** (Conventional Commits):
```
feat: add user profile page
fix: resolve navigation bug on mobile
docs: update README with deployment instructions
style: format code with Prettier
refactor: extract form validation logic
test: add tests for UserCard component
chore: update dependencies
```

**Branch naming**:
```
feature/user-profile
fix/navigation-bug
refactor/form-validation
docs/deployment-guide
```

---

This guide covers the essential workflows and patterns for developing with the CoreUI Free Vue Admin Template. For additional questions, consult the [CoreUI Vue Documentation](https://coreui.io/vue/docs/) or the [Vue 3 Documentation](https://vuejs.org/).

Happy coding! 🚀
