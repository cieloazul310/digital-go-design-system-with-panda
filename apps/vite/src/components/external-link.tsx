import { ExternalLinkIcon } from "lucide-react";
import { Link, type LinkProps } from "./ui/link";

export function ExternalLink({ children, ...props }: LinkProps) {
  return (
    <Link target="_blank" rel="noreferer noopener" {...props}>
      {children}
      <ExternalLinkIcon />
    </Link>
  );
}
