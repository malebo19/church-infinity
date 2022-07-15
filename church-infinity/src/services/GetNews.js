import { IP } from "./config";
import $ from "jquery";
export default function GetNews() {
  var url = `${IP}/api/user/news/get`;
  return $.get(url);
}
