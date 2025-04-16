
# CivicRoutes 🚧

**CivicRoutes** is a modern civic issue reporting platform built with **ReactJS**, allowing users to report local problems in their area. It connects citizens with authorities and promotes community engagement and problem resolution.

## 🌐 Live Demo

Hosted on [Netlify](https://civicroute.netlify.app/)  


---

## 🧠 Project Overview

**CivicRoutes** allows:
- Users to upload civic issues with **photo, description, and location**
- Authorities to **view, manage, and mark issues as solved**
- Users to add **feedback** on solved problems
- A **dashboard** for users and authorities

---

## 🛠️ Tech Stack

| Category            | Technology                          |
|---------------------|--------------------------------------|
| Frontend            | ReactJS, HTML5, CSS3                 |
| Backend/Database    | Firebase Realtime Database           |
| Deployment          | Netlify                              |
| Version Control     | Git, GitHub                          |
| Development Tool    | Visual Studio Code                   |

---

## 📁 Folder Structure

```
civic_route/
├── src/
│   ├── components_authority/
│   │   ├── AuthorityDashboard.jsx / AuthorityDashboard.css
│   │   ├── AuthorityUpdates.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx / header.css
│   │   ├── issueList.jsx / issueList.css
│   │   └── NewAnnouncement.jsx
│   ├── components_client/
│   │   ├── Announcements.jsx
│   │   ├── CitizenDashboard.jsx
│   │   ├── IssueForm.jsx
│   │   ├── Login.jsx / Login.css
│   │   ├── Navbar.jsx / nav.css
│   │   ├── UserDashboard.jsx
│   │   └── logo.png
│   ├── context/
│   │   └── UserContext.jsx
│   ├── pages/
│   │   ├── AuthorityPage.jsx
│   │   └── IssuesPage.jsx
│   ├── styles/
│   │   ├── Announcements.css
│   │   ├── IssueForm.css
│   │   ├── Login.css
│   │   ├── Navbar.css
│   │   └── UserDashboard.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
```

---

## 🚀 Features

- 🔐 **User & Authority Login**
- 📝 **Issue Reporting** with image and location
- 📷 **Live Feed** of ongoing issues
- 🛠️ **Admin Panel** to update issue statuses
- ✅ **Solved Issues Page** with feedback option
- 🔄 **Real-time Data Updates** with Firebase

---

## 📦 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sneha-Nahak/Civic_Route_Website
   cd civicroutes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the app**
   ```bash
   npm run dev
   ```

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

---

## 📩 Contact

**Developer:** 
-Sneha Nahak
-Anasbabu Meman  


---

## 🌟 Acknowledgements

- [Firebase](https://firebase.google.com/)
- [Netlify](https://www.netlify.com/)
- [ReactJS](https://react.dev/)
