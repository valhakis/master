#!/bin/bash

if [[ $# -eq 0 ]] ; then
	echo "NO ARGUMENTS GIVEN"
	exit 0
fi

case "$1" in
	*) echo "NO SUCH COMMAND / ARGUMENT" ;;
esac

exit 0

touch ../generator.sh
chmod +x ../generator.sh

if [ ! -f ../generator.sh ] ; then
	echo '#!/bin/bash' > ../generator.sh
elif [ -s ../generator.sh ] ; then
	echo '#!/bin/bash' >> ../generator.sh
fi

echo "`date` user `whoami` started the script ."$'\n'"I am on a new line." >> ../generator.sh

cat ../generator.sh
