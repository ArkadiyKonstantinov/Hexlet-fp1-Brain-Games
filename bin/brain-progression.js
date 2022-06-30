#!/usr/bin/env node
import start from '../src/index.js';
import { gameProgression, gameProgressionRule } from '../src/games/progression.js';

start(gameProgression, gameProgressionRule);
