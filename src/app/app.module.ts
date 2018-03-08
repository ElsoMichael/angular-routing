import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './services/contact-services';
import { ContactOverviewComponent } from './contact-overview/contact-overview.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

const routes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'contact/:id', component: ContactComponent,
    children: [
      { path: '', component: ContactOverviewComponent },
      { path: 'edit', component: ContactEditComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyAboutComponent,
    ContactListComponent,
    ContactComponent,
    ContactOverviewComponent,
    ContactEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
