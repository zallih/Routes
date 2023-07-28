import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit{

  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router  
  ){

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      res => console.log(res['id'], res['username'], res)
    )

    setInterval(() => {
      // this.router.navigate(['404']);
      // this.router.navigateByUrl('404');
    }, 5000)
  }
}
