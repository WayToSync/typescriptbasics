## Project

The goal of this project is to understand the **basics of Typescript** with some examples.

We will also see how to use the **Typescript compiler** , setup the **configuration file** and the **directory structure**.

This project was made with the version **4.4.3** of Typescript.

The **index.ts** file contain all the basics syntax of Typescript.

## Install Typescript

Description | Cmd
------------ | -------------
For the latest stable version | `npm install -g typescript`
For the nightly builds | `npm install -g typescript@next`
For check your actual version | `tsc -v`

##### To use typescript in your project : 

"yourFileName".**ts** / "yourFileName".**tsx**

##### Run code :

Open a terminal and go to the **"dist"** folder,

and run `node 'nameOfYourFile'`

##### For further information : 

https://www.typescriptlang.org/

## Typescript Compiler

Description | Cmd
------------ | -------------
To compile all your Typescript files | `tsc`
To compile one specific Typescript file | `tsc "nameOfYourTsFile"`
To use the Typescript **"Watch"** mode | `tsc --watch`
To use the Typescript **"Watch"** mode on just one file | `tsc --watch "pathOfYourTsFile"`

## Typescript Configuration File

##### To create a Typescript configuration file :

`tsc --init`

##### List of tsconfig.json parameters :

tsconfig.json | Parameters
------------ | -------------
Configure the ECMA Script target | `"target": "ECMAVersion",`
Configuration of the module | `"module": "moduleCode",`
Path of generated JS Files | `"outDir":  "./path"`
Path of source code | `"rootDir":  "./path"`

ECMA Script version: **es3 ('Default'), es5, es6/es2015, es2016, es2017, es2018, es2019, es2020, es2021, esnext**

##### Reference : 

https://www.typescriptlang.org/tsconfig#moduleResolution
