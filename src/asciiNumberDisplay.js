export class asciiNumberDisplay {
  static getDisplay(numberString) {
  let displayWidth = 14;
  let numbWidth = 5;
  let numbHeight = 5;
  let numbs = new Map([
  [0, 
    "@@@@@"+
    "@...@"+
    "@...@"+
    "@...@"+
    "@@@@@"],
    [1, 
      "..@.."+
      "@@@.."+
      "..@.."+
      "..@.."+
      "@@@@@"],
      [2, 
        ".@@@."+
        "@...@"+
        "..@@."+
        ".@..."+
        "@@@@@"],
        [3, 
          ".@@@."+
          "....@"+
          "..@@@"+
          "....@"+
          ".@@@."],
          [4, 
            "....@"+
            ".@..@"+
            "@@@@@"+
            "...@."+
            "...@."],
            [5, 
              "@@@@@"+
              "@...."+
              "@@@@."+
              "....@"+
              "@@@@@"],
              [6, 
                "@@@@@"+
                "@...."+
                "@@@@@"+
                "@...@"+
                "@@@@@"],
                [7,
                  "@@@@@"+
                  "....@"+
                  "....@"+
                  "....@"+
                  "....@"],
                  [8, 
                    "@@@@@"+
                    "@...@"+
                    ".@@@."+
                    "@...@"+
                    "@@@@@"],
                    [9, 
                      "@@@@@"+
                      "@...@"+
                      "@@@@@"+
                      "....@"+
                      "@@@@@"],
]);
    let array = numberString.split("");
    if(array.length > displayWidth) {
      return "NUMBER TOO LARGE";
    } else {
      if(array.length < displayWidth) {
        for(let i = 0; i <= (displayWidth-array.length); i++) {
          //debugger;
          array.unshift("0");
          //debugger;
        }
      }
      let string = "";
      for(let j = 0; j < numbHeight; j++) {
        for(let i = 0; i < array.length; i++) {
          for(let k = 0; k < numbWidth; k++) {
            if(numbs.get(parseInt(array[i]))) {
              string += numbs.get(parseInt(array[i]))[k + (j*numbWidth)];
            } else {
              string += "X";
            }
          }
          string += " ";
        }
        string += "\n";
      }
      return string;
    }
  }
}