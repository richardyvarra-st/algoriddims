// Sample JSON data
const data = {
    "type": "root",
    "children": [
        {
            "identifier": "Location_Name",
            "title": "Location Name",
            "autoIdentifier": true,
            "type": "text"
        },
        {
            "identifier": "Tech_Name",
            "title": "Tech Name",
            "autoIdentifier": true,
            "type": "text"
        },
        {
            "identifier": "Job",
            "title": "Job",
            "autoIdentifier": true,
            "type": "integer"
        },
        {
            "identifier": "Location_Address",
            "title": "Location Address",
            "autoIdentifier": true,
            "type": "location",
            "allow_manual_override": true
        },
        {
            "identifier": "City",
            "title": "City",
            "autoIdentifier": true,
            "type": "text"
        },
        {
            "identifier": "State",
            "title": "State",
            "autoIdentifier": true,
            "type": "text"
        },
        {
            "identifier": "Zip",
            "title": "Zip",
            "autoIdentifier": true,
            "type": "text"
        },
        {
            "identifier": "Phone",
            "title": "Phone ",
            "autoIdentifier": true,
            "type": "phone_number"
        },
        {
            "identifier": "Total",
            "title": "Total Extinguishers ",
            "type": "integer",
            "initialAnswer": "0",
            "required_rule": "always"
        },
        {
            "type": "group",
            "autoIdentifier": true,
            "children": [
                {
                    "identifier": "Number",
                    "title": "Number",
                    "autoIdentifier": true,
                    "type": "integer"
                },
                {
                    "identifier": "Size",
                    "title": "Size",
                    "autoIdentifier": true,
                    "type": "text"
                },
                {
                    "identifier": "Type",
                    "title": "Type",
                    "autoIdentifier": true,
                    "type": "text"
                },
                {
                    "identifier": "Mfg_Date",
                    "title": "Mfg Date",
                    "autoIdentifier": true,
                    "type": "date"
                },
                {
                    "identifier": "Last_6",
                    "title": "Last 6 Year Maintenance Date",
                    "type": "date"
                },
                {
                    "identifier": "Last_12",
                    "title": "Last 12 Year Hydro Test Date",
                    "type": "date"
                },
                {
                    "identifier": "Last_5",
                    "title": "Last 5 Year Hydro Test Date ",
                    "type": "date"
                },
                {
                    "identifier": "Location_in_Site",
                    "title": "Location in Site",
                    "autoIdentifier": true,
                    "type": "text",
                    "multi_line": true,
                    "required_rule": "always"
                },
                {
                    "identifier": "Work_Completed",
                    "title": "Work Completed",
                    "autoIdentifier": true,
                    "options": [
                        {
                            "text": "Annually"
                        },
                        {
                            "text": "Monthly"
                        }
                    ],
                    "type": "select"
                },
                {
                    "identifier": "Results",
                    "title": "Results",
                    "autoIdentifier": true,
                    "options": [
                        {
                            "text": "Pass"
                        },
                        {
                            "text": "Fail"
                        }
                    ],
                    "type": "select"
                },
                {
                    "identifier": "Maintenance",
                    "title": "Maintenance Required",
                    "type": "boolean"
                }
            ],
            "title": "Information",
            "identifier": "Information"
        }
    ],
    "title": "Fire Extinguisher Location Form"
};
console.log(data);
// Function to filter items based on required_rule
const filterRequiredFields = (children) => {
    return children.flatMap(child => {
        if (child.required_rule === "always") {
            return [child];
        } else if (child.type === "group" && child.children) {
            return filterRequiredFields(child.children);
        }
        return [];
    });
};

// Apply the filter on the root level
const filteredRequiredFields = filterRequiredFields(data.children);

// Function to display filtered results in HTML
const displayResults = (results) => {
    const resultsDiv = document.getElementById('results');
    results.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'result-item';
        
        const title = document.createElement('h3');
        title.textContent = item.title || 'No Title';
        itemDiv.appendChild(title);
        
        const identifier = document.createElement('p');
        identifier.textContent = `Identifier: ${item.identifier}`;
        itemDiv.appendChild(identifier);
        
        const type = document.createElement('p');
        type.textContent = `Type: ${item.type}`;
        itemDiv.appendChild(type);
        
        if (item.required_rule) {
            const requiredRule = document.createElement('p');
            requiredRule.textContent = `Required Rule: ${item.required_rule}`;
            itemDiv.appendChild(requiredRule);
        }
        
        resultsDiv.appendChild(itemDiv);
    });
};

// Display filtered results on the page
displayResults(filteredRequiredFields);
