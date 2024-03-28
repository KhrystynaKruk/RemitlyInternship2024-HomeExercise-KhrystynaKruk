// Test cases
import { describe, it } from 'mocha';
import { assert } from 'chai';
import verifyIAMRolePolicy from '../src/index.js'; 

describe('Unit tests for the input JSON Resource', function() {
    // Test 1: Contains a single asterisk 
    it('should return false if Resource field contains a single asterisk', async function() {
        const jsonData = {
            "PolicyName": "root",
            "PolicyDocument": {
                "Version": "2012-10-17",
                "Statement": [
                    {
                        "Sid": "IamListAccess",
                        "Effect": "Allow",
                        "Action": [
                            "iam:ListRoles",
                            "iam:ListUsers"
                        ],
                        "Resource": "*"
                    }
                ]
            }
        };
        const result = verifyIAMRolePolicy(jsonData);
        assert.isFalse(result);
    });

 // Test 2: Does not contains a single asterisk 
    it('should return true if Resource field does NOT contain a single asterisk', async function() {
      
        const jsonData = {
            "PolicyName": "root",
            "PolicyDocument": {
                "Version": "2012-10-17",
                "Statement": [
                    {
                        "Sid": "IamListAccess",
                        "Effect": "Allow",
                        "Action": [
                            "iam:ListRoles",
                            "iam:ListUsers"
                        ],
                        "Resource": "arn:aws:iam::123456789012:role/MyRole"
                    }
                ]
            }
        };
        const result = verifyIAMRolePolicy(jsonData);
        assert.isTrue(result);
    });
 // Test 3: For invalid JSON data
    it('should return false for invalid JSON data', async function() {
        
        const jsonData = {}; // Invalid JSON data
        const result = verifyIAMRolePolicy(jsonData);
        assert.isFalse(result);
    });
 // Test 4: If Resource field is missing

    it('should return false for missing Resource field', async function() {
    
        const jsonData = {
            "PolicyName": "root",
            "PolicyDocument": {
                "Version": "2012-10-17",
                "Statement": [
                    {
                        "Sid": "IamListAccess",
                        "Effect": "Allow",
                        "Action": [
                            "iam:ListRoles",
                            "iam:ListUsers"
                        ]
                        // Resource field is missing
                    }
                ]
            }
        };
        const result = verifyIAMRolePolicy(jsonData);
        assert.isFalse(result);
    });
});
