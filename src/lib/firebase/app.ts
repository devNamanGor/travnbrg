// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.12.0/firebase-analytics.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAgTtcpT7NjCIY_Vpy_chxg5yleos0zMrs',
	authDomain: 'travnbrg.firebaseapp.com',
	projectId: 'travnbrg',
	storageBucket: 'travnbrg.appspot.com',
	messagingSenderId: '707988007414',
	appId: '1:707988007414:web:fa05e03d33333bff01bfd7',
	measurementId: 'G-PTDKBETS60'
};

// Initialize Firebase and export app
export const App = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
