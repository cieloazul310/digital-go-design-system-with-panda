"use client";
import dynamic from "next/dynamic";
import { demoMap, type DemoVariantMap } from "@/utils/demo-map";

export function DemoClient({ name }: { name: DemoVariantMap }) {
  const loader = demoMap[name];

  const Component = loader
    ? dynamic(loader, { ssr: false })
    : () => <p>Component not found</p>;

  return <Component />;
}
