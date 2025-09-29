import { Menu, useCaptionOptions } from '@vidstack/react';

const CaptionsMenu = () => {
  const options = useCaptionOptions(),
    hint = options.selectedTrack?.label ?? 'Off';

    // console.log({options});
  return (
    <Menu.Root>
      <Menu.Button disabled={options.disabled}>Captions ({hint})</Menu.Button>
      <Menu.Content>
        <Menu.RadioGroup value={options.selectedValue}>
          {options.map(({ label, value, select }) => (
            <Menu.Radio value={value} onSelect={select} key={value}>
              {label}
            </Menu.Radio>
          ))}
        </Menu.RadioGroup>
      </Menu.Content>
    </Menu.Root>
  );
}

export default CaptionsMenu;