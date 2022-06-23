#!/usr/bin/env node
import gameStart from '../src/index.js';
import { gameProgression, gameProgressionRule } from '../games/gcd.js';

gameStart(gameProgression, gameProgressionRule);
