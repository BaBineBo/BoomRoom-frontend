import * as React from "react";
import { createLink, LinkComponent } from "@tanstack/react-router";
import styled from "@emotion/styled";

// guide create custom link component
// https://tanstack.com/router/latest/docs/framework/react/guide/custom-link

type BasicLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const BasicLinkComponent = React.forwardRef<HTMLAnchorElement, BasicLinkProps>(
  (props, ref) => {
    const StyledLink = styled.a`
      text-decoration: none;

      &:focus,
      &:hover,
      &:visited,
      &:link,
      &:active {
        text-decoration: none;
      }
    `;
    return (
      <StyledLink
        ref={ref}
        {...props}
        className={"block px-3 py-2 text-blue-700"}
      />
    );
  }
);

const CreatedLinkComponent = createLink(BasicLinkComponent);

export type LinkingTextProps = React.ForwardRefExoticComponent<
  BasicLinkProps & React.RefAttributes<HTMLAnchorElement>
>;
export const LinkingText: LinkComponent<typeof BasicLinkComponent> = (
  props
) => {
  return <CreatedLinkComponent preload={"intent"} {...props} />;
};
