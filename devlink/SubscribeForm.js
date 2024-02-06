import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SubscribeForm.module.css";

export function SubscribeForm({ as: _Component = _Builtin.FormWrapper }) {
  return (
    <_Component className={_utils.cx(_styles, "subscribe-form-wrapper")}>
      <_Builtin.FormForm
        className={_utils.cx(_styles, "subscribe-form-wrap")}
        name="wf-form-Subscribe-Form"
        data-name="Subscribe Form"
        method="get"
        id="wf-form-Subscribe-Form"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "subscribe-form")}
          tag="div"
        >
          <_Builtin.FormTextInput
            className={_utils.cx(_styles, "input")}
            autoFocus={false}
            maxLength={256}
            name="email-2"
            data-name="Email 2"
            placeholder="E-mail"
            type="email"
            disabled={false}
            required={true}
            id="email-2"
          />
          <_Builtin.FormButton
            className={_utils.cx(_styles, "button")}
            type="submit"
            value="Subscribe"
            data-wait="Please wait..."
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "subscribe-form-info-space")}
          tag="div"
        />
        <_Builtin.Paragraph className={_utils.cx(_styles, "text-small")}>
          {"Lorem ipsum dolor sit amet, consectetur "}
          <_Builtin.Link
            className={_utils.cx(_styles, "link")}
            button={false}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Privacy Policy"}
          </_Builtin.Link>
          {"."}
        </_Builtin.Paragraph>
      </_Builtin.FormForm>
      <_Builtin.FormSuccessMessage
        className={_utils.cx(_styles, "success-message")}
      >
        <_Builtin.Block className={_utils.cx(_styles, "paragraph")} tag="div">
          {"Thank you! Your submission has been received!"}
        </_Builtin.Block>
      </_Builtin.FormSuccessMessage>
      <_Builtin.FormErrorMessage
        className={_utils.cx(_styles, "error-message")}
      >
        <_Builtin.Block className={_utils.cx(_styles, "paragraph")} tag="div">
          {"Oops! Something went wrong while submitting the form."}
        </_Builtin.Block>
      </_Builtin.FormErrorMessage>
    </_Component>
  );
}
