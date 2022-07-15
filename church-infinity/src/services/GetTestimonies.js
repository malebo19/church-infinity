import { IP } from "./config";
import $ from "jquery";
export default function GetTestimonies(data) {
  var url = `${IP}/api/user/testimonies/get`;
  return $.get(url);
}
