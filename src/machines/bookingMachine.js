import { createMachine, assign } from "xstate";
import { fetchCountries }  from '../utils/countryList';

const fillCountriesMachine = {
  initial: "loading",
  predictableActionArguments: true,
  states: {
    loading: {
      invoke: {
      id: 'getCountries',
      src: () => fetchCountries,
      onDone: {
        target: 'success',
        actions: assign({
          countries: (context, event) => event.data
        }),
      },
      onError: {
        target: 'retry',
        actions: assign({
          error: (context, event) => 'Request failed with status ' + event.data
        })
        }
      }
    },
    success:{},
    retry: {
      on: {
        RETRY: { target: "loading" },
      }
    }
   },
 }

const bookingMachine = createMachine({
  id: "buy plane tickets",
  initial: "initial",
  predictableActionArguments: true,
  context: {
    passengers: [],
    countries: [],
    selectedCountry: '',
    error: ''
  },
  states: {
    initial: {
      on: {
        START: {
          target: "search",
        }
      }
    },
    search: {
      on: {
        CONTINUE: {
          target: "passengers",
          actions: 'addCountry'
        },
        CANCEL: {
          target: "initial",
          actions: 'reset',
        }
      },
      ...fillCountriesMachine,
    },
    passengers: {
      on: {
        ADD: {
          target: 'passengers',
          actions: 'addPassengers',
        },
        REMOVE: {
          target: 'passengers',
          actions: 'removePassengers',
        },
        DONE: {
          target: "tickets",
          cond: 'handleMinimunOne',
        },
        CANCEL: {
          target: "initial",
          actions: 'reset',
        },
      }
    },
    tickets: {
      on: {
        FINISH: {
          target: "initial",
          actions: 'reset',
        },
      },
    },
  },
  },
  {
    actions: {
      reset: assign({
        selectedCountry: '',
        passengers: [],
        error: '',
      }),
      addPassengers: assign({
        passengers: (context, event) => [...context.passengers, event.setPassengers],
      }),
      removePassengers: assign({
        passengers: (context, event) => [...event.setPassengers],
      }),
      addCountry: assign({
        selectedCountry: (context, event) => event.selectedCountry
      }),
    },
    guards: {
      handleMinimunOne: (context) => {
        return context.passengers.length > 0;
      }
    }
})

export default bookingMachine;

