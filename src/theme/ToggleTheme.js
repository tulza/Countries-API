let theme = document.documentElement.getAttribute("data-theme");

export const HandleTheme = () => {
  theme == "light" ? (theme = "default") : (theme = "light");
  document.documentElement.setAttribute("data-theme", theme);
};
