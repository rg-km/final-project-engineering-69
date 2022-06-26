package main

import (
	"fmt"
	"log"

	"github.com/final-project-engineering-69/repository"

	"github.com/final-project-engineering-69/api"

	"github.com/jmoiron/sqlx"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sqlx.Open("sqlite3", "db/migration/test.db")
	if err != nil {
		log.Fatal("Error opening database: ", err)
	}

	fmt.Println("Database connected")

	userRepo := repository.NewUserRepository(db)

	mainAPI := api.NewAPI(*userRepo)
	mainAPI.Start()
}
