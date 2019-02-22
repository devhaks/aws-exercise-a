#!/bin/bash

echo '======================='
echo 'Running validate_server'
echo '======================='

healthUrl=http://localhost:3000/health

result=$(curl -s ${healthUrl})

echo Check $healthUrl
echo $result

if [[ "$result" =~ "OK" ]]; then
  exit 0
else
  exit 1
fi