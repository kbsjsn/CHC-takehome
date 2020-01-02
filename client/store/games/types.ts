interface GameFile {
  FileName: string;
}

interface CategorySection {
  Name: string;
}

export interface GameData {
  ID: number;
  Name: string;
  SupportsAddons: boolean;
  SupportsVoice: boolean;
  Slug: string;
  GameFiles: Array<GameFile>;
  CategorySections: Array<CategorySection>;
};

// Describing the shape of game's slice of state
export interface GamesState {
  data: Array<GameData> | null | undefined;
  filteredGames: Array<GameData> | null;
};

export const LOAD_GAMES = 'LOAD_GAMES';
export const UNABLE_LOAD_GAMES = 'UNABLE_LOAD_GAMES';
export const FILTER_BY_QUERY = 'FILTER_BY_QUERY';

interface LoadGamesAction {
  type: typeof LOAD_GAMES;
  payload: Array<GameData>;
}

interface UnableLoadGamesAction {
  type: typeof UNABLE_LOAD_GAMES;
  payload: null;
}

interface FilterByQueryAction {
  type: typeof FILTER_BY_QUERY;
  payload: Array<GameData>;
}

export type GamesActionTypes = LoadGamesAction | UnableLoadGamesAction | FilterByQueryAction;