import sqlite from 'sqlite3'; 
var db = new sqlite.Database('./biliards.db' , (err) => {
    if (err) console.log(err);
    console.log('Conneting to the database successfully!');
})

// This is a special part for table userRouter

function addUser(data) {
    return new Promise((resolve, reject) => {
      var userquery =
        "INSERT INTO user (id, username , password) VALUES (?, ?, ?)";
      db.run(userquery, [data.id, data.username, data.password], (err) => {
        if (err) {
          reject(err);
        }
        resolve(true);
      });
    });
  }
  function deleteuser(id) {
    return new Promise((resolve, reject) => {
      var deletequery = "DELETE FROM user WHERE id = ?";
      db.run(deletequery, [id], (err) => {
        if (err) {
          reject(err);
        }
        if (resolve === undefined) {
          resolve(false);
        }
        resolve(true);
      });
    });
  }

  // This is a special part for table sessoinRouter

  // get sessopin for id
function getsessoin(id) {
    return new Promise((reject, resolve) => {
      var queryget = "SELECT * FROM sessoin WHERE id = ?";
      db.get(queryget, [id], (err, row) => {
        if (err) {
          reject(err);
        }
        if (row === undefined) {
          reject(err);
        }
        resolve(row);
      });
    });
  }
