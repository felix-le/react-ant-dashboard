// default
const users = [
  {
    id: 1,
    email: 'vietanh@gmail.com',
    name: 'vietanh'
  },
  {
    id: 2,
    email: 'nhattruongniit@yahoo.com.vn',
    name: 'nhattruong'
  },
  {
    id: 3,
    email: 'nam@yahoo.com.vn',
    name: 'nam'
  },
]

// input
const input  = "vietanh@gmail.com"; // email

// output
const output = [
  {
    id: 1,
    email: 'vietanh@gmail.com',
    name: 'vietanh'
  },
]


const newUsers = users.filter(user => user.email === input);

console.log(newUsers);