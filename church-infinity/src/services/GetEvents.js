import { IP } from "./config";
import $ from "jquery";
export default function GetEvents(data) {
  var url = `${IP}/api/user/event/get`;
  return $.get(url, data);
}
