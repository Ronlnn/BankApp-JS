import { AboutUs } from '@/components/screens/about-us/about_us_component';
import { Auth } from '@/components/screens/auth/auth_component';
import { Home } from '@/components/screens/home/home_component';

export const ROUTES = [
	{
		path: '/',
		component: Home,
	},
	{ path: 'auth', component: Auth },
	{
		path: '/about-us',
		component: AboutUs,
	},
];
