import { IP } from "./config";
import $ from "jquery";
export default function GetPosts(data) {
  var url = `${IP}/api/user/post/get`;
  return $.get(url);
}
