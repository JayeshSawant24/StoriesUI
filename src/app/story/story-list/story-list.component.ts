import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { StoryServiceService } from 'src/app/services/story-service.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {

    storyList: any;
    totalPages: number = 1;
    pages: number[] = [];
    itemsPerPage: number = 20;
    searchText: string = "";

    constructor(private router: Router, private storyService: StoryServiceService, private spinner: NgxSpinnerService){}

    ngOnInit(): void {
      this.getStories(1);
    }

    getStories(pageNumber:number){
      this.showSpinner();
      this.storyService.getStories(pageNumber, this.itemsPerPage).subscribe((data:any) => {
        this.storyList = data.storiesList;
        this.pages = [];
        this.totalPages = data.totalStories/this.itemsPerPage;
        for (let i = 1; i <= this.totalPages; i++) {
          this.pages.push(i);
        }
        this.hideSpinner();
      },
      (err:any) => { 
          this.hideSpinner();
      });
    }

    getPageData(pageNumber: number){
        this.getStories(pageNumber);
    }

    goToStories(story: any){
      this.router.navigate(['/storyDetail', story.id ]);
    }

    get filteredStories(){
      return this.storyList?.filter((x:any) => x.title.toLowerCase().includes(this.searchText.toLowerCase()));
    }

    showSpinner() {
      this.spinner.show();
    }
  
    hideSpinner() {
      this.spinner.hide();
    }
}
