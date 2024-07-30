import { n as navOpenVal, m as mobileModeVal } from "./store.js";
navOpenVal.subscribe((i) => {
});
mobileModeVal.subscribe((i) => {
});
function changeURL(title, alt) {
  if (alt) {
    window.open(
      `${alt}`,
      "_blank"
      // <- This is what makes it open in a new window.
    );
  } else {
    let newUrl = title.replaceAll(" ", "-");
    if (window.location.href.split("/")[3] !== `${newUrl}`) {
      window.location.href = `${newUrl}`;
    } else {
      navOpenVal.update(() => {
        return false;
      });
    }
  }
}
export {
  changeURL as c
};
