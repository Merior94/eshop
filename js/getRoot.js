const getRoot = () => {
  switch (document.location.hostname) {
    case "127.0.0.1":
      ROOT = "";
      break;
    case "merior94.github.io":
      ROOT = "/eshop/";
      break;
    default: // set whatever you want
  }

  console.log(ROOT);

  console.log("HELLO!!!!");
};
var ROOT = "";
getRoot();
