# Tailwind CSS 使用指南

本指南详细介绍如何在 `figui-icons` 中使用 Tailwind CSS 类名。

## 基本用法

### 1. 尺寸控制

您可以使用 Tailwind 的 `w-*` 和 `h-*` 类来控制图标尺寸：

```tsx
import { Heart } from 'figui-icons';

// 不同尺寸
<Heart className="w-4 h-4" />   // 16px
<Heart className="w-6 h-6" />   // 24px
<Heart className="w-8 h-8" />   // 32px
<Heart className="w-12 h-12" /> // 48px
```

### 2. 颜色控制

使用 `text-*` 类来控制图标颜色：

```tsx
<Heart className="text-red-500" />
<Heart className="text-blue-600" />
<Heart className="text-green-400" />
<Heart className="text-gray-700" />
```

### 3. 悬停效果

添加交互式悬停效果：

```tsx
<Heart className="text-red-500 hover:text-red-600 transition-colors" />
<Heart className="text-blue-500 hover:scale-110 transition-transform" />
<Heart className="text-green-500 hover:rotate-12 transition-all duration-300" />
```

## 高级用法

### 1. 响应式设计

创建响应式图标：

```tsx
<Heart className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
<Heart className="text-red-400 sm:text-red-500 md:text-red-600" />
```

### 2. 动画效果

使用 Tailwind 的动画类：

```tsx
<Heart className="w-8 h-8 text-red-500 animate-pulse" />
<Heart className="w-8 h-8 text-blue-500 animate-bounce" />
<Heart className="w-8 h-8 text-green-500 animate-spin" />
```

### 3. 阴影和效果

添加阴影和其他视觉效果：

```tsx
<Heart className="w-8 h-8 text-red-500 drop-shadow-lg" />
<Heart className="w-8 h-8 text-blue-500 filter blur-sm hover:blur-none transition-all" />
```

## 组合使用

### 1. 按钮中的图标

```tsx
<button className='flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors'>
  <Heart className='w-5 h-5' />
  <span>喜欢</span>
</button>
```

### 2. 导航菜单

```tsx
<nav className='flex space-x-6'>
  <a
    href='/'
    className='flex items-center space-x-1 text-gray-700 hover:text-blue-600'
  >
    <Home className='w-5 h-5' />
    <span>首页</span>
  </a>
  <a
    href='/profile'
    className='flex items-center space-x-1 text-gray-700 hover:text-blue-600'
  >
    <User className='w-5 h-5' />
    <span>个人资料</span>
  </a>
</nav>
```

### 3. 卡片组件

```tsx
<div className='bg-white rounded-lg shadow-md p-6'>
  <div className='flex items-center space-x-3 mb-4'>
    <div className='p-2 bg-red-50 rounded-full'>
      <Heart className='w-6 h-6 text-red-500' />
    </div>
    <h3 className='text-lg font-semibold'>收藏夹</h3>
  </div>
  <p className='text-gray-600'>您的收藏项目</p>
</div>
```

## 暗色模式支持

使用 `dark:` 前缀支持暗色模式：

```tsx
<Heart className="w-8 h-8 text-red-500 dark:text-red-400" />
<div className="p-3 bg-red-50 dark:bg-red-900 rounded-full">
  <Heart className="w-6 h-6 text-red-500 dark:text-red-400" />
</div>
```

## 自定义组合

### 1. 浮动动作按钮

```tsx
<button className='fixed bottom-6 right-6 w-14 h-14 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 hover:shadow-xl transition-all duration-300 flex items-center justify-center'>
  <Heart className='w-6 h-6' />
</button>
```

### 2. 工具提示图标

```tsx
<div className='relative group'>
  <Heart className='w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors' />
  <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity'>
    添加到收藏
  </div>
</div>
```

### 3. 状态指示器

```tsx
<div className='flex items-center space-x-2'>
  <Heart className='w-5 h-5 text-red-500' />
  <span className='text-sm text-gray-600'>24 个赞</span>
</div>
```

## 最佳实践

1. **一致性**：在整个应用中保持图标尺寸和颜色的一致性
2. **可访问性**：确保图标有足够的对比度
3. **性能**：使用 Tailwind 的 purge 功能移除未使用的样式
4. **响应式**：考虑不同屏幕尺寸下的图标显示

## 组合 Props 和 Tailwind

您可以同时使用组件的 props 和 Tailwind 类：

```tsx
// 使用 size prop 控制尺寸，Tailwind 控制其他样式
<Heart
  size={24}
  className="text-red-500 hover:text-red-600 transition-colors cursor-pointer"
/>

// 使用 color prop 控制颜色，Tailwind 控制其他样式
<Heart
  color="#ef4444"
  className="drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
/>
```

这样的组合使用让您能够充分利用组件的功能和 Tailwind CSS 的强大样式系统。
