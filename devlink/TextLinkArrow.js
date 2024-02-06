import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./TextLinkArrow.module.css";

export function TextLinkArrow({ as: _Component = _Builtin.Image }) {
  return (
    <_Component
      className={_utils.cx(_styles, "text-arrow-link-icon")}
      loading="lazy"
      width="auto"
      height="auto"
      alt=""
      src="https://uploads-ssl.webflow.com/65c22f7b8d17ab54286ebd05/65c22f7b8d17ab54286ebd21_right-arrow.svg"
    />
  );
}
