const TRAIT_GUESS_ACTION_TYPE = '[TraitGuess]';

export class InitTraitGuess {
  public static type = `${TRAIT_GUESS_ACTION_TYPE} InitTraitGuess`;
  constructor() {}
}

export class GetVictoryData {
  public static type = `${TRAIT_GUESS_ACTION_TYPE} GetVictoryData`;
  constructor() {}
}

export class CheckGuess {
  public static type = `${TRAIT_GUESS_ACTION_TYPE} CheckGuess`;
  constructor(public traitId: string) {}
}

export class GetSameTraitClue {
  public static type = `${TRAIT_GUESS_ACTION_TYPE} GetSameTraitClue`;
  constructor() {}
}

export class GetStatClue {
  public static type = `${TRAIT_GUESS_ACTION_TYPE} GetStatClue`;
  constructor() {}
}

export class QueryTraits {
  public static type = `${TRAIT_GUESS_ACTION_TYPE} QueryTraits`;
  constructor(public query: string, public alreadyGuessedIds: string[]) {}
}

export class ResetQueryResults {
  public static type = `${TRAIT_GUESS_ACTION_TYPE} ResetQueryResults`;
  constructor() {}
}
