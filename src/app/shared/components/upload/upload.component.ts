import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ETypeView,
  EDirectionView,
} from '@shared/components/upload/models/typeUpload';
import { UploadService } from '@shared/components/upload/services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  constructor(private uploadService: UploadService) {}

  @Input() typeView: ETypeView | undefined;
  @Input() typeDirection: EDirectionView = EDirectionView.HORIZONTAL;
  @Input() urlUpload: string = '';
  @Input() autoUpload: boolean = false;
  @Input() buttonUpload: boolean = false;
  @Input() attrAcept: string =
    'application/excel,application/pdf,image/png,application/msword,application/vnd.ms-excel';
  @Output() formDataUpload = new EventEmitter();

  progressInfos: any[] = [];
  progressColors: any[] = [];
  message: string[] = [];

  files: File[] = [];

  ngOnInit(): void {}

  changeFile = (event: any) => {
    this.files = [...this.files, ...event?.target?.files];
    if (!this.urlUpload) {
      this.formDataUpload.emit(event?.target?.files);
    } else if (this.autoUpload) {
    }

    if (this.autoUpload) {
      this.uploadFile();
    }
  };

  uploadFile = () => {
    this.files.forEach((file, index) => {
      this.upload(index, file);
    });
  };

  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };
    if (file) {
      this.uploadService
        .upload(file, this.urlUpload)
        .subscribe((event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(
              (100 * event.loaded) / event.total
            );
          } else if (event instanceof HttpResponse) {
            const msg = 'Uploaded the file successfully: ' + file.name;
            this.message.push(msg);
            this.progressColors[idx] = 'ok';
          } else {
            this.progressColors[idx] = 'error';
          }
        });
    }
  }
}
