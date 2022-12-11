/**
 * Root for your util libraries.
 *
 * You can import them in the src/template/index.ts,
 * or in the specific file.
 *
 * Note that this repo uses ES Modules, so you have to explicitly specify
 * .js extension (yes, .js not .ts - even for TypeScript files)
 * for imports that are not imported from node_modules.
 *
 * For example:
 *
 *   correct:
 *
 *     import _ from 'lodash'
 *     import myLib from '../utils/myLib.js'
 *     import { myUtil } from '../utils/index.js'
 *
 *   incorrect:
 *
 *     import _ from 'lodash'
 *     import myLib from '../utils/myLib.ts'
 *     import { myUtil } from '../utils/index.ts'
 *
 *   also incorrect:
 *
 *     import _ from 'lodash'
 *     import myLib from '../utils/myLib'
 *     import { myUtil } from '../utils'
 *
 */

export const hasDuplicates = <T>(arr: T[]): boolean => arr.length !== new Set(arr).size;

export const lines = (text: string): string[] => text.split('\n')
  
export const getNumbersFromString = (text: string): number[] => text ? text.replace(/\D+/g, ' ').trim().split(' ').map(e => parseInt(e)) : [];
  
export const partition = <T>(ary: T[], callback: (e: T) => {}) =>
ary.reduce((acc:[T[],T[]], e) => {
    acc[callback(e) ? 0 : 1].push(e)
    return acc
}, [[], []])