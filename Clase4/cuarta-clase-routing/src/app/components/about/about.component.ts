import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  activateRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      console.log('param', params);
    });
  }
}
