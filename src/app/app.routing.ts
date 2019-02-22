import { Routes, RouterModule } from '@angular/router';
// import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './views/user/login/login.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {RegisterComponent} from './views/user/register/register.component';
import {WebsiteListComponent} from './views/website/website-list/website-list.component';
import {WebsiteNewComponent} from './views/website/website-new/website-new.component';
import {WebsiteEditComponent} from './views/website/website-edit/website-edit.component';
import {PageListComponent} from './views/page/page-list/page-list.component';
import {PageNewComponent} from './views/page/page-new/page-new.component';
import {PageEditComponent} from './views/page/page-edit/page-edit.component';
import {WidgetListComponent} from './views/widget/widget-list/widget-list.component';
import {WidgetChooserComponent} from './views/widget/widget-chooser/widget-chooser.component';
import {WidgetHeadingComponent} from './views/widget/widget-edit/widget-heading/widget-heading.component';
import {WidgetImageComponent} from './views/widget/widget-edit/widget-image/widget-image.component';
import {WidgetYoutubeComponent} from './views/widget/widget-edit/widget-youtube/widget-youtube.component';
import {AppComponent} from "./app.component";

const appRoutes: Routes = [​
    { path: '', component: AppComponent},
    { path: 'login', component: LoginComponent },
    { path: 'user/:uid', component: ProfileComponent },​
    { path: 'register', component: RegisterComponent },
    { path: 'user/:uid/website', component: WebsiteListComponent},
    { path: 'user/:uid/website/new', component: WebsiteNewComponent},
    { path: 'user/:uid/website/:wid', component: WebsiteEditComponent},
    { path: 'user/:uid/website/:wid/page', component: PageListComponent},
    { path: 'user/:uid/website/:wid/page/new', component: PageNewComponent},
    { path: 'user/:uid/website/:wid/page/:pid', component: PageEditComponent},
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: WidgetListComponent},
    { path: 'user/:uid/website/:wid/page/:pid/widget/chooser', component: WidgetChooserComponent},
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/heading', component: WidgetHeadingComponent},
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/image', component: WidgetImageComponent},
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/youtube', component: WidgetYoutubeComponent}
];​

export const routing = RouterModule.forRoot(appRoutes);
