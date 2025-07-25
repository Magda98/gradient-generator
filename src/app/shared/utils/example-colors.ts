export const exampleColors = [
  '#142243',
  '#ff1493',
  '#000000',
  '#808080',
  '#800000',
  '#008000',
  '#000080',
  '#808000',
  '#800080',
  '#008080',
  '#1e90ff',
  '#ff4500',
  '#da70d6',
  '#32cd32',
  '#ffa500',
  '#00ced1',
  '#ff6347',
  '#4682b4',
  '#d2691e',
  '#9acd32',
  '#f0e68c',
  '#dda0dd',
  '#add8e6',
  '#f08080',
];

export function getExampleColor(): string {
  return exampleColors[Math.floor(Math.random() * exampleColors.length)];
}
