package main

import (
	"database/sql"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "./test.db")
	if err != nil {
		log.Fatal("Error opening database: ", err)
	}

	_, err = db.Exec(`
	CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY AUTOINCREMENT, 
		nama varchar(255), 
		email varchar(255), 
		password varhar(255),
		role varchar(255),
		loggedin boolean;
		
	CREATE TABLE IF NOT EXISTS biodata (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		nama varchar(255),
		jenis_kelamin varchar(255),
		no_hp integer,
		alamat varchar(255),
		FOREIGN KEY (id_biodata) REFERENCES users(id);
		

	ALTER TABLE users DROP created_at ;
		`)
	if err != nil {
		log.Fatal("Error creating table: ", err)
	}

}
