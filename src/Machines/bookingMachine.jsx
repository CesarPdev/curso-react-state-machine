import { createMachine, assign } from "xstate";

const bookingMachine = createMachine({
    predictableActionArguments: true,
    id: "buy plane tickets",
    initial: "initial",
    context: {
        selectedCountry: '',
        passengers: []
    },
    states: {
        initial: {
            on: {
            START: {
                target:"search",
                },
            },
        },
        search: {
            on: {
            NEXT: {
                target: "passengers",
                actions: assign({
                    selectedCountry: (context, e) => e.selectedCountry
                })
            },
            CANCEL: {
                target: "initial",
                actions: assign({selectedCountry: (context) => ''})
            },
            },
        },
        passengers: {
            on: {
            FINAL: "tickets",
            CANCEL: {
                target: "initial",
                actions: assign({
                    selectedCountry: (context) => '',
                    passengers: (context) => []
                })
            },
            ADD: {
                target: 'passengers',
                actions: assign(
                    (context, event) => context.passengers.push(event.newPassenger)
                )
            }
            },
        },
        tickets: {
            on: {
            FINISH: {
                target: "initial",
                actions: assign({
                    selectedCountry: (context) => '',
                    passengers: (context) => [],
                })
            },
            }
        },
    },
},
{
    actions: {},
},
);

export default bookingMachine;