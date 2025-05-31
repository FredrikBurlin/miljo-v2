import { printLine } from './modules/printLine';
import { observeBadgeInjection } from './modules/injectBadge';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

observeBadgeInjection("My Prod", 152);
