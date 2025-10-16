"use client";
import dynamic, { type LoaderComponent } from "next/dynamic";
import { Progress } from "@/components/ui/progress";
import { demoMap, type DemoVariantMap } from "@/utils/demo-map";

const NotFound = () => <p>Component not found</p>;

const WithLoader = (loader: () => LoaderComponent) =>
  dynamic(loader, {
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
  });

export function DemoClient({ name }: { name: DemoVariantMap }) {
  const loader = demoMap[name];

  const Component = loader ? WithLoader(loader) : NotFound;

  return <Component />;
}
