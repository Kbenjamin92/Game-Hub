import { useGames } from '../hooks/useGames';
import { GameCard } from './GameCard';
import { Text, SimpleGrid } from '@chakra-ui/react';
import { GameCardSkeleton } from './GameCardSkeleton';
import { GameCardContainer } from './GameCardContainer';

export const GameGrid = () => {
    const { games, error, isLoading } = useGames();

    const skeleton = [1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 18]

  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={8} padding='10px'>
        {isLoading && skeleton.map((skeleton) => 
        <GameCardContainer>
          <GameCardSkeleton key={skeleton} />
        </GameCardContainer>
          )}
        {games.map(game => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
    </SimpleGrid>
    </>
  )
}

