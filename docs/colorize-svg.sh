#!/usr/bin/env bash
primary_color_900=$(grep -Eo '\-\-primary\-color\-900\:.+;' assets/css/main.css | grep -Eo "#.+[^; ]")
primary_color_700=$(grep -Eo '\-\-primary\-color\-700\:.+;' assets/css/main.css | grep -Eo "#.+[^; ]")
sed -i "s/fill=\".*\"/fill=\"${primary_color_900}\"/" assets/images/outer-border.svg
sed -i "s/fill=\".*\"/fill=\"${primary_color_700}\"/" assets/images/section-border.svg