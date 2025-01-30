🚀 MERN Portfolio Project (TypeScript + Webpack)
A full-stack portfolio website built with the MERN (MongoDB, Express, React, Node.js) stack, using TypeScript for better type safety and Webpack for bundling and optimizing assets. This project is an enhanced version of a static portfolio, making it fully dynamic and manageable via an admin panel.


📌 Features
✅ Fully responsive design
✅ Admin panel to manage projects dynamically
✅ Contact form with email notifications
✅ Animations using AOS & GSAP
✅ Authentication with JWT
✅ Image upload and storage with Multer & Cloudinary
✅ Type safety with TypeScript


🛠 Technologies Used
🔹 Frontend (React + TypeScript + Webpack)
React.js + TypeScript → Component-based UI with type safety
React Router → Client-side navigation
Redux Toolkit / Context API → State management
Webpack → Bundling and asset optimization
Bootstrap / Tailwind CSS → UI Styling
AOS & GSAP → Animations
Typed.js → Typing effect

🔹 Backend (Node.js + Express + TypeScript + MongoDB)
Node.js + TypeScript → Strongly typed backend
Express.js → Backend framework
MongoDB & Mongoose → Database & ODM
JWT (jsonwebtoken) → Authentication
Bcrypt.js → Password hashing
Multer & Cloudinary → Image upload & storage
Nodemailer → Email notifications
Dotenv → Environment variable management

🔹 Dev Tools
Nodemon → Auto-restart server on changes
ESLint & Prettier → Code linting & formatting
TS-Node → Run TypeScript in Node.js


⚙️ Installation & Setup
🔹 1. Clone the repository
git clone https://github.com/your-username/portfolio_mern.git
cd portfolio_mern

🔹 2. Install dependencies
Frontend (React + TypeScript)
cd frontend
npm install
📌 Convert React to TypeScript

npm install --save-dev typescript @types/react @types/react-dom @types/node
Backend (Node.js + TypeScript)

cd ../backend
npm install
📌 Install TypeScript & TS utilities

npm install --save-dev typescript ts-node @types/express @types/node @types/jsonweb


🔹 3. Setup TypeScript Configuration
Frontend: Create frontend/tsconfig.json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"]
}

Backend: Create backend/tsconfig.json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src"]
}


🔹 4. Environment Variables
Create a .env file in the backend/ directory and configure:
PORT=8081
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password


🔹 5. Run the project
Start Backend
cd backend
npm run dev
📌 (Modify package.json for TypeScript support in backend)

"scripts": {
  "dev": "ts-node src/server.ts"
}

Start Frontend
cd frontend
npm start
🚀 Your app will be running at http://localhost:8080/


📌 Future Improvements
🔹 Blog section with CMS-like management
🔹 Dark mode support
🔹 Social media sharing features


📜 License
This project is licensed under the MIT License.


🙌 Contributions
Feel free to contribute by submitting a pull request! 🚀


📩 Need help? Feel free to reach out! 😊
