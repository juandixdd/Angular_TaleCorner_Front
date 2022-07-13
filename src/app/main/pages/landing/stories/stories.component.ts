import { Component, OnInit } from '@angular/core';
import { StoryService } from 'src/app/main/services/story/story.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  rows: any;

  constructor(private storyService: StoryService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.storyService.getData().subscribe(
      (res: any) => {
        this.rows = res;
        console.log(this.rows)
      }
    )
  }

}
