import { Link, useSearchParams } from 'react-router-dom';

export default function ModeSelectionPage() {
  const [searchParams] = useSearchParams();
  const octave = searchParams.get('octave');

  const getPath = (queryString) => {
    let path;

    if (octave == 'great') {
      path = '/great-octave';
    } else if (octave == 'small') {
      path = '/small-octave';
    } else if (octave == 'two-line') {
      path = '/two-line-octave';
    } else {
      path = '/one-line-octave';
    }

    if (queryString) {
      return path + queryString;
    }

    return path;
  }

  return (
    <>
      <h1>Choose mode</h1>
      <span className="center" id="menu-btns">
        <Link to={'/note-notation-selection?octave=' + octave} className="btn btn-orange btn-menu">Warm-up</Link>
        <Link to={{
          pathname: '/mode-selection/note-reading',
          search: octave && '?octave=' + octave,
        }} className="btn btn-red btn-menu">Note reading</Link>
      </span>
    </>
  );
}
