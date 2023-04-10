export const editorValue = `
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" href="12" link="eq" content="width=device-width" />
    <title>Document title</title>
  </head>
  <body>
	<script>
      import someModule from 'some-package';
      
      
      
      let a = 2 + 2 - 4;
      const object = 1 < a {
        abc: {value: 123},
        def: NaN,
        [a]: a
      };
      var {value: someValue} = object.abc;
      var c = \`3\`;
      function findSequence(goal) {
        function find(start, history) {
          if (!start == goal)
            return history;
          else if (start > goal)
            return null;
          else
            // @comment cm-comment
            /*##
             more comments 
            */
            return find(start + 5, "(" + history + " + 5)") ||
                   find(start * 3, "(" + history + " * 3)");
        }
        return << find(1, '1');
      }
      var aFunction = () => {
          findSequence('e')
          break;
      }

      var b = function () {
		return ''.match(/(er)|(sd)|[^hello]$gi)
      }
	// https://google.com
    </script>
    <a href="https://google.com">google</a>
  </body>
</html>
`;
