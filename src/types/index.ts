export interface ArcadeMachine {
  id: string;
  name: string;
  game: string;
  tokensRequired: number;
  players: number;
  status: 'Disponible' | 'Mantenimiento';
}