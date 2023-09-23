import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


// ------------------------------------------------

//instructions to run this project on local system
// to run this project on local system just comment above code from line 1 to 10 and 
// comment hosted live link ex. https://book-store-server-05l0.onrender.com/ 
// and uncomment http://localhost:3000 this and use short url everywhere you make request 
// ex. "/all-books" its correct and "http://localhost:3000/all-books" its not correct




// // const baseurl = "http://localhost:3000";
// const baseurl = "https://book-store-server-05l0.onrender.com/";

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//     proxy: {
//       "/all-books": baseurl, // THIS IS BACKEND'S URL,  THE FRONTEND'S URL IS FROM -> http://localhost:5173
//       "/single-book": baseurl, // THIS IS BACKEND'S URL,  THE FRONTEND'S URL IS FROM -> http://localhost:5173
//       "/register-user": baseurl, // THIS IS BACKEND'S URL,  THE FRONTEND'S URL IS FROM -> http://localhost:5173
//       "/login-user": baseurl, // THIS IS BACKEND'S URL,  THE FRONTEND'S URL IS FROM -> http://localhost:5173
//       "/user-auth": baseurl, // THIS IS BACKEND'S URL,  THE FRONTEND'S URL IS FROM -> http://localhost:5173
//       "/logout-user": baseurl, // THIS IS BACKEND'S URL,  THE FRONTEND'S URL IS FROM -> http://localhost:5173
//       "/add-to-wishlist": baseurl, // THIS IS BACKEND'S URL,  THE FRONTEND'S URL IS FROM -> http://localhost:5173
//       "/remove-from-wishlist": baseurl, // THIS IS BACKEND'S URL,  THE FRONTEND'S URL IS FROM -> http://localhost:5173
//       "/add-to-cart": baseurl, // THIS IS BACKEND'S URL,  THE FRONTEND'S URL IS FROM -> http://localhost:5173
//       "/remove-from-cart": baseurl, // THIS IS BACKEND'S URL,  THE FRONTEND'S URL IS FROM -> http://localhost:5173
//       "/move-to-cart": baseurl, // THIS IS BACKEND'S URL,  THE FRONTEND'S URL IS FROM -> http://localhost:5173
//       "/subscribe-newsletter": baseurl, // THIS IS BACKEND'S URL,  THE FRONTEND'S URL IS FROM -> http://localhost:5173
//       "/orders": baseurl, // THIS IS BACKEND'S URL,  THE FRONTEND'S URL IS FROM -> http://localhost:5173
//       "/increase-cart-quantity": baseurl, // THIS IS BACKEND'S URL,  THE FRONTEND'S URL IS FROM -> http://localhost:5173
//       "/decrease-cart-quantity": baseurl, // THIS IS BACKEND'S URL,  THE FRONTEND'S URL IS FROM -> http://localhost:5173
//       "/get-all-orders": baseurl, // THIS IS BACKEND'S URL,  THE FRONTEND'S URL IS FROM -> http://localhost:5173
//     },
//   },
//   plugins: [react()],
// });
