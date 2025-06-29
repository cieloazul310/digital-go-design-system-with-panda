import {
  Link as LinkBase,
  type LinkProps as LinkBaseProps,
} from "@cieloazul310/digital-go-pandacss/link";
import { ExternalLinkIcon } from "lucide-react";

export function ExternalLink({ children, ...props }: LinkBaseProps) {
  return (
    <LinkBase {...props}>
      {children}
      <ExternalLinkIcon />
    </LinkBase>
  );
}
