import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryComponent } from './story/story.component';
import { StoryDetailComponent } from './story/story-detail/story-detail.component';

const routes: Routes = [
  {
    path: '',
    component: StoryComponent
  },
  {
    path: 'story',
    component: StoryComponent
  },
  {
    path: 'storyDetail/:id',
    component: StoryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
