import { Component } from "@angular/core";

@Component({
   selector: 'app-post-list',
   templateUrl: './post-list.component.html',
   styleUrls: ['./post-list.component.css']

})

export class PostListComponent{
   // posts = [
   //    {title: 'First Post', content: 'This is the first post\'s content'},
   //    {title: 'Second Post', content: 'This is the Second post\'s content'},
   //    {title: 'Third Post', content: 'This is the Third post\'s content'},
   //    {title: 'Fourth Post', content: 'This is the Fourth post\'s content'}
   // ];
   posts = [];
}