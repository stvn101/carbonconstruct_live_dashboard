# CarbonConstruct Landing Page - Deployment Guide

**Status:** Production Ready
**Last Updated:** December 31, 2025

---

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended - 2 minutes)

Vercel is the easiest option with automatic deployments and custom domains.

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

**Custom Domain:**
1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain (e.g., `carbonconstruct.com`)
3. Follow DNS instructions
4. SSL certificate is automatic

**Cost:** Free tier available, paid plans start at $20/month

---

### Option 2: Netlify (Alternative - 2 minutes)

Similar to Vercel with excellent support.

**Steps:**
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Deploy

**Custom Domain:**
1. In Netlify dashboard, go to Domain settings
2. Add your custom domain
3. Update DNS records
4. SSL is automatic

**Cost:** Free tier available, paid plans start at $19/month

---

### Option 3: Manus Hosting (Built-in - Recommended)

Manus provides built-in hosting with automatic SSL and no configuration needed.

**Steps:**
1. In the Manus Management UI, click "Publish"
2. Create a checkpoint (if not already done)
3. Click "Publish" in the UI
4. Your site is live at `carbonconstruct.manus.space`

**Custom Domain:**
1. In Management UI → Settings → Domains
2. Add your custom domain
3. Update DNS records to point to Manus
4. SSL certificate is automatic

**Cost:** Included with Manus subscription

---

### Option 4: Self-Hosted (Advanced)

Deploy to your own server or cloud provider.

**Steps:**
1. Build the project: `pnpm build`
2. Upload `dist/public` to your server
3. Configure your web server to serve `index.html` for all routes
4. Point your domain to your server

**Web Server Configuration (Nginx):**
```nginx
server {
    listen 80;
    server_name carbonconstruct.com;
    root /var/www/carbonconstruct/dist/public;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

**Web Server Configuration (Apache):**
```apache
<Directory /var/www/carbonconstruct/dist/public>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</Directory>
```

---

## 📋 Pre-Deployment Checklist

- [ ] All email forms configured (Mailchimp/SendGrid/custom API)
- [ ] Google Analytics set up
- [ ] Meta tags and OG images configured
- [ ] Favicon added
- [ ] Mobile responsive tested
- [ ] All links working
- [ ] Forms tested with real email
- [ ] Performance optimized
- [ ] Security headers configured

---

## 🔧 Environment Variables

If using a backend service, configure these in your hosting platform:

```
VITE_API_URL=https://api.carbonconstruct.com.au
VITE_MAILCHIMP_API_KEY=your_key_here
VITE_MAILCHIMP_LIST_ID=your_list_id
```

---

## 📊 Post-Deployment

### 1. Monitor Performance
- Check Core Web Vitals
- Monitor uptime
- Track page load times

### 2. Track Conversions
- Set up Google Analytics events
- Monitor email signup rate
- Track extension install clicks

### 3. Optimize
- A/B test headlines
- Test different CTAs
- Analyze user behavior

---

## 🔐 Security

- Always use HTTPS (automatic with Vercel/Netlify/Manus)
- Keep dependencies updated
- Monitor for security vulnerabilities
- Use environment variables for secrets
- Enable CORS only for trusted domains

---

## 📞 Support

**Vercel Support:** [vercel.com/support](https://vercel.com/support)
**Netlify Support:** [netlify.com/support](https://netlify.com/support)
**Manus Support:** [help.manus.im](https://help.manus.im)

---

## 🎯 Recommended Deployment Path

1. **Immediate:** Deploy to Vercel or Manus (free tier)
2. **Week 1:** Configure custom domain
3. **Week 2:** Set up email service integration
4. **Week 3:** Launch marketing campaign
5. **Week 4:** Monitor and optimize

---

**Ready to deploy? Choose your platform above and follow the steps!**
