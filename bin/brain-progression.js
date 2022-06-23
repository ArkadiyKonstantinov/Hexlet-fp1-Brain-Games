#!/usr/bin/env node
import gameStart from '../src/index.js';
import { gameProgression, gameProgressionRule } from '../games/progression.js';

gameStart(gameProgression, gameProgressionRule);
