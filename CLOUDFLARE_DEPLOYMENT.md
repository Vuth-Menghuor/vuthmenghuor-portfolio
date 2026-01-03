# 🚀 Deploying Your Portfolio to Cloudflare Pages

This guide will help you deploy your Next.js portfolio to Cloudflare Pages with unlimited bandwidth and a global CDN!

## ✅ Prerequisites

1. A [Cloudflare account](https://dash.cloudflare.com/sign-up) (free)
2. Your code pushed to GitHub, GitLab, or Bitbucket
3. Your project is configured for static export (already done! ✓)

---

## 📦 Method 1: Deploy via Cloudflare Dashboard (Recommended)

### Step 1: Push Your Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Ready for Cloudflare Pages"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. Authorize Cloudflare to access your GitHub/GitLab/Bitbucket
4. Select your portfolio repository

### Step 3: Configure Build Settings

Use these settings:

```
Production branch: main
Build command: npm run build
Build output directory: out
```

**Important Build Settings:**
- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npm run build`
- Build output directory: `out`
- Node version: `18` or higher

### Step 4: Add Environment Variables (Optional)

If you have any environment variables:
1. Click **Environment variables**
2. Add any necessary variables (e.g., API keys)

### Step 5: Deploy! 🎉

1. Click **Save and Deploy**
2. Wait 2-5 minutes for the build to complete
3. Your site will be live at: `https://your-project.pages.dev`

---

## 🌐 Method 2: Deploy via Wrangler CLI (Advanced)

### Step 1: Install Wrangler (if not already installed)

```bash
npm install -g wrangler
```

### Step 2: Login to Cloudflare

```bash
wrangler login
```

This will open a browser window to authenticate.

### Step 3: Build Your Project

```bash
npm run build
```

### Step 4: Deploy

```bash
npx wrangler pages deploy out --project-name=my-portfolio
```

Replace `my-portfolio` with your desired project name.

---

## 🔧 Custom Domain Setup

### Add Your Custom Domain:

1. Go to your Cloudflare Pages project
2. Click **Custom domains** → **Set up a custom domain**
3. Enter your domain (e.g., `www.yourname.com`)
4. Follow DNS instructions:
   - If domain is on Cloudflare: Automatic setup
   - If domain is elsewhere: Add CNAME record

**DNS Configuration:**
```
Type: CNAME
Name: www (or @)
Target: your-project.pages.dev
```

SSL certificate is automatically provisioned (free)!

---

## 🔄 Automatic Deployments

Every time you push to your main branch:
- ✅ Cloudflare automatically builds and deploys
- ✅ Preview deployments for pull requests
- ✅ Instant rollbacks if needed

---

## 📊 Post-Deployment

### Your Portfolio URLs:
- **Production**: `https://your-project.pages.dev`
- **Custom Domain**: `https://www.yourname.com` (after setup)

### Analytics:
- Go to **Analytics** tab in Cloudflare Pages dashboard
- View visitor stats, bandwidth, and performance

---

## 🐛 Troubleshooting

### Build Fails?

**Error: "Build command not found"**
```bash
# Make sure dependencies are listed in package.json
npm install
```

**Error: "Page not found"**
- Check that `output: 'export'` is in `next.config.js` ✓
- Verify build output directory is set to `out`

**Images not loading?**
- Ensure `images.unoptimized: true` is in `next.config.js` ✓
- Use relative paths for local images

### Check Build Logs:
1. Go to your Cloudflare Pages project
2. Click on the deployment
3. View **Build log** for detailed errors

---

## ⚙️ Configuration Files

Your project is already configured! Here's what was set up:

### `next.config.js`
```javascript
module.exports = {
  output: 'export',           // ✓ Static export enabled
  images: {
    unoptimized: true,        // ✓ Required for static export
  },
  trailingSlash: true,        // ✓ Better compatibility
};
```

### `package.json` scripts
```json
{
  "scripts": {
    "build": "next build",     // Standard build for Cloudflare
    "dev": "next dev",         // Local development
  }
}
```

---

## 🎯 Quick Deploy Checklist

- [ ] Code pushed to GitHub/GitLab/Bitbucket
- [ ] Cloudflare account created
- [ ] Project connected in Cloudflare Pages
- [ ] Build settings configured:
  - Build command: `npm run build`
  - Output directory: `out`
- [ ] First deployment successful
- [ ] Custom domain added (optional)
- [ ] SSL certificate active (automatic)

---

## 📈 Performance Tips

1. **Enable Caching**: Cloudflare automatically caches static assets
2. **Use WebP Images**: Convert images to WebP for better performance
3. **Minify Assets**: Next.js already does this in production build
4. **Monitor Analytics**: Check Cloudflare dashboard regularly

---

## 🆘 Need Help?

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js Static Export Docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Cloudflare Community](https://community.cloudflare.com/)

---

## 🎉 Congratulations!

Your portfolio is now deployed on Cloudflare's global CDN with:
- ✅ Unlimited bandwidth
- ✅ Automatic HTTPS
- ✅ 99.99% uptime
- ✅ Lightning-fast loading times
- ✅ Free hosting

**Enjoy your new portfolio! 🚀**
