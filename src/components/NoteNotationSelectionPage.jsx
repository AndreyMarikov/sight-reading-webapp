import { Link, useSearchParams } from 'react-router-dom';

export default function NoteNotationSelectionPage() {
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
      <h1>Choose note notation</h1>
      <span id='menu-btns' className='center'>
        <Link to={getPath() + '?mode=warm-up&note-notation=c-d-e'} className='btn btn-cyan btn-menu'>C-D-E</Link>
        <Link to={getPath() + '?mode=warm-up&note-notation=do-re-mi'} className='btn btn-orange btn-menu'>do-re-mi</Link>
      </span>
    </>
  );
}
