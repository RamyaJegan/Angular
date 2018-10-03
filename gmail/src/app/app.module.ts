import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StartedComponent } from './started/started.component';
import { SentComponent } from './sent/sent.component';
import { DraftsComponent } from './drafts/drafts.component';
import { MoreComponent } from './more/more.component';
import { InboxComponent } from './inbox/inbox.component';

@NgModule({
  declarations: [
    AppComponent,
    StartedComponent,
    SentComponent,
    DraftsComponent,
    MoreComponent,
    InboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
