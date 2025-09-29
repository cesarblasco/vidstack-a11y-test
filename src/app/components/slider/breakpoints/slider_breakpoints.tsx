import { useEffect, FC } from 'react';
import { useMediaRemote, useMediaStore } from '@vidstack/react';
import SliderBreakpoint from '@/app/types/slider_breakpoint';

interface SliderBreakpointsProps {
  breakpoints: SliderBreakpoint[];
  interactiveModeEnabled: boolean;
  onInteractiveVideoDialogOpen: (breakpoint: SliderBreakpoint) => void;
}

const SliderBreakpoints: FC<SliderBreakpointsProps> = ({ 
  breakpoints, 
  interactiveModeEnabled,
  onInteractiveVideoDialogOpen,
}) => {
  const remote = useMediaRemote();
  const { duration, currentTime } = useMediaStore();

  useEffect(() => {
    // very small timeframe so the video doesn't pause again when using the seekbar to go to a breakpoint
    const TIME_OFFSET = 0.015; 

    breakpoints.forEach((breakpoint) => {
        if (interactiveModeEnabled && currentTime > breakpoint.time && currentTime < breakpoint.time + TIME_OFFSET) {
            remote.pause();
            onInteractiveVideoDialogOpen(breakpoint);
        }
     });
  }, [currentTime]);

  const handleBreakpointClick = (event: React.MouseEvent<HTMLButtonElement>, breakpoint: SliderBreakpoint) => {
    // event.preventDefault();
    // event.stopPropagation();
    remote.seek(breakpoint.time);
    onInteractiveVideoDialogOpen(breakpoint);
  }

  return (
    <>
      {interactiveModeEnabled && (
        <ul className="video-steps">
          {breakpoints.map((breakpoint) => (
            <li key={breakpoint.time}>
              <div
                key={breakpoint.time}
                className={`video-step video-step--${breakpoint.type || 'default'}`}
                style={{
                  left: `${(breakpoint.time / duration) * 100}%`,
                }}
                title={breakpoint.label || `Step at ${breakpoint.time}s`}
              >
                <button className="step-marker"
                   onClick={() => handleBreakpointClick(event, breakpoint)}
                   aria-label={`Interactive mode breakpoint at ${breakpoint.time}, click to jump to this step`}
                >
                </button>
                  {breakpoint.label && (
                    <div className="step-label">{breakpoint.label}</div>
                  )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}


  export default SliderBreakpoints;