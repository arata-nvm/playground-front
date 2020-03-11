module.exports = [
    {
        name: 'HelloWorld',
        program:
            'import "std"\n' +
            '\n' +
            'fun main() {\n' +
            '  println("Hello World!")\n' +
            '}\n',
    },
    {
        name: 'Fibonacci',
        program:
            'import "std"\n' +
            '\n' +
            'fun main() {\n' +
            '  var n = 41' +
            '  var result = fib(n)\n' +
            '  printf("fib(%d) = %d\\n".cstring(), n, result)\n' +
            '}\n' +
            '\n' +
            'fun fib(n: int): int {\n' +
            '  if n <= 1 {\n' +
            '    return n\n' +
            '  }\n' +
            '  return fib(n - 1) + fib(n - 2)\n' +
            '}\n',
    },
    {
        name: 'Fibonacci memorized',
        program:
            'import "std"\n' +
            '\n' +
            'var memo: [100]int\n' +
            '\n' +
            'fun main() {\n' +
            '  var n = 43' +
            '  var result = fib(n)\n' +
            '  printf("fib(%d) = %ld\\n".cstring(), n, result)\n' +
            '}\n' +
            '\n' +
            'fun fib(n: int): int {\n' +
            '  if memo[n] != 0 {\n' +
            '    return memo[n]\n' +
            '  }\n' +
            '\n' +
            '  if n <= 1 {\n' +
            '    memo[n] = n\n' +
            '  } else {\n' +
            '    memo[n] = fib(n - 1) + fib(n - 2)\n' +
            '  }\n' +
            '\n' +
            '   return memo[n]\n' +
            '}\n',
    },
    {
        name: 'FizzBuzz',
        program:
            'import "std"\n' +
            '\n' +
            'fun main() {\n' +
            '  print("Plese input n: ")\n' +
            '  var n = inputi()\n' +
            '\n' +
            '  for i in 1..n {\n' +
            '    if i % 15 == 0 {\n' +
            '      println("fizzbuzz")\n' +
            '    } else if i % 5 == 0 {\n' +
            '      println("buzz")\n' +
            '    } else if i % 3 == 0 {\n' +
            '      println("fizz")\n' +
            '    } else {\n' +
            '      printi(i)\n' +
            '    }\n' +
            '  }\n' +
            '}',
    },
    {
        name: 'Greet',
        program:
            'import "std"\n' +
            '\n' +
            'struct Person {\n' +
            '  name: string\n' +
            '}\n' +
            '\n' +
            'fun greet(person: Person) {\n' +
            '  printf("Hi, %s\\n".cstring(), person.name)\n' +
            '}\n' +
            '\n' +
            'fun main() {\n' +
            '  var person: Person\n' +
            '  person.name = "George"\n' +
            '  person.greet()\n' +
            '}\n' +
            '\n',
    },
]