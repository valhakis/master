
for i in {1..5}
do
  echo "[a]"
done

cols=$(tput cols)
lines=$(tput lines)

echo "cols: $cols"

for (( x=0; x<$lines; x++ ))
do
  for (( c=0; c<$cols; c++ ))
  do
    echo -n "X"
  done
  echo ""
done

echo -e "\e[?1000h"
