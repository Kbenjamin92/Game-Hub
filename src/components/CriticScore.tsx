import { Badge } from '@chakra-ui/react';


interface Props {
    score: number;
}

export const CriticScore = ({ score }: Props) => {
    const color = score > 75 ? 'green.300' : score > 60 ? 'yellow' : '';

  return (
    <Badge fontSize='14px' paddingX={2} borderRadius={2} color={color}>
      {score}
    </Badge>
  )
}


