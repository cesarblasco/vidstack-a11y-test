"use client";

// import Image from "next/image";}
import { useState } from "react";
import styles from "./page.module.css";

import VidstackPlayer from "./components/vidstack_player/vidstack_player";

// import { i18n_ES } from "@/app/i18n/i18n_ES";

import ENTestSubtitle from "@/app/assets/subtitles/custom_subtitles/test_subtitle_en";
import ESTestSubtitle from "@/app/assets/subtitles/custom_subtitles/test_subtitle_es";

// import sprite_fight_srt from '@/app/assets/subtitles/sprite_fight_srt.srt';

import TextTrackProps from "@/app/types/text_track";
import SliderBreakpoint from "./types/slider_breakpoint";

import InteractiveVideoDialogContent from "@/app/components/interactive_video_dialog/content/interactive_video_dialog_content";

// This would be a "container" component that receives the data from selectors or other sources etc
export default function Home() {
  const videoSource = "https://files.vidstack.io/sprite-fight/720p.mp4";
  // const [textTrackContent, setTextTrackContent] = useState<VTTContent>({});
  const [currentLanguage, setCurrentLanguage] = useState(null);
  // const [shouldShowVideoAndPlayerConfigs, setShouldShowVideoAndPlayerConfigs] =
  // //   useState(true);
  const [backgroundTransparency] = useState(0.5);

  const tracks: TextTrackProps[] = [
    {
      id: 1,
      src: "https://files.vidstack.io/sprite-fight/subs/english.vtt", // external file
      kind: "subtitles",
      label: "English",
      lang: "en-US",
      type: "vtt",
      default: true,
    },
    {
      id: 2,
      src: "https://files.vidstack.io/sprite-fight/subs/spanish.vtt", // external file
      kind: "subtitles",
      label: "Spanish",
      lang: "es-ES",
      type: "vtt",
    },
    {
      id: 3,
      src: "https://files.vidstack.io/sprite-fight/chapters.vtt",
      kind: "chapters",
      lang: "en-US",
      type: "vtt",
      default: true,
    },
    {
      id: 4,
      kind: "subtitles",
      label: "English (CUSTOM SAMPLE)",
      lang: "en-US",
      type: "vtt",
      content: ENTestSubtitle, // local file
    },
    {
      id: 5,
      kind: "subtitles",
      label: "Spanish (CUSTOM SAMPLE)",
      lang: "es-ES",
      type: "vtt",
      content: ESTestSubtitle, // local file
    },
  ];

  const sliderBreakpointsContent1 = {
    title: "Introduction",
    description: "This is the introduction of the video",
    questionList: [
      { id: 1, text: "Breakpoint 1: 30 seconds" },
      { id: 2, text: "What did we learn in this intro?" },
    ],
  };

  const sliderBreakpointsContent2 = {
    title: "Important Scene",
    description: "A scene where something important happens",
    questionList: [
      { id: 2, text: "Breakpoint 2: 90 seconds" },
      { id: 3, text: "What was the important scene?" },
    ],
  };

  const sliderBreakpointsContent3 = {
    title: "Action Sequence",
    description: "Time for some action",
    questionList: [
      { id: 3, text: "Breakpoint 3: 150 seconds" },
      { id: 4, text: "What was the action sequence?" },
    ],
  };

  const sliderBreakpointsContent4 = {
    title: "Climax",
    description: "This is what we were waiting for!",
    questionList: [
      { id: 4, text: "Breakpoint 4: 240 seconds" },
      { id: 5, text: "What was the climax?" },
    ],
  };

  const sliderBreakpointsContent5 = {
    title: "Resolution",
    description: "The end...",
    questionList: [
      { id: 5, text: "Breakpoint 5: 300 seconds" },
      { id: 6, text: "What was the resolution?" },
    ],
  };

  // Define breakpoints to display on the slider in the video (time in seconds)
  // used for interactive mode, OEQ, AD, etc. These should come from a API or
  // external source, mocking data here for sample purposes and the content defined somewhere
  // else on the frontend
  const sliderBreakpoints: SliderBreakpoint[] = [
    {
      time: 30,
      label: "Introduction",
      type: "info",
      content: <InteractiveVideoDialogContent {...sliderBreakpointsContent1} />,
    },
    {
      time: 90,
      label: "Important Scene",
      type: "important",
      content: <InteractiveVideoDialogContent {...sliderBreakpointsContent2} />,
    },
    {
      time: 150,
      label: "Action Sequence",
      type: "warning",
      content: <InteractiveVideoDialogContent {...sliderBreakpointsContent3} />,
    },
    {
      time: 240,
      label: "Climax",
      type: "important",
      content: <InteractiveVideoDialogContent {...sliderBreakpointsContent4} />,
    },
    {
      time: 320,
      label: "Resolution",
      type: "info",
      content: <InteractiveVideoDialogContent {...sliderBreakpointsContent5} />,
    },
  ];

  // NOTE
  // We strongly recommend using adaptive streaming protocols such as HLS over providing
  // multiple static media files, see the Video Qualities section for more information.

  // const multipleSources = [
  //   {
  //     src: "https://files.vidstack.io/sprite-fight/1080p.mp4",
  //     type: "video/mp4",
  //     width: 1920,
  //     height: 1080,
  //   },
  //   {
  //     src: "https://files.vidstack.io/sprite-fight/720p.mp4",
  //     type: "video/mp4",
  //     width: 1280,
  //     height: 720,
  //   },
  //   {
  //     src: "https://files.vidstack.io/sprite-fight/480p.mp4",
  //     type: "video/mp4",
  //     width: 853,
  //     height: 480,
  //   },
  // ];

  const mediaPlayerKeyShortcuts = {
    // Space-separated list.
    togglePaused: "k Space",
    toggleMuted: "m",
    toggleFullscreen: "f",
    togglePictureInPicture: "i",
    toggleCaptions: null, // could be configured from consumer, for a11y purposes we should disable it seems
    // Array.
    seekBackward: ["j", "J", "ArrowLeft"],
    seekForward: ["l", "L", "ArrowRight"],
    volumeUp: "ArrowUp",
    volumeDown: "ArrowDown",
    speedUp: ">",
    slowDown: "<",
    // Custom callback.
    fooBar: {
      keys: ["k", "Space"],
      // onKeyUp({ event, player, remote }) {
      //   // ...
      // },
      // onKeyDown({ event, player, remote }) {
      //   // ...
      // },
    },
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Vidstack Player Prototype</h1>

        {/* <button 
            onClick={() => setShouldShowVideoAndPlayerConfigs(!shouldShowVideoAndPlayerConfigs)} 
            className={styles.button}>Hide video and player configs
        </button>

        {shouldShowVideoAndPlayerConfigs && (
           <>
            <h2>Video Source:</h2>
            <ul className={styles['button-list']}>
              <li><button className={styles.button}>Video</button></li>
              <li><button className={styles.button}>Youtube</button></li>
              <li><button className={styles.button}>BBC</button></li>
              <li><button className={styles.button}>HLS Source video</button></li>
            </ul>

            <h2>Subtitles source:</h2>
              <ul className={styles['button-list']}>
                <li><button className={styles.button} onClick={() => { } }>SRT</button></li>
                <li><button className={styles.button} onClick={() => { } }>Custom Content (JSON)</button></li>
              </ul>
              
              <h2>Player Label Translations:</h2>
                <ul className={styles['button-list']}>
                  <li><button className={styles.button} onClick={() => setCurrentLanguage(null)}>English</button></li>
                  <li><button className={styles.button} onClick={() => setCurrentLanguage(i18n_ES)}>Spanish</button></li>
              </ul>

              <h2>Background Transparency for interactive mode:</h2>
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.1" 
                value={backgroundTransparency} 
                onChange={(e) => setBackgroundTransparency(Number(e.target.value))} 
              />
            </>
        )} */}

        <VidstackPlayer
          src={videoSource}
          playerTranslations={currentLanguage}
          textTracks={tracks}
          sliderBreakpoints={sliderBreakpoints}
          interactiveModeBackgroundTransparency={backgroundTransparency}
          mediaPlayerKeyShortcuts={mediaPlayerKeyShortcuts}
        />
      </main>
    </div>
  );
}
