<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-analytics.js"></script>


        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyBuCdCBVgVnjG7q-b5egL-99-6dasfX0Ms",
            authDomain: "login-authentication-d517b.firebaseapp.com",
            databaseURL: "https://login-authentication-d517b.firebaseio.com",
            projectId: "login-authentication-d517b",
            storageBucket: "login-authentication-d517b.appspot.com",
            messagingSenderId: "1051001711710",
            appId: "1:1051001711710:web:6ec93907431013465f18cf",
            measurementId: "G-QXV42JJVEL"
        };
        // Initialize Firebase
            firebase.initializeApp(firebaseConfig); 
            firebase.analytics();
        
            let loginForm = document.getElementById('login_form');
            const formData = new FormData(loginForm);
            console.log(formData);


