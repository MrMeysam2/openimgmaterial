import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
  clicked = false;

  images = [
    {
      id: 1,
      src: 'image1.jpg',
      name: 'Pic 1',
    },
    {
      id: 2,
      src: 'image2.jpg',
      name: 'Pic 2',
    },
    {
      id: 3,
      src: 'image3.jpg',
      name: 'Pic 3',
    },
  ];

  openimg(img: any) {
    this.dialog.open(DialogComponent, {
      data: {
        imageinfo: {
          id: img.id,
          src: img.src,
          name: img.name,
        },
      },
    });
  }
}
