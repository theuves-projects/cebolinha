import test from 'ava';
import cebolinha from './';

test('cebolinha', t => {
    t.is(cebolinha('errado'), 'elado');
    t.is(cebolinha('comer'), 'comer');
    t.is(cebolinha('parlamento'), 'paulamento');
});
