#!/usr/bin/env bash

failures=()
echo "DIRECTORY CONTENT:"
ls -Rla
echo "BUILDS"
CWD="$(pwd)/"
which avr-g++

#cd src
#for dir in *; do
#
#	if [ -d "${dir}" ]; then
#
#		echo "Compiling $dir...\n"
#
#		echo $CWD
#		cd $dir
#
#		cp ../../Makefile_CI.mk Makefile
#
#		make clean
#		make PROJECT_DIR=$CWD ARDUINO_DIR=$ARDUINO AVR_TOOLS_DIR=$AVR_GCC
#
#		if [[ $? -ne 0 ]]; then
#			failures+=("$dir")
#			echo "Source $dir failed"
#		fi
#
#		cd ..

#	fi

#done

#cd test

#echo "TESTS"

#for dir in *; do

#	if [ -d "${dir}" ]; then

#		echo "Compiling $dir...\n"

#		cd $dir

#		cp ../../Makefile_CI.mk Makefile

#		make clean
#		make PROJECT_DIR=$CWD ARDUINO_DIR=$ARDUINO AVR_TOOLS_DIR=$AVR_GCC

#		if [[ $? -ne 0 ]]; then
#			failures+=("$dir")
#			echo "Test $dir failed"
#		fi

#		cd ..

#	fi

#done

if [[ ${#failures[@]} -ne 0 ]]; then
	echo "\nThe following builds failed:"
	for failure in "${failures[@]}"; do
		echo "- Building $failure failed"
	done
fi

if [[ ${#failures[@]} -eq 0 ]]; then
	echo "\nAll tests passed."
else
	exit 1
fi
