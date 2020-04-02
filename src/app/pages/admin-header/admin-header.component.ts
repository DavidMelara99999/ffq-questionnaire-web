import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {
  TITLE = 'FFQR Admin Portal';
  router: Router;

  constructor(router: Router)
  {
    this.router = router;
  }

  logout() {
    this.router.navigate(['/login']);
}
 
}

