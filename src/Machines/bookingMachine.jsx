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
                    actions: 'cleanContext'
                },
            },
        },
        passengers: {
            on: {
            FINAL: "tickets",
            CANCEL: {
                target: "initial",
                actions: 'cleanContext'
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
                actions: 'cleanContext'
            },
            }
        },
    },
},
{
    actions: {
        cleanContext: assign({
            selectedCountry: '',
            passengers: []
        })
    },
},
);

export default bookingMachine;