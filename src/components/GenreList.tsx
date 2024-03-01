import useGenres from '../hooks/useGenres';

export const GenreList = () => {
    const { genres } = useGenres();

  return (
    <ul>
      {genres.map(g => <li key={g.id}>{g.name}</li>)}
    </ul>
  )
}