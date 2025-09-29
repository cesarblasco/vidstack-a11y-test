import { VTTContent } from "@vidstack/react";

export default interface TextTrackProps {
  id: number;
  src?: string;
  kind: "subtitles" | "captions" | "chapters" | "descriptions" | "metadata";
  label?: string;
  lang?: string;
  type?: "vtt" | "json" | "srt";
  content?: VTTContent;
  default?: boolean;
}
