1.1.3
=====

## What's New
- Always align with assignment operator if it's presented.
- User can stop better-align from modifying the indentation ( specified in settings : `alignment.indentBase` )
- Allow space to the sibling token ( check out README.md to know how to enable this mode ):

```
// Before
export fdafas=fdasfas;
export fs=fasfdsfadsa;
export fadsfasf=fadsjfkdasf;
export fadsfa=fadfdasfadsf;

// After
export   fdafas=fdasfas;
export       fs=fasfdsfadsa;
export fadsfasf=fadsjfkdasf;
export   fadsfa=fadfdasfadsf;
```

1.1.2
=====

## Bug
- Don't align '->', because it's commonly used as attribute access operator.

1.1.1
=====

## What's New
- Arrows (-> =>) can be aligned
