import type { PropsWithChildren } from "react";
import { BaseLayout } from "@/components/layout/base";

export default async function Layout({
  children,
  params,
}: PropsWithChildren<{ params: Promise<{ slug: string[] }> }>) {
  const { slug } = await params;

  return <BaseLayout slug={slug}>{children}</BaseLayout>;
}
