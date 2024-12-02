
import sqlite from "sqlite3";

var db = new sqlite.Database("./biliards.db", function (err) {
  if (err) console.log(err);
  console.log("Conneting to the database successfully!");
});

// details all table user 

 function adduser(data) {
  return new Promise ((resolve , reject) => {
    var query = 
    "INSERT INTO user (id, username, password) VALUES (?, ? , ?)";
    db.run(query , [data.id, data.username, data.password ] , (err)=> {
      if(err) reject(err);
     resolve(true); 
    })
  })
}
function deleteuser(id) {
  return new Promise((resolve, reject) => {
    var query = "DELETE FROM user WHERE id = ?";
    db.run(query, [id], (err) => {
      if (err) {
        reject(err);
      }
      resolve(true);
    });
  });
}
  // details all table REserv

  function reserveTable(id, userId, tableId, startTime, endTime, pricePerHour) {
    const durationInSeconds = (new Date(endTime) - new Date(startTime)) / 1000;
    const totalPrice = (pricePerHour / 3600) * durationInSeconds;

    const query = `
        INSERT INTO Reservations ( id, user_id, table_id, start_time, end_time, total_price) 
        VALUES (?, ?, ?, ?, ?);
    `;
    db.run(query, [id. userId, tableId, startTime, endTime, totalPrice], function (err) {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Reservations is SUCCESSFULLY ');
        }
    });
}
function deletereserv(id) {
  return new Promise((resolve, reject) => {
    var query = "SELECT * FROM Reservations WHERE id=?";
    db.get(query, [id], (err, row) => {
      if (err) {
        reject(err);
      }
      if (resolve === undefined) {
        resolve(false);
      }
      resolve(row);
    });
  });
}
function updateReservation(reservationId, newStartTime, newEndTime, callback) {
  const queryGetPrice = `
      SELECT Tables.pricePerHour 
      FROM Reservations
      JOIN Tables ON Reservations.tableId = Tables.id
      WHERE Reservations.id = ?;
  `;
    // update reserv
  db.get(queryGetPrice, [reservationId], (err, row) => {
      if (err) {
          res.status(500).send({err})
          callback(false);
          return;
      }

      const pricePerHour = row.price_per_hour;

            
      const durationInSeconds = (new Date(newEndTime) - new Date(newStartTime)) / 1000;
      const totalPrice = (pricePerHour / 3600) * durationInSeconds;

      const queryUpdate = `
          UPDATE Reservations
          SET 
              startTime = ?, 
              endTime = ?, 
              totalPrice = ?
          WHERE id = ?;
      `;
      db.run(queryUpdate, [newStartTime, newEndTime, totalPrice, reservationId], function (err) {
          if (err) {
              res.status(500).send({err})
              callback(false);
          } else {
              console.log(`${reservationId} udate reserv SUCCESSFULLY `);
              callback(true);
          }
      });
  });
}
//  table customer
function addcustomer(data) {
  return new Promise ((reject ,resolve) => {
    var query = "INSERT INTO customer (id, phoneNumber, name) VALUES (?, ?, ?)";
    db.run(
      query, [data.phoneNumber, data.name, data.id],
      (err) => {
        if (err) {
          reject(err)
        }
        resolve(true)
      }
    )
  })
}
// delete user table customer
function deletecustomer(id) {
  return new Promise((resolve, reject)=> {
    var query = "DELETE FROM user WHERE id = ?"
    db.run(query,[id], (err)=> {
      if (err) {
        reject(err)
      }
      if(resolve === undefined) {
        resolve(false)
      }
      resolve(true)
    });
  });
}
  // details all table Tournaments

  // added Tournaments 
  function addtour(data) {
    return new Promise ((resolve, reject)=> {
      var query ="INSERT INTO phone (id, name, winner, prize) VALUES (?, ?, ?, ?)";
      db.run(query [data.id, data.name, data.winner, data.prize], (err)=> {
        if (err) {
          reject(err)
        }
        resolve(true)
      });
    });
  }
  function deletetour(id) {
    return new Promise ((resolve, reject)=> {
      var query= "DELETE FROM user WHERE id = ?";
      db.run(query, [id], (err)=> {
        if(err) {
          reject(err)
        }
        resolve(true)
      });
    });
  }
  // update tour
  function updatecomp(
    id,
    name,
    winner,
    prize
  ) {
    return new Promise((resolve, reject) => {
      var checkQuery = "SELECT * FROM tu WHERE name = ? AND id != ?";
      db.get(checkQuery, [name, id], (err, row) => {
        if (err) {
          reject(err);
        } else if (row) {
          resolve({ err: "this data already exists" });
        } else {
          var updatecomp =
            "var checkQuery = SELECT * FROM Tournaments WHERE name = ? AND winner = ? AND prize = ? AND id != ?";
          db.run(updateQuery, [name, winner, prize, id], (err) => {
            if (err) {
              reject(err);
            } else {
              resolve({ message: "Update successful" });
            }
          });
        }
      });
    });
  }

    
  function gettour(id) {
    return new Promise((reject, resolve) => {
      var queryget = "SELECT * FROM Tournaments WHERE id = ?";
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
   // details all table payments

  //  add payments
  function addpayments(data) {
    return new Promise((resolve, reject) => {
      var query =
        "INSERT INTO payments (id, reservation_id, payments_method, payments_method, amount ) VALUES (?, ?, ?, ?, ?)";
      db.run(
        query,
        [data.id, data.reservation_id, data.payments_method, data.payments_method, data.amount],
        (err) => {
          if (err) {
            reject(err);
          }
          if (resolve === undefined) {
            resolve(false);
          }
          resolve(true);
        }
      );
    });
  }
// delete payments
function deletepayments(id) {
  return new Promise((resolve, reject) => {
    var query = "DELETE FROM payments WHERE id = ?";
    db.run(query, [id], (err) => {
      if (err) {
        reject(err);
      }
      if (resolve === undefined) resolve(false);
      resolve(true);
    });
  });
}
function getpayments(id) {
  return new Promise((reject, resolve) => {
    var queryget = "SELECT * FROM payments WHERE id = ?";
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
// payments database      ***get all payments***
function getallpay() {
  return new Promise((resolve, reject) => {
    var querycopm = "SELECT * FROM payments";
    db.all(querycopm, (err, row) => {
      if (err) {
        reject(err);
      }
      if (row === undefined) resolve(false);
      resolve(row);
    });
  });
}
   // details all table table
   
  //  add table
  function addtable(data) {
    return new Promise((resolve, reject) => {
      var query =
        "INSERT INTO table (id, table_number , status, price_per_hour, dacsriotion ) VALUES (?, ?, ?, ? ,?)";
      db.run(query, [data.id, data.table_number, data.price_per_hour, data.decsription, data.status], (err) => {
        if (err) {
          reject(err);
        }
        resolve(true);
      });
    });
  } 
  // delete table
  function deletetable(id){
    return new Promise ((resolve, reject)=> {
      var query = "DELETE FROM table WHERE id = ?";
      db.run(query, [id], (err)=> {
        if (err) {
          reject(err);
        }
         if (resolve=== undefined) {
          resolve(false);
         }
         resolve(true);
      })
    })
  }
  // update table 
  function updatetable(id, table_number, price_per_hour, decsription, status) {
    return new Promise((resolve, reject) => {
      var checkQuery = "SELECT * FROM table WHERE table_number = ? AND id != ?";
      db.get(checkQuery, [table_number, id], (err, row) => {
        if (err) {
          reject(err);
        } else if (row) {
          resolve({ err: "this data already exists" });
        } else {
          var updatecomp =
            "var checkQuery = SELECT * FROM table WHERE table_number =? AND status =? AND price_per_hour =? decsription =?  AND id !=?";
          db.run(updatecomp, [id, table_number, price_per_hour, decsription, status], (err) => {
            if (err) {
              reject(err);
            } else {
              resolve({ message: "Update successful" });
            }
          });
        }
      });
    });
  }
  function getall(){
    return new promise ((resolve, reject)=> {
      var query = "SELECT * FROM table";
      db.all(query, (err, row) => {
        if (err) {
          reject(err);
        }
        if (row === undefined) resolve(false);
        resolve(row);
      });
    });
  }
// get table for id
function gettable(id) {
  return new Promise((reject, resolve) => {
    var queryget = "SELECT * FROM table WHERE id = ?";
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
function startTimer(tableId) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now(); // زمان شروع تایمر

    const query = "INSERT INTO sessions (table_id, start_time, elapsed_time) VALUES (?, ?, 0)";
    db.run(query, [tableId, startTime], function (err) {
      if (err) {
        reject("Failed to start timer.");
      }
      resolve({ sessionId: this.lastID, startTime });
    });
  });
}

function stopTimer(sessionId, rate) {
  return new Promise((resolve, reject) => {
    const endTime = Date.now(); // زمان پایان تایمر

    const query = `
      UPDATE sessions
      SET end_time = ?, elapsed_time = (end_time - start_time) / 1000,
          cost = (elapsed_time / 3600) * ?
      WHERE id = ?
    `;
    db.run(query, [endTime, rate, sessionId], (err) => {
      if (err) {
        reject("Failed to stop timer.");
      }
      resolve({ message: "Timer stopped and cost calculated." });
    });
  });
}
function getTimerStatus(sessionId) {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM sessions WHERE id = ? AND end_time IS NULL";
    db.get(query, [sessionId], (err, row) => {
      if (err) {
        reject("Failed to fetch timer status.");
      }
      if (!row) {
        resolve({ active: false });
      } else {
        const currentTime = Date.now();
        const elapsedTime = (currentTime - row.start_time) / 1000; // زمان سپری‌شده به ثانیه
        resolve({ active: true, elapsedTime });
      }
    });
  });
}



export  {
getall,
updatetable,
deletetable,
getallpay,
addtable,
adduser,
deleteuser,
reserveTable,
deletereserv,
updateReservation,
addcustomer,
deletecustomer,
addtour,
deletetour,
updatecomp,
gettour,
addpayments,
deletepayments,
getpayments,
getTimerStatus,
stopTimer,
startTimer

};