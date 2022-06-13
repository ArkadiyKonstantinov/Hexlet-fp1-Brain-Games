#!/usr/bin/env node
import gameStart from '../src/index.js';
import { gameCalc, gameCalcRule } from '../games/calc.js';

gameStart(gameCalc, gameCalcRule);
