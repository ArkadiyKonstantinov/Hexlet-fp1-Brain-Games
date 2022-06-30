#!/usr/bin/env node
import start from '../src/index.js';
import { gcd, gcdRule } from '../src/games/gcd.js';

start(gcd, gcdRule);
