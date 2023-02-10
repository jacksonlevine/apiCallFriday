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
                      [10, 
                        "....."+
                        "....."+
                        "....."+
                        "....."+
                        "..@.."]
]);
    let array = numberString.split("");
    if(array.length > displayWidth) {
      return "NUMBER TOO LARGE";
    } else {
      for(let i = array.length; i < displayWidth; i++) {
        array.unshift("0");
      }
      let string = "";
      for(let j = 0; j < numbHeight; j++) {
        for(let i = 0; i < array.length; i++) {
          for(let k = 0; k < numbWidth; k++) {
            if(numbs.get(parseInt(array[i]))) {
              string += numbs.get(parseInt(array[i]))[k + (j*numbWidth)];
            } else {
              string += numbs.get(10)[k + (j*numbWidth)];
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