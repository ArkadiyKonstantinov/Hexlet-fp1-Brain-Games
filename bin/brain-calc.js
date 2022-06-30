#!/usr/bin/env node
import start from '../src/index.js';
import { calc, calcRule } from '../src/games/calc.js';

start(calc, calcRule);
