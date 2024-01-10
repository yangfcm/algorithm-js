# JS Algorithms & Data structures problems and solutions

## Intro

Algorithms, Data Structure problems and solutions written in Javascript, including test cases.

## Content

### Algorithm

- [Array](./algo/array)
- [Dynamic](./algo/dynamic)
- [Greedy](./algo/greedy)
- [Math](./algo/math)
- [Assorted](./algo/assorted)
- [String](./algo/string)

### Data Structure

- [Stack and Queue](./ds/stack_queue)
- [Linked List](./ds/linkedlist)
- [Hash Table](./ds/hash)
- [Tree](./ds/tree)
- [Graph](./ds/graph)

### JS Specific

- [JS](./js)

### Sorting

- [Sorting](./sorting)

### Searching

- [Searching](./searching)

## How to run

- Environment: NodeJS.
- Under project directory.
- Install packages

```
npm install
```

- Test cases

```
npm run test
```

- Test and watch code change

```
npm run test:watch
```

- Test one case or cases under one directory

```
npm run test <file name or directory name>
```

## Run in Docker

Under project directory:

- Build image

```
docker build -t js-algo-docker .
```

- Run test cases

```
docker run js-algo-docker
```

## Run with Docker compose

This is useful for dev and tests.

Under project directory:

```
docker compose watch
```

To view the test results, you can either use Docker desktop or run

```
docker logs <container-name> -f
```

Any changes made locally will trigger the re-run of test cases.

## Solutions in other languages:

- [C#](https://github.com/yangfcm/algorithm-csharp)
- [Java](https://github.com/yangfcm/algorithm-java)
- [Python](https://github.com/yangfcm/algorithm-python)
