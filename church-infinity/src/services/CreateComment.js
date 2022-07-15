import { IP } from "./config";
import $ from "jquery";
export default function CreateComment(data) {
  var url = `${IP}/api/create-comment`;
  return $.get(url, data);
}
