# TABLE
| name | master |

- https://www.gstatic.com/firebasejs/4.0.0/firebase.js

```html
<script src="https://www.gstatic.com/firebasejs/4.0.0/firebase.js"></script>
```

```javascript
 // Initialize Firebase
var config = {
    apiKey: "AIzaSyBsrrj0AJPUMJdAsbDwGpjXUommGARsX3A",
    authDomain: "master-708eb.firebaseapp.com",
    databaseURL: "https://master-708eb.firebaseio.com",
    projectId: "master-708eb",
    storageBucket: "master-708eb.appspot.com",
    messagingSenderId: "710566805426"
};
  firebase.initializeApp(config);
```

```bash
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

> Project Console: https://console.firebase.google.com/project/master-708eb/overview

> Hosting URL: https://master-708eb.firebaseapp.com

