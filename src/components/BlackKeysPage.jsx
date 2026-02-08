import { Link, useSearchParams } from 'react-router-dom';

export default function BlackKeysPage() {
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
      <h1>чёрные клавиши</h1>
      <span className="center" id="menu-btns">
        <Link to={{
          pathname: getPath(),
          search: '?mode=with-sharps',
        }} className="btn btn-cyan btn-menu">С диезами ♯</Link>
        <Link to={{
          pathname: getPath(),
          search: '?mode=with-flats',
        }} className="btn btn-purple btn-menu">С бемолями ♭</Link>
        <Link to={{
          pathname: getPath(),
          search: '?mode=with-sharps-and-flats',
        }} className="btn btn-red btn-menu">С диезами ♯<br></br>и бемолями ♭</Link>
        <Link to={{
          pathname: getPath(),
          search: '?mode=with-double-sharps-and-double-flats',
        }} className="btn btn-green btn-menu">
          С дубль-диезами 𝄪
          <br></br>
          и дубль-бемолями 𝄫
        </Link>
      </span>
    </>
  );
}
