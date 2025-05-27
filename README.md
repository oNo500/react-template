# 依赖管理

## 根目录安装依赖

```bash
# 添加到根工作区
pnpm add --save-dev syncpack@alpha -w

# 或者忽略
pnpm add --save-dev --ignore-workspace-root-check
```

## 依赖管理

```bash
# 格式化
npx syncpack format

# 更新
npx syncpack update

# 检查
npx syncpack lint --dependency-types prod,dev

# 修复版本
npx syncpack fix --dependency-types prod,dev
```

## 使用 `degit` 克隆项目

```bash
pnpx degit https://github.com/gaoxiu333/react-template.git my-project
```


对齐一下我的 react-template
https://github.com/
codeguide-dev/codeguide-starter-lite
https://github.com/shaadcode/Nextjs-Frontend-Boilerplate
https://dev.to/shaadcode/it-doesnt-get-faster-than-this-launching-a-nextjs-project-with-a-professional-boilerplate-4j1e


还是用来完善项目吧！！