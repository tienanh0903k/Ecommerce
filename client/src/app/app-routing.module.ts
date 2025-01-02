import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from './layout/app.layout.component';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                // Route chính cho người dùng
                {
                    path: '',
                    loadChildren: () =>
                        import('./modules/users/users.module').then(
                            (m) => m.UsersModule
                        ),
                },

                // Route chính cho admin
                {
                    path: 'admin',
                    component: AppLayoutComponent,
                    children: [
                        {
                            path: '',
                            loadChildren: () =>
                                import(
                                    './demo/components/dashboard/dashboard.module'
                                ).then((m) => m.DashboardModule),
                        },
                        {
                            path: 'uikit',
                            loadChildren: () =>
                                import(
                                    './demo/components/uikit/uikit.module'
                                ).then((m) => m.UIkitModule),
                        },
                        {
                            path: 'utilities',
                            loadChildren: () =>
                                import(
                                    './demo/components/utilities/utilities.module'
                                ).then((m) => m.UtilitiesModule),
                        },
                        {
                            path: 'documentation',
                            loadChildren: () =>
                                import(
                                    './demo/components/documentation/documentation.module'
                                ).then((m) => m.DocumentationModule),
                        },
                        {
                            path: 'blocks',
                            loadChildren: () =>
                                import(
                                    './demo/components/primeblocks/primeblocks.module'
                                ).then((m) => m.PrimeBlocksModule),
                        },
                        {
                            path: 'pages',
                            loadChildren: () =>
                                import(
                                    './demo/components/pages/pages.module'
                                ).then((m) => m.PagesModule),
                        },
                    ],
                },

                // Route cho auth (đăng nhập, đăng ký)
                {
                    path: 'auth',
                    loadChildren: () =>
                        import('./demo/components/auth/auth.module').then(
                            (m) => m.AuthModule
                        ),
                },

                // Route cho landing page
                {
                    path: 'landing',
                    loadChildren: () =>
                        import('./demo/components/landing/landing.module').then(
                            (m) => m.LandingModule
                        ),
                },

                // Route NotFound
                {
                    path: 'notfound',
                    component: NotfoundComponent,
                },

                // Wildcard Route - chuyển hướng đến NotFound
                {
                    path: '**',
                    redirectTo: 'notfound',
                },
            ],
            {
                scrollPositionRestoration: 'enabled', // Giữ lại vị trí cuộn
                anchorScrolling: 'enabled',          // Kích hoạt cuộn đến anchor
                onSameUrlNavigation: 'reload',       // Tải lại nếu truy cập cùng URL
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
