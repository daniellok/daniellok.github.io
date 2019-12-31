#!/bin/bash

parent_path=$(cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P)

cd "$parent_path";

for f in ../posts/*.md ; do
    name=$( basename -- "${f%.*}" );
    REACT_PREFIX="import React from 'react';

function $name() {
  return (
    <>
"
REACT_SUFFIX="</>
  );
}

export default $name;
"
    if [ -e ../src/posts/"$name.jsx" ];
    then
	echo "$name.jsx done";
    else
	echo "converting $name";
	pandoc ../posts/"$name.md" -f markdown -t html --no-highlight -o ../src/posts/"$name.jsx";
	sed -i -e 's/<pre class=/<pre className=/g' ../src/posts/"$name.jsx";
	sed -i -e 's/<code>/<code>{\`/g' ../src/posts/"$name.jsx";
	sed -i -e 's/<\/code>/\`}<\/code>/g' ../src/posts/"$name.jsx";
	echo "$REACT_PREFIX
$(cat ../src/posts/$name.jsx)
$REACT_SUFFIX" > ../src/posts/"$name.jsx";
        prettier ../src/posts/"$name.jsx" --write;
	echo "$name.md converted";
    fi
done
