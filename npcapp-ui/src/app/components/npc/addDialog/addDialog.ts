import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject, Component } from '@angular/core';
import { Npc } from 'src/app/beans/Npc';

@Component({
    selector: 'add-dialog',
    templateUrl: 'addDialog.html',
    styleUrls: ['../../../app.component.css']
})
export class AddDialog {

    newNpc = new Npc();

    constructor(public dialogRef: MatDialogRef<AddDialog>) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}