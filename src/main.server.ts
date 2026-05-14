import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Achte darauf, dass es AppComponent heißt (Standard)
import { config } from './app/app.config.server';

// Hier wird der 'context' als Argument hinzugefügt ( wegen dem NG0401 Fehler )
const bootstrap = (context: BootstrapContext) => bootstrapApplication(AppComponent, config, context);

export default bootstrap;
