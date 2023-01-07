import { createMachine, assign } from "xstate";

const bookingMachine = createMachine({
  id: "buy_plane_tickets",
  initial: "initial",
  predictableActionArguments: true,
  states: {
    initial: {
      on: {
        START: {
          target: "search",
          actions: 'printInit'
        }
      }
    },
    search: {
      entry: 'printEntry',
      exit: 'printExit',
      on: {
        CONTINUE: "passengers",
        CANCEL: "initial"
      }
    },
    passengers: {
      on: {
        DONE: "tickets",
        CANCEL: "initial",
      }
    },
    tickets: {
      on: {
        FINISH: "initial",
      },
    },
  },
  },
  {
    actions: {
      printInit: () => console.log("print init"),
      printEntry: () => console.log("Printing entry"),
      printExit: () => console.log("Printing exit"),
    }
})

export default bookingMachine;

