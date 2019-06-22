const mostCommon: (
  arg1: string[][],
  arg2: string[],
  arg3?: number,
) => string[][] = (list, word, depth = 0) => {
  if (word.length === 0 || list.length === 0) {
    return list;
  } else {
    const [h, ...r] = word;
    const newlist = list.filter(w => w[depth] === h);
    return newlist.length === 0
      ? mostCommon(list, r, word.length - r.length + depth)
      : mostCommon(newlist, r, word.length - r.length + depth);
  }
};
const ol = ['most', 'common', 'coming', 'list', 'acetone', 'community'].map(
  w => [...w],
);
const obj: { [x: number]: string[] } = { ...ol };
console.log(mostCommon(ol, [...'comunity']));
