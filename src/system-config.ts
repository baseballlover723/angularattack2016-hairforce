/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'firebase': 'vendor/firebase/lib/firebase-web.js',
  'angularfire2': 'vendor/angularfire2'
};

/** User packages configuration. */
const packages: any = {
  angularfire2: {
    defaultExtension: 'js',
    main: 'angularfire2.js'
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/navbar',
  /** @cli-barrel */
];

const cliSystemConfigPackages = {
  "materialize": {
    "format": "global",
    "main": "dist/js/materialize",
    "defaultExtension": "js"
  },
  "angular2-materialize": {
    "main": "dist/index",
    "defaultExtension": "js"
  }
};


barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js',

    // Materialize vendor mappings
    "materialize": "vendor/materialize-css",
    "angular2-materialize": "vendor/angular2-materialize",
    "jquery": "vendor/jquery"
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
