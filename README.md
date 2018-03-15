Tut from Ben Awad

After installing eslint globally,
'eslint --init' => this will guide you through with questions
+
also need to go to npmjs, eslint-config-airbnb-base,
and find the script and run according to your OS,

for MAC '''
(
  export PKG=eslint-config-airbnb-base;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
'''
this will install the dependencies


