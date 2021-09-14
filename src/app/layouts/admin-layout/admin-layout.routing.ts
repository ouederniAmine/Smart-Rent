import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { MapsComponent } from '../../maps/maps.component';
import { ClientVerificationComponent } from '../../client-verification/client-verification.component';
import { PropertyInfosComponent } from 'app/property-infos/property-infos.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'propertyInfos/:id',      component: PropertyInfosComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'clientVerification',        component: ClientVerificationComponent },
];
