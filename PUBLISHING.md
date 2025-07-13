# 发布指南

本文档说明如何将 React 图标库发布到 npm。

## 发布前检查清单

1. **确保所有代码都已提交**

   ```bash
   git status
   git add .
   git commit -m "feat: prepare for initial release"
   ```

2. **运行所有测试**

   ```bash
   pnpm test
   ```

3. **检查代码质量**

   ```bash
   pnpm lint
   pnpm type-check
   ```

4. **构建项目**
   ```bash
   pnpm build
   ```

## 发布步骤

### 1. 设置 npm 账户

首先，您需要在 npm 上创建一个账户：

1. 访问 https://www.npmjs.com/signup
2. 创建一个 npm 账户
3. 登录到您的本地 npm：

```bash
npm login
```

### 2. 检查包名可用性

```bash
npm view figui-icons
```

如果包名已被占用，您需要在`package.json`中更改包名。

### 3. 发布包

```bash
# 发布到npm
pnpm publish --access public
```

### 4. 验证发布

访问 https://www.npmjs.com/package/figui-icons 查看您的包是否已发布。

## 版本管理

### 更新版本

使用 npm 的版本管理工具：

```bash
# 补丁版本 (1.0.0 -> 1.0.1)
npm version patch

# 次要版本 (1.0.0 -> 1.1.0)
npm version minor

# 主要版本 (1.0.0 -> 2.0.0)
npm version major
```

### 发布更新

```bash
# 更新版本后发布
pnpm publish
```

## 自动化发布 (可选)

如果您设置了 GitHub Actions，可以自动发布：

1. 在 GitHub 中创建 npm token：

   - 登录 npm
   - 转到 https://www.npmjs.com/settings/tokens
   - 创建新的访问令牌
   - 选择 "Automation" 类型

2. 在 GitHub 仓库设置中添加 secret：

   - 转到仓库设置 > Secrets and variables > Actions
   - 添加新的 secret：`NPM_TOKEN`
   - 粘贴您的 npm token

3. 推送到 main 分支将自动触发发布

## 故障排除

### 常见错误

1. **403 Forbidden**

   - 确保已登录 npm：`npm login`
   - 检查是否有发布权限

2. **包名冲突**

   - 更改 package.json 中的包名
   - 或使用作用域：`@yourname/figui-icons`

3. **构建失败**
   - 检查 TypeScript 错误
   - 确保所有依赖项都已安装

### 检查发布状态

```bash
# 查看包信息
npm view figui-icons

# 查看所有版本
npm view figui-icons versions --json
```

## 最佳实践

1. **遵循语义化版本控制**
2. **在发布前运行完整的测试套件**
3. **更新 CHANGELOG.md**
4. **为重大更改创建 Git 标签**
5. **发布前在本地测试包**

```bash
# 本地测试
npm pack
npm install ./figui-icons-1.0.0.tgz
```
