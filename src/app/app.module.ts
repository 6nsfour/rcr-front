import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ResourceCardComponent } from './resource-card/resource-card.component';
import {FavoritesComponent} from "./favorites/favorites.component";
import { CreationComponent } from './creation/creation.component';
import { NgxEditorModule } from "ngx-editor";
import { NgSelectModule } from '@ng-select/ng-select';
import { ResourceViewPanelComponent } from './resource-view-panel/resource-view-panel.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';
import { CommentsPanelComponent } from './comments-panel/comments-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    ResourceCardComponent,
    CreationComponent,
    ResourceViewPanelComponent,
    FavoritesComponent,
    ProfileComponent,
    ChatComponent,
    CommentsPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxEditorModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
