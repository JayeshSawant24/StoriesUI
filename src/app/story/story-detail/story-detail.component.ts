import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoryServiceService } from 'src/app/services/story-service.service';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.css']
})
export class StoryDetailComponent implements OnInit{
    storyId: string = "0";
    storyDetails: any;

    constructor(private route: ActivatedRoute, private storyService: StoryServiceService){}

    ngOnInit(): void {
      this.storyId = this.route.snapshot.paramMap.get('id') ?? "0";
      this.getStoryDetails();
    }

    getStoryDetails() {
      console.log(this.storyId);
        if(this.storyId == "0")
        {

        }
        else {
            this.storyService.getStoryById(this.storyId).subscribe( (data: any) => {
              this.storyDetails = data;
            });
        }
    }

}
