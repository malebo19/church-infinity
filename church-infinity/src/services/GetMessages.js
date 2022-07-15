import { IP } from "./config";
import $ from "jquery";
export default function GetGroups(data) {
  var url = `${IP}/api/user/group/get/messages`;
  return $.post(url, data);
}
