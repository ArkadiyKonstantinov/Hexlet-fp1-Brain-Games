#!/usr/bin/env node
import start from '../src/index.js';
import { gameCalc, gameCalcRule } from '../src/games/calc.js';

start(gameCalc, gameCalcRule);
