import { IP } from "./config";
import $ from "jquery";
export default function UpdateProfile(data) {
  var url = `${IP}/api/auth/profile/update`;
  
  $.ajax({
    url: url,
    method: "POST",
    data: data,
    contentType: false,
    cache: false,
    processData: false,

    success: function (data) {
      console.log(data);
      $("#msg").html(data);
    },
  });

  // return $.post(url, data);
}
