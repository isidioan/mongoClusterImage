# mongoClusterImage
A two sharded 3 replica mongo cluster with key file auth

Each mongo node is mounted to a volume which of course you can remove.
The script and mongo key volumes to the primary nodes are mandatory
if you wish to have cluster auto configured and key file auth. If 
do not wish a user to be created remove the initRouter script 
execution from start.sh otherwise provide username and pass.

