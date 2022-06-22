package db

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

func Conect() {
	_, err := sql.Open("sqlite3", "./test.db")
	if err != nil {
		log.Fatal("Error opening database: ", err)
	}

	fmt.Println("Database connected")
}
