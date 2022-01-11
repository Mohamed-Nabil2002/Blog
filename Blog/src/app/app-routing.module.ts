import { CreateUpdatePostComponent } from './components/create-update-post/create-update-post.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"contact", component:ContactComponent},
  {path:"post/details/:id", component:PostDetailsComponent},
  {path:"create-update-post", component:CreateUpdatePostComponent},
  {path:"create-update-post/:id", component:CreateUpdatePostComponent},
  {path:"", redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
