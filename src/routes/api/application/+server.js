import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

export const POST = async (event) => {
	const formData = await event.request.formData();

	const { error } = await supabase.from('applications').insert([
		{
			full_name: formData.get('fullName'),
			email: formData.get('email'),
			phone_number: formData.get('phoneNumber'),
			position: formData.get('position'),
			artify_reason: formData.get('artifyReason'),
			position_reason: formData.get('positionReason')
		}
	]);

	if (error) throw new Error(error.message);

	return new Response(JSON.stringify({ success: true }), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
};
