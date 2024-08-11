
const controller = require("./controller");

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());


app.get('/', (req, res) => {
   res.send('Hello node !');
});



app.get('/users', (req, res) => {
  controller.getAllUsers((req , res , next) => {
    res.send();
  })

});

app.post('/adduser', (req, res) => {
  controller.addUser(req.body,(callback) => {
    res.send();
  })
})
app.post('/updateuser', (req, res) => {
  controller.updateUser(req.body,(callback) => {
    res.send();
  })
})
app.post('/deleteuser', (req, res) => {
  controller.deleteUser(req.body,(callback) => {
    res.send();
  })
})
  
  // app.get('/user', (req, res) => {
  //   const id =req.query.id;
  
  //   controller.getUserById(id, user => {
  //     res.send(user);
  //   })
  // });





module.exports = app;
