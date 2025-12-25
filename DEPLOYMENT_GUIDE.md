# CineRank Deployment Guide - Free Hosting

## 🚀 Best Free Hosting Options for CineRank

### Option 1: Netlify (RECOMMENDED - Easiest)
**Why Netlify?** - Fastest setup, free tier is generous, perfect for dynamic sites

#### Step 1: Create Netlify Account
1. Go to https://www.netlify.com
2. Click "Sign up"
3. Choose "GitHub" or "Google" to sign up (fastest)
4. Verify your email

#### Step 2: Prepare Your Project
1. Create a GitHub account if you don't have one (https://github.com)
2. Create a new repository called "cinerank"
3. Upload all your project files to the repository:
   - index.html
   - movie-details.html
   - tv-details.html
   - about-us.html
   - contact-us.html
   - privacy-policy.html
   - terms-conditions.html
   - disclaimer.html
   - robots.txt
   - sitemap.xml
   - .htaccess
   - sw.js (service worker)
   - All CSS files (if separate)

#### Step 3: Deploy on Netlify
1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub"
4. Select your "cinerank" repository
5. Leave settings as default:
   - Build command: (leave empty)
   - Publish directory: . (root folder)
6. Click "Deploy site"
7. Wait 1-2 minutes for deployment ✅

#### Step 4: Custom Domain (Optional)
1. In Netlify dashboard, go to "Domain settings"
2. You'll get a free domain like: `your-random-name.netlify.app`
3. To use your own domain:
   - Buy domain on Namecheap ($0.98/year)
   - Point DNS to Netlify's servers
   - Add custom domain in Netlify

**Estimated Time:** 5 minutes
**Cost:** FREE ✅

---

### Option 2: Vercel (EASY - Best for Performance)
**Why Vercel?** - Excellent performance, automatic SSL, global CDN

#### Step 1: Create Vercel Account
1. Go to https://vercel.com
2. Click "Sign up"
3. Choose "GitHub" and authorize
4. Verify email

#### Step 2: Push Code to GitHub
1. Create GitHub repo "cinerank" with all files
2. Push your project files

#### Step 3: Deploy on Vercel
1. Go to https://vercel.com/new
2. Select "Import GitHub Repository"
3. Find and select "cinerank"
4. Click "Import"
5. Leave default settings
6. Click "Deploy"
7. Wait 1-2 minutes ✅

**Your site is live at:** `cinerank.vercel.app`

**Estimated Time:** 5 minutes
**Cost:** FREE ✅

---

### Option 3: GitHub Pages (SIMPLEST)
**Why GitHub Pages?** - Built into GitHub, no extra account needed

#### Step 1: Create GitHub Repository
1. Go to https://github.com
2. Create new repository: "cinerank"
3. Check "Add a README file"
4. Click "Create repository"

#### Step 2: Upload Files
1. Click "Add file" → "Upload files"
2. Drag and drop all your HTML, CSS, JS files
3. Commit changes

#### Step 3: Enable GitHub Pages
1. Go to repository Settings
2. Scroll to "GitHub Pages"
3. Select Branch: "main" or "master"
4. Folder: "/ (root)"
5. Click "Save"
6. Wait 1-2 minutes

**Your site is live at:** `yourusername.github.io/cinerank`

**Estimated Time:** 3 minutes
**Cost:** FREE ✅

---

### Option 4: Firebase Hosting (RECOMMENDED for Features)
**Why Firebase?** - Google's hosting, great for apps, free tier generous

#### Step 1: Create Firebase Project
1. Go to https://console.firebase.google.com
2. Click "Create a project"
3. Project name: "cinerank"
4. Accept terms and create
5. Select "Hosting" from left menu

