# Prerequisite

- [[20-29 Computer Science/02 Key Concepts/Programming/Programming Paradigms/05 Functional Programming/Structure and Interpretation of Computer Programs|Structure and Interpretation of Computer Programs]]
- [[First-class citizen]]
- [[Higher-order function]]
- [[Immutability]]

# Relevance

Functional programming is relevant in modern **software development** for managing complex systems, enabling **parallelism**, and improving code **readability** and **maintainability**. It's commonly used in domains like **data processing** (e.g., Spark), **web development** (e.g., **React**), and **machine learning**.

# Definition

Functional programming is a programming paradigm where programs are constructed by applying and composing functions.  
Functional programming is a paradigm centered around treating computation as the evaluation of mathematical functions and avoiding mutable state and side effects.

## Historical Context

Functional programming emerged from mathematical functions in lambda calculus. It was designed to solve problems related to **side effects**, **concurrency**, and **predictability** in software, evolving through languages like Lisp, **Haskell**, and **Scala**.

## Application

- Event handling in React, big data processing with Spark, or concurrent computations in Erlang

# Fundamental Truths

- **Logic** is the foundation, enabling the breakdown of problems into manageable parts.
- **Abstraction** simplifies complexity, letting us focus on solving problems at a higher level.
- **Code** is a tool for communication between humans and computers or among programmers.
- **Problem-solving** is central; programming is about understanding and designing solutions.
- **Iteration** is key, as solutions evolve and improve over time through refinement.
- **Software** is never truly "done"; it continually evolves with changing requirements and features.
- **Simplicity** is powerful, and effective programs are efficient, understandable, and maintainable.

# Analogy

Think of functional programming as a factory assembly line. Each station (function) receives inputs, processes them predictably, and passes them along. No station changes its machinery (state), and the output depends solely on the input (pure function).

# Example in Haskell

1. **Immutability**: Data cannot change after being created.

   ```haskell
   let numbers = [1, 2, 3]
   let doubled = map (*2) numbers -- [2, 4, 6]
   ```

2. **Pure Functions**: Always produce the same output for the same input, with no side effects.

   ```haskell
   add :: Int -> Int -> Int
   add a b = a + b
   ```

3. **Higher-Order Functions**: Functions that take or return other functions.

   ```haskell
   applyTwice :: (a -> a) -> a -> a
   applyTwice f x = f (f x)
   ```

4. **Function Composition**: Combine functions using the `.` operator.

   ```haskell
   doubleThenIncrement = (+1) . (*2)
   doubleThenIncrement 3 -- 7
   ```

5. **Declarative Programming**: Describe _what_ to compute, not _how_.

   ```haskell
   let evenNumbers = filter even [1, 2, 3, 4] -- [2, 4]
   ```

6. **Currying**: Functions are curried by default, allowing partial application.

   ```haskell
   add5 = add 5
   add5 3 -- 8
   ```

7. **Recursion**: Use recursion instead of loops.

   ```haskell
   sumList [] = 0
   sumList (x:xs) = x + sumList xs
   ```

8. **Lazy Evaluation**: Compute values only when needed.

   ```haskell
   take 5 [1..] -- [1, 2, 3, 4, 5]
   ```

9. **Referential Transparency**: Expressions can be replaced with their values without side effects.

   ```haskell
   double x = x * 2
   double 4 + double 4 -- 16
   ```

10. **Avoiding Side Effects**: Side effects are isolated using the `IO` monad.

```haskell
main = do
  input <- getLine
  print (read input + 1)
```

**Summary**: Haskell enforces immutability, purity, lazy evaluation, and separation of effects, enabling concise, predictable, and maintainable functional code.

# Testing

# Absurdity
