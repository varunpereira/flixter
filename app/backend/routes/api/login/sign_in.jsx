import { json } from "solid-start/api";
export function POST() {
	console.log("hi")
	return json({hi:'hi'});
}