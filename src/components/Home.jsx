import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <span>
      <h1>Choose octave</h1>
      <span className='center' id='menu-btns'>
        <Link to={{
          pathname: '/mode-selection',
          search: '?octave=great',
        }} className="btn btn-red btn-menu">Great octave 𝄢</Link>
        <Link to={{
          pathname: '/mode-selection',
          search: '?octave=small',
        }} className="btn btn-blue btn-menu">Small octave 𝄢</Link>
        <Link to={{
          pathname: '/mode-selection',
        }} className="btn btn-green btn-menu">One-line octave 𝄞</Link>
        <Link to={{
          pathname: '/mode-selection',
          search: '?octave=two-line',
        }} className="btn btn-orange btn-menu">Two-line octave 𝄞</Link>
      </span>
    </span>
  );
}
