import type { PropsWithChildren } from "react";
import { BaseLayout } from "@/components/layout/base";

export default async function Layout({
  children,
  params,
}: PropsWithChildren<{ params: { id: string } }>) {
  const { id } = await params;
  return <BaseLayout slug={[id]}>{children}</BaseLayout>;
}
