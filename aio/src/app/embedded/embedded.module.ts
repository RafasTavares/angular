import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

import { ContributorService } from './contributor/contributor.service';
import { CopierService } from 'app/shared/copier.service';
import { PrettyPrinter } from './code/pretty-printer.service';

// Any components that we want to use inside embedded components must be declared or imported here
// It is not enough just to import them inside the AppModule

// Reusable components (used inside embedded components)
import { MatIconRegistry, MatIconModule, MatSnackBarModule, MatTabsModule } from '@angular/material';
import { CodeComponent } from './code/code.component';
import { SharedModule } from 'app/shared/shared.module';

// Embedded Components
import { ApiListComponent } from './api/api-list.component';
import { CodeExampleComponent } from './code/code-example.component';
import { CodeTabsComponent } from './code/code-tabs.component';
import { ContributorListComponent } from './contributor/contributor-list.component';
import { ContributorComponent } from './contributor/contributor.component';
import { CurrentLocationComponent } from './current-location.component';
import { FileNotFoundSearchComponent } from './search/file-not-found-search.component';
import { IconComponent } from './icon/icon.component';
import { LiveExampleComponent, EmbeddedPlunkerComponent } from './live-example/live-example.component';
import { ResourceListComponent } from './resource/resource-list.component';
import { ResourceService } from './resource/resource.service';
import { TocComponent } from './toc/toc.component';

/** Components that can be embedded in docs
 * such as CodeExampleComponent, LiveExampleComponent,...
 */
export const embeddedComponents: any[] = [
  ApiListComponent, CodeExampleComponent, CodeTabsComponent, ContributorListComponent,
  CurrentLocationComponent, FileNotFoundSearchComponent, IconComponent, LiveExampleComponent,
  ResourceListComponent, TocComponent
];

/** Injectable class w/ property returning components that can be embedded in docs */
export class EmbeddedComponents {
  components = embeddedComponents;
}

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatSnackBarModule,
    MatTabsModule,
    SharedModule
  ],
  declarations: [
    embeddedComponents,
    CodeComponent,
    ContributorComponent,
    EmbeddedPlunkerComponent
  ],
  exports: [
    TocComponent
  ],
  providers: [
    ContributorService,
    CopierService,
    EmbeddedComponents,
    PrettyPrinter,
    ResourceService
  ],
  entryComponents: [ embeddedComponents ]
})
export class EmbeddedModule {
  constructor(sanitizer: DomSanitizer, iconRegistry: MatIconRegistry) {
    // Register icon URLs that are needed by embedded components
    iconRegistry.addSvgIcon('content_copy', sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/ic_content_copy.svg'));
    iconRegistry.addSvgIcon('link', sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/ic_link.svg'));
    iconRegistry.addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/search.svg'));
  }
}
