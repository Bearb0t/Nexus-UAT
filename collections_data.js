export const healthSystems = ["Metropolis Health", "Gotham Sacred", "Gamma General", "Themyscira Heart", "Good Soldier Systems", "Red Room Redeemer", "Mutant Memorial"];
export const clients = ['TipTopHealth', 'NotOKInsurance', 'WalkItOffIns'];
const offsetReqValues = ["Not Allowed", "Approved", "Approved - Accl", "Req. Approval - Written", "Req. Approval - Verbal", "Req. Approval"];

function getRandomDateWithinLastTwoMonths() {
    const now = new Date();
    const pastDate = new Date();
    pastDate.setMonth(now.getMonth() - 2);
    const randomTime = pastDate.getTime() + Math.random() * (now.getTime() - pastDate.getTime());
    return new Date(randomTime);
}

function formatCreatedOnDate(date) {
    const options = { month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
    return date.toLocaleString('en-US', options);
}

function getRandomAmount(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

// Function to generate a random balance less than the overpayment
function getRandomBalance(overpayment) {
    const minReduction = 0.1; // at least 10% reduction
    const maxReduction = 0.8; // at most 80% reduction
    const reductionFactor = Math.random() * (maxReduction - minReduction) + minReduction;
    const newBalance = parseFloat(overpayment) * (1 - reductionFactor);
    return newBalance.toFixed(2);
}

const generatedClaimNums = new Set();
function generateUniqueClientClaimNum() {
    let claimNum;
    do {
        claimNum = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    } while (generatedClaimNums.has(claimNum));
    generatedClaimNums.add(claimNum);
    return claimNum;
}

const initialCollectionsTasksData = [
    { taskId: '10', name: 'Provider Contact', status: 'Active', followUpDate: '-', age: '-', claimId: '8', clientClaimNum: generateUniqueClientClaimNum(), lifecycle: 'Collections', client: clients[0], healthSystem: healthSystems[0], providerTaxId: '191388672', assignee: 'Steve Rogers', overpayment: getRandomAmount(200, 20000), currentBalance: getRandomBalance(getRandomAmount(200, 20000)), currentPriority: '4', createdOn: formatCreatedOnDate(getRandomDateWithinLastTwoMonths()), description: 'Attempted to contact provider regarding overpayment. No response yet.', reasonCode: 'No Contact', providerName: 'Provider 10', phoneNumber: '555-101-1010', address: '100 Main St, Anytown, USA 12345', npi: 'NPI10101010', parIndicator: 'P', isFlagged: false, attachments: [] },
    { taskId: '11', name: 'Provider Contact', status: 'Escalated', followUpDate: '-', age: '-', claimId: '100', clientClaimNum: generateUniqueClientClaimNum(), lifecycle: 'Collections', client: clients[0], healthSystem: healthSystems[1], providerTaxId: '995631282', assignee: 'Steve Rogers', overpayment: getRandomAmount(200, 20000), currentBalance: getRandomBalance(getRandomAmount(200, 20000)), currentPriority: '4', createdOn: formatCreatedOnDate(getRandomDateWithinLastTwoMonths()), description: 'Multiple attempts to contact provider failed. Escalating for further action.', reasonCode: 'Repeated No Contact', providerName: 'Provider 11', phoneNumber: '555-111-1111', address: '111 Main St, Anytown, USA 12345', npi: 'NPI11111111', parIndicator: 'P', isFlagged: false, attachments: [] },
    { taskId: '12', name: 'Provider Contact', status: 'Active', followUpDate: '-', age: '-', claimId: '2300', clientClaimNum: generateUniqueClientClaimNum(), lifecycle: 'Collections', client: clients[1], healthSystem: healthSystems[2], providerTaxId: '958833831', assignee: 'Steve Rogers', overpayment: getRandomAmount(200, 20000), currentBalance: getRandomBalance(getRandomAmount(200, 20000)), currentPriority: '4', createdOn: formatCreatedOnDate(getRandomDateWithinLastTwoMonths()), description: 'New collection task. Initial provider contact pending.', reasonCode: 'New Task', providerName: 'Provider 12', phoneNumber: '555-121-2121', address: '121 Main St, Anytown, USA 12345', npi: 'NPI12121212', parIndicator: 'P', isFlagged: false, attachments: [] },
    { taskId: '13', name: 'Provider Contact', status: 'Escalated', followUpDate: '-', age: '-', claimId: '2706', clientClaimNum: generateUniqueClientClaimNum(), lifecycle: 'Collections', client: clients[1], healthSystem: healthSystems[3], providerTaxId: '174190956', assignee: 'Steve Rogers', overpayment: getRandomAmount(200, 20000), currentBalance: getRandomBalance(getRandomAmount(200, 20000)), currentPriority: '4', createdOn: formatCreatedOnDate(getRandomDateWithinLastTwoMonths()), description: 'Provider refusing to acknowledge overpayment. Escalating to legal.', reasonCode: 'Refusal to Pay', providerName: 'Provider 13', phoneNumber: '555-131-3131', address: '131 Main St, Anytown, USA 12345', npi: 'NPI13131313', parIndicator: 'P', isFlagged: false, attachments: [] },
    { taskId: '14', name: 'Provider Contact', status: 'Follow Up', followUpDate: '2025-08-20', age: '-', claimId: '3800', clientClaimNum: generateUniqueClientClaimNum(), lifecycle: 'Collections', client: clients[2], healthSystem: healthSystems[4], providerTaxId: '983673911', assignee: 'Steve Rogers', overpayment: getRandomAmount(200, 20000), currentBalance: getRandomBalance(getRandomAmount(200, 20000)), currentPriority: '4', createdOn: formatCreatedOnDate(getRandomDateWithinLastTwoMonths()), description: 'Provider requested more time to review. Follow up scheduled.', reasonCode: 'Awaiting Review', providerName: 'Provider 14', phoneNumber: '555-141-4141', address: '141 Main St, Anytown, USA 12345', npi: 'NPI14141414', parIndicator: 'P', isFlagged: false, attachments: [] },
    { taskId: '15', name: 'Provider Contact', status: 'Follow Up', followUpDate: '2025-08-22', age: '-', claimId: '3854', clientClaimNum: generateUniqueClientClaimNum(), lifecycle: 'Collections', client: clients[2], healthSystem: healthSystems[5], providerTaxId: '-', assignee: 'Steve Rogers', overpayment: getRandomAmount(200, 20000), currentBalance: getRandomBalance(getRandomAmount(200, 20000)), currentPriority: '4', createdOn: formatCreatedOnDate(getRandomDateWithinLastTwoMonths()), description: 'Awaiting internal team review before next contact attempt.', reasonCode: 'Internal Review', providerName: 'Provider 15', phoneNumber: '555-151-5151', address: '151 Main St, Anytown, USA 12345', npi: 'NPI15151515', parIndicator: 'P', isFlagged: false, attachments: [] },
    { taskId: '16', name: 'Provider Contact', status: 'Active', followUpDate: '-', age: '-', claimId: '3375', clientClaimNum: generateUniqueClientClaimNum(), lifecycle: 'Collections', client: clients[1], healthSystem: healthSystems[6], providerTaxId: '364714460', assignee: 'Steve Rogers', overpayment: getRandomAmount(200, 20000), currentBalance: getRandomBalance(getRandomAmount(200, 20000)), currentPriority: '4', createdOn: formatCreatedOnDate(getRandomDateWithinLastTwoMonths()), description: 'No provider contact information available. Researching.', reasonCode: 'No Provider Info', providerName: 'Provider 16', phoneNumber: '555-161-6161', address: '161 Main St, Anytown, USA 12345', npi: 'NPI16161616', parIndicator: 'P', isFlagged: false, attachments: [] },
    { taskId: '17', name: 'Provider Contact', status: 'Active', followUpDate: '-', age: '-', claimId: '4300', clientClaimNum: generateUniqueClientClaimNum(), lifecycle: 'Collections', client: clients[2], healthSystem: healthSystems[0], providerTaxId: '983673911', assignee: 'Steve Rogers', overpayment: getRandomAmount(200, 20000), currentBalance: getRandomBalance(getRandomAmount(200, 20000)), currentPriority: '4', createdOn: formatCreatedOnDate(getRandomDateWithinLastTwoMonths()), description: 'Provider contact initiated, awaiting response for payment plan.', reasonCode: 'Payment Plan Inquiry', providerName: 'Provider 17', phoneNumber: '555-171-7171', address: '171 Main St, Anytown, USA 12345', npi: 'NPI17171717', parIndicator: 'P', isFlagged: false, attachments: [] },
    { taskId: '18', name: 'Provider Contact', status: 'Active', followUpDate: '-', age: '-', claimId: '4185', clientClaimNum: generateUniqueClientClaimNum(), lifecycle: 'Collections', client: clients[2], healthSystem: healthSystems[1], providerTaxId: '587400689', assignee: 'Steve Rogers', overpayment: getRandomAmount(200, 20000), currentBalance: getRandomBalance(getRandomAmount(200, 20000)), currentPriority: '4', createdOn: formatCreatedOnDate(getRandomDateWithinLastTwoMonths()), description: 'Sent formal demand letter to provider. Awaiting payment.', reasonCode: 'Demand Letter Sent', providerName: 'Provider 18', phoneNumber: '555-181-8181', address: '181 Main St, Anytown, USA 12345', npi: 'NPI18181818', parIndicator: 'P', isFlagged: false, attachments: [] },
    { taskId: '19', name: 'Provider Contact', status: 'Active', followUpDate: '-', age: '-', claimId: '1125', clientClaimNum: generateUniqueClientClaimNum(), lifecycle: 'Collections', client: clients[0], healthSystem: healthSystems[2], providerTaxId: '440917458', assignee: 'Steve Rogers', overpayment: getRandomAmount(200, 20000), currentBalance: getRandomBalance(getRandomAmount(200, 20000)), currentPriority: '4', createdOn: formatCreatedOnDate(getRandomDateWithinLastTwoMonths()), description: 'Followed up on previous contact attempt. No new information.', reasonCode: 'Follow-up', providerName: 'Provider 19', phoneNumber: '555-191-9191', address: '191 Main St, Anytown, USA 12345', npi: 'NPI19191919', parIndicator: 'P', isFlagged: false, attachments: [] }
];

const newCollectionsTasks = [];
const newStartIndex = 20;
const newEndIndex = newStartIndex + 30;
for (let i = newStartIndex; i < newEndIndex; i++) {
    const clientIndex = i % clients.length;
    const healthSystemIndex = i % healthSystems.length;
    const taskId = `${i}`;
    const claimId = (1000 + Math.floor(Math.random() * 9000)).toString();
    const overpayment = getRandomAmount(200, 20000);
    
    newCollectionsTasks.push({
        taskId: taskId,
        name: 'Provider Contact',
        status: 'Active',
        followUpDate: '-',
        age: '-',
        claimId: claimId,
        clientClaimNum: generateUniqueClientClaimNum(),
        lifecycle: 'Collections',
        client: clients[clientIndex],
        healthSystem: healthSystems[healthSystemIndex],
        providerTaxId: 'TAX' + Math.floor(Math.random() * 1000000000).toString(),
        assignee: 'Steve Rogers',
        overpayment: overpayment,
        currentBalance: getRandomBalance(overpayment),
        currentPriority: '4',
        createdOn: formatCreatedOnDate(getRandomDateWithinLastTwoMonths()),
        description: `New task for overpayment. Initial review pending.`,
        reasonCode: `New Task`,
        providerName: `Provider ${taskId}`,
        phoneNumber: `555-${Math.floor(100 + Math.random() * 900)}-${Math.floor(1000 + Math.random() * 9000)}`,
        address: `${Math.floor(100 + Math.random() * 900)} Main St, New City, USA 12345`,
        npi: `NPI${Math.floor(100000000 + Math.random() * 900000000)}`,
        parIndicator: 'P',
        isFlagged: false,
        attachments: []
    });
}

function getRandomItem(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

export const collectionsTasksData = (() => {
    let data = [...initialCollectionsTasksData, ...newCollectionsTasks];

    // Add Offset Req value based on client/health system pair
    const offsetReqMap = new Map();
    data.forEach(task => {
        const key = `${task.client}|${task.healthSystem}`;
        if (!offsetReqMap.has(key)) {
            const randomOffsetValue = offsetReqValues[Math.floor(Math.random() * offsetReqValues.length)];
            offsetReqMap.set(key, randomOffsetValue);
        }
        task.offsetReq = offsetReqMap.get(key);
    });

    const tasksToUpdate = getRandomItem(data, 8);
    const callbackTasks = getRandomItem(tasksToUpdate, 3);
    const blitzTasks = tasksToUpdate.filter(task => !callbackTasks.includes(task)).slice(0, 5);
    
    callbackTasks.forEach(task => {
        const taskIndex = data.findIndex(t => t.taskId === task.taskId);
        if (taskIndex !== -1) {
            data[taskIndex].name = 'Callback';
        }
    });

    blitzTasks.forEach(task => {
        const taskIndex = data.findIndex(t => t.taskId === task.taskId);
        if (taskIndex !== -1) {
            data[taskIndex].name = 'Blitz Contact';
        }
    });
    
    return data;
})();
