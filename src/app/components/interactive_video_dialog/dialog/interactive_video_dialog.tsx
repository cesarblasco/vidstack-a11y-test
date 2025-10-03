import { useEffect, useRef } from 'react';
// import { useMediaRemote } from '@vidstack/react';

import styles from './interactive_video_dialog.module.css';


interface InteractiveVideoDialogProps {
    isOpen: boolean;
    children: React.ReactNode;
    onClose: () => void;
    backgroundTransparency?: number;
}

const InteractiveVideoDialog: React.FC<InteractiveVideoDialogProps> = ({ 
  backgroundTransparency = 1,
  isOpen,
  children,
  onClose
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [isOpen]);
  // const remote = useMediaRemote();

  const handleClose = () => {
    // remote.play();
    onClose();
  }

  return (
    <dialog 
        ref={dialogRef}
        className={styles.wrapper} 
        open={isOpen} 
        style={{ backgroundColor: `rgba(0, 0, 0, ${backgroundTransparency})` }}
    >
      {children}
      <button 
        className={styles['close-button']} 
        aria-label="Close interactive video dialog"
        onClick={handleClose}>Close</button>
    </dialog>
  );
}


  export default InteractiveVideoDialog;