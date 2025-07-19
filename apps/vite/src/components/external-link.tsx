import { Link, type LinkProps } from "@cieloazul310/digital-go-pandacss/link";
import { ExternalLinkIcon } from "lucide-react";

export function ExternalLink({ children, ...props }: LinkProps) {
  return (
    <Link target="_blank" rel="noreferer noopener" {...props}>
      {children}
      <ExternalLinkIcon />
    </Link>
  );
}
