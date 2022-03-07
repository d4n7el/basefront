import { Component, OnInit } from '@angular/core';
import { dataComponentOutlet } from '@app/utils/dataComponentOutletDefault';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  constructor(project: dataComponentOutlet) {
    console.log(project.data);
  }

  ngOnInit(): void {}
}
