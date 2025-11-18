## FunctionalProgramming

### FP principles

1. Pure Functions — output depends only on input; no hidden state or side effects.
2. Immutability — data never changes; create new values instead of mutating existing ones.
3. Referential Transparency — any expression can be replaced with its evaluated result without changing program behavior.
4. Higher-Order Functions — either takes function(s) as argument(s) or returns a function(s) as its result.
5. Function Composition — build complex transformations by composing small functions in chains.
6. Point-Free Style — define transformations by combining functions, not naming intermediate data.
7. Currying — transform a function of many arguments into a chain of single-argument functions.
8. Partial Application — pre-fill some arguments to produce specialized functions.
9. Algebraic Data Types (ADTs) — is a composite data (type combining other types).
10. Total Functions — function must return a valid result for every valid input in its type.
11. No Hidden State — avoid local mutation and invisible transitions; state is always explicit.
12. Explicit Effects — model I/O, randomness, time, async, or errors using types (Option, Either, Result, IO, Task).
13. Lazy Evaluation — defer computation until needed; represent infinite sequences naturally.
14. Idempotence — repeated evaluation yields the same result without accumulating side effects.
15. Declarative Style — describe "what" to compute, not "how" to compute it step-by-step.
16. Pipeline Processing — linear data flow; avoid branching when possible by chaining operations.
17. Stateless Concurrency — parallelize pure computations without synchronization.
18. Determinism — same inputs always produce the same outputs; easy reproducibility.

### Same principles as in OOP

1. Abstraction — hide internal representation via functions instead of classes.
2. Separation of Concerns — isolate independent transformations, modules, and pipelines.
3. Tell, Don’t Ask (in FP terms) — push data into transformations rather than pulling fields for manual operations.
4. Information Hiding — control visibility via module boundaries, closure scope, or type privacy.
5. Law of Demeter — avoid deep object paths; use direct parameters and simple shapes.
6. Composition over Inheritance — FP is fundamentally compositional; small functions compose into larger ones.
7. Generics / Parametric Polymorphism — type-safe reuse of functions across many data types.

### Old lectures

[![Функциональное программирование](https://img.youtube.com/vi/0JxSs_GcvbQ/0.jpg)](https://www.youtube.com/watch?v=0JxSs_GcvbQ)
