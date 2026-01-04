"use client";
import { ark } from "@ark-ui/react/factory";
import { FileUpload } from "@ark-ui/react/file-upload";
import { fileUpload } from "styled-system/recipes";
import { createStyleContext } from "styled-system/jsx";
import type { ComponentProps } from "styled-system/types";

const { withRootProvider, withProvider, withContext } =
  createStyleContext(fileUpload);

export type RootProvider = ComponentProps<typeof RootProvider>;
export const RootProvider = withRootProvider(FileUpload.RootProvider);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(FileUpload.Root, "root", {
  defaultProps: { locale: "ja-JP" },
});

export const Dropzone = withContext(FileUpload.Dropzone, "dropzone", {
  defaultProps: { disableClick: true },
});

export const Trigger = withContext(FileUpload.Trigger, "trigger");

export const Label = withContext(FileUpload.Label, "label");

export const ClearTrigger = withContext(
  FileUpload.ClearTrigger,
  "clearTrigger",
);

export const ItemGroup = withContext(FileUpload.ItemGroup, "itemGroup");
export const Item = withContext(FileUpload.Item, "item");
export const ItemDeleteTrigger = withContext(
  FileUpload.ItemDeleteTrigger,
  "itemDeleteTrigger",
);
export const ItemDetail = withContext(ark.div, "itemDetail");
export const ItemName = withContext(FileUpload.ItemName, "itemName");
export const ItemSizeText = withContext(
  FileUpload.ItemSizeText,
  "itemSizeText",
);
export const ItemPreview = withContext(FileUpload.ItemPreview, "itemPreview");
export const ItemPreviewImage = withContext(
  FileUpload.ItemPreviewImage,
  "itemPreviewImage",
);

export {
  FileUploadContext as Context,
  FileUploadHiddenInput as HiddenInput,
  type FileUploadFileAcceptDetails as FileAcceptDetails,
  type FileUploadFileChangeDetails as FileChangeDetails,
  type FileUploadFileRejectDetails as FileRejectDetails,
  type FileUploadFileValidateDetails as FileValidateDetails,
} from "@ark-ui/react/file-upload";
