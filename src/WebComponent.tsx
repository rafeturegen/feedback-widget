import { createRoot } from "react-dom/client";
import { Widget } from "./components/Widget";
import React from "react";

export const normalizeAttribute = (attribute: string): string => {
    return attribute.replace(/-([a-z])/g, (_: string, letter: string): string => letter.toUpperCase());
}

class WidgetWebComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      const props = this.getPropsFromAttributes();
      const root = createRoot(this.shadowRoot as ShadowRoot);
      root.render(<Widget {...props} />);
    }
  
    getPropsFromAttributes() {
      const props:{ [key:string]: string} = {};
      for (const { name, value } of Array.from(this.attributes)) {
        props[normalizeAttribute(name)] = value;
      }
      return props;
    }
  }
  
  export default WidgetWebComponent;
