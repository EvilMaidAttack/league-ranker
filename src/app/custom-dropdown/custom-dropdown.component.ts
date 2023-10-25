import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { regionData } from '../common/appconfig';

@Component({
  selector: 'custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.css']
})
export class CustomDropdownComponent {
  isDropdownOpen = false;
  selectedOption = "Region ...";
  @Output("selectedOptionEvent") selectedOptionEvent = new EventEmitter()
  regionData = regionData


  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(regionKey: string) {
    this.selectedOptionEvent.emit(regionKey);
    this.selectedOption = regionData[regionKey];
    this.isDropdownOpen = false;
  }

  onKeyDown(event: KeyboardEvent){
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

}
