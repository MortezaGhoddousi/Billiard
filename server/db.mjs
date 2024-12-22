import sqlite from "sqlite3";
import jsonwebtoken from "jsonwebtoken";
var db = new sqlite.Database("./biliards.db", function (err) {
  if (err) console.log(err);
  console.log("Conneting to the database successfully!");
});

// details all table user
//این قسمت مخصوص جدول ادمین

//اضافه کردن ادمین
function adduser(data) {
  return new Promise((resolve, reject) => {
    var query =
      "INSERT INTO user (id, username, password, phone, name) VALUES (?, ? , ?, ?, ?)";
    db.run(
      query,
      [data.id, data.username, data.password, data.name, data.phone],
      (err) => {
        if (err) reject(err);
        resolve(true);
      }
    );
  });
}
//پاک کردن ادمین
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
//این قسمت برای جدول رزرو میز ها است
//اضافه کردن رزرو
function addreserv(data) {
  return new Promise((resolve, reject) => {
    var query =
      "INSERT INTO reservations (id, user-id, , total-price, date ) VALUES (?, ?, ?, ?, ?)";
    db.run(
      query,
      [data.id, data.table - id, data.total - Price, data.deta, data.time],
      (err) => {
        if (err) reject(err);
        resolve(true);
      }
    );
  });
}

//پاک کردن رزرو
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
//اپدیت کردن رزرو
function updateReservation(data) {
  return new Promise((resolve, reject) => {
    const query = `
    UPDATE reservations
    SET start_time = ?, end_time = ?, cost = ?
    WHERE id = ?;
  `;
    db.run(
      query,
      [data.start_time, data.end_time, data.id, data.cost],
      (err) => {
        if (err) {
          reject(err);
        }
        resolve({ message: "Reservation updated successfully" });
      }
    );
  });
}
//دیدن تمام تایم های رزرو
function getAllReserv() {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM  reservations";
    db.get(query, (err) => {
      if (err) {
        reject(err);
      }
      resolve(true);
    });
  });
}
//  table customer
function addcustomer(data) {
  return new Promise((reject, resolve) => {
    var query = "INSERT INTO customer (id, phoneNumber, name) VALUES (?, ?, ?)";
    db.run(query, [data.phoneNumber, data.name, data.id], (err) => {
      if (err) {
        reject(err);
      }
      resolve(true);
    });
  });
}
// delete user table customer
function deletecustomer(id) {
  return new Promise((resolve, reject) => {
    var query = "DELETE FROM user WHERE id = ?";
    db.run(query, [id], (err) => {
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
function getcustomer(id) {
  return new Promise((resolve, reject) => {
    var queryget = "SELECT * FROM customer WHERE id = ?";
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
function getAllCustomer() {
  return new Promise((resolve, reject) => {
    var queryget = "SELECT * FROM customer ";
    db.get(queryget, (err, row) => {
      if (err) {
        reject(err);
      }
      resolve(row);
    });
  });
}

// details all table Tournaments

// added Tournaments
function addtour(data) {
  return new Promise((resolve, reject) => {
    var query =
      "INSERT INTO Tournaments (id, name, winner, prize) VALUES (?, ?, ?, ?)";
    db.run(query, [data.id, data.name, data.winner, data.prize], (err) => {
      if (err) {
        reject(err);
      }
      resolve(true);
    });
  });
}

function deletetour(id) {
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
// update tour
function updatecomp(id, name, winner, prize) {
  return new Promise((resolve, reject) => {
    var checkQuery = "SELECT * FROM tu WHERE name = ? AND id != ?";
    db.get(checkQuery, [name, id], (err, row) => {
      if (err) {
        reject(err);
      } else if (row) {
        resolve({ err: "this data already exists" });
      } else {
        var updateQuery =
          "UPDATE Tournaments SET name = ?, winner = ?, prize = ? WHERE id = ?";
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
  return new Promise((resolve, reject) => {
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
      [
        data.id,
        data.reservation_id,
        data.payments_method,
        data.payments_method,
        data.amount,
      ],
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

function addtable(data) {
  return new Promise((resolve, reject) => {
    var query =
      "INSERT INTO tables (id, tableNumber, status, pricePerHour, description) VALUES (?, ?, ?, ?, ?)";
    db.run(
      query,
      [
        data.id,
        data.tableNumber,
        data.status,
        data.pricePerHour,
        data.description,
      ],
      (err) => {
        if (err) {
          reject(err);
        }
        resolve(true);
      }
    );
  });
}

// delete table
function deletetable(id) {
  return new Promise((resolve, reject) => {
    var query = "DELETE FROM tables WHERE id = ?";
    db.run(query, [id], (err) => {
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
// update table
function updatetable(id, tableNumber, pricePerHour, description, status) {
  return new Promise((resolve, reject) => {
    var checkQuery = "SELECT * FROM tables WHERE tablNumber = ? AND id != ?";
    db.get(checkQuery, [tableNumber, id], (err, row) => {
      if (err) {
        reject(err);
      } else if (row) {
        resolve({ err: "this data already exists" });
      } else {
        var updatecomp =
          "var checkQuery = SELECT * FROM tables WHERE table_number =? AND status =? AND price_per_hour =? decsription =?  AND id !=?";
        db.run(
          updatecomp,
          [id, tableNumber, pricePerHour, description, status],
          (err) => {
            if (err) {
              reject(err);
            } else {
              resolve({ message: "Update successful" });
            }
          }
        );
      }
    });
  });
}
function getalltables() {
  return new Promise((resolve, reject) => {
    var query = "SELECT * FROM tables";
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
  return new Promise((resolve, reject) => {
    var queryget = "SELECT * FROM tables WHERE id = ?";
    db.get(queryget, [id], (err, row) => {
      if (err) {
        reject(err);
      }
      if (row === undefined) {
        reject("No data found");
      }
      resolve(row);
    });
  });
}
//برای محاصبه قیمت میز ها
function startTimer(table_id) {
  return new Promise((resolve, reject) => {
    var query = `INSERT INTO sessions (table_id, start_time) VALUES (?, ?)`;
    const startTime = Date.new();
    db.run(query, [table_id, startTime], (err) => {
      if (err) reject(err);
      else resolve({ sessoinId: this.lastId, startTime });
    });
  });
}
function stopTimer(sessoinId, rate) {
  return new Promise((resolve, reject) => {
    const endTime = Data.new();
    const query = `UPDATE sessions
      SET end_time = ?, elapsed_time = end_time - start_time,
          total_cost = ((elapsed_time / 1000) / 3600) * ?
      WHERE id = ?
    `;
    db.run(query, [endTime, rate, sessoinId], (err) => {
      if (err) reject(err);
      else resolve({ sessoinId, endTime });
    });
  });
}
function getTimerStatus(sessoinId) {
  return new Promise((resolve, reject) => {
    const query = `SELECT start_time, end_time, elapsed_time, total_cost
      FROM sessions WHERE id = ?`;
    db.get(query[sessoinId], (err, rew) => {
      if (err) reject(err);
      else resolve(rew);
    });
  });
}
const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.redirect("/login");
  } else {
    jwt.verify(token, "WA02", (err, decoded) => {
      if (err) {
        return res.redirect("/login");
      }
      req.username = decoded.username;
      next();
    });
  }
};

export {
  verifyUser,
  getalltables,
  updatetable,
  deletetable,
  getallpay,
  addtable,
  adduser,
  deleteuser,
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
  startTimer,
  gettable,
  addreserv,
  getcustomer,
  getAllCustomer,
  getAllReserv,
};
