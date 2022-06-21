import { IP } from "./config";
import $ from "jquery";
export default function LoginService(data) {
  var url = `${IP}/api/auth/login`;
  return $.post(url, data);
}
