#!/usr/bin/env node
import gameStart from '../src/index.js';
import { gamePrime, gamePrimeRule } from '../games/prime.js';

gameStart(gamePrime, gamePrimeRule);
