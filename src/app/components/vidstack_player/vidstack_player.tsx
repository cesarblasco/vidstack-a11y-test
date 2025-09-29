import React, { useState } from "react";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider, MediaKeyShortcuts } from "@vidstack/react";
// import { PlayButton, MuteButton } from "@vidstack/react";
import {
  XMarkIcon,
  CheckIcon,
  // PlayIcon,
  // PauseIcon,
  // MuteIcon,
  // VolumeLowIcon,
} from "@vidstack/react/icons";

import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import SliderComponent from "../slider/slider/slider";

// DOCS: https://vidstack.io/docs/player/api/hooks/use-caption-options/?styling=default-theme

import TrackList from "../captions/track_list/track_list";
import TextTrackProps from "@/app/types/text_track";
import SliderBreakpoint from "@/app/types/slider_breakpoint";
import InteractiveVideoDialog from "@/app/components/interactive_video_dialog/dialog/interactive_video_dialog";

import styles from "./vidstack_player.module.css";
import CustomVidstackButton from "../custom_vidstack_button/custom_vidstack_button";

interface VidstackPlayerProps {
  src?: string | string[];
  sliderBreakpoints: SliderBreakpoint[];
  textTracks: TextTrackProps[];
  playerTranslations?: Record<string, string> | null;
  interactiveModeBackgroundTransparency: number;
  mediaPlayerKeyShortcuts: MediaKeyShortcuts;
}

const VidstackPlayer: React.FC<VidstackPlayerProps> = ({
  src,
  textTracks,
  playerTranslations,
  sliderBreakpoints,
  interactiveModeBackgroundTransparency,
  mediaPlayerKeyShortcuts,
}) => {
  const [interactiveModeEnabled, setInteractiveModeEnabled] = useState(true);
  const [isInteractiveVideoDialogOpen, setIsInteractiveVideoDialogOpen] =
    useState(false);
  const [currentInteractiveBreakpoint, setCurrentInteractiveBreakpoint] =
    useState<SliderBreakpoint | null>(null);

  // const isPaused = useMediaState("paused");
  // const isMuted = useMediaState("muted");
  const toggleInteractiveMode = (value: boolean) =>
    setInteractiveModeEnabled(value);

  const handleInteractiveVideoDialogOpen = (breakpoint: SliderBreakpoint) => {
    setCurrentInteractiveBreakpoint(breakpoint);
    setIsInteractiveVideoDialogOpen(true);
  };

  const handleInteractiveVideoDialogClose = () => {
    setCurrentInteractiveBreakpoint(null);
    setIsInteractiveVideoDialogOpen(false);
  };

  const getInteractiveModeButton = () => (
    <div className={styles["interactive-mode"]}>
      <p id="interactive-mode-description">Interactive mode</p>
      <CustomVidstackButton
        tooltipContent={
          interactiveModeEnabled
            ? "Disable interactive mode"
            : "Enable interactive mode"
        }
        buttonContent={
          interactiveModeEnabled ? (
            <CheckIcon color="white" size={32} />
          ) : (
            <XMarkIcon color="white" size={32} />
          )
        }
        ariaLabel="Interactive mode toggle"
        ariaPressed={interactiveModeEnabled}
        onClick={() => toggleInteractiveMode(!interactiveModeEnabled)}
      />
    </div>
  );

  // // Custom play button for swapped position
  // const getSwappedPlayButton = () => (
  //   <PlayButton className="vds-button">
  //     {isPaused ? (
  //       <PlayIcon className="vds-icon" />
  //     ) : (
  //       <PauseIcon className="vds-icon" />
  //     )}
  //   </PlayButton>
  // );

  // // Custom volume button for swapped position
  // const getSwappedVolumeButton = () => (
  //   <MuteButton className="vds-button">
  //     {isMuted ? (
  //       <MuteIcon className="vds-icon" />
  //     ) : (
  //       <VolumeLowIcon className="vds-icon" />
  //     )}
  //   </MuteButton>
  // );

  return (
    <div className={styles.wrapper}>
      <MediaPlayer
        title="Sprite Fight"
        src={src}
        aspectRatio="16/9"
        keyShortcuts={mediaPlayerKeyShortcuts}
      >
        <MediaProvider />

        <DefaultVideoLayout
          slots={{
            // https://vidstack.io/docs/player/components/layouts/default-layout/#slots
            // Any slot position can be prefixed with either before or after to insert content before or after that position.
            // 72 other slots positions...
            // Swapping play and volume button positions
            // playButton: getSwappedVolumeButton(), // Volume button in play button position
            // muteButton: getSwappedPlayButton(), // Play button in volume button position
            beforePlayButton: getInteractiveModeButton(),
            timeSlider: (
              <SliderComponent
                breakpoints={sliderBreakpoints}
                interactiveModeEnabled={interactiveModeEnabled}
                onInteractiveVideoDialogOpen={handleInteractiveVideoDialogOpen}
              />
            ),
          }}
          translations={playerTranslations}
          thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
          icons={defaultLayoutIcons}
        />

        <TrackList tracks={textTracks} />

        <InteractiveVideoDialog
          isOpen={isInteractiveVideoDialogOpen}
          backgroundTransparency={interactiveModeBackgroundTransparency}
          onClose={handleInteractiveVideoDialogClose}
        >
          {currentInteractiveBreakpoint?.content}
        </InteractiveVideoDialog>
      </MediaPlayer>
    </div>
  );
};

export default VidstackPlayer;
