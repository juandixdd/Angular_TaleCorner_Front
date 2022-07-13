import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/main/services/author/author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  rows: any;

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors(){
    this.authorService.getData().subscribe(
      (res: any) => {
        this.rows = res;
        console.log(this.rows)
      }
    )
  }

}
