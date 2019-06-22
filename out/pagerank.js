"use strict";
const PageA = {
    name: "A",
    rank: 1 / 4,
    pointingTo: ["B", "C"],
    pointedFrom: ["C"],
};
const PageB = {
    name: "B",
    rank: 1 / 4,
    pointingTo: ["D"],
    pointedFrom: ["A", "C"],
};
const PageC = {
    name: "C",
    rank: 1 / 4,
    pointingTo: ["A", "B", "D"],
    pointedFrom: ["D", "A"],
};
const PageD = {
    name: "D",
    rank: 1 / 4,
    pointingTo: ["C"],
    pointedFrom: ["B", "C"],
};
const initialCluster = [PageA, PageB, PageC, PageD];
const pageRank = (cluster, itt = 1) => {
    const upc = cluster.map(page => {
        const pointedFrom = cluster.filter(_page => page.pointedFrom.indexOf(_page.name) !== -1);
        const iRanks = pointedFrom.map(_page => _page.rank / _page.pointingTo.length);
        const rank = iRanks.reduce((c, n) => c + n, 0);
        return {
            ...page,
            rank,
        };
    });
    if (itt == 1)
        return upc;
    else
        return pageRank(upc, itt - 1);
};
pageRank(initialCluster, 5).map(p => console.log(p.name, p.rank));
//# sourceMappingURL=pagerank.js.map