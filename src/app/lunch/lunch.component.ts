import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { LunchService } from './lunch.service';
import {} from 'googlemaps';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {
  restraunts: any;
  restraunt: any;
  closeResult: string;
  @ViewChild('sidenav', {static: false}) sidenav;
  @ViewChild('map', {static:false}) mapElement: ElementRef;
  map: google.maps.Map;
    
  constructor(private service: LunchService, private modalService: NgbModal) { }

  ngOnInit() {
    this.service.getRestrauntDetails().subscribe(res => {
      this.restraunts = res;
    });
  }
  openDrawer(rest){
    this.restraunt = rest;
    const mapProperties = {
      center: new google.maps.LatLng(this.restraunt.location.lat, this.restraunt.location.lng),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
 };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  }

open(rest) {
  this.restraunt = rest;
  const modalRef = this.modalService.open(NgbdModalContent);
  modalRef.componentInstance.restraunt = this.restraunt;
}
}
@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './ngbdmodalcontent.html',
  styleUrls: ['./lunch.component.css']

})
export class NgbdModalContent {
@Input()restraunt: any;
  constructor(public activeModal: NgbActiveModal) {}
  @ViewChild('map', {static:false}) mapElement: ElementRef;
  map: google.maps.Map;
  ngAfterViewInit() {
    console.log(this.restraunt);
    console.log(this.mapElement);
  const mapProperties = {
    center: new google.maps.LatLng(this.restraunt.location.lat, this.restraunt.location.lng),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
  this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);

}
}
