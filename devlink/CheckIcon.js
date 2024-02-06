import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CheckIcon.module.css";

export function CheckIcon({
  as: _Component = _Builtin.Image,
  pricingFeatureCheckIconImage = "https://uploads-ssl.webflow.com/65c22f7b8d17ab54286ebd05/65c22f7b8d17ab54286ebd22_check.svg",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "pricing-card-check-icon")}
      loading="lazy"
      width="auto"
      height="auto"
      alt=""
      src={pricingFeatureCheckIconImage}
    />
  );
}
