import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
@Component({
  selector: "app-generic-dialog",
  templateUrl: "./generic-dialog.component.html",
  styleUrls: ["./generic-dialog.component.scss"]
})
export class GenericDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<GenericDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {}
  onCancelClick(): void {
    this.dialogRef.close();
  }
}
