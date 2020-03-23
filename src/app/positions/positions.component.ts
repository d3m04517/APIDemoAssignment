import { Component, OnInit } from '@angular/core';
import { Position } from '../data/Position';
import { PositionService } from '../data/position.service';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  positions: Position[];
  getPositionsSub: any;
  loadingError: boolean = false;

  constructor(private positionService: PositionService) { }

  ngOnInit() {
    this.getPositionsSub = this.positionService.getPositions().subscribe(positions => this.positions = positions, err => this.loadingError = err);
  }

  ngOnDestroy() {
    if (this.getPositionsSub != undefined) {
     this.getPositionsSub.unsubscribe();
    }
  }
}
