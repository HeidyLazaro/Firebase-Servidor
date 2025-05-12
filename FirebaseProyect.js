const admin = require('firebase-admin');
const serviceAccount = require('./movil2025-dfbee-firebase-adminsdk-fbsvc-291fea7b93.json'); // Ruta a tu archivo JSON de clave

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const registrationToken = 'eP9uRsBPRtyqQkNLE6fdAA:APA91bEHFU_rADl9Nk4qkSRGa8D1vmdTzl-aP5kPjMwX1ll9LxV9nQGhgu7OFlZqutnt__iSPRY3nfd3K_5_8lIOQglumRDQN8gISjA17tMPgNiZUQ_9uAQ';  // Reemplaza con el token del dispositivo

const message = {
  notification: {
    title: 'Prueba Firebase',
    body: 'Prueba Recibida'
  },
  token: registrationToken 
};

admin.messaging().send(message)
  .then((response) => {
    console.log('Successfully sent message:', response);
 })
  .catch((error) => {
    console.log('Error sending message:', error);
  });
