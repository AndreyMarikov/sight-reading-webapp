import { Link, useSearchParams } from 'react-router-dom';

export default function NoteReadingPage() {
  const [searchParams] = useSearchParams();
  const octave = searchParams.get('octave');

  const getPath = () => {
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

    return path;
  }

  return (
    <>
      <h1>чтение нот</h1>
      <span className="center" id="menu-btns">
        <Link to={getPath()} className="btn btn-blue btn-menu">белые клавиши</Link>
        <Link to={{
          pathname: '/mode-selection/note-reading/black-keys',
          search: octave && '?octave=' + octave,
        }} className="btn btn-green btn-menu">чёрные клавиши</Link>
        <Link to={{
          pathname: getPath(),
          search: '?mode=white-and-black-keys',
        }} className="btn btn-purple btn-menu">белие и чёрные клавиши</Link>
      </span>
    </>
  );
}
