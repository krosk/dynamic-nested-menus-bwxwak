import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { A11yModule } from "@angular/cdk/a11y";
import { BidiModule } from "@angular/cdk/bidi";
import { ObserversModule } from "@angular/cdk/observers";
import { OverlayModule } from "@angular/cdk/overlay";
import { PlatformModule } from "@angular/cdk/platform";
import { PortalModule } from "@angular/cdk/portal";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CdkStepperModule } from "@angular/cdk/stepper";
import { CdkTableModule } from "@angular/cdk/table";
import { FlexLayoutModule } from "@angular/flex-layout";
import { TemplateSelectorItemComponent } from "./template-selector-item/template-selector-item.component";
import { AppRoutingModule } from "./app-routing.module";
import { TemplateSelectorComponent } from "./template-selector/template-selector.component";
import { AppComponent } from "./app.component";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";

/**
 * NgModule that includes all Material modules that are required.
 */
@NgModule({
  exports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    ScrollingModule,
    CdkStepperModule,
    CdkTableModule,

    // Material
    MatIconModule,
    MatMenuModule
  ]
})
export class MaterialModule {}

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TemplateSelectorComponent,
    TemplateSelectorItemComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
