Instructions for running the tests:

Preparations:

    1. Run "npm install"
    2. Install mocha globally by : "npm install --global mocha"

Testing:

    From command line:
        Run : "mocha tests"

    From VSCode:
        1. Add the following to vscode configuration file, launch.json:

        {
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Run ES6 Tests",
            "type": "node",
            "request": "launch",
            "cwd": "${workspaceRoot}",
            "program": "${workspaceRoot}/node_modules/mocha/bin/_mocha",
            "args": [
                "./tests/*.js",
                "-u", "tdd",
                "--timeout", "999999",
                "--colors"
            ],
            "runtimeArgs": [
                "--nolazy"
            ],
            "sourceMaps": true
        }
    ]
}

    2. Run debug on "Run ES6 Tests"



