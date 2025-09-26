import { FC } from "react";
import { LinkProps, LinkTypes } from "./link-types";

const Link: FC<LinkProps> = ({
  children,
  href,
  type = LinkTypes.REGULAR,
  target = "_blank",
}) => {
  const isEmpty = !href || href === "URL.EMPTY";

  if (isEmpty) {
    return <div className="link link--disabled">{children}</div>;
  }

  return (
    <a
      className="link"
      target={target}
      href={href}
      data-type={type}
      {...(target === "_blank" && { rel: "noreferrer" })}
    >
      {children}
    </a>
  );
};

export default Link;
