import { IP } from "./config";
import $ from "jquery";
export default function RegisterService(data) {
  var url = `${IP}/api/auth/Register`;
  return $.post(url, data);
}
