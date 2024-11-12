import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<div>
			<Link to={"/kinde-auth/login?returnTo=/auth"}>Login</Link>
			<Link to={"/kinde-auth/register?returnTo=/auth"}>Register</Link>
			<Link to={"/kinde-auth/logout?returnTo=/"}>Logout</Link>;
		</div>
	);
}
