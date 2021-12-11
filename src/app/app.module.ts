import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CounterComponent } from './components/counter/counter.component';
import { CounterButtonComponent } from './components/counter-button/counter-button.component';
import { CounterOutputComponent } from './components/counter-output/counter-output.component';
import { MaterialModule } from './shared/material/material.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { PostsListComponent } from './components/posts/posts-list/posts-list.component';
import { appReducer } from './store/app.state';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditPostComponent } from './components/posts/edit-post/edit-post.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/common/header/header.component';
import { AboutComponent } from './components/about/about.component';






@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonComponent,
    CounterOutputComponent,
    PostsListComponent,
    AddPostComponent,
    EditPostComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
