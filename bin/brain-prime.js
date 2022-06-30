#!/usr/bin/env node
import start from '../src/index.js';
import { gamePrime, gamePrimeRule } from '../src/games/prime.js';

start(gamePrime, gamePrimeRule);
