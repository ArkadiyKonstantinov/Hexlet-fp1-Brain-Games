#!/usr/bin/env node
import start from '../src/index.js';
import { prime, primeRule } from '../src/games/prime.js';

start(prime, primeRule);
