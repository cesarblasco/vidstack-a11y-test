import { useState } from "react";
import { Icon, Menu } from "@vidstack/react";
import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon, ComputerIcon } from "@vidstack/react/icons";


import { disabledMediaPlayerKeyShortcuts, defaultMediaPlayerKeyShortcuts } from "@/app/helpers/video_player_shortcuts";

import styles from './custom_settings_menu.module.css';


interface CustomSettingsMenuProps {
    currentMediaKeyShortcuts: any;
    onSetMediaPlayerKeyShortcuts: (mediaKeyShortcuts: any) => void;
}


 


// https://vidstack.io/docs/player/components/sliders/time-slider/?styling=default-theme
const CustomSettingsMenu = ({
    currentMediaKeyShortcuts,
    onSetMediaPlayerKeyShortcuts
}: CustomSettingsMenuProps) => {

  const handleSetMediaPlayerKeyShortcuts = () => {
    console.log({currentMediaKeyShortcuts})
    const newMediaKeyShortcuts = currentMediaKeyShortcuts.type === 'default' ? disabledMediaPlayerKeyShortcuts : defaultMediaPlayerKeyShortcuts
    onSetMediaPlayerKeyShortcuts(newMediaKeyShortcuts);
  }

  return (
    <Menu.Root className="vds-menu">
      <Menu.Button className="vds-menu-item">
        <ComputerIcon color="black" size={16} className="vds-icon" />
        <ArrowLeftIcon
          color="black"
          size={16}
          className="vds-menu-close-icon vds-icon"
        />
        <span>Other Settings</span>
        <ChevronRightIcon
          color="black"
          size={16}
          className="vds-menu-open-icon vds-icon"
        />
      </Menu.Button>
      <Menu.Content className="media-menu">
        <div className="vds-menu-section">
            <div className="vds-menu-section-body">
              <div className="vds-menu-item">
                <div className="vds-menu-item-label">
                  <span className={styles['option-label']}>
                    Toggle Media Player Key Shortcuts 
                  </span>
                </div>
                <div
                  className="vds-menu-checkbox"
                  role="menuitemcheckbox"
                  tabIndex={0}
                  aria-label="Toggle CC shortcut"
                  aria-checked={currentMediaKeyShortcuts.type === 'default'}
                  onClick={handleSetMediaPlayerKeyShortcuts}
                ></div>
              </div>
            </div>
          </div> 
        </Menu.Content>
    </Menu.Root>
  );
};

export default CustomSettingsMenu;
