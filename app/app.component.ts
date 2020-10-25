import { VERSION } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit
} from "@angular/core";
import { TemplateTree } from "./WellLogTemplate";

@Component({
  selector: "material-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  templateTree: TemplateTree = {
    displayName: "AngularMix",
    iconName: "close",
    children: [
      {
        displayName: "Speakers",
        iconName: "group"
      }
    ]
  };

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    console.log(VERSION);
    setTimeout(() => {
      this.setTemplate();
    }, 5000);
  }

  onTemplateChange(templateId: string): void {
    console.log("onTemplateChange");
  }

  setTemplate(): void {
    this.templateTree = {
      displayName: "AngularMix",
      iconName: "close",
      children: [
        {
          displayName: "Speakers",
          iconName: "group",
          children: [
            {
              displayName: "Michael Prentice",
              iconName: "person",
              route: "michael-prentice",
              children: [
                {
                  displayName: "Delight your Organization",
                  iconName: "star_rate",
                  route: "material-design"
                }
              ]
            },
            {
              displayName: "Stephen Fluin",
              iconName: "person",
              route: "stephen-fluin",
              children: [
                {
                  displayName: "What's up with the Web?",
                  iconName: "star_rate",
                  route: "what-up-web"
                }
              ]
            },
            {
              displayName: "Mike Brocchi",
              iconName: "person",
              route: "mike-brocchi",
              children: [
                {
                  displayName: "My ally, the CLI",
                  iconName: "star_rate",
                  route: "my-ally-cli"
                },
                {
                  displayName: "Become an Angular Tailor",
                  iconName: "star_rate",
                  route: "become-angular-tailer"
                }
              ]
            }
          ]
        },
        {
          displayName: "Sessions",
          iconName: "speaker_notes",
          children: [
            {
              displayName: "Delight your Organization",
              iconName: "star_rate",
              route: "material-design"
            },
            {
              displayName: "What's up with the Web?",
              iconName: "star_rate",
              route: "what-up-web"
            },
            {
              displayName: "My ally, the CLI",
              iconName: "star_rate",
              route: "my-ally-cli"
            },
            {
              displayName: "Become an Angular Tailor",
              iconName: "star_rate",
              route: "become-angular-tailer"
            }
          ]
        },
        {
          displayName: "Feedback",
          iconName: "feedback",
          route: "feedback"
        }
      ]
    };
    this.cdr.detectChanges();
  }

  /**/
}
