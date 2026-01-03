import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { css } from "styled-system/css";
import { FileUpload } from "../src/file-upload";
import { Button } from "../src/button";
import { SupportText, RequirementBadge } from "../src/form";

const meta = {
  title: "Components/ファイルアップロード／ドロップエリア",
  component: FileUpload.Root,
  argTypes: {
    maxFileSize: {
      type: "number",
      control: "inline-radio",
      options: [Infinity, 10 * 1024 ** 2, 1024 ** 2, 1024],
    },
    maxFiles: {
      type: "number",
      control: { type: "number", min: 1, max: 10 },
    },
    accept: {
      type: "string",
      control: "inline-radio",
      options: [
        "image/*",
        "image/jpeg",
        "image/png",
        "text/*",
        "application/json",
        "application/pdf",
      ],
    },
  },
  args: {
    maxFileSize: Infinity,
    maxFiles: 5,
    accept: "image/*",
  },
} satisfies Meta<typeof FileUpload.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithDropArea: Story = {
  args: {
    children: (
      <>
        <FileUpload.Label>
          ファイルアップロード
          <RequirementBadge>※必須</RequirementBadge>
        </FileUpload.Label>
        <SupportText>サポートテキスト</SupportText>
        <FileUpload.Dropzone>
          <div
            className={css({ display: "flex", gap: 4, alignItems: "center" })}
          >
            <FileUpload.Trigger asChild>
              <Button variant="outline">ファイルを選択</Button>
            </FileUpload.Trigger>
            <span>または、このエリア内にドラッグ&ドロップ</span>
          </div>
        </FileUpload.Dropzone>
        <FileUpload.ItemGroup>
          <FileUpload.Context>
            {({ acceptedFiles, rejectedFiles }) => {
              if (acceptedFiles.length === 0 && rejectedFiles.length === 0) {
                return <SupportText>ファイルが選択されていません</SupportText>;
              }
              return (
                <>
                  {acceptedFiles.map((file) => (
                    <FileUpload.Item key={file.name} file={file}>
                      <FileUpload.ItemDeleteTrigger>
                        削除
                      </FileUpload.ItemDeleteTrigger>
                      <FileUpload.ItemName />
                      <FileUpload.ItemSizeText></FileUpload.ItemSizeText>
                    </FileUpload.Item>
                  ))}
                  {rejectedFiles.map(({ file, errors }) => (
                    <FileUpload.Item
                      key={file.name}
                      file={file}
                      data-status="rejected"
                    >
                      <FileUpload.ItemDeleteTrigger>
                        削除
                      </FileUpload.ItemDeleteTrigger>
                      <FileUpload.ItemDetail>
                        <div className={css({ display: "flex", gap: 2 })}>
                          <FileUpload.ItemName />
                          <FileUpload.ItemSizeText></FileUpload.ItemSizeText>
                        </div>
                        <ul>
                          {errors.map((value) => (
                            <li key={value}>{value}</li>
                          ))}
                        </ul>
                      </FileUpload.ItemDetail>
                    </FileUpload.Item>
                  ))}
                </>
              );
            }}
          </FileUpload.Context>
        </FileUpload.ItemGroup>
        <FileUpload.HiddenInput />
      </>
    ),
  },
};

export const ButtonOnly: Story = {
  args: {
    children: (
      <>
        <FileUpload.Label>
          ファイルアップロード
          <RequirementBadge>※必須</RequirementBadge>
        </FileUpload.Label>
        <SupportText>サポートテキスト</SupportText>
        <FileUpload.Trigger asChild>
          <Button variant="outline">ファイルを選択</Button>
        </FileUpload.Trigger>
        <FileUpload.ItemGroup>
          <FileUpload.Context>
            {({ acceptedFiles }) => {
              if (!acceptedFiles.length) {
                return <SupportText>ファイルが選択されていません</SupportText>;
              }
              return acceptedFiles.map((file) => (
                <FileUpload.Item key={file.name} file={file}>
                  <FileUpload.ItemDeleteTrigger>
                    削除
                  </FileUpload.ItemDeleteTrigger>
                  <FileUpload.ItemName />
                  <FileUpload.ItemSizeText></FileUpload.ItemSizeText>
                </FileUpload.Item>
              ));
            }}
          </FileUpload.Context>
        </FileUpload.ItemGroup>
        <FileUpload.HiddenInput />
      </>
    ),
  },
};
