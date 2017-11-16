#!/bin/bash
#This is the test runner using git bisect

function echoUsage () {
    echo "usage: $0 script revision\n
    script = TS file containing the test to execute\n
    revision = the last good revision commit sha1 hash" 
    exit 1;
}

#Script that executes the test
TEST_SCRIPT=$1

if [ -z "${TEST_SCRIPT}" ]; then
    echo "please enter a valid test script"
    echoUsage
fi

#Last known good revision SHA1
GOOD_REVISION=$2
if [ -z "${GOOD_REVISION}" ]; then
    echo "Please specify a the commit hash (SHA1) from the last good revision"
    echoUsage
fi

TEST_COMMAND="mocha --reporter spec --compilers ts:ts-node/register ${TEST_SCRIPT}"
#Start from the current bad version, and set the current good revision
git bisect start
git bisect bad
git bisect good $GOOD_REVISION
while ! git bisect run bash -c "${TEST_COMMAND}"; do
   git bisect log
done
echo "Press enter to termine git bisect. ( git bisect reset )";
read _tmp
git bisect reset