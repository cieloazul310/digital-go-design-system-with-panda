import { useId } from "react";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function App() {
  const breadcrumbsId = useId();

  return (
    <Breadcrumb.Root aria-labelledby={`${breadcrumbsId}-label`}>
      <Breadcrumb.Label id={`${breadcrumbsId}-label`}>
        現在位置
      </Breadcrumb.Label>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#" key="home">
            ホーム
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#" key="organization">
            組織情報
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#" key="a">
            長いページタイトルが入ります長いページタイトルが入ります
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#" key="b">
            長いページタイトルが入ります長いページタイトルが入ります
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          長いページタイトルが入ります長いページタイトルが入ります
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
}
