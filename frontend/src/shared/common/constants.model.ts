/* eslint-disable */
export module Constans {
  export module STATUS {
    export let Success = 1;
    export let Error = -1;
    export let Warning = -2;
    export let Forbidden = -3;
    export let Unauthorized = -4;
    export let UnprocessableModel = -5;
  }

  export module API_METHODS {
    export let Get = 1;
    export let Post = 2;
    export let Put = 3;
    export let Delete = 4;
  }

  export module TYPE_FORM {
    export let Inspection = 1;
    export let Temperature = 2;

    export function toString(key: number): string {
      switch (key) {
        case TYPE_FORM.Inspection:
          return 'Inspección';
        case TYPE_FORM.Temperature:
          return 'Temperatura';
        default:
          return 'Undefined';
      }
    }

    export function toList(): any[] {
      const list = [TYPE_FORM.Inspection, TYPE_FORM.Temperature];
      return list.map((key) => ({ id: key, name: toString(key) }));
    }
  }

  export module INDICATORS {
    export let muy_buena = 1;
    export let buena = 2;
    export let regular = 3;
    export let fuera_forma = 4;

    export function toString(key: number): string {
      switch (key) {
        case INDICATORS.fuera_forma:
          return 'Fuera de forma';
        case INDICATORS.regular:
          return 'Regular';
        case INDICATORS.buena:
          return 'Buena';
        case INDICATORS.muy_buena:
          return 'Muy Buena';
        default:
          return 'Undefined';
      }
    }

    export function toColor(key: number): string {
      switch (key) {
        case INDICATORS.fuera_forma:
          return '#EA3B29';
        case INDICATORS.regular:
          return '#DC741E';
        case INDICATORS.buena:
          return '#EEDD37';
        case INDICATORS.muy_buena:
          return '#18AF5F';
        default:
          return 'Undefined';
      }
    }

    export function toList(): any[] {
      const list = [
        INDICATORS.fuera_forma,
        INDICATORS.regular,
        INDICATORS.buena,
        INDICATORS.muy_buena,
      ];
      return list.map((key) => ({ id: key, name: toString(key) }));
    }
  }
}
