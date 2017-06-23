clear
for i in {1..200}
do
  tput setaf $i
  if ((i < 100)); then
    echo -n "[0"
  elif ((i < 10)); then
    echo -n "[00"
  else
    echo -n "["
  fi
  echo -n "$i] ";

  if ! ((i % 13)); then
    echo ""
  fi

  tput sgr0
done
