# 青她 (Qing Ta)

一个基于 Next.js 14 构建的现代化 Web 应用。

## 🚀 技术栈

- **框架**: [Next.js 14](https://nextjs.org/) (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI 组件**: React 18

## 📦 本地开发

### 环境要求

- Node.js 18.x 或更高版本
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
npm run build
```

## ☁️ 云部署

本项目已配置为支持多种云平台的部署。

### Vercel (推荐)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/qing-ta)

1. 将代码推送到 GitHub
2. 访问 [Vercel](https://vercel.com) 并登录
3. 点击 "Add New Project"
4. 导入你的 GitHub 仓库
5. Vercel 会自动识别 Next.js 项目并完成部署

### 其他平台

项目已配置 `output: 'standalone'` 模式，支持以下平台：

- **Docker**: 使用 `docker build` 构建镜像
- **Netlify**: 连接 GitHub 仓库自动部署
- **AWS/GCP/Azure**: 使用容器化部署

## 📁 项目结构

```
qing-ta/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── globals.css        # 全局样式
├── public/                # 静态资源
├── next.config.js         # Next.js 配置
├── tailwind.config.js     # Tailwind 配置
├── tsconfig.json          # TypeScript 配置
└── package.json           # 项目依赖
```

## 📝 自定义配置

### 环境变量

创建 `.env.local` 文件：

```env
# 示例环境变量
NEXT_PUBLIC_API_URL=https://api.example.com
```

### 自定义域名

在 Vercel 或其他平台设置中配置自定义域名。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License
