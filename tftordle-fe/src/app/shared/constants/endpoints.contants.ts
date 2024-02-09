const sharedEndpoints = {
  checkGuess: 'check',
  lastGuessChampion: 'last',
  correctGuessCount: 'correct-guess-count',
  statClue: 'stat-clue',
  victoryData: 'victory-data',
};

export const endpoints = {
  guessChampionUpdate: 'guess-champion-update',
  traitGuess: {
    ...sharedEndpoints,
    basePath: 'trait-guess',
    queryTraits: 'query-traits',
    sameTraitClue: 'same-trait-clue',
    guessChampion: 'champion',
  },
  championGuess: {
    ...sharedEndpoints,
    basePath: 'champion-guess',
    queryChampions: 'query-champions',
    iconClue: 'icon-clue',
  },
};
