export default function mobile_menu() {
  let loadScript = function (src) {
    let tag = document.createElement("script");
    tag.async = false;
    tag.src = src;
    document.getElementsByTagName("body")[0].appendChild(tag);
  };
  loadScript("/assets/js/jquery.magnific-popup.min.js");
  loadScript("/assets/js/main.js");
}
