import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./MainCta.module.css";

export function MainCta({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "is-bg-gray")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Grid className={_utils.cx(_styles, "cta-3-grid")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "cta-3-left-column")}
            id={_utils.cx(
              _styles,
              "w-node-f89a59ff-fdc9-e0b0-114f-ee56eacac9cf-eacac9cc"
            )}
            tag="div"
          >
            <_Builtin.Heading tag="h2">
              {"Let's work together"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "spacer-h2")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "width-500")}
              tag="div"
            >
              <_Builtin.Paragraph>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae"
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "cta-3-right-column")}
            id={_utils.cx(
              _styles,
              "w-node-f89a59ff-fdc9-e0b0-114f-ee56eacac9d6-eacac9cc"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "button-group", "no-margin-top")}
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
                {"Let’s talk with us"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Block>
    </_Component>
  );
}
