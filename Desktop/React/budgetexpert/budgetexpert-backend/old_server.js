const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const app = express();



app.use(express.json());
app.use(cors({
    origin:  ['http://localhost:3000'],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(session({
    key: 'userId',
    secret: 'subscribe',
    resave: false,
    saveUninitialized: false,
    cookies: {
        expires: 60 * 60 * 24,
    },
})
);

const db = mysql.createConnection({
    user: 'cbse',
    host: 'localhost',
    password: 'cbse',
    database: 'budget',
})

app.post('/register', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if(err) {
            console.log(err)
        }

        db.query('INSERT INTO users (email,password) VALUES (?,?)', [email, hash], (err, result) =>{
            console.log(err);
        });
    })

});

app.get('/cardo', (req,res) => {
    res.send('Ola pedro');
    }
)

const verifyJWT = (req, res, next) => {
    const token = req.headers('x-access-token')

    if(!token) {
        res.send('No token');
    } else {
        jwt.verify(token, 'jwtSecret', (err, decoded) => {
            if (err) {
                res.json({auth: false, message: 'Failed to authenticate'});
            } else {
                req.userId = decoded.id;
                next();
            }
        });
    }
};

app.get('/isUserAuth', verifyJWT, (req, res) => {
    res.send('You are authenticated')
})

app.get('/login', (req,res) => {
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    } else {
        res.send({loggedIn: false});
    }
})


app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
    db.query(
      "SELECT * FROM users WHERE email = ?;",
      email,
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }
  
        if (result.length > 0) {
          bcrypt.compare(password, result[0].password, (error, response) => {
            if (response) {           
            
              const id = result[0].id;
              const token = jwt.sign({id}, 'jwtSecret', {
                  expiresIn: 300,
            })
            req.session.user = result;
              
              res.json({auth: true, token: token, result: result});
            } else {
                res.json({auth: false, message: 'Wrong email/password'});
            }
          });
        } else {
            res.json({auth: false, message: 'No user exists'});
        }
      }
    );
  });

  app.post("/transactions", (req, res) => {
    const userId = req.body.userId;
 
    db.query(
      "SELECT * FROM transactions WHERE userId = ?;",userId,
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }
        res.json(result);
        
      }
    );
  });


app.listen(process.env.PORT || '5000', () => {
    console.log("Server started in 5000");
})

