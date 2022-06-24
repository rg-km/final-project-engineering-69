package main

import (
	"fmt"
	"log"
	"trainice/backend/api"
	"trainice/backend/repository"

	"github.com/jmoiron/sqlx"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sqlx.Open("sqlite3", "./test.db")
	if err != nil {
		log.Fatal("Error opening database: ", err)
	}

	fmt.Println("Database connected")

	userRepo := repository.NewUserRepository(db)

	mainAPI := api.NewAPI(*userRepo)
	mainAPI.Start()
}
