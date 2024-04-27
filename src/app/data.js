'use client'

const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "NAME", uid: "name", sortable: true},

  {name: "ROLE", uid: "role", sortable: true},
  {name: "TEAM", uid: "team"},
  {name: "EMAIL", uid: "email"},
  {name: "STATUS", uid: "status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
  {name: "Notloggedin", uid: "notloggedin"},
];

const users = [
  {
    id: 1,
    name: "ABC",
    role: "CEO",
    team: "Management",
    status: "active",

    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "CDE",
    role: "Tech Lead",
    team: "Development",
    status: "paused",
    
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "FGH",
    role: "Sr. Dev",
    team: "Development",
    status: "active",
   
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "IJK",
    role: "C.M.",
    team: "Marketing",
    status: "notloggedin",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "KLLM",
    role: "S. Manager",
    team: "Sales",
    status: "active",
    email: "kristen.cooper@example.com",
  },
  {
    id: 6,
    name: "TAMIL",
    role: "P. Manager",
    team: "Management",
    
    email: "brian.kim@example.com",
    status: "Active",
  },
  {
    id: 7,
    name: "ABC",
    role: "Designer",
    team: "Design",
    status: "paused",
    
    email: "michael.hunt@example.com",
  },
  
  
];

export {columns, users, statusOptions};
