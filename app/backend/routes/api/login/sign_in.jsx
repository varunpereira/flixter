import { json } from "solid-start/api";
export var POST = () => {
	console.log("hi")
	return json({hi:'hi'});
}