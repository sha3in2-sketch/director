# Portfolio React - Cute Angry Bird

A production-ready portfolio site built with Vite + React, Tailwind CSS, and Framer Motion.
Theme: Tech-Noir / Neo-Glass.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm

### Installation

1.  Clone the repository:
    ```bash
    git clone <your-repo-url>
    cd portfolio-react
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🛠️ Build & Deploy

### Build for Production
```bash
npm run build
```
The output will be in the `dist` folder.

### Deploy to Vercel (Recommended)

1.  Push this code to a GitHub repository.
2.  Go to [Vercel](https://vercel.com) and sign up/login.
3.  Click **"Add New..."** -> **"Project"**.
4.  Import your GitHub repository.
5.  Vercel will automatically detect Vite.
6.  Click **"Deploy"**.

### Custom Domain
1.  In Vercel Project Settings -> Domains.
2.  Add your custom domain (e.g., `yourname.com`).
3.  Follow the DNS configuration instructions provided by Vercel (usually adding an A record or CNAME).

## 📧 Contact Form Setup (EmailJS)

To make the contact form functional:

1.  Sign up at [EmailJS](https://www.emailjs.com/).
2.  Create a new Email Service (e.g., Gmail).
3.  Create an Email Template.
4.  Get your **Service ID**, **Template ID**, and **Public Key**.
5.  Create a `.env` file in the root directory:
    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```
6.  Update `src/components/Contact.jsx` to use these variables:
    ```javascript
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    ```

## 🖼️ Content Replacement Guide

-   **Profile Image**: Replace `src/assets/profile.png` with your photo.
-   **Resume**: Replace `src/assets/resume.pdf` with your actual PDF.
-   **Projects**: Edit `src/data/projects.js`. Add your own projects and update images in `src/assets/`.
-   **Text/Copy**: Update `src/data/projects.js` (profile object) and component text in `src/components/`.

## 🎨 Customization

-   **Colors**: Edit `src/index.css` variables (`--accent-primary`, `--bg-primary`, etc.).
-   **Theme**: Default is Dark. Toggle logic is in `src/components/ThemeToggle.jsx`.

## 📄 License

MIT
