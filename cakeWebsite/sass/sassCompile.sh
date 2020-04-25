#!/bin/bash
#This script will check the last changed date of the sass file and if it has changed
# then it will run the sass command to recompile the sass into css for "live"
# updates.i

MY_FILE="index.scss"
MY_OUTPUT_FILE="../css/index.css"
TIMESTAMP=$(ls -lc $MY_FILE)
CHECK_DURATION=5

#echo $TIMESTAMP

while :
do
	CURRENT_TIMESTAMP=$(ls -lc $MY_FILE)
	#echo "THE CURRENT TIMESTAMP: $CURRENT_TIMESTAMP"

	if [[ $TIMESTAMP != $CURRENT_TIMESTAMP ]]; then

		#echo "File has changed. Recompiling $MY_FILE"

		#File has changed, run SASS commmand
		sass $MY_FILE $MY_OUTPUT_FILE

		TIMESTAMP=$CURRENT_TIMESTAMP

		# Check again every so many seconds based off CHECK_DURATION
		sleep $CHECK_DURATION
	else
		#echo "File has not changed. No recompile"
		sleep $CHECK_DURATION
	fi

done
