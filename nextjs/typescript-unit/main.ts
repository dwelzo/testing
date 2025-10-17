function addUser(users: string[], name: string): string[] {
  return [...users, name]; 
}
const userList: string[] = [];
const updatedList1 = addUser(userList, "Alice");
console.log(updatedList1); 
const updatedList2 = addUser(updatedList1, "Bob");
console.log(updatedList2); 
const updatedList3 = addUser(updatedList2, "Charlie");
console.log(updatedList3); 

let users: string[] = [];
users = addUser(users, "David");
users = addUser(users, "Eve");
users = addUser(users, "Frank");
console.log(users); 