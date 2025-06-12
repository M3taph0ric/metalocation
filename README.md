# 🗺️ Customer Location Web App

This is a role-based React + Firebase web system for:

- Registering and logging in users (admin / delivery)
- Collecting customer info and Google Maps links
- Viewing customer location on the dashboard
- Firebase Authentication + Firestore
- Hosted with **Firebase + GitHub integration**

---

## 🚀 Live Hosting via GitHub + Firebase

This project is auto-deployed using GitHub and Firebase Hosting, no local Firebase tools needed!

### ✅ Tech Stack
- React (Vite)
- Firebase Auth & Firestore
- TailwindCSS (basic styling)
- Hosted with Firebase Hosting

---

## 🔧 How to Set Up Firebase Hosting (without CLI)

> You do not need to run `firebase init` or install anything locally.

### 1. Upload Code to GitHub
- Push this repo to your GitHub account.

### 2. Link GitHub Repo to Firebase Hosting
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select or create your Firebase project
3. In the left sidebar → **Hosting**
4. Click **Get Started** or **Connect GitHub**
5. Follow prompts:
   - Connect your GitHub repo
   - Choose `main` branch
   - Framework: **React**
   - Build command: `npm run build`
   - Public directory: `dist`

### 3. Done!
Every push to GitHub will build and deploy your project.

You can find your hosted app at:
https://your-project-id.web.app
