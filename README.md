# FiguiIcons

A modern React icon library with TypeScript support, featuring beautiful SVG icons that are lightweight and customizable.

## Features

- 🎨 Beautiful, consistent icon design
- 📦 Tree-shakeable - only import what you need
- 🎯 Size-specific imports for optimized defaults (16px and 24px)
- 🔧 TypeScript support with full type definitions
- 🎯 Customizable size, color, and styling
- 🚀 Zero dependencies (except React)
- 📱 Works great in responsive designs
- ⚡ Lightweight and performant
- 🎨 Optimized stroke widths and viewBoxes per size

## Installation

```bash
# Using pnpm (recommended)
pnpm install figui-icons

# Using npm
npm install figui-icons

# Using yarn
yarn add figui-icons
```

## Usage

### Size-Specific Imports (Recommended)

Import icons by size for better tree-shaking and optimized defaults:

```tsx
// 16px icons (optimized for small UI elements)
import { Heart, Home, User } from 'figui-icons/16';

// 24px icons (optimized for general use)
import { Heart, Home, User } from 'figui-icons/24';

function App() {
  return (
    <div>
      {/* 16px icons with optimized stroke width and viewBox */}
      <Heart /> {/* Default: 16px, stroke-width: 1.5 */}
      <Home />
      <User />
      {/* 24px icons with optimized stroke width and viewBox */}
      <Heart /> {/* Default: 24px, stroke-width: 2 */}
      <Home />
      <User />
    </div>
  );
}
```

### Basic Usage (Legacy)

```tsx
import { Heart, Home, User } from 'figui-icons';

function App() {
  return (
    <div>
      <Heart />
      <Home />
      <User />
    </div>
  );
}
```

### Customizing Icons

```tsx
// Size-specific imports with customization
import { Heart as Heart16 } from 'figui-icons/16';
import { Heart as Heart24 } from 'figui-icons/24';

function App() {
  return (
    <div>
      {/* 16px Heart with custom size override */}
      <Heart16 size={20} />

      {/* 24px Heart with custom color */}
      <Heart24 color='#ff0000' />

      {/* Custom className */}
      <Heart16 className='my-small-icon' />
      <Heart24 className='my-large-icon' />

      {/* Multiple props */}
      <Heart24 size={32} color='#3b82f6' className='hover:scale-110' />
    </div>
  );
}
```

### Legacy Import Customization

```tsx
import { Heart } from 'figui-icons';

function App() {
  return (
    <div>
      {/* Custom size */}
      <Heart size={32} />

      {/* Custom color */}
      <Heart color='#ff0000' />

      {/* Custom size using predefined sizes */}
      <Heart size='lg' />

      {/* Custom className */}
      <Heart className='my-icon' />

      {/* Multiple props */}
      <Heart size='xl' color='#3b82f6' className='hover:scale-110' />
    </div>
  );
}
```

### Tailwind CSS Integration

The library has excellent support for Tailwind CSS classes:

```tsx
// Size-specific imports with Tailwind
import {
  Heart as Heart16,
  Home as Home16,
  User as User16,
} from 'figui-icons/16';
import {
  Heart as Heart24,
  Home as Home24,
  User as User24,
} from 'figui-icons/24';

function TailwindExample() {
  return (
    <div className='flex items-center space-x-4'>
      {/* 16px icons with Tailwind (ideal for small UI elements) */}
      <Heart16 className='text-red-500' />
      <Home16 className='text-blue-500' />
      <User16 className='text-green-500' />

      {/* 24px icons with Tailwind (ideal for general use) */}
      <Heart24 className='text-red-600' />
      <Home24 className='text-blue-600' />
      <User24 className='text-green-600' />

      {/* Hover effects and transitions */}
      <Heart24 className='w-8 h-8 text-red-500 hover:text-red-600 hover:scale-110 transition-all duration-200 cursor-pointer' />

      {/* Complex styling */}
      <div className='p-3 bg-red-50 rounded-full border-2 border-red-200 hover:border-red-300 transition-colors'>
        <Heart16 className='text-red-500' />
      </div>

      {/* Button with icon */}
      <button className='flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors'>
        <Heart16 className='w-4 h-4' />
        <span>Like</span>
      </button>

      {/* Responsive sizing */}
      <Heart24 className='w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-red-500' />

      {/* Animations */}
      <Heart24 className='w-8 h-8 text-red-500 animate-pulse' />

      {/* Dark mode */}
      <Heart24 className='w-8 h-8 text-red-400 hover:text-red-300 transition-colors cursor-pointer' />
    </div>
  );
}
```

### Using the Base Icon Components

```tsx
// Size-specific base components
import { Icon as Icon16 } from 'figui-icons/16';
import { Icon as Icon24 } from 'figui-icons/24';

function CustomIcons() {
  return (
    <div>
      {/* 16px base component - optimized for small icons */}
      <Icon16 color='currentColor'>
        <path d='M8 1L1 4v7c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V4L8 1z' />
      </Icon16>

      {/* 24px base component - optimized for larger icons */}
      <Icon24 color='currentColor'>
        <path d='M12 2L2 7v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7l-10-5z' />
      </Icon24>
    </div>
  );
}
```

### Legacy Base Icon Component

```tsx
import { Icon } from 'figui-icons';

function CustomIcon() {
  return (
    <Icon size={24} color='currentColor'>
      <path d='M12 2L2 7v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7l-10-5z' />
    </Icon>
  );
}
```

## Size-Specific Import Benefits

### Why Use Size-Specific Imports?

```tsx
// ✅ Recommended: Size-specific imports
import { Heart } from 'figui-icons/16'; // 16px optimized
import { Heart } from 'figui-icons/24'; // 24px optimized

// 📦 Smaller bundle size - only includes needed size variants
// 🎯 Optimized defaults for each size
// 🚀 Better tree-shaking
// 🎨 Size-appropriate stroke widths and viewBoxes
```

### Size Comparison

| Import                 | Default Size | Stroke Width | ViewBox   | Best For                              |
| ---------------------- | ------------ | ------------ | --------- | ------------------------------------- |
| `figui-icons/16`       | 16px         | 1.5          | 0 0 16 16 | Small UI elements, buttons, nav items |
| `figui-icons/24`       | 24px         | 2.0          | 0 0 24 24 | General use, main content, headers    |
| `figui-icons` (legacy) | 20px         | 2.0          | 0 0 24 24 | Backward compatibility                |

## Props

All icons accept the following props:

| Prop        | Type                      | Default          | Description                                            |
| ----------- | ------------------------- | ---------------- | ------------------------------------------------------ |
| `size`      | `number \| string`        | `'md'`           | Icon size. Can be a number (pixels) or predefined size |
| `color`     | `string`                  | `'currentColor'` | Icon color                                             |
| `className` | `string`                  | `''`             | CSS class name                                         |
| `...props`  | `SVGProps<SVGSVGElement>` | -                | Any other SVG props                                    |

### Size Options

- `xs`: 12px
- `sm`: 16px
- `md`: 20px (default)
- `lg`: 24px
- `xl`: 32px
- Or any number for custom pixel size

## Available Icons

- `Heart` - Heart/like icon
- `Home` - House/home icon
- `User` - User/person icon

More icons coming soon!

## TypeScript Support

This library is built with TypeScript and includes full type definitions. All icons are properly typed with the `IconProps` interface.

```tsx
import { IconProps } from 'figui-icons';

// Your custom icon component
const MyIcon: React.FC<IconProps> = (props) => {
  // Implementation
};
```

## Development

```bash
# Install dependencies
pnpm install

# Build the library
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint
```

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## License

MIT License - see LICENSE file for details.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history.
