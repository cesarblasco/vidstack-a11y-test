import { MediaKeyShortcuts } from "@vidstack/react";

const defaultMediaPlayerKeyShortcuts: MediaKeyShortcuts = {
    type: 'default',
    // Space-separated list.
    togglePaused: "k Space",
    toggleMuted: "m",
    toggleFullscreen: "f",
    togglePictureInPicture: "i",
    toggleCaptions: 'c', // could be configured from consumer, for a11y purposes we should disable it seems
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

const disabledMediaPlayerKeyShortcuts: MediaKeyShortcuts = {
  type: 'disabled',
  // Space-separated list.
  togglePaused: null,
  toggleMuted: null,
  toggleFullscreen: null,
  togglePictureInPicture: null,
  toggleCaptions: null, // could be configured from consumer, for a11y purposes we should disable it seems
  // Array.
  seekBackward: null,
  seekForward: null,
  volumeUp: null,
  volumeDown: null,
  speedUp: null,
  slowDown: null,
  // Custom callback.
  fooBar: null,
};


export { defaultMediaPlayerKeyShortcuts, disabledMediaPlayerKeyShortcuts }