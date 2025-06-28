# 💒 Knotify – Wedding Invitation Website

> ✨ Developed with 💖 by **Rafinity (RA)**

A modern, interactive, and beautifully designed **digital wedding invitation** built with  
⚛️ **React 18**, 🟦 **TypeScript**, 🌈 **Tailwind CSS**, and ⚡ **Vite**.

This elegant, responsive, and romantic experience turns your wedding announcement into a stunning web experience.

---

## 🌟 Highlights

### 🎨 Elegant Design & Smooth Animations
- Romantic **rose-themed palette** (`rose-500`, `pink-200`, `red-100`)
- ✨ **Framer Motion** animations for a lively, romantic interface
- 🃏 3D hover card effects & subtle micro-interactions
- 🌌 **Floating particle background** for a dreamy ambiance

### 📱 Fully Responsive
- Optimized for **mobile, tablet, and desktop**
- Smooth experience across all modern browsers
- Built with **Tailwind’s responsive utilities**

### 🏠 Feature-Rich Components
| Component | Description |
|----------|-------------|
| 💘 **Hero Section** | Animated couple names & heart icon |
| 🖼️ **Image Slideshow** | Carousel of wedding and couple photos |
| 🗂️ **Quick Info Cards** | Wedding date, venue, RSVP buttons |
| 🗺️ **Google Maps Integration** | Venue location with directions |
| ⏰ **Wedding Schedule** | Timeline of the event |
| 👫 **Relationship Timeline** | Journey of the couple |
| 📞 **Contact Info** | Planners and coordinators |
| 🔐 **Admin Panel** | Protected room booking section |

---

## ⚙️ Customization Guide

| Item | How to Edit |
|------|-------------|
| 👫 **Couple Names** | `wedding-config.ts` |
| 🗓️ **Date & Venue** | `wedding-config.ts` |
| 🎨 **Color Scheme** | Tailwind class overrides |
| 🖼️ **Photos** | `ImageSlideshow.tsx` & `CoupleAvatar.tsx` |
| 📝 **Welcome Messages** | Text content files or props |
| ✅ **Toggle Features** | Through config or component props |
| 🔐 **Login Modal** | Built-in authentication with `localStorage` support |

---

## 🔒 Admin Features
- 🔐 **Protected Booking Section**
- 🔑 **Custom Auth Hook**
- 🪪 **Login Modal** (Optional)

---

## 🛠️ Tech Stack

| Tech | Purpose |
|------|--------|
| ⚛️ **React 18** | Frontend framework |
| 🟦 **TypeScript** | Type safety |
| 🌈 **Tailwind CSS** | Styling |
| ⚡ **Vite** | Build tool for fast performance |
| 🎞️ **Framer Motion** | Animations |
| 🗺️ **Google Maps API** | Directions and venue info |
| 🛑 **LocalStorage** | Admin auth state |

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Pragadheesh-RA/knotify.git

# Navigate to the project
cd knotify

# Install dependencies
npm install

# Start development server
npm run dev
