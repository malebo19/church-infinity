import { IP } from "./config";
import $ from "jquery";
export default function GetGroups(data) {
  var url = `${IP}/api/user/group/get/list`;
  return $.post(url, data);
}
