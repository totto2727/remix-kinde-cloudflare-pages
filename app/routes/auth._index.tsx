import { getKindeSession } from "@kinde-oss/kinde-remix-sdk";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { Link, data, redirect, useLoaderData } from "@remix-run/react";

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const { getUser, headers } = await getKindeSession(request);
	const user = await getUser();

	if (user === null) {
		throw redirect("/kinde-auth/login", { headers });
	}

	return data({ user }, { headers });
};

export default function Auth() {
	const { user } = useLoaderData<typeof loader>();

	return (
		<div>
			<div>{user?.email}</div>
			<Link to={"/kinde-auth/logout?returnTo=/"}>Logout</Link>
		</div>
	);
}
