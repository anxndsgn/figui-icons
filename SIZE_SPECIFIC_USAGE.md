# Size-Specific Import Usage Guide

This guide explains how to use the new size-specific imports in `figui-icons`.

## Overview

You can now import icons by size for better optimization and clearer intent:

```tsx
// 16px icons - optimized for small UI elements
import { Heart, Home, User } from 'figui-icons/16';

// 24px icons - optimized for general use
import { Heart, Home, User } from 'figui-icons/24';
```

## Basic Usage

### 16px Icons

Perfect for small UI elements, buttons, navigation items:

```tsx
import { Heart, Home, User, Icon } from 'figui-icons/16';

function SmallIconsExample() {
  return (
    <div>
      {/* Default 16px size with optimized stroke width (1.5) */}
      <Heart />
      <Home />
      <User />

      {/* Still customizable */}
      <Heart size={20} color='#ff0000' />
      <Heart className='text-red-500 hover:text-red-600' />

      {/* Custom icon with 16px base */}
      <Icon>
        <circle cx='8' cy='8' r='6' />
      </Icon>
    </div>
  );
}
```

### 24px Icons

Perfect for general use, main content, headers:

```tsx
import { Heart, Home, User, Icon } from 'figui-icons/24';

function LargeIconsExample() {
  return (
    <div>
      {/* Default 24px size with optimized stroke width (2) */}
      <Heart />
      <Home />
      <User />

      {/* Still customizable */}
      <Heart size={32} color='#0066cc' />
      <Heart className='text-blue-500 hover:text-blue-600' />

      {/* Custom icon with 24px base */}
      <Icon>
        <circle cx='12' cy='12' r='10' />
      </Icon>
    </div>
  );
}
```

## Real-World Examples

### Navigation Bar (16px)

```tsx
import { Home, User, Heart } from 'figui-icons/16';

function Navigation() {
  return (
    <nav className='flex space-x-4'>
      <a
        href='/'
        className='flex items-center space-x-1 text-gray-600 hover:text-blue-600'
      >
        <Home />
        <span className='text-sm'>Home</span>
      </a>
      <a
        href='/profile'
        className='flex items-center space-x-1 text-gray-600 hover:text-blue-600'
      >
        <User />
        <span className='text-sm'>Profile</span>
      </a>
      <a
        href='/favorites'
        className='flex items-center space-x-1 text-gray-600 hover:text-blue-600'
      >
        <Heart />
        <span className='text-sm'>Favorites</span>
      </a>
    </nav>
  );
}
```

### Main Content Area (24px)

```tsx
import { Heart, Home, User } from 'figui-icons/24';

function MainContent() {
  return (
    <div className='space-y-6'>
      <div className='flex items-center space-x-3'>
        <Home className='text-blue-600' />
        <h1 className='text-2xl font-bold'>Welcome Home</h1>
      </div>

      <div className='flex items-center space-x-3'>
        <User className='text-green-600' />
        <h2 className='text-xl'>User Profile</h2>
      </div>

      <button className='flex items-center space-x-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600'>
        <Heart />
        <span>Add to Favorites</span>
      </button>
    </div>
  );
}
```

### Mixed Sizes in One Component

```tsx
import { Heart as Heart16 } from 'figui-icons/16';
import { Heart as Heart24 } from 'figui-icons/24';

function MixedSizesExample() {
  return (
    <div className='space-y-4'>
      {/* Small heart for compact UI */}
      <div className='flex items-center space-x-2'>
        <Heart16 className='text-red-500' />
        <span className='text-sm'>24 likes</span>
      </div>

      {/* Large heart for main action */}
      <button className='flex items-center justify-center space-x-3 w-full py-3 bg-red-50 hover:bg-red-100 rounded-lg'>
        <Heart24 className='text-red-500' />
        <span className='font-medium'>Like this post</span>
      </button>
    </div>
  );
}
```

## Comparison with Legacy Import

```tsx
// OLD WAY (still supported)
import { Heart } from 'figui-icons';
<Heart size={16} />  // Manual size specification
<Heart size={24} />  // Manual size specification

// NEW WAY (recommended)
import { Heart as Heart16 } from 'figui-icons/16';
import { Heart as Heart24 } from 'figui-icons/24';
<Heart16 />  // Automatically 16px with optimized stroke
<Heart24 />  // Automatically 24px with optimized stroke
```

## Benefits

1. **Better Tree Shaking**: Only import the size variants you actually use
2. **Optimized Defaults**: Each size has appropriate stroke width and viewBox
3. **Clearer Intent**: Code clearly shows which size icons are being used
4. **Smaller Bundles**: Reduce bundle size by only including needed variants
5. **Better Performance**: Optimized rendering for each size

## TypeScript Support

All size-specific imports have full TypeScript support:

```tsx
import { IconProps } from 'figui-icons/16';
import { Heart } from 'figui-icons/16';

const MyCustomIcon: React.FC<IconProps> = (props) => {
  return <Heart {...props} />;
};
```

## Migration Guide

To migrate from legacy imports to size-specific imports:

1. **Identify your icon sizes**: Look at where you use `size={16}` or `size={24}`
2. **Replace imports**:
   - `import { Heart } from 'figui-icons'` → `import { Heart } from 'figui-icons/16'` or `figui-icons/24`
3. **Remove manual size props**: If you were using `size={16}` or `size={24}`, you can remove these
4. **Update aliases**: Use `import { Heart as Heart16 }` if you need both sizes in one file

The legacy import method will continue to work for backward compatibility.
