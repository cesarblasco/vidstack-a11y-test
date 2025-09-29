import { Tooltip } from '@vidstack/react';

interface CustomVidstackButtonProps {
    tooltipContent: React.ReactNode;
    buttonContent: React.ReactNode;
    ariaLabel: string;
    ariaPressed: boolean;
    onClick: () => void;
}

// Custom button component for Vidstack player implementation that will look the same and have the same
// properties as the default buttons with styling and aria attributes, use for custom buttons like interactive mode toggle
// or any others needed
// DOCS for tooltip
// https://vidstack.io/docs/player/components/buttons/tooltip/
const CustomVidstackButton: React.FC<CustomVidstackButtonProps> = ({
    tooltipContent,
    buttonContent,
    ariaLabel,
    ariaPressed,
    onClick,
}) => {
  return (
    <Tooltip.Root>
        <Tooltip.Trigger asChild>
            <button 
                aria-label={ariaLabel}
                aria-pressed={ariaPressed}
                className="vds-button" 
                onClick={onClick}
            >
                {buttonContent}
            </button>
        </Tooltip.Trigger>
        <Tooltip.Content className="vds-tooltip-content" placement="top start">
            {tooltipContent}
        </Tooltip.Content>
    </Tooltip.Root>
  );
}

export default CustomVidstackButton;