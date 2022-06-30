#!/usr/bin/env node
import start from '../src/index.js';
import { progression, progressionRule } from '../src/games/progression.js';

start(progression, progressionRule);
