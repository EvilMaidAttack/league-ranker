import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.css']
})
export class CustomDropdownComponent {
  isDropdownOpen = false;
  selectedOption = "EUW";
  @Output("selectedOptionEvent") selectedOptionEvent = new EventEmitter()

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: string) {
    this.selectedOptionEvent.emit(option);
    this.selectedOption = option;
    this.isDropdownOpen = false;
  }

  onKeyDown(event: KeyboardEvent){
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

}
