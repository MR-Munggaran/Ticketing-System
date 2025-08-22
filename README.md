<img width="1901" height="918" alt="image" src="https://github.com/user-attachments/assets/50e2b7f2-71b4-4a8c-9f0f-40e9bd737399" /># 🎟️ Ticketing System

Aplikasi **Ticketing System** berbasis web untuk manajemen event dan pembelian tiket.  
Proyek ini dibangun dengan arsitektur **frontend-backend terpisah**, menggunakan **Node.js (Express)** sebagai backend dan **React** sebagai frontend.  

---

## 📑 Daftar Isi
- [Fitur](#-fitur)
- [Teknologi](#-teknologi)
- [Struktur Proyek](#-struktur-proyek)
- [Instalasi](#-instalasi)
- [Menjalankan Aplikasi](#-menjalankan-aplikasi)
- [Environment Variables](#-environment-variables)
- [Endpoint API](#-endpoint-api)
- [Screenshots](#-screenshots)
- [Kontribusi](#-kontribusi)
- [Lisensi](#-lisensi)
- [Kontak](#-kontak)

---

## 🚀 Fitur
- 🔐 **Autentikasi & Otorisasi**
  - Registrasi, login, logout
  - Role **admin** & **user**

- 🎫 **Manajemen Tiket**
  - Membeli tiket event
  - Melihat tiket yang dimiliki
  - Validasi tiket (QR code / ID unik)

- 📅 **Manajemen Event**
  - Admin dapat membuat, mengedit, menghapus event
  - User dapat melihat daftar event

- 📊 **Dashboard Admin**
  - Statistik penjualan tiket
  - Daftar user & transaksi

- 🌐 **Frontend Responsif**
  - Dibangun dengan React
  - UI modern & mobile friendly

---

## 🛠️ Teknologi
### Frontend
- React + Vite
- TailwindCSS
- Axios (untuk komunikasi API)

### Backend
- Node.js + Express.js
- JWT (JSON Web Token) untuk autentikasi
- bcrypt untuk hashing password

### Database
- MongoDB / MySQL (pilih sesuai implementasi Anda)

### Tools
- Git & GitHub
- npm / yarn
- Postman (untuk testing API)

---

## 📂 Struktur Proyek
ticketing/
├── backend/ # Backend (Express.js)
│ ├── controllers/ # Logic pengolahan request
│ ├── models/ # Schema / ORM model
│ ├── utils/ 
│ ├── config/
│ ├── routes/ # Endpoint API
│ ├── middlewares/ # Middleware autentikasi & error handler
│ └── server.js # Entry point backend
│
└── frontend/ # Frontend (React + Vite)
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Halaman aplikasi
│ ├── hooks/ # Custom hooks
│ ├── context/ # Custom Context
│ └── App.jsx # Root component
└── index.html

## ⚙️ Instalasi

### 1. Clone Repo

git clone https://github.com/MR-Munggaran/ticketing.git
cd ticketing

### 2. Backend Setup
cd backend
npm install

### 3. Frontend Setup
cd ../frontend
npm install

### 4. Jalankan Backend
cd backend
npm run dev

### 5. Jalankan Frontend
cd frontend
npm run dev

## 📧 Kontak
GitHub: MR-Munggaran
Email: -

### Dashboard
![Dashboard Screenshot] (https://ctrlv.link/BhNQ)

### Halaman Event
![Event Page] (https://ctrlv.link/uErt) (https://ctrlv.link/ie7J)


