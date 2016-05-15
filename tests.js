/*
Hello
*/

describe("Hello", function() {
	it("says hello", function() {
		expect(hello()).toEqual("Hello!");
	});

	it("says hello to someone", function() {
		expect(hello("Fred")).toEqual("Hello, Fred!");
	});
});

/*
String basics
*/

describe("fun with strings", function() {

  it ("should echo hello", function() {
    expect(echo("hello")).toEqual("hello")
  });

  it ("should echo bye", function() {
    expect(echo("bye")).toEqual("bye")
  });

  it ("should shout hello", function() {
    expect(shout("hello")).toEqual("HELLO")
  });

  it ("should shout multiple words", function() {
    expect(shout("hello world")).toEqual("HELLO WORLD")
  });

  it ("should repeat", function() {
    expect(repeat("hello")).toEqual("hello hello")
  });

  it ("should repeat a number of times", function() {
    expect(repeat("hello", 3)).toEqual("hello hello hello")
  });

  it ("should return the first letter", function() {
    expect(start_of_word("hello", 1)).toEqual("h")
  });

  it ("should return the first two letters", function() {
    expect(start_of_word("Bob", 2)).toEqual("Bo")
  });

  it ("should tell us the first word of 'Hello World' is 'Hello'", function() {
    expect(first_word("Hello World")).toEqual("Hello")
  });

  it ("should tell us the first word of 'oh dear' is 'oh'", function() {
    expect(first_word("oh dear")).toEqual("oh")
  });

});


// 1. Two functions, f2c and c2f, that demonstrate the simple equations for converting between fahrenheit and celcius degrees
// methods) instead of public properties to store the value

describe("Temperature", function() {
	describe("f2c", function() {
    it("converts freezing temperature", function() {
			expect(f2c(32)).toEqual(0);
		});

    it("converts boiling temperature", function() {
			expect(f2c(212)).toEqual(100);
		});

    it("converts body temperature", function() {
			expect(f2c(98.6)).toEqual(37);
		});

    it("converts an arbitrary temperature", function() {
			expect(f2c(68)).toEqual(20);
		});
	});

	describe("c2f", function() {
    it("converts freezing temperature", function() {
			expect(c2f(0)).toEqual(32);
		});

    it("converts boiling temperature", function() {
			expect(c2f(100)).toEqual(212);
		});

    it("converts body temperature", function() {
			expect(c2f(37)).toBeCloseTo(98.6);
			// Why do we need to use toBeCloseTo?
			// To avoid floating point precision errors.
			// See http://en.wikipedia.org/wiki/Floating_point#Accuracy_problems
			// Try replacing "toBeCloseTo" with "toEqual" and see what happens.
		});

    it("converts an arbitrary temperature", function() {
			expect(c2f(20)).toEqual(68);
		});
	});
});

/*
Basic loops
*/

describe("Loops", function() {
  describe("repeat", function() {
    xit("is empty with 0 repeats", function() {
      expect(repeat("yo", 0)).toEqual("");
    });
    xit("repeats its argument once", function() {
      expect(repeat("yo", 1)).toEqual("yo");
    });
    xit("repeats its argument twice", function() {
      expect(repeat("yo", 2)).toEqual("yoyo");
    });
    xit("repeats its argument many times", function() {
      expect(repeat("yo", 10)).toEqual("yoyoyoyoyoyoyoyoyoyo");
    });
  });

  describe("looping over arrays", function() {

    // try to implement this join() function without using the built-in join method of String
    describe("join", function() {
      xit("turns an empty array into an empty string", function() {
        expect(join([])).toEqual("");
      });

      xit("turns an array with one element into a string", function() {
        expect(join(['a'])).toEqual("a");
      });

      xit("turns an array with many elements into a string", function() {
        expect(join(['apple', 'banana', 'cherry'])).toEqual("applebananacherry");
      });

      xit("inserts a delimiter between elements", function() {
        expect(join(['apple', 'banana', 'cherry'], '/')).toEqual("apple/banana/cherry");
      });

      // This test is to make sure you don't use "for (var i in a)" on an array
      xit("ignores non-indexed properties set on the array object", function() {
        var array = ['apple', 'banana', 'cherry'];

        array['type'] = 'fruits';
        expect(array.type).toEqual('fruits');

        array.first = function() { return this[0]; }
        expect(array.first()).toEqual('apple');

        expect(join(array)).toEqual("applebananacherry");
      });

    });

    describe("sum", function() {
      xit("computes the sum of an empty array", function() {
        expect(sum([])).toEqual(0);
      });

      xit("computes the sum of an array of one number", function() {
        expect(sum([7])).toEqual(7);
      });

      xit("computes the sum of an array of two numbers", function() {
        expect(sum([7,11])).toEqual(18);
      });

      xit("computes the sum of an array of many numbers", function() {
        expect(sum([1,3,5,7,9])).toEqual(25);
      });
    });
  });

  // hint: to loop over elements of a hash, you can use
  //  for (var key in hash) {}
  describe("looping over hashes", function() {
    describe("paramify", function() {
      xit("works on an empty hash", function() {
        expect(paramify({})).toEqual("");
      });

      xit("converts a hash with one element", function() {
        expect(paramify({size: 14})).toEqual("size=14");
      });

      xit("converts a hash with two elements", function() {
        expect(paramify({height: 74, width: 12})).toEqual("height=74&width=12");
      });

      xit("converts a hash with many elements", function() {
        var hash = {a:1,b:2,c:3,d:4,e:5,f:6}
        expect(paramify(hash)).toEqual("a=1&b=2&c=3&d=4&e=5&f=6");
      });

      // this one might be a bit tricky ;-)
      xit("outputs the parameters in alphabetical order", function() {
        var hash = {f:6,e:5,d:4,c:3,b:2,a:1};
        expect(paramify(hash)).toEqual("a=1&b=2&c=3&d=4&e=5&f=6");
      });

      // Advanced. Change "xit" to "it" to run this test.
      xit("skips properties of the object's prototype", function() {
        var Alphabet = function() {
          this.a = 1;
          this.b = 2;
        }
        Alphabet.prototype = {c: 3};
        expect(paramify(new Alphabet())).toEqual("a=1&b=2");
      });
    });
  });

  // Test-Driving Bonus: once the above tests pass,
  // write tests and code for the following.
  // See http://en.wikipedia.org/wiki/Factorial
  // You can either use iteration (loops) or recursion.
  // (Recursion is easier, but might blow your mind.)
  describe("factorial", function() {
    it("computes the factorial of 0");
    it("computes the factorial of 1");
    it("computes the factorial of 2");
    it("computes the factorial of 5");
    it("computes the factorial of 10");
  });

});
