# Quick Browse

- [Array Methods](#array-methods)
- [String Methods](#string-methods)
- [Math Methods](#math-methods)


### Array Methods

| Name                | Description                                          | Arguments           | Example                                                             |
|:--------------------|:-----------------------------------------------------|:--------------------|:--------------------------------------------------------------------|
| unique()            | It removes repeated elements in array.               | None                | `[1,2,3,1].unique() => [1,2,3]`                                     |
| uniqueObjectArray() | It removes repeated elements in array, only objects. | `key` required.     | `[{id:1},{id:2},{id:1}].uniqueObjectArray('id') => [{id:1},{id:2}]` |
| min()               | Returns minimum number.                              | None                | `[1,2,3].min() => 1`                                                |
| max()               | Returns maximum number.                              | None                | `[1,2,3].max() => 3`                                                |
| shuffle()           | Shuffles self array.                                 | None                | `[1,2,3].shuffle() => [z,x,y]`                                      |
| random()            | Returns self randomized element.                     | None                | `[1,2,3].random() => x`                                             |
| without()           | Returns without selected elements.                   | `array` required.   | `[1,2,3].without([1,3]) => [2]`                                     |

### String Methods

| Name     | Description                            | Arguments                  | Example                                                          |
|:---------|:---------------------------------------|:---------------------------|:-----------------------------------------------------------------|
| format() | Formats with variables string.         | `variables` required.      | `"Hello, #&test#".format({ test: "world!" }) => "Hello, world!"` |

## Math Methods
| Name            | Description                                                            | Arguments                                                 | Example                                                          |
|:----------------|:-----------------------------------------------------------------------|:----------------------------------------------------------|:-----------------------------------------------------------------|
| randomInteger() | Returns randomized integer between two numbers (default 1-10).         | `min` (default 1) & `max` (default 10), not required.     | `Math.randomInteger(1,100) => x (between 1-100)`                 |

