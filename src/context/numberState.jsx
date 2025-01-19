import { atom } from "recoil";

export const highScoreAtom = atom({
      key: "highScoreAtom",
      default: 0
})

export const scoreAtom = atom({
      key: "scoreAtom",
      default: 0
})

export const randomAtom = atom({
      key: "randomAtom",
      default: Math.floor(Math.random()*50)+1
})

export const valueAtom = atom({
      key: "valueAtom",
      default: 0
})

export const attemptsAtom = atom({
      key: "attemptsAtom",
      default: 10
})

export const boxscoreAtom = atom({
      key: "boxscoreAtom",
      default: "?"
})