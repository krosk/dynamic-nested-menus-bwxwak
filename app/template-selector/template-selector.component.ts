import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from "@angular/core";
import { TemplateTree } from "../WellLogTemplate";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "template-selector",
  templateUrl: "template-selector.component.html",
  styleUrls: ["template-selector.component.scss"]
})
export class TemplateSelectorComponent implements OnInit, OnChanges {
  @Input() tree: TemplateTree;

  @Output() templateChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("template-selector", changes);
    // this.cdr.detectChanges();
  }

  ngOnInit(): void {}
}
