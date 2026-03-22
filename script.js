(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("*");

    elements.forEach(el => {
      const classList = [...el.classList];

      classList.forEach(cls => {
        if (cls.startsWith("chai-")) {
          applyUtility(el, cls);
          el.classList.remove(cls); 
        }
      });
    });
  });

  function applyUtility(el, cls) {
    const parts = cls.split("-");
    const prop = parts[1];
    const value = parts.slice(2).join("-");

    handleUtility(el, prop, value);
  }

  function handleUtility(el, prop, value) {

    const valPx = isNaN(value) ? value : value + "px";

    const spacingMap = {
      "p": ["padding"],
      "px": ["paddingLeft", "paddingRight"],
      "py": ["paddingTop", "paddingBottom"],
      "pt": ["paddingTop"],
      "pb": ["paddingBottom"],
      "pl": ["paddingLeft"],
      "pr": ["paddingRight"],

      "m": ["margin"],
      "mx": ["marginLeft", "marginRight"],
      "my": ["marginTop", "marginBottom"],
      "mt": ["marginTop"],
      "mb": ["marginBottom"],
      "ml": ["marginLeft"],
      "mr": ["marginRight"]
    };
    if (spacingMap[prop]) {
      spacingMap[prop].forEach(styleProp => {
        el.style[styleProp] = valPx;
      });
      return;
    }

    if (prop === "bg") {
      el.style.backgroundColor = value;
      return;
    }
    if (prop === "text") {
      if (["center", "left", "right"].includes(value)) {
        el.style.textAlign = value;
      } else {
        el.style.color = value;
      }
      return;
    }

    if (prop === "fs") {
      el.style.fontSize = valPx;
      return;
    }
    if (prop === "fw") {
      el.style.fontWeight = value;
      return;
    }

    if (prop === "br") {
      el.style.borderRadius = valPx;
      return;
    }
    if (prop === "border") {
      el.style.border = `1px solid ${value}`;
      return;
    }
    if (prop === "bw") {
      el.style.borderWidth = valPx;
      el.style.borderStyle = "solid";
      return;
    }

    if (prop === "flex") {
      el.style.display = "flex";
      return;
    }
    if (prop === "jc") {
      el.style.justifyContent = value;
      return;
    }
    if (prop === "ai") {
      el.style.alignItems = value;
      return;
    }
    if (prop === "w") {
      el.style.width = valPx;
      return;
    }
    if (prop === "h") {
      el.style.height = valPx;
      return;
    }
  }
})();