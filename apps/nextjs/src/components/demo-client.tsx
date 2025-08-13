"use client";
import dynamic from "next/dynamic";
import { Progress } from "@/components/ui/progress";
import { demoMap, type DemoVariantMap } from "@/utils/demo-map";

export function DemoClient({ name }: { name: DemoVariantMap }) {
  const loader = demoMap[name];

  const Component = loader
    ? dynamic(loader, {
        ssr: false,
        loading: () => (
          <Progress.Root value={null}>
            <Progress.Circle>
              <Progress.CircleTrack />
              <Progress.CircleRange />
            </Progress.Circle>
            <Progress.Label>読み込み中</Progress.Label>
          </Progress.Root>
        ),
      })
    : () => <p>Component not found</p>;

  return <Component />;
}
