const getRoot = () => {
  switch (document.location.hostname) {
    case "127.0.0.1":
      ROOT = "";
      break;
    case "merior94.github.io":
      ROOT = document.location.origin + "/eshop";
      break;
    default: // set whatever you want
  }
  console.log("Root: ");
  console.log(ROOT);
};
var ROOT = "";
var API = "https://javaapi.pawliknet.synology.me";
getRoot();
