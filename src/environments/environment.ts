// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    projectId: 'megj-a6b90',
    appId: '1:326413185288:web:270c313a3cb7241647fcbd',
    databaseURL: 'https://megj-a6b90-default-rtdb.firebaseio.com',
    storageBucket: 'megj-a6b90.appspot.com',
    apiKey: 'AIzaSyCZmxufGWYD-B772v3vbac3nIaLnXcEO6k',
    authDomain: 'megj-a6b90.firebaseapp.com',
    messagingSenderId: '326413185288',
    measurementId: 'G-HPSM5VTXTH',
  },
  backend: 'http://localhost:3000/',
  letextourl: 'https://api.letexto.com/v1/campaigns',
  letextokey: 'wnScP3MdEWFYSWOgKKr9KWoLHVytFq',
  letextosender: '0575806605',
  message: `Paiement du droit de 5000FCFA par OM ou WAVE au 0787041347.
Par western,RIA et MoneyGram avec les références ci dessous :
Nom: AKE
Prénoms : AUDREY MANUELA
Possibilité de payer pour le pack Gabaon à 20.000FCFA.
Veuillez laisser un message sur le numéro de paiement après que celui ci soit effectif.
Délai de Paiement : 12/02/2023 
  `,
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
