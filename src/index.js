function verifyIAMRolePolicy(jsonData) {
    try {
        const statement = jsonData.PolicyDocument.Statement[0];
        if (!statement || !statement.Resource) {
            return false; 
        }
        
        const resource = statement.Resource;
        if (resource === '*') {
            return false;
        }
        return true;
    } catch (error) {
        console.error("Error verifying JSON data.");
        return false;
    }
}



export default verifyIAMRolePolicy;
