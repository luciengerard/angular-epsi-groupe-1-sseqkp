import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { TagInterface } from '../core/interfaces/tag.interface';
import { AuthService } from '../core/services/auth.service';
import { ProfileService } from '../core/services/profile.service';
import { TagService } from '../core/services/tag.service';

@Component({
  selector: 'admin-root',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent{
  tags: TagInterface[];
  name : string;

  constructor(
    private tagService: TagService,
  ) {
     this.tagService.getTagsAdmin().subscribe(result => {
       this.tags = result;
     });
    console.log(this.tags);
  }


  Search(){
    if(this.name != ""){
    this.tags = this.tags.filter(res => {
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
    if (this.name == ""){
      this.tagService.getTagsAdmin().subscribe(result => {
        this.tags = result;
      });
    }
  }
}
