import { useEffect, FC } from "react";
import { useMediaRemote, useMediaStore } from "@vidstack/react";
import SliderBreakpoint from "@/app/types/slider_breakpoint";

interface SliderBreakpointsProps {
  breakpoints: SliderBreakpoint[];
  interactiveModeEnabled: boolean;
  audioDescriptionsEnabled: boolean;
  onInteractiveVideoDialogOpen: (breakpoint: SliderBreakpoint) => void;
}

const SliderBreakpoints: FC<SliderBreakpointsProps> = ({
  breakpoints,
  interactiveModeEnabled,
  audioDescriptionsEnabled,
  onInteractiveVideoDialogOpen,
}) => {
  const remote = useMediaRemote();
  const { duration, currentTime } = useMediaStore();

  useEffect(() => {
    // very small timeframe so the video doesn't pause again when using the seekbar to go to a breakpoint
    const TIME_OFFSET = 0.015;

    breakpoints.forEach((breakpoint) => {
      if (
        interactiveModeEnabled &&
        currentTime > breakpoint.time &&
        currentTime < breakpoint.time + TIME_OFFSET
      ) {
        remote.pause();
        onInteractiveVideoDialogOpen(breakpoint);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTime]);

  const handleBreakpointClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    breakpoint: SliderBreakpoint
  ) => {
    console.log(event);
    // event.preventDefault();
    // event.stopPropagation();
    remote.seek(breakpoint.time);
    onInteractiveVideoDialogOpen(breakpoint);
  };

  const convertSecondsToMinutes = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {interactiveModeEnabled && (
        <ul className="video-steps">
          {breakpoints.map((breakpoint) => {
            // Skip rendering if breakpoint is audio-description type and audio descriptions are disabled
            if (breakpoint.breakpointType === 'audio-description' && !audioDescriptionsEnabled) {
              return null;
            }
            
            return (
              <li  
                  key={breakpoint.time}
                  className={`video-step video-step--${
                    breakpoint.type || "default"
                  }`}
                  style={{
                    left: `${(breakpoint.time / duration) * 100}%`,
                  }}
                  title={breakpoint.label || `Step at ${breakpoint.time}s`}
                >
                  <button
                    className="step-marker"
                    onClick={(event) => handleBreakpointClick(event, breakpoint)}
                    aria-label={`Interactive mode breakpoint at ${convertSecondsToMinutes(breakpoint.time)} minutes with title ${breakpoint.label}, click to jump to this breakpoint`}
                  ></button>
                  {breakpoint.label && (
                    <div className="step-label">{breakpoint.label}</div>
                  )}
             
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default SliderBreakpoints;
