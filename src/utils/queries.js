const getAllData = (columns, tables) => `SELECT ${columns} FROM ${tables} `;

const getData = (columns, tables, conditions) =>
  `SELECT ${columns} FROM ${tables} WHERE ${conditions}`;

const insertData = (columns, table, values) =>
  `INSERT INTO ${table}(${columns}) VALUES(${values})`;

const updateData = (table, asignations, conditions) =>
  `UPDATE ${table} SET ${asignations} WHERE ${conditions}`;

const deleteData = (table, conditions) =>
  `DELETE FROM ${table} WHERE ${conditions}`;

module.exports = {
  getData,
  getAllData,
  insertData,
  updateData,
  deleteData,
};
