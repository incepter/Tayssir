/**
 * Polyfill stable language features. These imports will be optimized by `@babel/preset-env`.
 *
 * See: https://github.com/zloirock/core-js#babel
 */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// https://stackoverflow.com/questions/54201934/referenceerror-global-is-not-defined-with-stream-and-angular-7-1
(window as any).global = window;
