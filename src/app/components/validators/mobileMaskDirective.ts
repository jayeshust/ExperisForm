import { Directive, HostListener } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
  selector: "[formControlName][mobileMask]"
})
export class MobileMaskDirective {
  constructor(public ngControl: NgControl) {}
  // or simplier add dashes US pattern mode
  @HostListener("input", ["$event"])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    let trimmed = input.value.replace(/\s+/g, "");

    if (trimmed.length > 14) {
      trimmed = trimmed.substr(0, 14);
    }

    trimmed = trimmed.replace(/[-()]/g, "");

    let numbers = [];
   
    let numberFormated = (trimmed.length>3) ? "("+trimmed.substr(0, 3)+")":trimmed;
    numbers.push(numberFormated);
    if (trimmed.substr(3, 3) !== "") numbers.push(trimmed.substr(3, 3));
    if (trimmed.substr(6, 4) != "") numbers.push(trimmed.substr(6, 4));
    input.value = numbers.join("-");
  }
}
