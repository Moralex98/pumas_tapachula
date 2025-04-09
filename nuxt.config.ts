// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/firebase'
  ],
  firebase: {
    config: {
      apiKey: 'tu-api-key',
      authDomain: 'tu-proyecto.firebaseapp.com',
      projectId: 'tu-proyecto',
      // ... otras configuraciones de Firebase
      storageBucket: 'tu-proyecto.appspot.com',
      messagingSenderId: 'tu-sender-id',
      appId: 'tu-app-id'
    },
    services: {
      auth: true
      // Puedes añadir otros servicios de Firebase aquí
      // firestore: true,
      // storage: true,
      // messaging: true,
    }
  }
})