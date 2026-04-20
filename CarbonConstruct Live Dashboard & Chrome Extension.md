# CarbonConstruct Live Dashboard & Chrome Extension

**Version:** 2.0 (Public/Private Mode Enabled)
**Theme:** Eco-Glass Futurism

This project is a dual-purpose React application:
1.  **Chrome Extension:** A browser tool for users to track their carbon savings.
2.  **Live Web Dashboard:** A standalone web page that can be embedded into your Landing Page to show social proof.

---

## 🚀 Quick Start

### 1. Installation (Chrome Extension)
1.  Unzip `carbon-construct-extension-v2.zip`.
2.  Open Chrome and go to `chrome://extensions/`.
3.  Enable **Developer mode** (top right).
4.  Click **Load unpacked** and select the unzipped folder.

### 2. Running Locally (For Development)
1.  Ensure you have Node.js installed.
2.  Run `pnpm install` to install dependencies.
3.  Run `pnpm dev` to start the local server at `http://localhost:3000`.

---

## 🌟 Features

### Public Mode (Default)
*   **Safe for Embedding:** Automatically anonymizes user names (e.g., "Tier 1 Builder") to protect privacy.
*   **Live Feed:** Shows real-time savings activity to build trust and FOMO.
*   **Visuals:** High-end glassmorphism UI with neon green accents (#39FF14).

### Private Mode (Authenticated)
*   **Secure Login:** Users can sign in via the `/signin` page.
*   **Full Transparency:** Authenticated users see real names (e.g., "BuildCorp QLD") and specific project details.
*   **Toggle:** A visual badge clearly indicates which mode is active.

---

## 🛠️ Customization & Integration

### Replicating the Design (for Lovable)
Use the included `UI_SOURCE_KIT.md` file. It contains the exact CSS variables, component code, and chart specifications needed to recreate this design pixel-perfectly in other tools.

### Connecting to Real Data
Refer to `LOVABLE_INTEGRATION_GUIDE.md` for detailed technical instructions on:
*   API Endpoint structure.
*   Handling Authentication tokens.
*   Configuring the backend for anonymization.

---

## 📦 Deployment

### To Deploy as a Web Page (for Embedding)
1.  Run `pnpm build`.
2.  Upload the contents of the `dist` folder to any static host (Vercel, Netlify, AWS S3).
3.  Point a subdomain (e.g., `live.carbonconstruct.com.au`) to this deployment.
4.  Embed it on your main site using an iframe.

### To Update the Chrome Extension
1.  Run `pnpm build`.
2.  Zip the `dist` folder.
3.  Upload the new zip file to the Chrome Web Store Developer Dashboard.

---

## 📂 Project Structure

*   `client/src/pages/Dashboard.tsx` - Main dashboard logic and UI.
*   `client/src/pages/SignIn.tsx` - Login screen.
*   `client/src/components/VegaChart.tsx` - Chart rendering component.
*   `client/src/lib/api.ts` - Data fetching logic (currently mock data).
*   `client/src/index.css` - Global theme and variables.
