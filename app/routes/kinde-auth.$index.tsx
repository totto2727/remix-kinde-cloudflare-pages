import { handleAuth } from "@kinde-oss/kinde-remix-sdk";
import type { LoaderFunctionArgs } from "@remix-run/cloudflare";

export async function loader({ params, request }: LoaderFunctionArgs) {
	console.log("loader", JSON.stringify(process.env));
	return await handleAuth(request, params.index);
}
