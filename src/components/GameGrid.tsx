import { Platform, useGames } from '../hooks/useGames';
import { GameCard } from './GameCard';
import { Text, SimpleGrid } from '@chakra-ui/react';
import { GameCardSkeleton } from './GameCardSkeleton';
import { GameCardContainer } from './GameCardContainer';
import { Genre } from '../hooks/useGenres';

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

export const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
    const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);

    const skeleton = [1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 18]

  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={5} padding='10px'>
        {isLoading && skeleton.map((skeleton) => 
        <GameCardContainer key={skeleton}>
          <GameCardSkeleton  />
        </GameCardContainer>
          )}
        {data.map(game => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
    </SimpleGrid>
    </>
  )
}

