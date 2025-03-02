# 构建 React 项目

## 初始化
1. 使用 `pnpm create vite@latest` 初始化项目
2. 添加接口请求。

## TODO
1. 配置路由
2. 配置数据获取方法fetch/axios？
3. 状态管理
4. 乐观更新？
5. 错误处理？
6. 类型！！
7. 配置别名


## 堆栈

**路由**
- React Router

**UI**
- Tailwind CSS
- Shadcn UI

**MOCK**
- MSW

**状态管理**
- Zustand
- React Query

**工具**
- zod
- clsx
- axios

// TODO
登录状态
zstand 存储 登录状态。。。然后是否可以联合 localstoarge
错误处理
    1. 需要在全局catch 路由层之上的全局错误
    2. 路由层的错误需要在react-router上catch
    3. 页面级，颗粒度更细的在页面层catch
    4. 不同的是react-router使用的错误catch和页面的不是同一个
    5. 怎么整合统一收集错误呢？
    https://www.brandondail.com/posts/fault-tolerance-react
loading
环境处理