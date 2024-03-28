# RemitlyInternship2024-HomeExercise-KhrystynaKruk

This project contains a method for verifying input JSON data representing an AWS IAM Role Policy. It checks if the Resource field contains a single asterisk and returns `false` in that case, otherwise returns `true`. 

## Prerequisites

Before running the code, ensure you have Node.js installed on your machine.

## Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/KhrystynaKruk/RemitlyInternship2024-HomeExercise-KhrystynaKruk.git
```
2. Navigate to the project directory
```bash
cd remitly-task
```
3. Install dependencies
```bash
npm install
```
##  Usage
To run the verification method:
```bash
npm test
```

This command will execute the unit tests defined in the test/test.js file and verify the correctness of the implementation.

## Test Cases
- should return false if Resource field contains a single asterisk
- should return true if Resource field does NOT contain a single asterisk
- should return false for invalid JSON data
- should return false for missing Resource field
