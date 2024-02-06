import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Navbar.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a470ece9-0569-3f76-a8f6-b456e6a3a3ca","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a470ece9-0569-3f76-a8f6-b456e6a3a3ca","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706568523824},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a470ece9-0569-3f76-a8f6-b456e6a3a3ca","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a470ece9-0569-3f76-a8f6-b456e6a3a3ca","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706568523824}},"actionLists":{"a-3":{"id":"a-3","title":"Navbar Open","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","id":"a470ece9-0569-3f76-a8f6-b456e6a3a3da"},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-3-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","id":"a470ece9-0569-3f76-a8f6-b456e6a3a3db"},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-3-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","id":"a470ece9-0569-3f76-a8f6-b456e6a3a3da"},"yValue":3.5,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-3-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","id":"a470ece9-0569-3f76-a8f6-b456e6a3a3db"},"yValue":-3.5,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1706568530138},"a-4":{"id":"a-4","title":"Navbar Close","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","id":"a470ece9-0569-3f76-a8f6-b456e6a3a3da"},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-4-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","id":"a470ece9-0569-3f76-a8f6-b456e6a3a3db"},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-4-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","id":"a470ece9-0569-3f76-a8f6-b456e6a3a3da"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-4-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","id":"a470ece9-0569-3f76-a8f6-b456e6a3a3db"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1706568530138}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navbar({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navbar")}
      data-w-id="a470ece9-0569-3f76-a8f6-b456e6a3a3ca"
      tag="div"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "navbar-container")}
        tag="div"
      >
        <_Builtin.NavbarBrand
          className={_utils.cx(_styles, "navbar-logo-link")}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "navbar-logo")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/65c22f7b8d17ab54286ebd05/65c22f7b8d17ab54286ebd23_logoipsum-286.svg"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarMenu
          className={_utils.cx(_styles, "nav-menu")}
          tag="nav"
          role="navigation"
        >
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav-link")}
            options={{
              href: "#",
            }}
          >
            {"Home"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav-link")}
            options={{
              href: "#",
            }}
          >
            {"About"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav-link")}
            options={{
              href: "#",
            }}
          >
            {"Our work"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav-link")}
            options={{
              href: "#",
            }}
          >
            {"Resources"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav-link")}
            options={{
              href: "#",
            }}
          >
            {"Careers"}
          </_Builtin.NavbarLink>
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar-button-spacer")}
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
              {"Contact us"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton
          className={_utils.cx(_styles, "menu-button")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar-hamburger")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "hamburger-line")}
              data-w-id="a470ece9-0569-3f76-a8f6-b456e6a3a3da"
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "hamburger-line")}
              data-w-id="a470ece9-0569-3f76-a8f6-b456e6a3a3db"
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.NavbarButton>
      </_Builtin.Block>
    </_Component>
  );
}
