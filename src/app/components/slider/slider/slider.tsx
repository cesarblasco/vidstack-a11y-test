import { TimeSlider } from "@vidstack/react";

import SliderBreakpoint from "@/app/types/slider_breakpoint";
import SliderBreakpoints from "../breakpoints/slider_breakpoints";

interface SliderProps {
  breakpoints: SliderBreakpoint[];
  interactiveModeEnabled: boolean;
  onInteractiveVideoDialogOpen: (breakpoint: SliderBreakpoint) => void;
}

// interface ChapterCue {
//   startTime: number;
//   endTime: number;
//   text: string;
// }

// https://vidstack.io/docs/player/components/sliders/time-slider/?styling=default-theme
const Slider = ({
  breakpoints,
  interactiveModeEnabled,
  onInteractiveVideoDialogOpen,
}: SliderProps) => {
  // const duration = useMediaState("duration");

  // Component to render chapter markers with proper positioning
  // const ChapterMarkers = ({ cues, forwardRef }: { cues: ChapterCue[], forwardRef: React.Ref<HTMLDivElement> }) => {
  //   return (
  //     <div ref={forwardRef} className="vds-slider-chapters">
  //       {cues.map((cue, index) => {
  //         if (!duration) return null;

  //         const leftPercent = (cue.startTime / duration) * 100;
  //         const widthPercent = ((cue.endTime - cue.startTime) / duration) * 100;

  //         // Adjust width to account for 2px gap (approximate percentage based on slider width)
  //         const gapAdjustment = index < cues.length - 1 ? 0.2 : 0; // Small percentage for gap
  //         const adjustedWidth = Math.max(widthPercent - gapAdjustment, 0.5); // Minimum width

  //         return (
  //           <div
  //             key={cue.startTime}
  //             className="vds-chapter-marker"
  //             style={{
  //               left: `${leftPercent}%`,
  //               width: `${adjustedWidth}%`
  //             }}
  //             data-start={cue.startTime}
  //             data-end={cue.endTime}
  //             title={cue.text}
  //           />
  //         );
  //       })}
  //     </div>
  //   );
  // };

  return (
    <TimeSlider.Root className="vds-time-slider vds-slider" step={2}>
      <TimeSlider.Track className="vds-slider-track" />
      <TimeSlider.TrackFill className="vds-slider-track-fill vds-slider-track" />
      <TimeSlider.Progress className="vds-slider-progress vds-slider-track" />
      <TimeSlider.Thumb className="vds-slider-thumb" />

      <TimeSlider.Preview className="vds-slider-preview">
        <TimeSlider.Value className="vds-slider-value"></TimeSlider.Value>
      </TimeSlider.Preview>

      {/* <TimeSlider.Chapters>
        {(cues, forwardRef) => (
          <ChapterMarkers cues={cues} forwardRef={forwardRef} />
        )}

        {(cues, forwardRef) =>
          cues.map((cue) => (
            <div key={cue.startTime} ref={forwardRef}>
              <TimeSlider.Track>
                <TimeSlider.TrackFill />
                <TimeSlider.Progress />
              </TimeSlider.Track>
          </div>
        ))}

      
      </TimeSlider.Chapters> */}

      <SliderBreakpoints
        breakpoints={breakpoints}
        interactiveModeEnabled={interactiveModeEnabled}
        onInteractiveVideoDialogOpen={onInteractiveVideoDialogOpen}
      />
    </TimeSlider.Root>
  );
};

export default Slider;
