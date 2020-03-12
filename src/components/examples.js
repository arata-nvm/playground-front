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
            '  var n = 41\n' +
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
            '  var n = 43\n' +
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
    {
        name: 'Mandelbrot',
        program:
            'import "std"\n' +
            '\n' +
            'fun main() {\n' +
            '  mandel(-2.3, -1.3, 0.05, 0.07)\n' +
            '}\n' +
            '\n' +
            'fun mandel(realstart, imagstart, realmag, imagmag: float) {\n' +
            '  mandelHelp(realstart, realstart+realmag*78.0, realmag,\n' +
            '             imagstart, imagstart+imagmag*48.0, imagmag)\n' +
            '}\n' +
            '\n' +
            'fun mandelHelp(xMin, xMax, xStep, yMin, yMax, yStep: float) {\n' +
            '    for var y = yMin; y < yMax; y += yStep {\n' +
            '    for var x = xMin; x < xMax; x += xStep {\n' +
            '      var d = mandelConverge(x, y)\n' +
            '      printDensity(d)\n' +
            '    }\n' +
            '    print("\\n")\n' +
            '  }\n' +
            '}\n' +
            '\n' +
            'fun mandelConverge(real, imag: float): float {\n' +
            '  return mandelConverger(real, imag, 0.0, real, imag)\n' +
            '}\n' +
            '\n' +
            'fun mandelConverger(real, imag, iters, creal, cimag: float): float {\n' +
            '  if iters > 255.0 {\n' +
            '    return iters;\n' +
            '  }\n' +
            '  if real*real + imag*imag > 4.0 {\n' +
            '    return iters;\n' +
            '  }\n' +
            '  \n' +
            '  return mandelConverger(\n' +
            '    real*real - imag*imag + creal,\n' +
            '    2.0*real*imag + cimag,\n' +
            '    iters + 1.0, creal, cimag)\n' +
            '}\n' +
            '\n' +
            'fun printDensity(d: float) {\n' +
            '  if d > 8.0 {\n' +
            '    print(" ")\n' +
            '  } else if d > 4.0 {\n' +
            '    print(".")\n' +
            '  } else if d > 2.0 {\n' +
            '    print("+")\n' +
            '  } else {\n' +
            '    print("*")\n' +
            '  }\n' +
            '}\n'
    }
]