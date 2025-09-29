import { Track } from '@vidstack/react';
import TextTrackProps from '@/app/types/text_track';;

// DOCS: https://vidstack.io/docs/player/core-concepts/loading/?styling=default-theme#text-tracks
  
const TextTrack = ({ src , kind, label, lang, content, type, default: isDefault }: TextTrackProps) => (
   <Track 
        src={src} 
        kind={kind} 
        label={label} 
        lang={lang} 
        type={type}
        content={content}
        default={isDefault}
    />
)

export default TextTrack;