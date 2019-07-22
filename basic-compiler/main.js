let compiler = new TinyCompiler();

compiler.tokenizer('(add 100 200)');
compiler.tokenizer('(add 1 200)');
compiler.tokenizer('(add (add 1 2) (add 2 3))');
compiler.tokenizer('(add      (add 1          2) (       add 2 3))');

compiler.tokenizer('(concat "majid" "h")');

