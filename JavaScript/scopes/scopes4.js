console.log(content);   // error , since autiglobaling happens at execution phase 
content = "JS";       // not a formal declaration : therefore no scope resolution during
                      // parsing phase. Autoglobaling during execution phase
                      // will take place    