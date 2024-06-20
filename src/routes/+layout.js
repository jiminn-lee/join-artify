// import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
// import { createBrowserClient, isBrowser, parse } from '@supabase/ssr';

// export const load = async ({ fetch, data }) => {
// 	const supabase = createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
// 		global: {
// 			fetch
// 		},
// 		cookies: {
// 			get(key) {
// 				if (!isBrowser()) {
// 					return JSON.stringify(data.session);
// 				}

// 				const cookie = parse(document.cookie);
// 				return cookie[key];
// 			}
// 		}
// 	});

// 	return { supabase };
// };
