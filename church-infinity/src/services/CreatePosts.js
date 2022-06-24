import { IP } from "./config";
import $ from "jquery";
export default function CreatePosts(data) {
  var url = `${IP}/api/user/post/create`;
  return $.post(url, data);
}

// user_id , username, time, content, attachment