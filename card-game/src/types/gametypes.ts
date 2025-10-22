// types/gametypes.ts
export type Cor = 'vermelho' | 'azul' | 'verde' | 'amarelo';

export type ValorCarta = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

export type Carta = {
  id: string;
  cor: Cor;
  valor: ValorCarta;
}

// Baralho simplificado - apenas números
export const BARALHO_COMPLETO: Carta[] = [];

// Cores disponíveis
const cores: Cor[] = ['vermelho', 'azul', 'verde', 'amarelo'];

// Criar cartas numeradas (0-9) para cada cor
cores.forEach(cor => {
  // Uma carta 0 de cada cor
  BARALHO_COMPLETO.push({
    id: `${cor}-0`,
    cor,
    valor: '0'
  });

  // Duas cartas de 1-9 para cada cor
  for (let i = 1; i <= 9; i++) {
    BARALHO_COMPLETO.push(
      {
        id: `${cor}-${i}-1`,
        cor,
        valor: i.toString() as ValorCarta,
      },
      {
        id: `${cor}-${i}-2`,
        cor,
        valor: i.toString() as ValorCarta,
      }
    );
  }
});