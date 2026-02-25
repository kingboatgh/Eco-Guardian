# Eco-Guardian Component Library & UI Usage Guide

## Complete Component Reference

### Table of Contents
1. [UI Components](#ui-components)
2. [Layout Components](#layout-components)
3. [CSS Classes](#css-classes)
4. [Utilities](#utilities)
5. [Color System](#color-system)
6. [Animation System](#animation-system)

---

## UI Components

### Button Component
**File:** `src/components/ui/Button.jsx`

#### Variants
```jsx
// Primary (default)
<Button>Click me</Button>
<Button variant="primary">Primary Button</Button>

// Secondary
<Button variant="secondary">Secondary Button</Button>

// Outline
<Button variant="outline">Outline Button</Button>

// Danger
<Button variant="danger">Delete</Button>
```

#### Sizes
```jsx
<Button size="sm">Small</Button>
<Button size="md">Medium (default)</Button>
<Button size="lg">Large</Button>
```

#### States
```jsx
// Loading state
<Button loading>Loading...</Button>

// Disabled
<Button disabled>Disabled</Button>

// With Icon
<Button icon={SaveIcon}>Save</Button>
```

#### Full Example
```jsx
<Button 
  variant="primary" 
  size="lg"
  loading={isLoading}
  disabled={!isValid}
  onClick={handleClick}
  className="w-full"
>
  Submit Form
</Button>
```

---

### Card Component
**File:** `src/components/ui/Card.jsx`

#### Basic Usage
```jsx
<Card>
  <p>Simple card content</p>
</Card>

// Elevated (default hover effect)
<Card elevated>
  <p>Elevated card content</p>
</Card>
```

#### With Header & Footer
```jsx
<Card 
  elevated
  header={<h2>Card Title</h2>}
  footer={<Button>Learn More</Button>}
>
  <p>Card content goes here</p>
</Card>
```

#### Interactive
```jsx
<Card 
  interactive 
  onClick={() => navigate('/details')}
>
  <p>Click me to navigate</p>
</Card>
```

#### Custom Content
```jsx
<Card>
  <div className="flex gap-4">
    <img src="icon.svg" alt="icon" />
    <div>
      <h3>Eco Achievement</h3>
      <p>You've saved 10kg of carbon!</p>
    </div>
  </div>
</Card>
```

---

### Loader Component
**File:** `src/components/ui/Loader.jsx`

#### Sizes
```jsx
<Loader size="sm" />  {/* 24px */}
<Loader size="md" />  {/* 40px */}
<Loader size="lg" />  {/* 64px */}
```

#### With Custom Styling
```jsx
<Loader size="lg" className="text-eco-500" />
```

#### Full Page Loader
```jsx
<div className="min-h-screen flex items-center justify-center">
  <div className="text-center">
    <Loader size="lg" />
    <p className="mt-4 text-gray-600">Loading Eco-Guardian...</p>
  </div>
</div>
```

---

### Modal Component
**File:** `src/components/ui/Modal.jsx`

#### Basic Usage
```jsx
const [showModal, setShowModal] = useState(false);

<Modal 
  isOpen={showModal} 
  onClose={() => setShowModal(false)}
  title="Confirm Action"
>
  <p>Are you sure you want to continue?</p>
</Modal>
```

#### WithFooter
```jsx
<Modal 
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  title="Delete Eco-Action"
  footer={
    <>
      <Button onClick={() => setShowModal(false)}>Cancel</Button>
      <Button variant="danger" onClick={handleDelete}>Delete</Button>
    </>
  }
>
  <p>This action cannot be undone.</p>
</Modal>
```

#### Sizes
```jsx
<Modal size="sm">   {/* Small */}
<Modal size="md">   {/* Medium (default) */}
<Modal size="lg">   {/* Large */}
<Modal size="xl">   {/* Extra Large */}
<Modal size="2xl">  {/* 2X Large */}
```

#### No Backdrop Click Close
```jsx
<Modal 
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  closeOnBackdrop={false}
>
  Content
</Modal>
```

---

## Layout Components

### Navbar Component
**File:** `src/components/layout/Navbar.jsx`

The navbar is automatically rendered at the top of authenticated pages. It includes:
- Logo and branding
- Navigation links (Dashboard, Events, Marketplace, Education, Leaderboard)
- Dark mode toggle
- User menu with profile/settings/logout
- Mobile responsive menu

#### Features
- Sticky positioning
- Active route highlighting
- User dropdown menu
- Dark mode toggle
- Mobile menu support

---

### Footer Component
**File:** `src/components/layout/Footer.jsx`

The footer is rendered at the bottom of pages. It includes:
- Multi-column link structure (Product, Community, Company, Legal)
- Social media icons
- Call-to-action banner
- Copyright information

#### Used On
- Dashboard
- All main pages
- Feature pages

---

### DarkModeToggle Component
**File:** `src/components/layout/DarkModeToggle.jsx`

Integrated into the Navbar. Handles:
- Theme detection
- Persistent storage
- Smooth transitions
- System preference detection

---

## CSS Classes

### Component Classes

#### Cards
```jsx
// Basic card with shadow
<div className="eco-card"></div>

// Card with hover lift effect
<div className="eco-card-elevated"></div>
```

#### Buttons
```jsx
// Base button (used by Button component)
<button className="eco-btn">Base Button</button>

// Primary button
<button className="eco-btn-primary">Primary</button>

// Secondary button
<button className="eco-btn-secondary">Secondary</button>

// Outline button
<button className="eco-btn-outline">Outline</button>

// Danger button
<button className="eco-btn-danger">Delete</button>

// Button sizes
<button className="eco-btn-sm">Small</button>
<button className="eco-btn">Medium</button>
<button className="eco-btn-lg">Large</button>
```

#### Inputs
```jsx
<input className="eco-input" placeholder="Enter text..." />
<textarea className="eco-input" placeholder="Enter description..."></textarea>
```

#### Badges
```jsx
<span className="eco-badge-success">Success</span>
<span className="eco-badge-warning">Warning</span>
<span className="eco-badge-info">Info</span>
```

#### Alerts
```jsx
<div className="eco-alert-success">✓ Success message</div>
<div className="eco-alert-error">⚠️ Error message</div>
<div className="eco-alert-warning">⚠️ Warning message</div>
```

#### Typography
```jsx
<h1 className="eco-heading-xl">Extra Large Heading</h1>
<h2 className="eco-heading-lg">Large Heading</h2>
<h3 className="eco-heading-md">Medium Heading</h3>
<h4 className="eco-heading-sm">Small Heading</h4>

<p className="eco-text-muted">Muted text</p>
<p className="eco-text-subtle">Subtle text (smaller)</p>
```

#### Container & Layout
```jsx
// Max width container with padding
<div className="eco-container"></div>

// Responsive grid
<div className="eco-grid">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

// Divider
<div className="eco-divider"></div>
```

#### Loading Skeleton
```jsx
<div className="eco-skeleton w-full h-12 rounded"></div>
```

---

## Utilities

### Container
```jsx
<div className="eco-container">
  // Max width 7xl with responsive padding
</div>
```

### Grid
```jsx
<div className="eco-grid">
  // 1 column on mobile, 2 on tablet, 3 on desktop
</div>
```

### Divider
```jsx
<div className="eco-divider"></div>
```

### Text Colors
```jsx
<p className="eco-text-muted">Gray text</p>
<p className="eco-text-subtle">Smaller gray text</p>
```

---

## Color System

### Primary Colors
```css
/* Eco Green Scale */
eco-50:   #f0fdf4 (lightest)
eco-100:  #dcfce7
eco-200:  #bbf7d0
eco-300:  #86efac
eco-400:  #4ade80
eco-500:  #22c55e (primary)
eco-600:  #16a34a
eco-700:  #15803d
eco-800:  #166534
eco-900:  #145231 (darkest)
```

### Usage
```jsx
{/* Background */}
<div className="bg-eco-500"></div>

{/* Text */}
<p className="text-eco-600">Text</p>

{/* Border */}
<div className="border border-eco-500"></div>

{/* With Dark Mode */}
<div className="bg-eco-50 dark:bg-eco-900"></div>
```

### Supporting Colors
```css
/* Full Tailwind Palette Available */
- red-* (error/danger)
- amber-* (warning)
- blue-* (info)
- gray-* (neutral)
```

---

## Animation System

### Available Animations

#### Tailwind Built-ins
```jsx
// Fade in
<div className="animate-fade"></div>

// Pulse
<div className="animate-pulse"></div>

// Spin
<div className="animate-spin"></div>

// Bounce
<div className="animate-bounce"></div>

// Ping
<div className="animate-ping"></div>

// Pulse
<div className="animate-pulse"></div>
```

#### Custom Animations
```jsx
// Slide up
<div className="animate-slideUp"></div>

// Slide down
<div className="animate-slideDown"></div>

// Shimmer
<div className="animate-shimmer"></div>

// Float
<div className="animate-float"></div>
```

### Framer Motion

All components support Framer Motion animations:

```jsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.3 }}
>
  Animated content
</motion.div>

// Hover animation
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Hover and click me
</motion.button>
```

---

## Page Structures

### Dashboard Layout
```jsx
<div className="flex flex-col min-h-screen">
  <Navbar />              {/* Sticky header */}
  <main className="flex-1">
    <div className="eco-container py-12">
      {/* Page content */}
    </div>
  </main>
  <Footer />              {/* Bottom */}
</div>
```

### Authentication Layout
```jsx
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br ...">
  <motion.div className="w-full max-w-md">
    {/* Card with form */}
  </motion.div>
</div>
```

---

## Best Practices

### DO's ✅
- Use semantic HTML elements
- Apply eco-* classes for consistency
- Combine Tailwind with custom classes
- Use Framer Motion for complex animations
- Test in both light and dark modes
- Use proper spacing (gap, padding, margin)
- Implement proper loading states
- Add keyboard navigation support

### DON'Ts ❌
- Don't override eco-* classes with custom CSS
- Don't use !important in custom CSS
- Don't hardcode colors (use Tailwind/eco-* colors)
- Don't forget dark mode variants
- Don't add too many animations (performance)
- Don't skip error states
- Don't forget accessibility attributes

---

## Responsive Design

### Breakpoints
```jsx
// Mobile first approach
sm: 640px   {/* tablets */}
md: 768px   {/* small laptops */}
lg: 1024px  {/* desktops */}
xl: 1280px  {/* large desktops */}

// Usage
<div className="text-sm md:text-base lg:text-lg">
  Text size changes based on screen
</div>
```

### Responsive Grid
```jsx
<div className="eco-grid">
  {/* 1 col mobile, 2 col tablet, 3 col desktop */}
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* Custom responsive grid */}
</div>
```

---

## Dark Mode

### Implementation
All components automatically support dark mode through Tailwind's `dark:` prefix:

```jsx
<div className="bg-white dark:bg-gray-800">
  Content
</div>
```

### Checking Dark Mode
```jsx
const isDark = document.documentElement.classList.contains('dark');
```

### Setting Dark Mode
```jsx
// Toggle
localStorage.setItem('dark-mode', true);
document.documentElement.classList.add('dark');
```

---

## Performance Tips

1. **Use Code Splitting**: Lazy load pages with React Router
2. **Optimize Images**: Use WebP and responsive sizes
3. **Minimize Animations**: Don't animate everything
4. **Use CSS Instead of JS**: Prefer Tailwind classes
5. **Lazy Load components**: Use React.lazy() for heavy components

---

## Troubleshooting

### Dark Mode Not Working
- Check if `dark` class is on `<html>` element
- Verify `darkMode: "class"` in tailwind.config.js
- Clear browser cache

### Animations Not Smooth
- Check browser performance
- Reduce animation complexity
- Use `will-change` CSS property sparingly

### Styling Not Applied
- Verify class names are correct
- Check Tailwind content configuration
- Ensure no conflicting CSS

---

**Happy Building! 🌱✨**
