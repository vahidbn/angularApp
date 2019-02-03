import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../book.model';



@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
     categerurySlog='';
     image="";
     bookTitle="";
     Bookdesc="";
     bookPrice=""
    //------------------
    // Allbooks: Book[] = [
    //     new Book(1,1,'Roar! Roar!','first-Book','/assets/books/A-min.jpg',25,'Pro ei dicant oblique saperet, in sit iuvaret maiorum? Ancillae offendit mea eu, sea malis percipit et. Ad pro mucius omittantur, usu labore percipit in. Nec cu voluptatibus reprehendunt. Errem bonorum partiendo ad mei.\n' +
    //         '\n' +
    //         'Pro modo tibique te, te per veritus facilis. Id quis erant offendit sit. Ut mea nostrud habemus, sea sumo tacimates platonem ut. Et iudico aliquam pertinacia per, no utroque propriae usu. Ius ut graeci iuvaret, vel ex nisl eros assueverit. An quas partem quo, quo cu eripuit vulputate!'),
    //     new Book(2,2,'Say What?','Book-Num-2','/assets/books/B-min.jpg',55,'Eos omittam expetendis an, duo et assum dicunt saperet. Solum putant et sed. Usu probo diceret moderatius at. Ne vero tibique nam, et luptatum tractatos salutandi nec, id nam stet accusam. Qui ut doming contentiones!'),
    //     new Book(3,2,'Say Goodnight to the Sleepy Animals','Book-Num-3','/assets/books/C-min.jpg',45,'At vide mundi sed, qui ferri primis quodsi in, tamquam praesent pericula in sea. Cu sonet accusata principes his! Mea et fugit impetus dolorem? Te nec cibo tota invidunt, quem meliore ad sed.'),
    //     new Book(4,3,'Father Christmas And Me  ','Book-Num-4','/assets/books/D-min.jpg',65,'His ex diam paulo, et forensibus consetetur has. His nibh elit noster et, et pro mutat adhuc utroque, enim nibh error per in. Numquam sententiae ad eum? Sint cetero delicatissimi ei mei, ea menandri omittantur nam. Mei habeo tation ullamcorper id, vim dicant noster aliquando ei!'),
    // ]
    //-----------------
  constructor(private router: ActivatedRoute) {

  }

  ngOnInit() {
      this.categerurySlog = this.router.snapshot.params['storySlug'];

      // for (let i = 0; i < this.Allbooks.length; i++) {
      //      if (this.Allbooks[i]['slug'] ==this.categerurySlog )
      //      {
      //         this.image=this.Allbooks[i]['image'];
      //         this.bookTitle=this.Allbooks[i]['title'];
      //         this.Bookdesc=this.Allbooks[i]['desc'];
      //         this.bookPrice='$'+this.Allbooks[i]['price']+' USD';
      //      }
      // }
      window.scrollTo(0, 0)
  }

}
