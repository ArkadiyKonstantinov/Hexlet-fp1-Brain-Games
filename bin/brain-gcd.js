#!/usr/bin/env node
import gameStart from '../src/index.js';
import { gameGcd, gameGcdRule } from '../games/gcd.js';

gameStart(gameGcd, gameGcdRule);
