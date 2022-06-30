#!/usr/bin/env node
import start from '../src/index.js';
import { gameGcd, gameGcdRule } from '../src/games/gcd.js';

start(gameGcd, gameGcdRule);