#### Step 2: Install Firebase CLI
**On Windows:**
```
npm install -g firebase-tools
```
(Need Node.js installed first from https://nodejs.org)

**On Mac:**
```
brew install firebase-cli
```

#### Step 3: Initialize Firebase
1. Open terminal/command prompt
2. Navigate to your project folder:
```
cd path/to/cinerank
```

3. Login to Firebase:
```
firebase login
```

4. Initialize hosting:
```
firebase init hosting
```

5. Follow prompts:
   - Select existing project: "cinerank"
   - Public directory: . (current directory)
   - Configure as SPA: Y
   - Overwrite index.html: N

#### Step 4: Deploy
```
firebase deploy
```

**Your site is live at:** `cinerank-xxxxx.web.app`

**Estimated Time:** 10 minutes
**Cost:** FREE ✅

---

## 📋 Comparison Table

| Feature | Netlify | Vercel | GitHub Pages | Firebase |
|---------|---------|--------|--------------|----------|
| **Ease of Setup** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Free Tier** | Generous | Generous | Unlimited | Generous |
| **Speed** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Custom Domain** | ✅ Free | ✅ Free | ❌ Paid | ❌ Paid |
| **Bandwidth** | 100GB/month | Generous | Unlimited | 10GB/month |
| **Support** | Excellent | Excellent | Community | Good |
| **Recommended** | 🏆 | 🏆 | Good Start | Good for Features |

---

## ⚡ Quick Start (FASTEST - GitHub Pages)

### Just 3 Steps:

**Step 1:** Create GitHub account → https://github.com/signup

**Step 2:** Create new repository called "cinerank"

**Step 3:** Upload your files and enable GitHub Pages

✅ **Live in 5 minutes!** `yourusername.github.io/cinerank`

---

## 🎯 Important Notes

### API Key Security
⚠️ **Your TMDB API key is visible in code!**

Currently in your code:
```javascript
const API_KEY = "2c6c0c3b3185da46b0f55233341d4b98";
```

**Solution:**
1. Create a new free API key from https://www.themoviedb.org/settings/api
2. Use your new key (not recommended for production)
3. Better: Set up a backend proxy (Node.js/Flask) to hide the API key

For now, using your key is acceptable since TMDB allows it for frontend apps.

### .htaccess Files
⚠️ .htaccess doesn't work on:
- GitHub Pages
- Netlify (they have their own config)
- Vercel (they have their own config)

It only works on Apache servers. The other features (caching, compression) are handled by these platforms automatically.

---

## 🔄 How to Update Your Site

### For GitHub Pages:
1. Make changes locally
2. Commit and push to GitHub
3. Site updates automatically in 1-2 minutes

### For Netlify/Vercel:
1. Push code to GitHub
2. Automatic deployment triggered
3. Site updates in 1-2 minutes

---

## 🌍 Custom Domain Setup (Optional)

### Buy Domain Cheaply:
- Namecheap: https://www.namecheap.com (~$0.98/year)
- Google Domains: https://domains.google (~$12/year)
- .top/.space: ~$1.99/year on Namecheap

### Connect to Netlify:
1. Buy domain on Namecheap
2. In Netlify: Domain settings → Add custom domain
3. Update Namecheap DNS to point to Netlify
4. Done! ✅

### Connect to GitHub Pages:
1. Buy domain
2. Create file "CNAME" in repo with your domain
3. Add DNS record on domain provider
4. Done! ✅

---

## ✅ Recommended Setup for YOU

**Best Option: Netlify**

Why?
1. ✅ Easiest setup (5 clicks)
2. ✅ Free tier is generous
3. ✅ Fast global CDN
4. ✅ Great documentation
5. ✅ Free HTTPS/SSL
6. ✅ Custom domain support
7. ✅ Works with .htaccess alternatives

**Steps:**
1. Create GitHub account
2. Push code to GitHub
3. Sign up on Netlify
4. Connect GitHub → Deploy
5. Done! 🎉

---

## 📊 Next Steps After Deployment

1. **Verify on Google Search Console** (5 min)
   - Go to https://search.google.com/search-console
   - Add your domain
   - Upload sitemap.xml
   - Wait for indexing

2. **Verify on Bing Webmaster Tools** (5 min)
   - Go to https://www.bing.com/webmasters
   - Add your domain
   - Verify and submit sitemap

3. **Monitor Performance** (ongoing)
   - Use Netlify Analytics
   - Check Google Search Console
   - Monitor Core Web Vitals

---

## 🆘 Troubleshooting

### "API calls not working after deployment"
- Check browser console for CORS errors
- TMDB API should work fine on deployed sites
- If blocked, you may need a backend proxy

### "Pages showing 404 after deployment"
- Make sure all file names are correct (case-sensitive on Linux servers)
- Check that index.html is in root folder
- Verify all relative paths are correct

### "Service Worker not updating"
- Clear browser cache
- Unregister old service worker:
  ```javascript
  navigator.serviceWorker.getRegistrations().then(regs => {
    regs.forEach(reg => reg.unregister());
  });
  ```

---

## 🎉 You're Done!

Your CineRank is now live on the internet! 

Share your site:
- Twitter/X
- Reddit (r/movies, r/television)
- Movie forums
- Your portfolio

**Estimated Total Time:** 5-10 minutes ⏱️

Good luck! 🚀
