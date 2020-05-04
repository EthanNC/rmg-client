import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbListModule, NbCardModule, NbActionsModule, NbUserModule, NbTabsetModule, NbStepperModule, NbRadioModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ServersComponent } from './servers/servers.component';
import { ServerDetailComponent } from './server-detail/server-detail.component';
import { AddGuildComponent } from './add-guild/add-guild.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerDetailComponent,
    AddGuildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbListModule,
    NbCardModule,
    NbActionsModule,
    NbUserModule,
    NbTabsetModule,
    NbStepperModule,
    FormsModule,
    ReactiveFormsModule,
    NbRadioModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
