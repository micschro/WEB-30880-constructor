    declare namespace first {
      export namespace second {
        /**
         * The Foo Class Documentation
         *
         * more
         *
         */
        export interface Foo {}
        export class Foo {
          /**
           * The GraphFoo string constructor documentation
           * @param {string} selector
           */
          constructor(selector:string);

          /**
           * The GraphFoo number constructor documentation
           * @param {number} index
           */
          constructor(index:number);
        }
      }
    }
    type first_namespace = typeof first;