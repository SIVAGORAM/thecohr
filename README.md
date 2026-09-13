# 🚀 The Co HR — Next.js Enterprise Web Platform

> **Powering People. Enabling Possibilities.**  
> Official Web Application & HCM Enterprise Solutions Portal for **The Co HR** (https://www.thecohr.com).

---

## 📋 Table of Contents
- [Overview](#-overview)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
- [Environment Configuration](#-environment-configuration)
- [Available Scripts](#-available-scripts)
- [SEO & Security Optimizations](#-seo--security-optimizations)
- [Deployment Guide](#-deployment-guide)
- [License & Support](#-license--support)

---

## 🌟 Overview

**The Co HR** platform is a modern, high-performance enterprise Next.js application designed to showcase comprehensive Human Capital Management (HCM) software, dedicated Remote HR Services, and corporate ERP Upskilling programmes. Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript 5**, and **Tailwind CSS v4**, the application delivers a premium, fast, accessible, and secure user experience.

---

## ✨ Key Features

### 🏢 1. Core Services & ERP Modules
- **HR ERP Software**: Showcase of 14 integrated HCM modules (Payroll, Attendance, Recruitment, Performance Analytics, Digital Onboarding, Exit Management, ATS, and Compliance).
- **Remote HR Services**: Comprehensive virtual HR team capabilities, policy development, statutory compliance, and payroll coordination.
- **ERP Training & Upskilling**: Corporate workshops, admin certifications, and hybrid learning programs.

### 🛡️ 2. Integrated Image Protection System
- **Drag & Copy Prevention**: Prevents standard browser image dragging and casual right-click downloads via custom `ProtectedImage` component.
- **UI Seamlessness**: Embedded glassmorphic overlays and backdrop blurs to integrate media naturally into the UI.

### 📶 3. Network & Reliability Layer
- **Network Status Monitor**: Automatic detection of offline states and low-latency reconnection UI.
- **Global Loading State**: Elegant loading screens (`loading.tsx`) and fallback error boundaries (`global-error.tsx`, `not-found.tsx`).

### 📨 4. Automated Communication & Lead Capture
- **Contact Form Endpoint (`/api/contact`)**: Transactional email notification via Nodemailer with Brevo SMTP and fail-safe logging.
- **Newsletter Endpoint (`/api/newsletter`)**: Instant lead acquisition API.
- **Interactive Floating Widgets**: One-click WhatsApp direct chat and persistent mobile CTA drawer.

### 🔍 5. Complete Search Engine Optimization (SEO)
- **JSON-LD Schema Markup**: Dynamic Organization, Service, and Breadcrumb schemas across pages.
- **Dynamic OpenGraph & Twitter Cards**: High-resolution `og-image.jpg` with full social metadata.
- **Automated XML Sitemap & Robots.txt**: Native Next.js `/sitemap.xml` and `/robots.txt` generation.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16.3.5](https://nextjs.org/) (App Router + Turbopack)
- **Library**: [React 19.2.8](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [Class Variance Authority](https://cva.style/docs)
- **UI Components**: Radix UI Primitives (`@radix-ui/react-slot`, `@radix-ui/react-label`) & Lucide React Icons
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & Tailwind Animate
- **Form Validation & Mailer**: [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/), & [Nodemailer](https://nodemailer.com/)

---

## 📁 Project Architecture

```text
thecohr/
├── app/                        # Next.js App Router Page Routes & API Endpoints
│   ├── about/                  # About Us Page (/about)
│   ├── api/                    # Serverless API Routes
│   │   ├── contact/            # Contact Form Endpoint
│   │   └── newsletter/         # Newsletter Endpoint
│   ├── contact/                # Contact Us Page (/contact)
│   ├── privacy-policy/         # Privacy Policy Page
│   ├── services/               # Core Services Page (/services)
│   ├── terms-of-service/       # Terms of Service Page
│   ├── thank-you/              # Thank You Confirmation Page
│   ├── global-error.tsx        # Global Error Boundary
│   ├── globals.css             # Tailored Global Design Tokens & Styles
│   ├── layout.tsx              # Root Layout & Global Metadata
│   ├── loading.tsx             # Global Page Loader
│   ├── not-found.tsx           # Custom 404 Page
│   ├── robots.ts               # Dynamic Robots.txt
│   └── sitemap.ts              # Dynamic Sitemap XML Generator
├── components/                 # Reusable UI & Layout Components
│   ├── layout/                 # Main Navbar, Footer, and Client Widgets
│   ├── sections/               # Hero, Services, Values, Stats, and CTA Sections
│   ├── seo/                    # JSON-LD Schema Generator
│   └── ui/                     # ProtectedImage, FadeIn, Buttons, Sheet, Banner
├── lib/                        # Shared Utilities & Master Content Constants
│   ├── content.ts              # Centralized Brand & Site Copy
│   └── utils.ts                # Class merging & helper functions
├── public/                     # Static Assets
│   ├── fav.svg                 # Vector Favicon
│   ├── fav.png                 # Favicon Fallback
│   ├── logo.png                # Brand Logo
│   ├── og-image.jpg            # Social Share Banner
│   └── images/                 # Compressed WebP & JPG Section Images
├── .env.example                # Environment Variable Template
├── next.config.ts              # Next.js Server & Optimization Config
├── package.json                # Project Dependencies & Build Scripts
└── tsconfig.json               # TypeScript Compiler Configuration
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js 18.x or higher** installed.

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/SIVAGORAM/thecohr.git
cd thecohr
npm install
```

### 3. Setup Environment Variables
Create a `.env.local` file by copying the template:
```bash
cp .env.example .env.local
```

Fill in your SMTP credentials in `.env.local`:
```env
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_smtp_user
SMTP_PASSWORD=your_smtp_password
EMAIL_TO=info@thecohr.com
EMAIL_FROM=noreply@thecohr.com
```

### 4. Run Development Server
Start the Next.js development server with Turbopack:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local development server with Next.js Turbopack |
| `npm run build` | Compiles production bundle and runs TypeScript type checks |
| `npm run start` | Launches built production server locally |
| `npm run lint` | Runs ESLint code quality analysis |

---

## ⚡ SEO & Performance Benchmarks

- **Core Web Vitals**: Optimized for fast First Contentful Paint (FCP) and Largest Contentful Paint (LCP).
- **Responsive Images**: Next.js Image Optimization with custom sizes, WebP fallback, and eager priority loading for above-the-fold assets.
- **Production Bundle**: All 14 routes statically pre-rendered in `<1.5s`.

---

## 🌐 Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub / GitLab.
2. Import the repository into [Vercel](https://vercel.com/new).
3. Add Environment Variables from `.env.example` in Vercel Project Settings.
4. Deploy! Next.js will automatically detect settings and output an optimized edge application.

---

## 📄 License & Contact

© 2026 **The Co HR**. All Rights Reserved.  
For business inquiries or technical assistance:
- **Email**: [info@thecohr.com](mailto:info@thecohr.com)
- **Phone**: +91 90197 24365
- **Location**: Hyderabad, Telangana, India
