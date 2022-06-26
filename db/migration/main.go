package main

import (
	"database/sql"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "./test.db")
	if err != nil {
		log.Fatal("Error creating database: ", err)
	}

	_, err = db.Exec(`
	CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY AUTOINCREMENT, 
		nama varchar(255), 
		email varchar(255), 
		password varhar(255),
		gender varchar(255),
		no_hp varchar(255)
		);
	INSERT INTO users(nama, email, password, gender,no_hp) VALUES
		('rama', 'ram@gmail.com', '123', 'laki-laki','0851555'),
		('syifa', 'syf@gmail.com', '444', 'perempuan','08777');
		`)
	if err != nil {
		log.Fatal("Error creating table: ", err)
	}

}
