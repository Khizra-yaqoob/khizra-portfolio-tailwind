# Khizra Yaqoob — Portfolio (React TSX + Tailwind CSS)

**Roll Number:** 24011519-065  
**Assignment:** React TSX with Tailwind CSS Integration  
**University:** University of Gujrat

---

## 🚀 How to Deploy on GitHub Pages (Step by Step)

### Step 1 — Create New GitHub Repository
1. Go to **github.com** → Click **"New repository"**
2. Repository name: `khizra-portfolio-tailwind`
3. Set to **Public**
4. Click **"Create repository"** (do NOT add README)

---

### Step 2 — Extract & Open in VS Code
1. Extract the ZIP file
2. Open folder `khizra-portfolio-tailwind` in VS Code

---

### Step 3 — Install Dependencies
Open VS Code terminal and run:
```bash
npm install
```

---

### Step 4 — Test Locally (Optional)
```bash
npm run dev
```
Open `http://localhost:5173/khizra-portfolio-tailwind/` in browser

---

### Step 5 — Initialize Git & Push to GitHub
Run these commands one by one in terminal:
```bash
git init
git add .
git commit -m "Initial commit - React TSX with Tailwind CSS"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/khizra-portfolio-tailwind.git
git push -u origin main
```
⚠️ Replace `YOUR_USERNAME` with your GitHub username

---

### Step 6 — Deploy to GitHub Pages
```bash
npm run deploy
```
This will:
1. Build the project (`npm run build`)
2. Push the `dist` folder to `gh-pages` branch automatically

---

### Step 7 — Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source** → Select branch: `gh-pages`
4. Click **Save**
5. Wait 2-3 minutes

---

### ✅ Your Live URL will be:
```
https://YOUR_USERNAME.github.io/khizra-portfolio-tailwind/
```

---

## 📁 Project Structure
```
khizra-portfolio-tailwind/
├── index.html
├── package.json
├── vite.config.ts          ← base set to /khizra-portfolio-tailwind/
├── tsconfig.json
├── public/
│   └── images/             ← all images here
└── src/
    ├── main.tsx
    ├── App.tsx             ← React Router routes
    ├── App.css             ← empty
    ├── index.css           ← @import "tailwindcss" + all custom CSS
    ├── components/
    │   ├── Navbar/page.tsx
    │   └── Footer/page.tsx
    └── pages/
        ├── Home/page.tsx
        ├── About/page.tsx
        ├── Projects/page.tsx
        ├── Skills/page.tsx
        ├── Contact/page.tsx
        ├── Dashboard/page.tsx
        ├── Login/page.tsx
        └── Register/page.tsx
```

## 🎨 Technologies Used
- React 18 + TypeScript (TSX)
- Vite (build tool)
- React Router DOM v6
- **Tailwind CSS v4** (integrated via @tailwindcss/vite plugin)
- Custom CSS Variables (dark/light theme)
- GitHub Pages (deployment)
