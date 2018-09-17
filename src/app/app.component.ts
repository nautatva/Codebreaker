import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public snackBar: MatSnackBar, private swUpdate: SwUpdate) {}
  title = 'NSS, IIT Bombay';

  ngOnInit() {
    /** Check for update */
    /* Show a prompt to update */
    this.swUpdate.available.subscribe(event => {
      const snackBarRef = this.snackBar.open(
        'New version available!',
        'Refresh',
        {
          duration: 60000
        }
      );

      /* On clicking refresh */
      snackBarRef.onAction().subscribe(() => {
        this.swUpdate.activateUpdate().then(() => document.location.reload());
      });
    });

    /* Check for new versions */
    this.swUpdate.checkForUpdate();
  }
}
