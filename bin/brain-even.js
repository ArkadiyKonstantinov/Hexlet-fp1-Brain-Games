#!/usr/bin/env node
import start from '../src/index.js';
import { even, evenRule } from '../src/games/even.js';

start(even, evenRule);
