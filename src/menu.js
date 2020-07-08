const newLocal = (exports.menu = () => {
  let initialMenuObject = [
    {
      type: "select",
      name: "initial menu",
      message: "Pick a option",
      choices: [
        {
          title: "Option A",
          description: "This option has a description",
          value: "A",
        },
        { title: "Option B", value: "B", disabled: true },
        { title: "Exit", value: null },
      ],
      initial: 1,
    },
  ];

  return initialMenuObject;
});

function createInitalChoices() {
  let arrayChoices = [];

  return choices;
}

function isOptionCEnalbe(params) {
  return false;
}
