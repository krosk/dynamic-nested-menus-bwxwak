import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild
} from "@angular/core";
import { MatMenu } from "@angular/material/menu";
import { Router } from "@angular/router";
import { TemplateTree } from "../WellLogTemplate";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "template-selector-item",
  templateUrl: "./template-selector-item.component.html",
  styleUrls: ["./template-selector-item.component.scss"]
})
export class TemplateSelectorItemComponent implements OnInit {
  @Input() items: TemplateTree[];
  @Input() name: string;
  @ViewChild("childMenu") public childMenu: MatMenu;

  constructor(public router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("template-selector-item", changes);
    // this.cdr.detectChanges();
  }
}
