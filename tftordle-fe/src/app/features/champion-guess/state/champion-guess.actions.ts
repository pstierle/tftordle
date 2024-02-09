const CHAMPION_GUESS_ACTION_TYPE = '[ChampionGuess]';

export class InitChampionGuess {
  public static type = `${CHAMPION_GUESS_ACTION_TYPE} InitChampionGuess`;
  constructor() {}
}

export class CheckGuess {
  public static type = `${CHAMPION_GUESS_ACTION_TYPE} CheckGuess`;
  constructor(public championId: string) {}
}

export class GetStatClue {
  public static type = `${CHAMPION_GUESS_ACTION_TYPE} GetStatClue`;
  constructor() {}
}

export class GetVictoryData {
  public static type = `${CHAMPION_GUESS_ACTION_TYPE} GetVictoryData`;
  constructor() {}
}

export class QueryChampions {
  public static type = `${CHAMPION_GUESS_ACTION_TYPE} QueryChampions`;
  constructor(public query: string, public alreadyGuessedIds: string[]) {}
}

export class ResetQueryResults {
  public static type = `${CHAMPION_GUESS_ACTION_TYPE} ResetQueryResults`;
  constructor() {}
}

export class GetIconClue {
  public static type = `${CHAMPION_GUESS_ACTION_TYPE} GetIconClue`;
  constructor() {}
}
