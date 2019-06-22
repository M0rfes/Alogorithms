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
      ? mostCommon(list, r, word.length - r.length + depth + 1)
      : mostCommon(newlist, r, word.length - r.length + depth);
  }
};
const ol = ['most', 'common', 'list', 'acetone', 'community', 'coming'].map(
  w => [...w],
);
console.log(mostCommon(ol, [...'camunity']));
