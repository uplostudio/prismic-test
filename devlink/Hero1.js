import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Hero1.module.css";

export function Hero1({
  as: _Component = _Builtin.Section,
  title = "Template Name Webflow Template",
  text = "Presenting Template Name, the ultimate Laundry Webflow Template.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "is-bg-gray")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "template-hero-content")}
          tag="div"
        >
          <_Builtin.Heading tag="h1">{title}</_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "spacer-h1")}
            tag="div"
          />
          <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-large")}>
            {text}
          </_Builtin.Paragraph>
          <_Builtin.Block
            className={_utils.cx(_styles, "spacer-buttons")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "button-group")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "button")}
              button={true}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Buy template"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "button", "secondary")}
              button={true}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Explore Pages"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
