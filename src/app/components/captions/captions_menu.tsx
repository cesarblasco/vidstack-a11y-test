import { Menu, useCaptionOptions } from '@vidstack/react';

const CaptionsMenu = () => {
  const options = useCaptionOptions(),
    hint = options.selectedTrack?.label ?? 'Off';

  return (
    <Menu.Root>
      <Menu.Button disabled={options.disabled}>Captions ({hint})</Menu.Button>
      <Menu.Content>
        <Menu.RadioGroup className="vds-radio-group" value={options.selectedValue}>
          {options.map(({ label, value, select }) => (
            <Menu.Radio className="vds-radio" value={value} onSelect={select} key={value}>
               <span className="vds-radio-label">{label}</span>
            </Menu.Radio>
          ))}
        </Menu.RadioGroup>
      </Menu.Content>
    </Menu.Root>
  );
}

export default CaptionsMenu;