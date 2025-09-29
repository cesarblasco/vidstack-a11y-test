import TextTrack from "../../track/track";
import TextTrackProps from "@/app/types/text_track";

interface TrackListProps {
  tracks: TextTrackProps[];
}

const TrackList = ({ tracks }: TrackListProps) =>
  tracks.map((track) => <TextTrack {...track} key={track.id} />);

export default TrackList;
