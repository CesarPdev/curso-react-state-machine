import { createMachine } from "xstate";

const bookingMachine = createMachine({
    id: "buy plane tickets",
    initial: "initial",
    states: {
        initial: {
            on: {
            START: "search",
            },
        },
        search: {
            on: {
            NEXT: "passengers",
            CANCEL: "initial",
            },
        },
        passengers: {
            on: {
            FINAL: "tickets",
            CANCEL: "initial",
            },
        },
        tickets: {
            on: {
            FINISH: "initial",
            },
        },
    },
});

export default bookingMachine;