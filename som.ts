const removeUncommon: (arg1: string, arg2: string) => [string, string] = (
  str1,
  str2,
) =>
  [...str1].filter(i => [...str2].some(j => i === j)).join('') === str1
    ? [[...str2].filter(i => [...str1].some(j => i === j)).join(''), str1]
    : [[...str1].filter(i => [...str2].some(j => i === j)).join(''), str2];

const findSubStr: (
  arg1: string[],
  arg2: string[],
  arg3?: string[],
) => string[] = ([h1, ...t1], [h2, ...t2], res = []) =>
  h1 === undefined || h2 === undefined
    ? res
    : h1 === h2
    ? findSubStr([...t1], [...t2], [...res, h1])
    : findSubStr([h1, ...t1], [...t2], [...res]);

const [a, b] = removeUncommon('GXTXAYB', 'AGQGTAB');
console.log(findSubStr([...a], [...b]).join(''));
