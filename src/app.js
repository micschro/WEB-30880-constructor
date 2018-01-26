    require(['first/second'], (/**@type {first_namespace}*//**@typeof first*/ first ) => {

      /**
       * No documentation found for constructor, although
       * - Go to definition finds the constructor
       * - Class documentation (@type, below) works.
       *
       * Without declaration merging, it works.
       * It seems, this can be worked around by moving the type documentation from
       * interface to class (but it should also work as it is).
       *
       * @type {first.second.Foo}
       */
      const foo = new first.second.Foo("foo") // Ctrl-Q on Foo should show either class
      // documentation or (better) constructor documentation.

    })
