import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './pages/components/nav-bar/nav-bar.component';
import { ContentComponent } from './pages/content/content.component';
import { DropBoxComponent } from './pages/components/drop-box/drop-box.component';
import { LoginDropdownComponent } from './pages/components/login-dropdown/login-dropdown.component';
import { ProgramsComponent } from './pages/components/programs/programs.component';
import { SearchBarComponent } from './pages/components/search-bar/search-bar.component';
import { EuaComponent } from './pages/eua/eua.component';
import { FranceComponent } from './pages/france/france.component';
import { UkComponent } from './pages/uk/uk.component';
import { ItalyComponent } from './pages/italy/italy.component';
import { ProfileComponent } from './pages/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    NavBarComponent,
    ContentComponent,
    DropBoxComponent,
    LoginDropdownComponent,
    ProgramsComponent,
    SearchBarComponent,
    EuaComponent,
    FranceComponent,
    UkComponent,
    ItalyComponent,
    ProfileComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
